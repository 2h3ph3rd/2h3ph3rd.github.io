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
This is a list of some of the most important warnings about SQL queries and SQLi.
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
