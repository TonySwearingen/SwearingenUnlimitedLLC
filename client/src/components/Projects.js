import React, {useState, useEffect} from 'react';
import ProjectCard from './ProjectCard';

function Projects() {

  const [projects, setProjects] = useState([])

  useEffect(() => {
    fetch("/projects")
    .then((res) => res.json())
    .then((data) => setProjects(data))
  }, []);


  const createProjectCards = projects.map((data) => <ProjectCard key={data.id} name={data.name} date={data.date} user={data.user} /> )

  return (

    <div>
      <h3>View our Projects</h3>
      {createProjectCards}
    </div>
    
  )
}

export default Projects;
