# Compiled

A writeup for the room [Compiled](https://tryhackme.com/room/compiled) on TryHackMe.

> Strings can only help you so far.

<Image src={require("./logo.png").default} height="256" />

### Analyzing the binary

Only a binary is provided, which means that the flag must be inside the file. 

This type of challenge is called a "reverse engineering" challenge, where the goal is to understand how the binary works and extract the flag from it.

Analyzing it with the file command, we can see that it is a ELF 64-bit.

<Image src={require("./1-file.webp").default} />

Now we can try to decompile the code with a tool like Ghidra.

<Image src={require("./2-ghidra.webp").default} />

As you can see from the decompiled code, the application simply prints out the password string and then runs a scanf with DoYouEven%sCTFas the format string.

### Testing format strings

The format string is particular, it is better to do some testing to understand how it works.

We can create a new file called main.c with the following code:

```c
#include <stdio.h>


int main() {
 char s[30];
 scanf("test%swhatever", s);
 printf("s: %s\n", s);
 return 0;
}
```

Then we can compile it with gcc and run it.

```bash
gcc main.c
./a.out
```

Running some tests, we will see that the test string must be entered and whatever is entered after that is put into the variable s.

<Image src={require("./3-format-strings.webp").default} />

### Finding the password

We can look again at the main binary function. Given what we learned in the previous point, we need to include at least DoYouEven in order to add something to the input string.

Now, what should we enter next?

If you look at the code after scanf, there are two strcmp:

- The first one is misleading: it returns a bad message whether the given input is __dso_handle.
- The second strcmp is the password: the input must be equal to the string _init to show the success message.

Thus, the final password consists of the first part of the format string REDACTED followed by _init
