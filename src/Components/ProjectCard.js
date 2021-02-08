import React, { useState } from 'react';
import {
  Card,
  CardImg,
  CardTitle,
  CardText,
  CardBody,
  Col,
  CardFooter,
} from 'reactstrap';
import Button from './Button';
import './ProjectCard.css';
import VideoPlayer from "react-video-js-player";



const ProjectCard = ({
  image,
  title,
  description,
  url,
  demoUrl,
  poster,
  lastUpdated,
}) => {

  const [showVidPlayer, setShowVidPlayer] = useState(false); 
  let isVidShowing = (false); 
  
  const showPlayer = () => {
    // if (isVidShowing = false ){
      setShowVidPlayer(!showVidPlayer);
      // isVidShowing = (true)   
    // } 
    
  }

  const hidePlayer = () => {    
      setShowVidPlayer(!showVidPlayer);
      // isVidShowing = (false) 
      
  }
 
  return (
        
    <Col xs={12} md={6} xl={4} className="projectCard">

      {showVidPlayer && (
        <div className = "vidPlayer">
         <p onClick = {hidePlayer} className = "closeButton">x</p>
         <VideoPlayer src = {demoUrl} poster = {poster} width = "720" height = "420" playbackRates ={[0.5, 1, 8, 16]} />        
          
        </div>
      )}
      
      <Card>
        <CardTitle>
          <h3>{title}</h3>
        </CardTitle>
        <CardImg top src={`images/${image}`} alt="" />
        <CardBody>
          <CardText
            dangerouslySetInnerHTML={{ __html: description }}
          ></CardText>
          <Button href={url} target="_blank" className="projectCard__website">
            <div className="notPhone">Visit Website</div>
            <div className="phone">Website</div>
          </Button>
          <p></p>
          {/* {secondBtn && ( */}
            {/* <Button onClick ={() => setShowVidPlayer(!showVidPlayer)} className="projectCard__demo"> */}
            <Button onClick ={showPlayer} className="projectCard__demo">
              <div className="notPhone">View Demo</div>
              <div className="phone">Demo</div>
            </Button>
          {/* )} */}
        </CardBody>
        <CardFooter>
          <small className="text-muted text-center">
            Last updated in {lastUpdated}
          </small>
        </CardFooter>
      </Card>
    </Col>
  );
};

export default ProjectCard;
