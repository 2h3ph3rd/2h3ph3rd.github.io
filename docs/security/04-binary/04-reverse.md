---
id: reverse
title: Reverse
---

# Reverse

Reverse challenges usually require to find a hidden flag inside a binary.

The flag could be dinamically generated using complex calculations or there could be something that avoid debugging like a ptrace.

## Useful commands

`ltrace` and `strace` can help when the flag is passed as parameter to a library function.

Tools like xxd, Bless or Ghex can be used to patch the binary.

## Ptrace

One of the main countermeasure to reverse engineering is the function `ptrace`.

Each process can be traced by only one other process at a time.

This means that if a process uses `ptrace` on itself it can avoid to be debugged by others.

One of the easier way to remove this problem, it is to path the ptrace call with nop instruction.

## LD_PRELOAD trick

Using this trick you can change a library function to do what you want.

For example, you could rewrite the `strcmp` function to print out the parameters.

```c title="inject.c"
#include <string.h>

int strcmp(const char *s1, const char *s2)
{
  printf("strcmp: %s %s\n", s1, s2);
  return 0;
}
```

```sh
gcc -shared -fPIC -o inject.so inject.c
LD_PRELOAD=$PWD/inject.so ./binary_to_execute
```
