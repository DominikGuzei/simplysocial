simplysocial
============
A tiny web application prototype built by Dominik Guzei as part of the
recruiting challenge at InVision.

Production App: http://dominikguzei.github.io/simplysocial/#/

Things that work:
-----------------
Due to the short timeframe (2 days) I could just finish the minimum requirements:

* Initial page + creating message
* New message modal (but creating message does not work yet)
* Got to settings screen via profile dropdown
* Expand / collapse comments
* Only text / image posts (no video)

Setup
-----
To speedup development this web app uses node.js and bower to concatenate
and minify Javascript and CSS on the fly.

1. Be sure to have [node.js](https://nodejs.org/) installed.
2. Install dev dependencies with `npm install`
3. Install Bower `npm install -g bower`
3. Install runtime dependencies with `bower install`

Run
---
Enter `gulp dev` in your console and open the served page on http://localhost:8080

Build
-----
Enter `gulp build` in the console to prepare the app for production.
