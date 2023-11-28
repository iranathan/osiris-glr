# osiris.js
API wrapper for osiris (in Grafisch Lyceum Rotterdam)

## Features
* Fetching personalia (personal information).
* Fetching agenda.
* More to come...

## Installation 
The library can be installed through npm
```
npm i osiris.js
```

## How to get authentication token
The beaner authentication token can easily be found in the osiris portal.
Simply copy the token without the "Beaner" part into your code.

![Screenshot of network tab](https://github.com/iranathan/osiris-glr/blob/main/assets/network.png?raw=true)

## Quick start 
More examples can be found in the examples folder.

```JS
const osiris = require("osiris.js");
const client = new osiris("TOKEN");

(async () => {
    const profile = await client.getPersonalia();
    console.log(`Logged in as ${profile.name}`)
})()
```