module.exports = {
    PORT: process.env.PORT || 8080,
    CLIENT_ORIGIN: process.env.CLIENT_ORIGIN || 'http://localhost:3000',
    // Uncomment for MongoDB/Mongoose
    DATABASE_URL:
        process.env.DATABASE_URL || 'mongodb://localhost/thinkful-backend',
    TEST_DATABASE_URL:
        process.env.TEST_DATABASE_URL ||
        'mongodb://localhost/thinkful-backend-test'
};
