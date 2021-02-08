import React from 'react';

import About from './Components/About';
import Experience from './Components/Experience';
import Projects from './Components/Projects';
import MobileProjects from "./Components/MobileProjects"
import Jobs from './Components/Jobs';
import Teaching from './Components/Teaching';
import Contact from './Components/Contact';
import Copyright from './Components/Copyright';

import BwDemo from "./bwDemo2.mp4";
import SbDemo from "./sbDemo2.mp4";
import EcDemo from "./ecDemo.mp4";
import GmDemo from "./gmDemo.mp4";
import RaDemo from "./raDemo.mp4";
import BcDemo from "./bcDemo.mp4";

import ScDemo from "./scDemo.mp4";
import AirbnbDemo from "./airbnbDemo2.mp4";
import TaDemo from "./taDemo.mp4";

const ecDemo = EcDemo;
const bwDemo = BwDemo;
const sbDemo = SbDemo;
const gmDemo = GmDemo;
const raDemo = RaDemo;
const bcDemo = BcDemo;

const scDemo = ScDemo;
const airbnbDemo = AirbnbDemo;
const taDemo = TaDemo;

const mobileProjects = [
  {
    image: 'airbnbRn2.png',
    title: 'Reservations App',
    description:
      'Built with React Native, expo and vector icons. Database and Authentication on AWS. ',
    url: 'https://github.com/DamainRamsajan/Mobile-Bookings-App',
    demoUrl: airbnbDemo,
    poster: "/images/airbnbRn2.png",
    lastUpdated: 'December 2020',
  },
  {
    image: 'signal2.png',
    title: 'Messaging App',
    description:
      'Built with React Native, expo and vector icons. Database and Authentication with firebase and cloud firestore.',
    url: 'https://github.com/DamainRamsajan/Mobile-Messaging-App',
    demoUrl: scDemo,
    poster: "/images/signal2.png",
    lastUpdated: 'October 2020',
  },
  {
    image: 'uber.png',
    title: 'Taxi App',
    description:
      'Built with React Native CLI, vector icons, Google Maps. Database and Authentication on AWS.',
    url: 'https://github.com/DamainRamsajan/Mobile-Taxi-App',
    demoUrl: taDemo,
    poster: "/images/uber.png",
    lastUpdated: 'December 2020',
  },

]

const projects = [
  {
    image: 'bookworm.png',
    title: 'Bookworm eCommerce App',
    description:
      'eCommerce web App for selling books online. Created with React js, React context api, Material Ui, with database, authentication and hosting on Firebase, Stripe integration with Cloud Functions',
    url: 'https://bookworm-ecommerce-app.web.app/',
    demoUrl: bwDemo,
    poster: "/images/bwPoster.png",
    lastUpdated: 'October 2020',
  },
  {
    image: 'linkedin2.png',
    title: 'Social Business App',
    description:
      'This clone of Linkedin was created with React JS and Material-ui, with Database, Hosting and Authentication on Firebase and Firestore. Including Realtime posting functionality',
    url: 'https://redux-linkedin-clone.web.app/',
    demoUrl: sbDemo,
    poster: "/images/sbPoster.png",
    lastUpdated: 'December 2020',
  },
  {
    image: 'gmail.png',
    title: 'e-mail App',
    description:
      'Frontend and Functionality built with React, Material Ui and Redux. Database, Authentication and hosting on Firebase with Google Cloud Firestore and Google Authentication. ',
    url: 'https://email-app-1bc1d.web.app/',
    demoUrl: gmDemo,
    poster: "/images/gmPoster.png",
    lastUpdated: 'December 2020',
  },
  {
    image: 'homeAway.png',
    title: 'Reservations App',
    description:
      'Reservation and booking web app created with React JS and Material ui with the backend including email authentication, database and hosting on Google Firebase and Cloud Firestore ',
    url: 'https://reservations-ecommerce-app.web.app/',
    demoUrl: raDemo,
    poster: "/images/raPoster.png",
    lastUpdated: 'January 2020',
  },
  {
    image: 'slack.png',
    title: 'Business Comms App',
    description:
      'Business Communication Platform Slack type app built with ReactJS, NodeJs, Material-ui, hosted on Firebase with cith Cloud Firestore database and firebase Google authentication.',
    url: 'https://slack-clone-5a06f.web.app/',
    demoUrl: bcDemo,
    poster: "/images/slack.png",
    lastUpdated: 'December 2020',
  },
  {
    image: 'amazon1.png',
    title: 'e-commerce App',
    description:
      'This Amazon Clone is built using a ReactJS frontend and an ExpressJS backend, and deployed on Firebase. It has e-commerce functionality with Stripe integration with google cloud functions and Express. ',
    url: 'https://clone-316a1.web.app/',
    demoUrl: ecDemo,
    poster: "/images/ecPoster.png",
    lastUpdated: 'October 2020',
  },
  /*{
    image: 'netflix-clone.jpeg ',
    title: 'Video Trailer App',
    description:
      'The Netflix Clone for Movie trailers was built with React js and Material ui tools. It uses an online film trailer repository api for real time updates and is hosted on Firebase',
    url: 'https://netflix-clone-2be1f.web.app/',
    demoUrl: bwDemo,
    poster: "/images/netflix-clone.jpeg",
    lastUpdated: 'June 2020',
  },
  {
    image: 'WhatsappClone.png',
    title: 'Realtime Messenger App',
    description:
      'Whats App Clone built with React JS, Express JS, Mongo DB, Node JS and Material-ui, frontend hosting on Firebase and exoress server hosted on Heroku',
    url: 'https://github.com/DamainRamsajan/WhatsApp-Clone-Frontend',
    demoUrl: bwDemo,
    poster: "/images/WhatsappClone.png",
    lastUpdated: 'October 2020',
  },
  {
    image: 'tinderClone.png',
    title: 'Dating App',
    description:
      'This project uses Realtime Firebase Firestore database to store messages. The app is built using ReactJS and Material-ui on the front-end, using ReactFlipMove.',
    url: 'https://github.com/DamainRamsajan/ideal-app-dpr',
    demoUrl: bwDemo,
    poster: "/images/tinderClone.png",
    lastUpdated: 'November 2020',
  }, */
];

function App() {
  return (
    <React.Fragment>
      <div className="wrapper">
        <About />
        <Experience /> 
        <MobileProjects projects={mobileProjects} /> 
        <Projects projects={projects} />   
        <Jobs />
        <Teaching />
        <Contact />
        <Copyright />
      </div>
    </React.Fragment>
  );
}

export default App;
