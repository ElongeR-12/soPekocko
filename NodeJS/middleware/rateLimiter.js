const rateLimit = require('express-rate-limit'); 
exports.attemptLimiter = rateLimit({
    windowMs: 60 * 1000, // 1min in milliseconds
    max: 2,
    message: 'You have exceeded the 2 requests in one minut limit!', 
});



