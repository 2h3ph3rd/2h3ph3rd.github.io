# Snapped "Phish"-ing Line

This is a writeup for the TryHackMe room [Snapped "Phish"-ing Line](https://tryhackme.com/room/snappedphishingline).

> Who is the individual who received an email attachment containing a PDF?

William McClean

<Image src="/images/writeups/thm/challenges/snapped-phish-ing-line/email.png" />

> What email address was used by the adversary to send the phishing emails?

Accounts.Payable@groupmarketingonline.icu

> What is the redirection URL to the phishing page for the individual Zoe Duncan? (defanged format)

hxxp[://]kennaroads[.]buzz/data/Update365/office365/40e7baa2f826a57fcf04e5202526f8bd/?email=zoe[.]duncan@swiftspend[.]finance&error

You can use Cyberchef to generate the defanged URL.

> What is the URL to the .zip archive of the phishing kit? (defanged format)

hxxp[://]kennaroads[.]buzz/data/Update365[.]zip

<Image src="/images/writeups/thm/challenges/snapped-phish-ing-line/data.png" />

> What is the SHA256 hash of the phishing kit archive?

ba3c15267393419eb08c7b2652b8b6b39b406ef300ae8a18fee4d16b19ac9686

You can use Cyberchef to generate the SHA256 hash.

<Image src="/images/writeups/thm/challenges/snapped-phish-ing-line/sha256.png" />

> When was the phishing kit archive first submitted? (format: YYYY-MM-DD HH:MM:SS UTC)

> When was the phishing domain that was used to host the phishing kit archive first registered? (format: YYYY-MM-DD)

2020-06-25

It is possible to use [https://threatbook.io](https://threatbook.io) to find the information.

<Image src="/images/writeups/thm/challenges/snapped-phish-ing-line/domain.png" />

> What was the email address of the user who submitted their password twice?

michael.ascot@swiftspend.finance

<Image src="/images/writeups/thm/challenges/snapped-phish-ing-line/loh.png" />

> What was the email address used by the adversary to collect compromised credentials?

```
isaiah.puzon@gmail.com
PhishMOMUKAMO123!
```
