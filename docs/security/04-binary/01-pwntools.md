---
id: pwntools
title: Pwntools
---

# Pwntools

## Installation

Go to the documentation for updated instructions.

http://docs.pwntools.com/en/latest/install.html

:::caution
You need pwntools installed to use the next utilities.
:::

## Checksec

[Official doc](https://docs.pwntools.com/en/stable/commandline.html?highlight=checksec#pwn-checksec)

Checksec is a simple utility that tells the security settings of a given binary,

<p align="center">
    <img src={require("./assets/checksec.jpg").default}></img>
</p>

## Cyclic

[Official doc](https://docs.pwntools.com/en/stable/commandline.html?highlight=cyclic#pwn-cyclic)

Cyclic is a command available with the pwntools package that generates strings of a length decided by the user. The main use is for memory overflow exploits.

In case of oversized or unlimited inputs, the execution ends with a segmentation fault because the ip on the stack is written with unmeaningful chars. Running Cyclic again with the chars that caused the sigfault, it will return the exact position.

### Example

Run `pwn cyclic` followed by the desired length.

For example, for a string of 100 characters:

```bash
pwn cyclic 100
```

<p align="center">
    <img src={require("./assets/cyclic.jpg").default}></img>
</p>

Use the result as input and then check with the value that caused the segmentation fault.

Now, you can rerun cyclic to get the offset.
