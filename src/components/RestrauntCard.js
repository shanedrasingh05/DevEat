import { IMG_CDN_URL } from "./Config.js";
import { useContext } from "react";
import userContext from "../utils/userContext.js";

const RestrauntCard = ({
  name,
  cuisines,
  cloudinaryImageId,
  avgRatingString,
  sla,
}) => {
  const { user } = useContext(userContext);

  return (
    <div className="w-56 p-2 m-2 shadow-lg bg-gray-100 ">
      <img src={IMG_CDN_URL + cloudinaryImageId} />

      <h2 className="font-bold text-xl card-item">{name}</h2>

      <h3 className="card-item">{cuisines.join(",")}</h3>
      <h4>{sla?.lastMileTravelString}</h4>
      <h4>{sla?.slaString}</h4>
      <h4>{avgRatingString}</h4>

      {/* <h5 className="font-bold">{user.name} - {user.email} </h5> */}
    </div>
  );
};

export default RestrauntCard;
