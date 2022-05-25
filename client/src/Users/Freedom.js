import React, {useState, useEffect} from 'react';
import FreedomCard from './FreedomCard';
// import ProjectForm from './ProjectForm';

function Freedom() {

  const [user, setUser] = useState([]);
  const [projectDisplay, setProjectDisplay] = useState();

  useEffect(() => {
    fetch('/users/2')
    .then((res) => res.json())
    .then((data) => {
      setUser(data)
      setProjectDisplay(data.projects.map(
        (el) => 
          <FreedomCard 
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
      <h2>Future Software Engineer</h2 >
      <br/>
      {/* <ProjectForm user={user}/> */}
      {projectDisplay}
      <br/>
      <h3>Dragon Enthusiast</h3>
    </div>
  )
}

export default Freedom;
