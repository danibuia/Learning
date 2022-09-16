import React, { useState, useEffect } from "react";
import axios from "axios";
import { baseUrl } from "../../home/constants/Constants";
function AddProject() {
  const [accessToken, setAccessToken] = useState('');
  const [projectTitle, setProjectTitle] = useState("");
  const [shortDescription, setShortDescription] = useState("");
  const [programmingLanguages, setProgrammingLanguages] = useState("");
  const [frameworks, setframeworks] = useState('');
  const [tools, setTools ]=useState('');
  const [client, setClient ]=useState('');
  const [year, setYear ]=useState('');
  const [author, setAuthor ]=useState('');

  const addProject = () => {
    axios
      .post(`${baseUrl}/admins/add-project`, {
        projectTitle: projectTitle,
        shortDescription: shortDescription,
        programmingLanguages: programmingLanguages,
        frameworks: frameworks,
        tools: tools,
        client:client, 
        year:year, 
        author:author
      },
      {  headers: { Authorization: `Bearer ${accessToken}` }})
      .then((response) => {
        console.log("response ", response.data);
        window.localStorage.setItem("token", response.data.accessToken);
        // window.location.pathname = "/home";
      })
      .catch((error) => {
        console.log("error: ", error);
      });
  };
 

useEffect(() => {
    setAccessToken(window.localStorage.getItem("token"));
  
    // eslint-disable-next-line 
}, [accessToken])

  return (
    <>
      <div>
        <form style={{display:'flex', flexDirection:'column', justifyContent:'center',alignItems:'center'}}>
          <label htmlFor="Title">Title</label>
          <input
            type="text"
            id="Title"
            name="Title"
            placeholder="Title"
            onChange={(event) => setProjectTitle(event.target.value)}
          />
           <label htmlFor="Short Deasc">Short Description</label>
          <input
            type="text"
            id="ShortDescription"
            name="ShortDescription"
            placeholder="Description"
            onChange={(event) => setShortDescription(event.target.value)}
          />
          <label htmlFor="ProgrammingLanguages">ProgrammingLanguages</label>
          <input
            type="text"
            id="ProgrammingLanguages"
            name="ProgrammingLanguages"
            placeholder="ProgrammingLanguages"
            onChange={(event) => setProgrammingLanguages(event.target.value)}
          />
          <label htmlFor="LastName">Last Name</label>
          <input
            type="text"
            id="Frameworks"
            name="Frameworks"
            placeholder="Frameworks"
            onChange={(event) => setframeworks(event.target.value)}
          />
          <label htmlFor="Tools">Tools</label>
          <input
            type="text"
            id="Toools"
            name="Tools"
            placeholder="Tools"
            onChange={(event) => setTools(event.target.value)}
          />
          <label htmlFor="Client">Client</label>
          <input
            type="text"
            id="Client"
            name="Client"
            placeholder="Client"
            onChange={(event) => setClient(event.target.value)}
          />
          <label htmlFor="Year">Year</label>
          <input
            type="datetime-local"
            id="DateTimeLocal"
            name="DateTimeLocal"
            placeholder="Year"
            onChange={(event) => setYear(event.target.value)}
          />
           <label htmlFor="Author">Author</label>
          <input
            type="text"
            id="Author"
            name="Author"
            placeholder="Author"
            onChange={(event) => setAuthor(event.target.value)}
          />
         
         
         
       
        </form>
       
        <button type="button" onClick={addProject} disabled={false}>
          Log in
        </button>
      </div>
    </>
  );
}
export default AddProject;