import { Fragment, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "./Config.js";
import Shimmer from "./Shimmer.js";
import useRestaurant from "../utils/useRestaurant.js";
import { addItem } from "../utils/cartSlice.js";
import { useDispatch } from "react-redux";

const RestrauntManu = () => {
  const { id } = useParams();
  console.log(id);

  // use propar names
  // const [restaurant, setRestaurant] = useState(null);

  const restaurant = useRestaurant(id);

  const dispatch = useDispatch();

  const addFoodItem = (item) => {
    dispatch(addItem(item));
  };

  // const handleAddItem = () => {
  //   dispatch(addItem("Grapes"))
  // };

  if (restaurant == null) {
    return <Shimmer />;
  }

  const {
    name,
    cloudinaryImageId,
    areaName,
    city,
    avgRating,
    costForTwoMessage,
  } = restaurant.cards[2].card.card.info;
  const itemInfo =
    restaurant.cards[4].groupedCard?.cardGroupMap?.REGULAR?.cards;
  console.log(itemInfo);

  // w-56 p-2 m-2

  return (
    <div className=" ">
      <div className="w-56 p-2 m-2">
        <h1>Restaurant id: {id}</h1>
        <h2>{name}</h2>
        <img src={IMG_CDN_URL + cloudinaryImageId} />
        <h2>{areaName}</h2>
        <h2>{city}</h2>
        <h2>{avgRating} Stars</h2>
        <h2>{costForTwoMessage} </h2>
      </div>

      {/* <div>
        <button
          className="p-2 m-5 bg-green-100"
          onClick={() => handleAddItem()}
        >
          Add Item
        </button>
      </div> */}

      <div className="p-5">
        <h1>Menu</h1>
        <ul>
          {itemInfo.length > 0 && (
            <>
              {itemInfo?.map((items, idx) => (
                <Fragment key={idx + "menu"}>
                  {items?.card?.card?.itemCards && (
                    <div>
                      <li className="font-bold">{items?.card?.card?.title}</li>
                      {items?.card?.card?.itemCards && (
                        <div>
                          {items?.card?.card?.itemCards?.map((item, idx) => (
                            <div key={idx + "item"}>
                              <p>{item?.card?.info?.name}</p>
                              {item?.card?.info?.price && (
                                <p>{item?.card?.info?.price / 100}</p>
                              )}
                              {item?.card?.info?.defaultPrice && (
                                <p>{item?.card?.info?.defaultPrice / 100}</p>
                              )}
                              <p>{item?.card?.info?.description}</p>

                              <img
                                src={IMG_CDN_URL + item?.card?.info?.imageId}
                              />
                              <button
                                className="p-1 bg-green-50 rounded-md"
                                onClick={() => addFoodItem(item?.card?.info)}
                              >
                                add
                              </button>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  )}
                </Fragment>
              ))}
            </>
          )}
        </ul>
      </div>
    </div>
  );
};

export default RestrauntManu;
