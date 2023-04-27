# 🦘 ROP

Returned Oriented Programming is a technique that allows to exploit sequence of instructions (gadgets) already present in the binary.

Usually, these gadgets are ended with a "ret". In this way you can create a chain of multiple gadgets.

There are a lot of possible combinations by looking also to the external libraries used by the binary.

ROP is used when you have no executable area to write a shellcode.

## Ropper

Export all gadgets in an external file

```bash
ropper --nocolor --file ./path_to_binary > gadgets.txt
```

Export only small gadgets that ends with a return.

```bash
ropper --inst-count 3 --nocolor --type rop --file ./path_to_binary > small_gadgets.txt
```

:::caution
When exporting ropper output use `--nocolor` to avoid getting also color encoding characters.
:::

### Useful paramaters

`--inst-count 3` Returns only gadgets with a maximum number of 3 instructions.

`--type rop` Returns only gadgets that terminates with a return.

See `ropper --help` for more details.

## Patch the binary

### ldd

WIP (put here an example)

:::info
You can use the command `ldd` to see libc and loader details.
:::

### patchelf

:::info
Remember to make executable both the libc and the loader file.
:::

```bash
patchelf --replace-needed <lib_name> <lib_path> --set-interpreter <loader> <binary>
```

## Where to write

- .bss
- .data
- stack (address are randomized, so you need a leak)

:::info
You can use readelf to find the start address of this sections.
:::
