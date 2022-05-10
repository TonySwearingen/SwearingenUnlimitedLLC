import React, { useState, useEffect, useRef } from 'react';


function Nicki() {

  const [nicki, setNicki] = useState([]);
  const [nickisProjects, setNickisProjects] = useState([]);
  const [image, setImage] = useState(null)
  const imageUpload = useRef()

  
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

    const formData = new FormData();
    formData.append('image', image);

    fetch('/projects/5', {
      method: 'PATCH',
      body: formData
    })
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
          onChange={(e) => setImage(e.target.files[0])}
          ref={imageUpload}
        ></input>
        <button className="submit-btn" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Nicki;
