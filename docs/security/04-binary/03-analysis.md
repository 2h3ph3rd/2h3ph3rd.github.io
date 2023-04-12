---
id: analysis
title: Analysis
---

# Analysis

## Static analysis

### strings

### readelf

```bash
# display file header
readelf -h elf
# display the symbol table
readelf -s elf
# display dynamic sections
readelf -d elf
```

### objdump

```bash
# display dynamic symbol table
objdump -T elf
```

### ldd

### file

Print detailed information of a binary, like the architecture or the type of linking.

<p align="center">
    <img src={require("./assets/file.jpg").default}></img>
</p>

## Dynamic analysis

### dmesg

Show all messages sent by the kernel starting from the boot.

It can be used to see more details about the last thrown exceptions. It could show also the IP and the hex code of the istructions executed.

```bash
dmesg -T | tail
```

`-T` show time in human readable format.

`tail` show only last 5 lines.

### ltrace

### strace
