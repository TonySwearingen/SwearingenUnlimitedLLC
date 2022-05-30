import React from 'react';

function TJsCard({ name, date, link}) {
  return (
    <div>
      <h4>{name}</h4>
      <p>{date}</p>
      {link? <a href={link}>Link URL</a>
      : 
      <a href="#">Links coming soon</a>
    }</div>
  )
}

export default TJsCard;
