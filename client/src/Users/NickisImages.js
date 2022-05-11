import React, {useState} from 'react';

function NickisImages() {
  const [images, setImages] = useState(null);

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
      <form onSubmit={handleSubmit}>
        <input
          type="file"
          accept=".jpeg,.png,.gif,.mov,.mp4"
          name="files"
          onChange={(e) => setImages(e.target.files[0])}
        ></input>
        <button className="submit-btn" type="submit">
          Submit
        </button>
        {/* <img className="image-1" src={setNickisProjects} alt="name" /> */}
      </form>
    </div>
  )
}

export default NickisImages;
