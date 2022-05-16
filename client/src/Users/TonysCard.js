import React from 'react';

function TonysCard({ name, date, link}) {
  return (
    <div><p>{name}</p>
    <p>{date}</p>
    {link? <a href={link}>Link URL</a>
    : 
    <a href="#">Links coming soon</a>}</div>
  )
}

export default TonysCard;
