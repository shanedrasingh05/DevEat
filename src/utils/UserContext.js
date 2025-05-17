import { createContext } from "react";

const UserContext = createContext({
  user: { 
    name: "Shanedra Singh",
    email: "shanedrashingh89@gmail.com",},
});
export default UserContext;
UserContext.displayName = "UserContext";
