import React, { useState, useEffect } from 'react';
import TonysCard from './TonysCard';
// import ProjectForm from './ProjectForm';

function Tony() {

  const [user, setUser] = useState([]);
  const [projectDisplay, setProjectDisplay] = useState();

  // let projectDisplay = null

  useEffect(() => {
    fetch('/users/4')
    .then((res) => res.json())
    .then((data) => {
      setUser(data)
      setProjectDisplay(data.projects.map(
        (el) => 
          <TonysCard 
            key={el.id} 
            name={el.name} 
            date={el.date} 
            link={el.link} 
          />
      ))
    })
  }, []);





  return (
    <div>
      {/* <ProjectForm user={user} /> */}
      <br/>
      
      <h3>Projects</h3>
      <a className="social-media" target="_blank" rel="noopener noreferrer" href="https://github.com/TonySwearingen">My GitHub</a>
      {projectDisplay}
      <br/>
      <h3>Social Media Links</h3>
      
      <br/>
      <a className="social-media" target="_blank" rel="noopener noreferrer" href="https://linkedin.com/in/tony-swearingen">My LinkedIn</a>
      <br/>
      <h3>Retired Truck Driver turned Software Engineer</h3>
      <br/>
      
    </div>
  )
}

export default Tony;
