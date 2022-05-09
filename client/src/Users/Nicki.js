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

  //useEffects

  useEffect(() => { 
    fetch('/users/2')
      .then((res) => res.json())
      .then((data) => setNicki(data))
  }, [])

  useEffect(() => { 
    fetch('/projects/5')
      .then((res) => res.json())
      .then((data) => setNickisProjects(data))
  }, [])

  // Functions
  function handleSubmit(e) {
    e.preventDefault()

    const imageData = {image: nickisImages}

    fetch('/projects/5', {
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
        <input
          type="file"
          accept=".jpeg,.png,.gif,.mov,.mp4"
          name="files"
          multiple
          onChange={(e) => setNickisImages(e.target.files)}
        ></input>
        <button className="submit-btn" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Nicki;
