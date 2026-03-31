require('dotenv').config({ override: true });

// Set NODE_ENV if not set (Vercel will set this)
if (!process.env.NODE_ENV) {
    process.env.NODE_ENV = 'production';
}

const { app, initializeApp, setInitializationPromise } = require('../app');

// Initialize app on startup - this runs once when Vercel boots the function
const initPromise = initializeApp({
    // Disable auto-seeding in production for performance
    runStartupSeed: false,
    ensureAdmin: String(process.env.ENSURE_ADMIN_ON_STARTUP || 'true').toLowerCase() === 'true',
});

setInitializationPromise(initPromise);

// Export the Express app as the Vercel serverless function handler
module.exports = app;
