const path = require('path');
const express = require('express');
const morgan = require('morgan');
const rateLimit = require('express-rate-limit');
const helmet = require('helmet');
const mongoSanitize = require('express-mongo-sanitize');
const xss = require('xss-clean');
const hpp = require('hpp');
const cookieParser = require('cookie-parser');
const compression = require('compression');
const cors = require('cors');

// Start express app
const app = express();

// TO trust heroku (proxy)
app.enable('trust proxy');

app.set('view engine', 'pug');
// Sets view folder directory
app.set('views', path.join(__dirname, `views`));

// Implement Cross Origin resource sharing
app.use(cors());
// Set another HTTP method we can respond to, ON ALL routes
app.options('*', cors());

// Serving Static files
app.use(express.static(path.join(__dirname, `public`)));

const AppError = require('./util/appError');
const globalErrorHandler = require('./controllers/errorController');
const tourRouter = require('./routes/tourRoutes');
const userRouter = require('./routes/userRoutes');
const reviewRouter = require('./routes/reviewRoutes');
const bookingRouter = require('./routes/bookingRoutes');
const viewRouter = require('./routes/viewRoutes');

//

// 1) ================= GLOBAL MIDDLEWARES  ================
console.log(process.env.NODE_ENV);

// Set Security HTTP headers
app.use(helmet());

// Development logging
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

// Limit requests from the same API
const limiter = rateLimit({
  max: 100,
  // Allows 100 requests in 1 hour per IP
  windowMs: 3600 * 1000,
  message: 'Too many requests from this IP, please try again in an hour',
});

// Apply this limiter only to our api route
app.use('/api', limiter);

// Body parser, reading data from body into req.body
app.use(express.json({ limit: '10kb' }));
app.use(express.urlencoded({ extended: true, limit: '10kb' }));
app.use(cookieParser());

// Data sanitization against noSQL query injection
app.use(mongoSanitize());

// Data sanitisation against XSS
app.use(xss());

// Prevent parameter pollution
app.use(
  hpp({
    whitelist: [
      'duration',
      'ratingsQuantity',
      'ratingsAverage',
      'maxGroupSize',
      'difficulty',
    ],
  })
);

app.use(compression());

// Test middleware
app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  // console.log(req.cookies);
  next();
});

// ROUTES
app.use('/', viewRouter);
app.use('/api/v1/tours', tourRouter);
app.use('/api/v1/users', userRouter);
app.use('/api/v1/reviews', reviewRouter);
app.use('/api/v1/bookings', bookingRouter);

app.all('*', (req, res, next) => {
  // const err = new Error(`Can't find ${req.originalUrl} on this server`);
  // err.status = 'fail';
  // err.statusCode = 400;
  next(new AppError(`Can't find ${req.originalUrl} on this server`, 404));
});

// Error Handling Middleware with Express
app.use(globalErrorHandler);

module.exports = app;
