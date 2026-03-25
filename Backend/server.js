require('dotenv').config({ override: true });
const { app, initializeApp, setInitializationPromise } = require('./app');

const PORT = process.env.PORT || 5000;

const startServer = async () => {
    try {
        const initPromise = initializeApp({
            runStartupSeed: String(process.env.AUTO_SEED_ON_STARTUP || 'true').toLowerCase() === 'true',
            ensureAdmin: String(process.env.ENSURE_ADMIN_ON_STARTUP || 'true').toLowerCase() === 'true',
        });

        setInitializationPromise(initPromise);
        await initPromise;

        app.listen(PORT, () => {
            console.log(`Server running on port ${PORT}`);
        });
    } catch (error) {
        console.error(`Failed to start server: ${error.message}`);
        process.exit(1);
    }
};

startServer();