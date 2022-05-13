import React from 'react';
import ProjectForm from './ProjectForm';

function TJ({user}) {
  return (
    <div>
      <h2>Future Jack of all Trades</h2>
      <br/>
      <ProjectForm user={user} />
      <br/>
      <h3>Car & Train Enthusiast</h3>
    </div>
  )
}

export default TJ;
