import React from 'react';

function ProjectCard({name, date, user}) {

  console.log(name, user, date)
  return (
    <div>
      <p>{user.name}</p>
      <p>{name}</p>
      <p>{date}</p>
      <a href="#">Links coming soon</a>
    </div>
  )
}

export default ProjectCard;
