function rateLimiter(apiCall, limit, intervalMs) {
  let callCount = 0;
  let lastResetTime = Date.now();

  return function () {
    const now = Date.now();

    // Reset counter after interval passes
    if (now - lastResetTime > intervalMs) {
      callCount = 0;
      lastResetTime = now;
    }

    // Check limit
    if (callCount < limit) {
      callCount++;
      apiCall();
    } else {
      console.log("API call can't be made now. Limit reached.");
    }
  };
}

const apiCall = () => console.log("API call made successfully.");

const limiter = rateLimiter(apiCall, 2, 5000); // max 2 calls per 5 seconds

limiter(); // success
limiter(); // success
limiter(); // blocked
