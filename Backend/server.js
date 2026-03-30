require('dotenv').config({ override: true });

// Set default NODE_ENV if not set
if (!process.env.NODE_ENV) {
    process.env.NODE_ENV = 'development';
}

const { app, initializeApp, setInitializationPromise } = require('./app');

const PORT = process.env.PORT || 5000;

// Helper for conditional logging
const isProduction = process.env.NODE_ENV === 'production';
const log = (...args) => {
    if (!isProduction) {
        console.log(...args);
    }
};

const startServer = async () => {
    try {
        log(`Starting server in ${process.env.NODE_ENV} mode...`);

        const initPromise = initializeApp({
            // In production on Vercel, disable seeding on every startup
            runStartupSeed: isProduction ? false : String(process.env.AUTO_SEED_ON_STARTUP || 'true').toLowerCase() === 'true',
            ensureAdmin: String(process.env.ENSURE_ADMIN_ON_STARTUP || 'true').toLowerCase() === 'true',
        });

        setInitializationPromise(initPromise);
        await initPromise;

        app.listen(PORT, () => {
            log(`✓ Server running on port ${PORT}`);
            log(`✓ Environment: ${process.env.NODE_ENV}`);
            log(`✓ Backend: ${process.env.BACKEND_URL || 'http://localhost:' + PORT}`);
        });
    } catch (err) {
        console.error(`✗ Failed to start server: ${err.message}`);
        if (!isProduction) {
            console.error(err.stack);
        }
        process.exit(1);
    }
};

startServer();