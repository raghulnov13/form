import React, { useState } from "react";
import "./User.css";

function UserDetails() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contacts, updateContacts] = useState([]);

  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, email);
    if(name ==="" ||email===""){
        alert("please fill the fields")
        return
    }
    else{
        updateContacts([...contacts, { name, email }]);
        setEmail("");
        setName("");
        console.log(contacts);
    }
    
  };

  return (
    <div className="container">
      <h1>Register Form</h1>
      <input
        type="text"
        placeholder="Enter Name"
        value={name}
        onChange={handleName}
      />{" "}
      <br /> <br />
      <input
        type="email"
        placeholder="Enter Email Id"
        value={email}
        onChange={handleEmail}
      />{" "}
      <br /> <br />
      <button onClick={handleSubmit}>Submit</button>
    
      <div className="tab-list">
        <table border={1} cellPadding={10}>
          <tbody>
            <tr>
              <th>Name</th>
              <th>Email</th>
            </tr>
            {contacts.map((list,index) => {
              return (
                <tr key={index}>
                  <td>{list.name}</td>
                  <td>{list.email}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default UserDetails;
