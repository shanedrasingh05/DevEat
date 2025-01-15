import { useContext } from "react";
import userContext from "../utils/userContext.js";
const Footer = () => {
  const { user } = useContext(userContext);

  return (
    <div>
      <h4 className="p-10 m-10 ">
        This site developed By {user.name} - {user.email};
      </h4>
    </div>
  );
};

export default Footer;

