# Hello-cordova

This README outlines the details of collaborating on this Ember application.
A short introduction of this app could easily go here.


## Prerequisites

You will need the following things properly installed on your computer.

* [Git](http://git-scm.com/)
* [Node.js](http://nodejs.org/) (with NPM)
* [Bower](http://bower.io/)
* [Ember CLI](http://ember-cli.com/)
* [PhantomJS](http://phantomjs.org/)


## Installation

* `git clone <repository-url>` this repository
* `cd hello-cordova`
* `npm install`
* `bower install`


## Running / Development

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).


### Code Generators

Make use of the many generators for code, try `ember help generate` for more details



### Running Tests

* `ember test`
* `ember test --server`


### Running (iOS)

TBD


### Building (Web)

* `ember build` (development)
* `ember build --environment production` (production)


### Deploying

Specify what it takes to deploy your app.

## Further Reading / Useful Links

* [ember.js](http://emberjs.com/)
* [ember-cli](http://ember-cli.com/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)

## Tasks

```bash
ember install ember-cordova  # Install cordova to ember project 
ember cdv:platform add ios   # Adds iOS platform to Cordova

# Generate icon and splashes from SVG base files
ember cdv:make-icons && \
  ember cdv:make-splashes

# Run a new build
ember cdv:build
```

## Developers Joining

For developers joining the project:
```bash
# clone susan repo
git clone <blah>

# install tools
npm install -g cordova && \
  npm install -g cordova ios-deploy

# install project deps
npm install && \
  bower install

# install Cordova platforms & plugins
ember cdv:prepare  

# build
ember cdv:build

# run app on emulator
ember cdv run --platform=ios --emulator
# run app on device
ember cdv run --platform=ios --device

# run LiveReload
ember cdv:serve

# open the XCode project
ember cdv:open
```
