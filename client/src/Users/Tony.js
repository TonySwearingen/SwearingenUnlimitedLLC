import React, {useState} from 'react';

function Tony({user}) {

  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  

  function handleProjectCreate(e) {
    e.preventDefault();
    console.log(user)
    const formData = {
      name: name,
      date: date,
      user_id: user.id,
    };
    fetch('/projects', {
      method: 'POST',
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(formData),
    })
    .then((res) => res.json())
    .then(
      setName(""),
      setDate("")
    )
  }

  return (
    <div>
      <h2>You are looking at my latest Project</h2>
      <br/>
      <form onSubmit={handleProjectCreate}>
        <div>
          <label htmlFor="name">Project Name</label>
          <input 
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="name">Project Date</label>
          <input 
            type="text"
            id="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
      <h3>Projects</h3>
      <a className="social-media" target="_blank" rel="noopener noreferrer" href="https://github.com/TonySwearingen">My GitHub</a>
      
      <br/>
      <h3>Social Media Links</h3>
      
      <br/>
      <a className="social-media" target="_blank" rel="noopener noreferrer" href="https://linkedin.com/in/tony-swearingen">My LinkedIn</a>
      <br/>
      <h3>Retired Truck Driver turned Software Engineer</h3>
      <br/>
      
    </div>
  )
}

export default Tony;
