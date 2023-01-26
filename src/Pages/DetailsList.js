import React, { useState } from "react";
import "../Components/User.css";
import "./Details.css";
import Validate from "./Validate";

const DetailsList = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    phonenumber: "",
  });
  const [details, updateDetails] = useState([]);
  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const [errors, setErrors] = useState({});
  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(Validate(data));

    if (Object.keys(errors).length === 0 && Object.keys(data).length !== 0) {
      updateDetails([...details, data]);
      setData({
        name: "",
        email: "",
        password: "",
        phonenumber: "",
      });
    } else {
      alert("There is an Error!");
    }
  };

  return (
    <div className="lgh">
      <h1>Users Form Details</h1>
      <form>
        <div className="form-box">
          <input
            type="text"
            placeholder="User Name"
            name="name"
            value={data.name}
            onChange={handleChange}
          />
        </div>
        {errors.name && <p className="error">{errors.name}</p>}
        <div className="form-box">
          <input
            type="email"
            placeholder="Email"
            name="email"
            value={data.email}
            onChange={handleChange}
          />
        </div>
        {errors.email && <p className="error">{errors.email}</p>}
        <div className="form-box">
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={data.password}
            onChange={handleChange}
          />
        </div>
        {errors.password && <p className="error">{errors.password}</p>}
        <div className="form-box">
          <input
            type="number"
            placeholder="Phone Number"
            name="phonenumber"
            value={data.phonenumber}
            onChange={handleChange}
          />
        </div>
        {errors.phonenumber && <p className="error">{errors.phonenumber}</p>}
        <div className="form-box">
          <button onClick={handleSubmit}>Submit</button>
        </div>
      </form>

      <div className="tab-list">
        <table border={1} cellPadding={10} >
          <tbody>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>PhoneNumber</th>
            </tr>
            {details.map((info, index) => {
              return (
                <tr key={index}>
                  <td>{info.name}</td>
                  <td>{info.email}</td>
                  <td>{info.phonenumber}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DetailsList;
