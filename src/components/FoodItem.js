import { IMG_CDN_URL } from "./Config.js";
// import { useContext } from "react";
// import userContext from "../utils/userContext.js";

const FoodItem = (item) => {
  // const {name,cuisines,cloudinaryImageId,
  // description,
  // defaultPrice,
  // lastMileTravelString,
  // } =item.item

  const { name, price, defaultPrice, description, imageId } = item.item;
  // const { name ,defaultPrice} = item.item;
  const pricecurr = price || defaultPrice;

  return (
    <div className="w-56 p-2 m-2 shadow-lg bg-gray-100 ">
      <img src={IMG_CDN_URL + imageId} />
      <h2 className="font-bold text-xl">{name}</h2>
      <h3>{description}</h3>
      <h4>Rupees: {pricecurr / 100} </h4>

      {/* <h3>{cuisines.join(",")}</h3> */}

      {/* <h4>{lastMileTravelString}</h4> */}

      {/* <h5 className="font-bold">
        {user.name} - {user.email}{" "}
      </h5> */}
    </div>
  );
};

export default FoodItem;
