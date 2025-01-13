import { useEffect, useState } from "react";

const Profile = (props) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("useEffect");

    return () => {
      console.log("Use effect return");
    };
  }, []);
  console.log("render");

  return (
    <div>
      <h2>Profile component</h2>
      <h3>name: {props.name}</h3>
      <h3>Count: {count}</h3>

      <button onClick={() => setCount(1)}>Count</button>
    </div>
  );
};
export default Profile;
