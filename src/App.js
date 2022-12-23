import "./styles.css";
import React, { useState } from "react";
export default function App() {
  const initial = Object.freeze({ Name: "", Comments: "" });
  const [data, setdata] = useState(initial);
  const [input, updateddata] = useState([]);

  const handleChange = (e) => {
    setdata({ ...data, [e.target.name]: e.target.value.trim() });
    console.log(data);
  };

  const handleSubmit = () => {
    let name = data.name;
    let comments = data.comments;
    updateddata([...input, { name, comments }]);
  };

  return (
    <div className="App">
      <div className="Box1">
        <label>Name:</label>
        <input name="name" onChange={handleChange} />
        <br />
        <label>Comments:</label>
        <textarea name="comments" onChange={handleChange} />
        <br />
        <button onClick={handleSubmit}>Submit</button>
      </div>
      {console.log(data)}
      <div className="Box2">
        <table>
          {input.map((info, ind) => {
            console.log(ind);
            return (
              <tbody>
                <tr key={ind}>
                  <td>{info.name}</td>
                </tr>
                <tr key={ind}>
                  <td>{info.comments}</td>
                </tr>
              </tbody>
            );
          })}
        </table>
      </div>
    </div>
  );
}
