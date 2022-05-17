import React from 'react';

function ProjectCard({name, date, user, link, onUpdateProjects, projects, onDelete }) {

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

  // function handleDeleteProjects() {
  //   fetch(`/projects/${projects.id}`, {
  //     method: 'DELETE',
  //   })
  //   .then((res) => res.json())
  //   .then((data) => onDelete(data))
  // }

  return (
    <div>
      <p>{user.name}</p>
      <p>{name}</p>
      <p>{date}</p>
      {link? <a href={link}>Link URL</a>
      : 
      <a href="#">Links coming soon</a>}
      {/* <button className="edit-btn" onClick={handleUpdateProjects}>📝</button> */}
      {/* <button className="delete-btn" onClick={handleDeleteProjects}>🗑</button> */}
    </div>
  )
}

export default ProjectCard;
