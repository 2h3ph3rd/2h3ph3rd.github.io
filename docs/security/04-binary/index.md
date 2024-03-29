# 💻 Binary

### Quick reference

:::caution
This is very approximative!
:::

Be aware:

- Sometimes, you could need more than one technique.
- There are a lot of other constraints to consider, look also in each specific section and in mitigations.

<p align="center">
    <img src={require("./assets/binary.jpg").default}></img>
</p>

### Build a binary for a challenge

No ASLR (globally!)

```bash
bash -c 'echo 0 > /proc/sys/kernel/randomize_va_space'
```

No stack protection, no executable stack, and no pie.

```bash
gcc -fno-stack-protector -no-pie -z execstack main.c
```
