import React from 'react';
import Card from './Card';

const Teaching = () => {
  return (
    <section style={{background: "#d4d4d4"}} className="py-3">
      <h1 className="mt-5 mb-2 mb-md-3 mx-auto text-center display-md-4 font-weight-bold" style={{color: "#203647"}}>Training and Seminars</h1>
      <h4 className="w-50 mx-auto font-weight-normal text-muted mt-4 text-center">Trainer ⭐⭐⭐⭐⭐</h4>

     

      <Card
        image="Cobittraining2.jpg"
        title="COBIT, ITIL and IT Process and Coding Training"
        description="Worked with various Government Projects for Stem Training for under priviliged youths in Trinidad. 
        Using Game development with Unity 3d as a mechanism to teach beginner coding skills with C#. I'v also Facilitated Workshops and Seminars for Government, Energy, Finance and Education Clients"
        
        />

      
    </section>
  )
}

export default Teaching;
