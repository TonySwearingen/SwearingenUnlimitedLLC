import React from 'react';

function ProjectCard({name, date, user,link}) {

  return (
    <div>
      <p>{user.name}</p>
      <p>{name}</p>
      <p>{date}</p>
      {link? <a href={link}>Link URL</a>
      : 
      <a href="#">Links coming soon</a>}
    </div>
  )
}

export default ProjectCard;
