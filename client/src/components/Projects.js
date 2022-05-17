import React, {useState, useEffect} from 'react';
import ProjectCard from './ProjectCard';
import { useNavigate } from 'react-router';


function Projects({user}) {

  const [projects, setProjects] = useState([])
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [link, setLink] = useState("");

  const history = useNavigate()

  useEffect(() => {
    fetch("/projects")
    .then((res) => res.json())
    .then((data) => setProjects(data))
  }, []);

  function handleProjectCreate(e) {
    // e.preventDefault();
    console.log(user)
    const formData = {
      name: name,
      date: date,
      user_id: user.id,
      link: link,
    };
    fetch('/projects', {
      method: 'POST',
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(formData),
    })
    .then((res) => res.json())
    .then(
      setName(""),
      setDate(""),
      setLink(""),
      history('/projects')
    )
  }

  // function handleUpdateProjects(updatedProject) {
  //   const updatedProjects = projects.map((data) => {
  //     if (data.id === updatedProject.id) {
  //       return updatedProjects;
  //     }else {
  //       return projects;
  //     }
  //   })
  // }

  // function handleDelete(deletedProject) {
  //   const updatedProjects = projects.filter(p => p.id !== deletedProject.id);
  //   setProjects(updatedProjects)
  // }


  const createProjectCards = projects.map((data) => <ProjectCard 
                                                      key={data.id} 
                                                      name={data.name} 
                                                      date={data.date} 
                                                      user={data.user} 
                                                      link={data.link} 
                                                      // onUpdateProjects={handleUpdateProjects} 
                                                      projects={projects} 
                                                      // onDelete={handleDelete} 
                                                    /> )

  return (

    <div>
      <h3>View our Projects</h3>
      <form onSubmit={handleProjectCreate}>
        <div>
          <label htmlFor="name">Project Name</label>
          <input 
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="name">Project Date</label>
          <input 
            type="text"
            id="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="name">Link URL</label>
          <input 
            type="text"
            id="link"
            value={link}
            onChange={(e) => setLink(e.target.value)}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
      <br/>
      <hr/>
      {createProjectCards}
    </div>
    
  )
}

export default Projects;
