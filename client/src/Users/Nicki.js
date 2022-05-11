import React, { useState, useEffect, useRef } from 'react';



function Nicki() {

  const [nicki, setNicki] = useState([]);
  const [nickisProjects, setNickisProjects] = useState('');
  const [images, setImages] = useState(null)
  const imageUpload = useRef()

  
  const displayProjects = [
    nickisProjects.name,
    nickisProjects.images
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
      .then((data) => setNickisProjects(data.images_url.url))
  }, [])

  // Functions
  function handleSubmit(e) {
    e.preventDefault()

    const formData = new FormData();
    formData.append('images', images);

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
          onChange={(e) => setImages(e.target.files[0])}
          ref={imageUpload}
        ></input>
        <button className="submit-btn" type="submit">
          Submit
        </button>
        <img className="image-1" src={setNickisProjects} alt="name" />
      </form>
    </div>
  );
}

export default Nicki;
