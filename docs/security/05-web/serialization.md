# 📩 Serialization

Serialization is a technique used to pass object and variables statuses between different evironment.

## PHP

In PHP `serialize` and `unserialize` functions are used for serialization. They can be used to pass object with properties.

```php
<?php
/*
Credits to "egingell at sisna dot com"
https://www.php.net/manual/en/function.serialize.php#66147

Anatomy of a serialize()'ed value:

String
s:size:value;

Integer
i:value;

Boolean
b:value; (does not store "true" or "false", does store '1' or '0')

Null
N;

Array
a:size:{key definition;value definition;(repeated per element)}

Object
O:strlen(object name):object name:object size:{s:strlen(property name):property name:property definition;(repeated per property)}

String values are always in double quotes
Array keys are always integers or strings
    "null => 'value'" equates to 's:0:"";s:5:"value";',
    "true => 'value'" equates to 'i:1;s:5:"value";',
    "false => 'value'" equates to 'i:0;s:5:"value";',
    "array(whatever the contents) => 'value'" equates to an "illegal offset type" warning because you can't use an
    array as a key; however, if you use a variable containing an array as a key, it will equate to 's:5:"Array";s:5:"value";',
     and
    attempting to use an object as a key will result in the same behavior as using an array will.
*/
?>
```
