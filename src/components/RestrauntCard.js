import { IMG_CDN_URL } from "./Config.js";
import { useContext } from "react";
import userContext from "../utils/userContext.js";

const RestrauntCard = ({
  name,
  cuisines,
  cloudinaryImageId,
  lastMileTravelString,
}) => {
  // console.log(restaurant);
 
  

  const { user } = useContext(userContext);

  return (
    <div className="w-56 p-2 m-2 shadow-lg bg-gray-100 ">
      <img src={IMG_CDN_URL + cloudinaryImageId} />

      <h2 className="font-bold text-xl">{name}</h2>

      <h3>{cuisines.join(",")}</h3>
      <h4>{lastMileTravelString}</h4>

      {/* <h5 className="font-bold">{user.name} - {user.email} </h5> */}
      
    </div>
  );
};

export default RestrauntCard;
