<div id="top"></div>

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://laotours.herokuapp.com/">
    <img src="public/img/favicon.png" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">Lao Tours</h3>
  <p align="center">
    Travel app built with NodeJS and Express from scratch using MVC architecture
    <br />
    <a href="https://laotours.herokuapp.com/" target="_blank">Live site</a>
    ·
    <a href="https://cedricdesigns.com.au/portfolio/laotours" target="_blank">My portfolio</a>
    ·
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#architecture">Architecture</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## 1. About The Project


Built using modern tech stack and frameworks: NodeJS, Express, MongoDB, Mongoose 😊
This app was built following a course on complete NodeJS development by Jonas S. on Udemy and was adapted for personal purposes.

### 1.1 Lao tours

**Lao Tours** is a web app built from scratch using exclusively NodeJS, Express and MongoDB. This app was a side project done in vue to understand better the back-end development using modern technologies such as NodeJS. This project was adapted to make it more from an online course. This app allows you to look at tours, sign up, authenticate and book tours using Stripe API. 

"Lao Tours" is a fictional booking website for tours in Laos. The website displays various fictional tours in several cities and famous landmarks in Laos, for adventurers and tourists. Laos has a rich history and counts several World Heritage Sites as well as beautiful karst landscapes, witnesses of rich past geologic activity.

<p align="right">(<a href="#top">back to top</a>)</p>



### 1.2 Built With

* [Node.js](https://nodejs.org/en/)
* [Express.js](https://expressjs.com/)
* [MongoDB Cloud](https://www.mongodb.com/cloud)
* [Pug.js](https://pugjs.org/)
* [Heroku](https://www.heroku.com/)

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- GETTING STARTED -->
## 2. Getting Started

This guide is on how to set up the project locally

<br/>

### 2.1 Prerequisites

#### Packages
* [nodemon](https://www.npmjs.com/package/nodemon): development tool
* [mongoose](https://mongoosejs.com/docs/index.html): communicate with mongodb cloud
* [dovenv](https://www.npmjs.com/package/dotenv): using local environment variables
* (optional) node-sass: generating css files

#### Environment variables (for development)
* `DATABASE`: mongodb endpoint
* `DATABASE_PASSWORD`
* `EMAIL_FROM`: email to send it from
* `JWT_COOKIE_EXPIRES_IN`
* `JWT_EXPIRES_IN`
* `JWT_SECRET`
* `NODE_ENV`
* `SENDGRID_PASSWORD`
* `SENDGRID_USERNAME`
* `STRIPE_PUBLIC_KEY`
* `STRIPE_SECRET_KEY`
* `STRIPE_WEBHOOK_SECRET`


<br/>


### 2.2 Installation

1. Get a free API Key at [https://example.com](https://example.com)
2. Clone the repo
   ```sh
   git clone https://github.com/cedriclemercier/laotours.git
   ```
3. Install NPM packages
   ```sh
   npm install
   ```
4. (for myself) Enter your environment variables in root folder as `.env`. Example:
   ```js
   DATABASE=mongodb+srv://<the-url>
   ```

<p align="right">(<a href="#top">back to top</a>)</p>


## 3. Architecture

### 3.1 Folder Organisation
The application follows a classic MVC architecture including:
- `/views`: all the views of the application, using the templating engine `pug`
- `/models`: our mongodb models for booking, review, tour, and user
- `/controllers`: the controllers for user, views, tours, reviews, errors, bookings.

- `/util`: utilities, including email constructur, error handling
- `/routes`: all routes organised neatly
- `/public`: our frontend files

<br/>

## 4. API Endpoints
The front end of the application communicates with the backend API endpoints running on the same URL. Add these to the end of the root url for getting data in JSON format.
Endpoints include:
* `/api/v1/tours`: Get all the tours
* `/api/v1/tours/5c88fa8cf4afda39709c2951`: Get a tour by id
* `/api/v1/bookings`: All Bookings (requires log in)
* `/api/v1/tours/5c88fa8cf4afda39709c2951/reviews`: Get all reviews for a tour id
* `/api/v1/users`: Get all users
* `/api/v1/users/signup`: Sign up as a new user
* `/api/v1/users/login`: Log in
```js
// expected payload for sign up
{
	"name": "Cedric",
	"email": "ceddy@mailsac.com",
	"password": "test",
	"passwordConfirm": "test"
}

// Expected payload for login
{
	"email": "edu@example.com",
	"password": "test1234"
}

```

### 4.1 Using with Postman (Documentation)

[Postman API Documentation](https://documenter.getpostman.com/view/10477740/UV5XgH9h)




<p align="right">(<a href="#top">back to top</a>)</p>

<!-- USAGE EXAMPLES -->
## 5. Usage

### 5.1 Log in with an example user
```js
email:edu@example.com
password: test1234
```
<img src="public/img/github/log-in.jpg">

<br/>

### 5.2 Book a tour
<img src="public/img/github/book.jpg">
<br/>

### 5.3 Purchase with Stripe
* `Card info for testing`: 4242 4242 4242 4242
* Enter anything the rest of the fields
* You will receive a confirmation email

<img src="public/img/github/buy.jpg">
<br/>

Your purchased tours will appear in your profle
<img src="public/img/github/profile.jpg">
<br/>

### 5.4 Admin view

<br/>

<!-- LICENSE -->
## 6. License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- CONTACT -->
## 7. Contact

Your Name - [@CedricLeMercier](https://twitter.com/CedricLeMercier) - info@cedricdesigns.com.au

Project Link: [https://github.com/cedriclemercier/laotours](https://github.com/cedriclemercier/laotours)

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- ACKNOWLEDGMENTS -->
## 8. Acknowledgments

* [Jonas Schmedtmann](https://www.udemy.com/course/nodejs-express-mongodb-bootcamp/)

<p align="right">(<a href="#top">back to top</a>)</p>