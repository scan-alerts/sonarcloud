function logMessage(message) {
  console.log(message);
}

function logError(error) {
  console.error(error);
}

function logDebug(debug) {
  console.debug(debug);
}

module.exports = { logMessage, logError, logDebug };