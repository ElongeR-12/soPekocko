const rateLimit = require('express-rate-limit'); 
module.exports = rateLimit({
    windowMs: 60 * 1000, // 24 hrs in milliseconds
    max: 2,
    message: 'You have exceeded the 2 requests in one minut limit!', 
});

