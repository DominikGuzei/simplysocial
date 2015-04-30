simplysocial
============
A tiny web application prototype built by Dominik Guzei as part of the
recruiting challenge at InVision.

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
Just run `gulp dev` to start watching file changes and kickoff the dev process.

Build
-----
Enter `gulp build` in the console to prepare the app for production.
