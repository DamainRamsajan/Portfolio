import React from 'react';
import { CardDeck, Row } from 'reactstrap';
import ProjectCard from './ProjectCard';
import './Projects.css';

const Projects = ({ projects }) => {
  return (
    <div className="projects">
      <h1 className="phone">Projects</h1>
      <h1 className="notPhone">Web App Projects</h1>
      <p>Full stack Web Apps ⭐⭐⭐⭐⭐</p>
      
      <CardDeck>
      <div className = "projects__cards">
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
