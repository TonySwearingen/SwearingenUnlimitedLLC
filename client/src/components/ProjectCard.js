import React from 'react';
import { useNavigate } from 'react-router';

function ProjectCard({id, name, date, user, link, onUpdateProjects, projects, onDelete }) {

  const history = useNavigate()

  // function handleUpdateProjects(e) {
  //   e.preventDefault();
  //   fetch(`/projects/${projects.id}`, {
  //     method: 'PATCH',
  //     headers: {"Content-Type": "application/json"},
  //     body: JSON.stringify(),
  //   })
  //   .then((res) => res.json())
  //   .then((data) => onUpdateProjects(data))
  // }

  function handleDeleteProjects() {
    fetch(`/projects/${id}`, {
      method: 'DELETE',
    })
    .then((res) => res.json())
    .then((data) => onDelete(data))
    history(0)
  }

  return (
    <div>
      <p>{user.name}</p>
      <p>{name}</p>
      <p>{date}</p>
      {link? <a href={link}>Link URL</a>
      : 
      <a href="#">Links coming soon</a>}
      {/* <button className="edit-btn" onClick={handleUpdateProjects}>📝</button> */}
      {/* <form onSubmit={history}> */}
      <button className="delete-btn" onClick={handleDeleteProjects}>🗑</button>
      {/* </form> */}
    </div>
  )
}

export default ProjectCard;
