import { useEffect, useState } from "react";

const Profile = () => {
  const [count, setCount] = useState(0);
  const [user, setUser] = useState({
    name: "Shanedra Singh",
    login: "ShanedraSingh05",
    bio: "WEB - DEVELOPER ( MERN STACK ) | |  JAVA | PYTHON | DSA  |",
    location: "DELHI",
    html_url: "https://github.com/ShanedraSingh05",
    avatar_url:
      "https://avatars.githubusercontent.com/u/115075657?s=400&u=6d7d17ab55c3dc5da26dfa44adc09830ba748397&v=4",
    followers: 18,
    following: 2,
  });
  useEffect(() => {
    console.log("Function useEffect");
    const getUserData = async () => {
      try {
        const data = await fetch(
          "https://api.github.com/users/ShanedraSingh05"
        );
        const json = await data.json();
        console.log(json);
        if (json.name) {
          setUser(json);
        }
      } catch (err) {
        console.log(err);
      }
    };
    getUserData();
  }, []);
  console.log("Function Render");
  return (
    <div className="profile-page">
      <h1>Profile Page</h1>
      <div className="profile-home">
        <div>
          <h3>
            {user.name} ({user.login})
          </h3>
          <h4>
            FOLLOWERS: {user.followers || "--"} || FOLLOWING:{" "}
            {user.following || "--"}
          </h4>
          <h4>{user.bio}</h4>
          <h4>{user.location}</h4>
          <a href={user.html_url} target="_blank">
            Github Link
          </a>
        </div>
        <div>
          <img src={user.avatar_url} />
        </div>
      </div>
      <button className="countBtn" onClick={() => setCount(count + 1)}>
        Count: {count}
      </button>
    </div>
  );
};
export default Profile;
