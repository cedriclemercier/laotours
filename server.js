require('dotenv').config()

const mongoose = require('mongoose');
const dotenv = require('dotenv');

console.log("Loading Server...");
console.log(process.env.DATABASE);

process.on('uncaughtException', (err) => {
    console.log('UNCAUGHT EXCEPTION! 🏃‍♂️. Shutting down...');
    console.log(err.name, err.message);
    process.exit(1);
});

dotenv.config({ path: './config.env' });

const app = require('./app');

const DB = process.env.DATABASE.replace(
    '<PASSWORD>',
    process.env.DATABASE_PASSWORD
);

// Deal with deprecation warnings
mongoose
    .connect(DB, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
        useUnifiedTopology: true,
    })
    .then(() => {
        console.log('Db connection!');
    });

const port = process.env.PORT || 8000;
const server = app.listen(port, () => {
    console.log(`App running on port ${port}`);
});

// handle uncatched errors such as DB Connection!
process.on('unhandledRejection', (err) => {
    console.log('UNHANDLED REJECTION! 🏃‍♂️. Shutting down...');
    console.log(err);
    server.close(() => {
        process.exit(1);
    });
});

// SIGTERM that tells our program to shutdown ( for heroku dynos )
process.on('SIGTERM', () => {
    console.log('SIGTERM received, shutting down gracefully!😙');
    server.close(() => {
        console.log('Process terminated.😀');
    });
});