# Laotours App

* Live site: https://laotours.herokuapp.com/
* My portfolio: https://cedricdesigns.com.au/portfolio/laotours

Built using modern tech stack and frameworks: NodeJS, Express, MongoDB, Mongoose 😊
This app was built following a course on complete NodeJS development by Jonas S. on Udemy and was adapted for personal purposes.

## What is this about?

**Lao Tours** is a web app built from scratch using exclusively NodeJS, Express and MongoDB. This app was a side project done in vue to understand better the back-end development using modern technologies such as NodeJS. This project was adapted to make it more from an online course. This app allows you to look at tours, sign up, authenticate and book tours using Stripe API. 

"Lao Tours" is a fictional booking website for tours in Laos. The website displays various fictional tours in several cities and famous landmarks in Laos, for adventurers and tourists. Laos has a rich history and counts several World Heritage Sites as well as beautiful karst landscapes, witnesses of rich past geologic activity.


---

## How to setup

### Prerequisites
#### Packages
* [nodemon](https://www.npmjs.com/package/nodemon): development tool
* [mongoose](https://mongoosejs.com/docs/index.html): communicate with mongodb cloud
* [dovenv](https://www.npmjs.com/package/dotenv): using local environment variables
* (optional) node-sass: generating css files

#### Environment variables (for development)
* DATABASE: mongodb endpoint
* DATABASE_PASSWORD
* EMAIL_FROM: email to send it from
* JWT_COOKIE_EXPIRES_IN
* JWT_EXPIRES_IN
* JWT_SECRET
* NODE_ENV
* SENDGRID_PASSWORD
* SENDGRID_USERNAME
* STRIPE_PUBLIC_KEY
* STRIPE_SECRET_KEY
* STRIPE_WEBHOOK_SECRET


### Starting Server

Run development server with <code>npm run dev</code>

---

##  Folder Organisation
The application follows a classic MVC architecture including:
- `/views`: all the views of the application, using the templating engine `pug`
- `/models`: our mongodb models for booking, review, tour, and user
- `/controllers`: the controllers for user, views, tours, reviews, errors, bookings.

- `/util`: utilities, including email constructur, error handling
- `/routes`: all routes organised neatly
- `/public`: our frontend files


---

## Architecture

Coming soon..