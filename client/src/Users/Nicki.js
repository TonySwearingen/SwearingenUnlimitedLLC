import React, { useState, useEffect } from 'react';

function Nicki() {

  const [nicki, setNicki] = useState([]);
  const [nickisProjects, setNickisProjects] = useState("");
  const [nickisImages, setNickisImages] = useState("")

  const displayProjects = [
    nickisProjects.name,
    nickisProjects.image
  ]

  const display = [
    nicki.name
  ]

  useEffect(() => { 
    fetch('/users/24')
      .then((res) => res.json())
      .then((data) => setNicki(data))
  }, [])

  useEffect(() => { 
    fetch('/projects/25')
      .then((res) => res.json())
      .then((data) => setNickisProjects(data))
  }, [])

  // Functions
  function handleSubmit(e) {
    e.preventDefault()

    const imageData = {image: nickisImages}

    fetch('/projects/25', {
      method: 'PATCH',
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(imageData)
    })
    .then((res) => res.json())
    .then((data) => setNickisImages(...nickisProjects, data))
  }

  return (
    <div>
      {display}
      <br/>
      <br/>
      {displayProjects}
      <br/>
      <br/>
      <form onSubmit={handleSubmit}>

        <input className="nickis-images"
          type="text"
          id="nicki"
          placeholder="Nicki's Images"
          value={nickisImages}
          onChange={e => setNickisImages(e.target.value)}
        />

        <button className="submit-btn" type="submit">
          Submit
        </button>

      </form>
    </div>
  );
}

export default Nicki;
