require('dotenv').config({ override: true });
const { app, initializeApp, setInitializationPromise } = require('../app');

const initPromise = initializeApp({
    runStartupSeed: String(process.env.AUTO_SEED_ON_STARTUP || 'false').toLowerCase() === 'true',
    ensureAdmin: String(process.env.ENSURE_ADMIN_ON_STARTUP || 'true').toLowerCase() === 'true',
});

setInitializationPromise(initPromise);

module.exports = app;
