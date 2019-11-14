# [WIP] Making [the Criterion Channel website](https://www.criterionchannel.com/) more usable

## What

An extension from Chrome/Firefox to assuage my frustrations with that website

## Huh

- [x] Make the entire row clickable on the [**All Films** page](https://films.criterionchannel.com/)
- [ ] Add duration to all film cards (**TODO** Why do only some film cards show this?)
- [ ] Hide films in the **All Films** list that are not available anymore (e.g. the Pedro Almodóvar films were there after expiring)
- [ ] Better caching for **All Films** which is nearly 2 MB for the document alone
    - ~~Modify `Cache-Control` response header, currently set to `no-cache`~~ [Cache headers cannot be modified](https://developer.chrome.com/extensions/webRequest)
    - ~~Use the Service Worker API to cache the response body~~ `background` Service Workers are not supported in Firefox and [only _in preview_ for Chrome](https://developer.chrome.com/extensions/migrating_to_manifest_v3#service_workers)
    - **TODO** Use [the `proxy` API](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/proxy) to cache the response (or set cache headers) with a local server ([vague example](https://github.com/mdn/webextensions-examples/tree/master/proxy-blocker))
