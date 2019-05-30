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
