import React from 'react';
import { CardDeck, Row } from 'reactstrap';
import ProjectCard from './ProjectCard';
import './MobileProjects.css';

const Projects = ({ projects }) => {
  return (
    <div className="projects">
      <h1 className="phone">Projects</h1>
      <h1 className="notPhone">Mobile App Projects</h1>
      <p>Android and IOS Apps built with React Native ⭐⭐⭐⭐⭐</p>
      
      <CardDeck>
      <div className = "mobileProjects__cards">
        <Row >
          {projects?.map(({ image, title, description, url, demoUrl, poster,lastUpdated }) => (
            <ProjectCard
              image={image}
              title={title}
              description={description}
              url={url}
              demoUrl={demoUrl}
              poster = {poster}
              lastUpdated={lastUpdated}
            />
          ))}
        </Row>
        </div>
      </CardDeck>
      
    </div>
  );
};

export default Projects;
