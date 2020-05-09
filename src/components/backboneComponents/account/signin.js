import React, { useState } from "react";
const Signin = (props) => {
  const [username, setUsername] = useState([]);
  const [password, setPassword] = useState([]);
  const signin = () => {
    console.log(username);
    console.log(password);
  };
  return (
    <div>
      {" "}
      <span>Username: </span>
      <input
        value={username}
        onChange={(event) => setUsername(event.target.value)}
      />{" "}
      <span>Password: </span>
      <input
        value={password}
        onChange={(event) => setPassword(event.target.value)}
      />{" "}
      <button onClick={signin}>Sign in</button>{" "}
    </div>
  );
};
export default Signin;
