# Walking An Application

<Image src={require("./assets/walking-an-application/icon.png").default} width="128px" />

## Task 1 - Walking An Application

> I confirm that I have deployed the virtual machine and opened the website.

No answer needed.

### Task 2 - Exploring The Website

> Read the above.

No answer needed.

### Task 3 - Viewing The Page Source

> What is the flag from the HTML comment?

THM{HTML_COMMENTS_ARE_DANGEROUS}

the flag is inside `/new-home-beta`. This path is written in the first comment.

<Image src={require("./assets/walking-an-application/source.png").default} />

> What is the flag from the secret link?

THM{NOT_A_SECRET_ANYMORE}

The flag is inside `/secret-page`. This path is linked by the hidden a.

> What is the directory listing flag?

THM{INVALID_DIRECTORY_PERMISSIONS}

The flag is inside `/assets/flag.txt`.

> What is the framework flag?

THM{KEEP_YOUR_SOFTWARE_UPDATED}

By looking to the changelog we can see that in the last version a bug was fix about a `/tmp.zip` file.
We can download and extract the zip to obtain the flag.

<p align="center">
  <img src={require("./assets/walking-an-application/framework.png").default} width="128" />
</p>

### Task 4 - Developer Tools - Inspector

> What is the flag behind the paywall?

THM{NOT_SO_HIDDEN}

It is enough to open the third article inside the news section and disable the paywall.
The flag is behind it. To remove the paywall it is possible to set `display: none` or to delete directly the node.

<p align="center">
  <img src={require("./assets/walking-an-application/inspector.png").default} width="128" />
</p>

### Task 5 - Developer Tools - Debugger

> What is the flag in the red box?

THM{CATCH_ME_IF_YOU_CAN}

Go in `contact` page and add a breakpoint inside the file `flash.min.js` to the line with `flash['remove']();`.
When reloading the page the flag will be shown.

<p align="center">
  <img src={require("./assets/walking-an-application/debugger.png").default} width="128" />
</p>

### Task 6 - Developer Tools - Network

> What is the flag shown on the contact-msg network request?

THM{GOT_AJAX_FLAG}

Open the newtwok tool, go in `contact` page, and send the form.
You should see a POST request with the flag inside the response.

<p align="center">
  <img src={require("./assets/walking-an-application/network.png").default} width="128" />
</p>
