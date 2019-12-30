# anylogger-tutorial
Simple tutorial project demonstrating anylogger

## Scenario
We want to use logging in our app, but not lock ourselves in to a specific logging library. For now we will use [debug](https://npmjs.com/package/debug) with [anylogger](https://npmjs.com/package/anylogger) so we can switch to another logging library later if we want.

## Assignment
Write a bunch of log messages to the console using `anylogger`. Then test whether we can make the log messages show up in the console like they would with `debug`.

## Prepare a project
To prepare a project, either

### Create a project manually
First create an empty Node project and add dependencies:

```sh
mkdir my-project
cd my-project
npm init
npm install --save anylogger anylogger-debug debug
```

Then create a file named *index.js* and add this code:

```js
require('anylogger-debug')
var log = require('anylogger')('tutorial')

console.info(
  'Welcome to the anylogger tutorial.\n' +
  'Below we are testing anylogger-debug. For output to show up,\n' +
  'set the environment variable DEBUG=*\n'
)

log('This message is logged at level log')
log('debug', 'This message is logged at level debug')
log('info', 'This message is logged at level info')
log.warn('This message is logged at level warn')
log('error', 'Unfortunately, debug does not support levels.')
```

Finally, add a `start` command to the `scripts` section in *package.json*:

```sh
"scripts": {
  "start": "node index.js"
}
```

or

### Clone this project
Git clone this repo to your machine and run

```sh
npm install
```

## Start it
Once you have prepared the project, you can start it using:

```sh
npm start

> anylogger-tutorial@0.5.0 start C:\ws\anylogger-tutorial
> node index.js

Welcome to the anylogger tutorial.
Below we are testing anylogger-debug. For output to show up,
set the environment variable DEBUG=*

```

That's it! For now. This tutorial project uses [anylogger-debug](https://npmjs.com/package/anylogger-debug) to make all calls to anylogger objects use [debug](https://npmjs.com/package/debug) below the hood.

So why don't we see anything?

[debug](https://npmjs.com/package/debug) is opt-in; in order for logging to show up, you need to enable it first:

```sh
set DEBUG=*
```

The asterisk here is a wildcard, matching all module names.
This is actually all normal configuration for `debug` and not related to anylogger at all.

Now let's run it again:

```sh
npm start

> anylogger-tutorial@0.1.0 start C:\ws\anylogger-tutorial
> node index.js

Welcome to the anylogger tutorial.
Below we are testing anylogger-debug. For output to show up,
set the environment variable DEBUG=*

  tutorial This message is logged at level log +0ms
  tutorial This message is logged at level debug +0ms
  tutorial This message is logged at level info +0ms
  tutorial This message is logged at level warn +0ms
  tutorial Unfortunately, debug does not support levels. +1ms
```

And yes, our debug messages are showing up, in the format we know and love from `debug`.
