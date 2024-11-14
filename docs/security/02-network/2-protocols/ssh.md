# SSH (22)

Secure Shell (SSH) is a cryptographic network protocol for operating network services securely over an unsecured network.

Typical applications include remote command-line, login, and remote command execution, but any network service can be secured with SSH.

## Keys

On Linux systems, SSH keys are usually stored in `~/.ssh/`.

The private key is stored in `~/.ssh/id_rsa` and the public key in `~/.ssh/id_rsa.pub`.

## Commands

### Generate a key pair

```bash
ssh-keygen -t rsa -b 4096 -C "<email>"
```

### Connect to a remote host

```bash
ssh <user>@<host>
```

### Copy a file to a remote host

```bash
scp <file> <user>@<host>:<path>
```
