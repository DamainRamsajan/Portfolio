import React from 'react';
import {Row, Col} from 'reactstrap';

import {RiComputerLine} from 'react-icons/ri';
import {AiOutlineCloudServer, AiFillTool} from 'react-icons/ai';
import {FcBusiness} from 'react-icons/fc';

const ExpTitle = ({title}) => {
  return (
    <h3 className="font-weight-bold text-white">{title}</h3>
  )
}

const Experience = () => {
  return (
    <Row className="font-weight-bold py-5 px-3" style={{backgroundColor: '#203647', color: '#BBD2FF'}}>
      <Col className="text-center">
        <RiComputerLine size="4em" color="grey"/>
        <ExpTitle title="Front-end"  />
        <p className="m-0">HTML5 / CSS3</p>
        <p className="m-0">JS / ES6</p>
        <p className="m-0">ReactJS</p>
        <p className="m-0">React Native</p>
        <p className="m-0">Bootstrap</p>
        <p className="m-0">Material UI</p>
        <p className="m-0">Unity 3D</p>
      </Col>
      <Col className="text-center">
        <AiOutlineCloudServer size="4em" color="grey"/>
        <ExpTitle title="Back-end" />
        <p className="m-0">NodeJS</p>
        <p className="m-0">ExpressJS</p>
        <p className="m-0">MongoDBL</p>
        <p className="m-0">Firebase</p>
        <p className="m-0">Google Cloud Functions</p>
        <p className="m-0">AWS AppSync</p>
        <p className="m-0">Google Cloud Firestore</p>
      </Col>
      <Col className="text-center">
        <AiFillTool size="4em" color="grey"/>
        <ExpTitle title="Tools" />
        <p className="m-0">VSCode</p>
        <p className="m-0">Github</p>
        <p className="m-0">Postman</p>
        <p className="m-0">Pusher</p>
        <p className="m-0">GraphQL</p>
        <p className="m-0">Socket.io</p>   
      </Col>
      <Col className="text-center">
        <FcBusiness size="4em" color="blue"/>
        <ExpTitle title="Soft Skills" />
        <p className="m-0">Cross Team Collaboration</p>
        <p className="m-0">Process Engineering</p>
        <p className="m-0">Requirements Engineering</p>
        <p className="m-0">UX/UI Design</p>  
        <p className="m-0">Customer/Conference Presentations</p>
        <p className="m-0">Strategic Analysis</p>
 
      </Col>
      
    </Row>
  )
}

export default Experience;
