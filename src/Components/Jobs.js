import React from 'react';
import { Row } from 'reactstrap';
import Card from './Card';


export default () => {
  return (
    <section style={{background: "#591c0b"}} className="py-2 pb-5">
      <Row className="mt-5 mb-2 mb-md-3">
        <h1 className="m-auto text-center display-md-4 font-weight-bold" style={{color: "white"}}>Previous Jobs</h1>
        <h4 className="w-100 text-center font-weight-normal text-muted mt-4" style={{color: "white" }}>Solutions Architect ⭐⭐⭐⭐⭐</h4>
      </Row>

      <Card reverse
        image="jobs.png"
        title="Solution Architect, Process Consultant and Trainer for over Seventeen Years:"
        description="for Networking, Storage and Enterprise 
        Applications working with solutions from the adjacent companies over the past seventeen years. 
        I was responsible for a team of pre-sales engineers to support solutions from EMC, NCR, Oracle, IBM, Cisco, Netapp and HP.
        I helped build markets for software and hardware solutions and facilitated sales teams with up to 12 million usd in quota revenue per annum.
        I'v worked through different roles on complex software projcts in Government, Energy, Finance and Education industries."
        //websites={[{link: "http://www.edifly.com"}]}
        />       
    </section>

    
  )
}