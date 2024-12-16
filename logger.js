function logMessage(message) {
  console.log(message);
}

function logError(error) {
  console.error(error);
}

module.exports = { logMessage, logError };

// Test case
logMessage("This is a test message");
logError("This is a test error");