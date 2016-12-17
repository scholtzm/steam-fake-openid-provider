# steam-fake-openid-provider

Fake Steam OpenID validation endpoint that can bypass certain libraries and allows the attacker to supply arbitrary identity.

The exploit was originally reported [here](https://www.reddit.com/r/SteamBot/comments/4msigy/psa_warning_scammers_exploiting_vulnerability/) and was later confirmed to be inside [passport-steam](https://github.com/liamcurry/passport-steam/issues/35) **[has been fixed since then]**, [steam-login](https://github.com/cpancake/steam-login/issues/8) **[not fixed]** and possibly other libraries.

The reason why this is possible is because these libraries did/do not verify validation endpoint as well as claimed identity format that is provided directly by the user. As per Steam documentation, the claimed identity format is: `http://steamcommunity.com/openid/id/<steamid>`

This exploit is also possible because Steam's `GetPlayerSummaries` WebAPI endpoint [accepts SteamIDs in arbitrary format](https://github.com/liamcurry/passport-steam/issues/35#issuecomment-225447572).

*OpenID (by design) allows this and this is not an exploit related to OpenID itself.*

## Setup

1. `git clone` this repo
2. `npm i` to install dependencies
3. `npm start` to launch the fake OpenID provider on `localhost:3000`

You'll also have to spoof the OpenID request coming to website you are trying to log into. This is pretty trivial and left as an exercise for the reader. 👌

## Result

When done correctly, the result looks similar to this:

![screen shot 2016-06-12 at 22 29 43](https://cloud.githubusercontent.com/assets/2640934/15993697/62fc16d8-30ee-11e6-928c-fae56cf6f41c.png)

(`steam-login` package being exploited.)

## LICENSE

MIT. See `LICENSE`.
