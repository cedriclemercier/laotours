<div id="top"></div>

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://laotours.herokuapp.com/">
    <img src="public/img/favicon.png" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">Lao Tours</h3>
  <p align="center">
    Travel app built with NodeJS and Express
    <br />
    <a href="https://laotours.herokuapp.com/">Live site</a>
    ·
    <a href="https://cedricdesigns.com.au/portfolio/laotours">My portfolio</a>
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
## About The Project


Built using modern tech stack and frameworks: NodeJS, Express, MongoDB, Mongoose 😊
This app was built following a course on complete NodeJS development by Jonas S. on Udemy and was adapted for personal purposes.

### Lao tours

**Lao Tours** is a web app built from scratch using exclusively NodeJS, Express and MongoDB. This app was a side project done in vue to understand better the back-end development using modern technologies such as NodeJS. This project was adapted to make it more from an online course. This app allows you to look at tours, sign up, authenticate and book tours using Stripe API. 

"Lao Tours" is a fictional booking website for tours in Laos. The website displays various fictional tours in several cities and famous landmarks in Laos, for adventurers and tourists. Laos has a rich history and counts several World Heritage Sites as well as beautiful karst landscapes, witnesses of rich past geologic activity.

<p align="right">(<a href="#top">back to top</a>)</p>



### Built With

* [Node.js](https://nodejs.org/en/)
* [Express.js](https://expressjs.com/)
* [MongoDB Cloud](https://www.mongodb.com/cloud)
* [Pug.js](https://pugjs.org/)
* [Heroku](https://www.heroku.com/)

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started

This guide is on how to set up the project locally

<br/>

### Prerequisites

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


### Installation

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



<!-- USAGE EXAMPLES -->
## Usage

Coming soon..

<br/>

## Architecture

### Folder Organisation
The application follows a classic MVC architecture including:
- `/views`: all the views of the application, using the templating engine `pug`
- `/models`: our mongodb models for booking, review, tour, and user
- `/controllers`: the controllers for user, views, tours, reviews, errors, bookings.

- `/util`: utilities, including email constructur, error handling
- `/routes`: all routes organised neatly
- `/public`: our frontend files


<p align="right">(<a href="#top">back to top</a>)</p>



<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- CONTACT -->
## Contact

Your Name - [@CedricLeMercier](https://twitter.com/CedricLeMercier) - info@cedricdesigns.com.au

Project Link: [https://github.com/cedriclemercier/laotours](https://github.com/cedriclemercier/laotours)

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- ACKNOWLEDGMENTS -->
## Acknowledgments

* [Jonas Schmedtmann](https://www.udemy.com/course/nodejs-express-mongodb-bootcamp/)

<p align="right">(<a href="#top">back to top</a>)</p>