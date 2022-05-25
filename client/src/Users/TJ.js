import React, {useState, useEffect} from 'react';
import TJsCard from './TJsCard';
// import ProjectForm from './ProjectForm';

function TJ() {

  const [user, setUser] = useState([]);
  const [projectDisplay, setProjectDisplay] = useState();

  useEffect(() => {
    fetch('/users/5')
    .then((res) => res.json())
    .then((data) => {
      setUser(data)
      setProjectDisplay(data.projects.map(
        (el) => 
          <TJsCard 
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
      <h2>Future Jack of all Trades</h2>
      <br/>
      {/* <ProjectForm user={user} /> */}
      <br/>
      {projectDisplay}
      <h3>Car & Train Enthusiast</h3>
    </div>
  )
}

export default TJ;
