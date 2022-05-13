import React, {useState} from 'react';

function ProjectForm({user}) {

  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [link, setLink] = useState("");

  function handleProjectCreate(e) {
    e.preventDefault();
    console.log(user)
    const formData = {
      name: name,
      date: date,
      user_id: user.id,
      link: link,
    };
    fetch('/projects', {
      method: 'POST',
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(formData),
    })
    .then((res) => res.json())
    .then(
      setName(""),
      setDate(""),
      setLink("")
    )
  }

  return (
    <div>
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
        <div>
          <label htmlFor="name">Link URL</label>
          <input 
            type="text"
            id="link"
            value={link}
            onChange={(e) => setLink(e.target.value)}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}
export default ProjectForm;
