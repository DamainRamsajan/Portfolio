import React from 'react';
import Typed from 'react-typed';
import {FaLinkedin, FaGithub, FaSkype} from 'react-icons/fa';
import {Animated} from "react-animated-css";

const About = () => {


  return (
  <section style={styles.about} className="flex-column">

      <Animated animationIn="bounceInUp" animationInDuration={1400} isVisible={true}>
        <div style={styles.profileImg}></div>
      </Animated>			

			<div style={styles.details}>
				<h2 style={styles.title} className="font-weight-bold">Damain Ramsajan<br />
        <Typed className="font-weight-light"
          strings={['ReactJS Full Stack Developer', 'MERN Stack Developer', 'Software Engineer']}
          backSpeed={70} typeSpeed={60} backDelay={1000}
          /></h2>
          <h4 style={{marginTop: -50, marginBottom: 40}}>MSc: Strategic Business Information Technology: University of Portsmouth</h4>
          <p></p>
          <h4 style={{marginTop: -30, marginBottom: 40}}>Post Graduate Diploma: Software Engineering: Aston University</h4>
          <p></p>
          
			</div>
			<div><a className="my-button" href="mailto:peterdramsajan@gmail.com">Contact</a></div>

			<div className="text-center mt-4">
				<a href="https://github.com/DamainRamsajan">
          <FaGithub size="28"/>
        </a>
				<a href="https://www.linkedin.com/in/damain-peter-ramsajan-63204b23/">
          <FaLinkedin size="28"/>
        </a>
        <a href="https://join.skype.com/invite/dVY4TpFLU4Vc">
          <FaSkype size="28"/>
        </a>
			</div>

		</section>
  )
}

var styles = {

  about: {
    marginTop: '10em',
		border: '1px solid #eee',
		backgroundColor: 'white',
		paddingBottom: '1em',
    textAlign: 'center'
  },
  profileImg: {
    backgroundImage: `url(${process.env.PUBLIC_URL}/images/DPR.png)`,
    width: '200px',
    height: '200px',
    margin: '0 auto',
    borderRadius: '50%',
    backgroundSize: 'cover',
    marginTop: '-100px',
    marginBottom: '40px',
    
  },
  details: {
    margin: '0',
    marginTop: '-2em'
  },
  title: {
    color: '#203647',
		fontSize: '3.8em',
		paddingBottom: '1em'
  }
}

export default About;
