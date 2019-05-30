# anylogger-tutorial
Simple tutorial project demonstrating anylogger

## clone it
Git clone this repo to your machine and run

```sh
npm install
```

## start it

```sh
npm start

> anylogger-tutorial@0.1.0 start C:\ws\anylogger-tutorial
> node index.js

Welcome to the anylogger tutorial.
Below we are testing anylogger-debug. For output to show up,
set the environment variable DEBUG=*

```

That's it! For now. This tutorial project uses [anylogger-debug](https://npmjs.com/package/anylogger-debug) to make all calls to anylogger objects use [debug](https://npmjs.com/package/debug) below the hood.

So why don't we see anything?

Debug is opt-in; in order for logging to show up, you need to enable it first:

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
