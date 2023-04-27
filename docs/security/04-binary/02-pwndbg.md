# 🐛 Pwndbg

Pwndbg is a plugin that makes easier to use gdb.

You can find it [here](https://github.com/pwndbg/pwndbg).

## Commands

`context` Print the current status.

`disass FUNCTION_NAME` Disassemble the given function.

`info address FUNCTION_NAME` Print the start address of the given function, it could be use for breakpoints.

`vmmap` Show memory structure, start adress of each section and relative flags.

`vmmap ADDRESS` Show memory flags and additional information for the given address.

### Print a register

`print/x REGISTER` Print the content of a register in hex format.

`print REGISTER` Print the content of a register in decimal format.

### Print memory content

`x/30i ADDRESS` Show 30 instruction disassambled starting from the given address.

`x/30wx ADDRESS` Show 30 items of 32 bit word (dword) starting from the given address.

`x/30gx ADDRESS` Show 30 items of 64 bit word (qword) starting from the given address.

The address can be also read from a register (i.e. `x/30wx *$eax` shows 30 dwords starting from the address contained in `$eax`).

### Call a function

GDB allows you to call a function while debugging. It only requires a running process.

Add a breakpoint or cause an exception to enter debugging and then call the function.

```bash
print (void) print_something()
```

Inside the first parenthesis put the function type.

Any parameters can be passed inside the second pair of parentheses.
