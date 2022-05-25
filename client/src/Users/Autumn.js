import React, {useState, useEffect} from 'react';
import AutumnCard from './AutumnCard';
// import ProjectForm from './ProjectForm';

function Autumn() {

  const [user, setUser] = useState([]);
  const [projectDisplay, setProjectDisplay] = useState();

  useEffect(() => {
    fetch('/users/3')
    .then((res) => res.json())
    .then((data) => {
      setUser(data)
      setProjectDisplay(data.projects.map(
        (el) => 
          <AutumnCard 
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
      <h2>Future Gaming Engineer</h2>
      <br/>
      {/* <ProjectForm user={user}/> */}
      {projectDisplay}
      <br/>
      <h3>Unicorn & Mermaid Enthusiast</h3>
    </div>
  )
}

export default Autumn;
