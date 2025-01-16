import { useState, useEffect, useContext } from "react";
import RestaurantList from "../../constent";
import RestrauntCard from "./RestrauntCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { filterData } from "../utils/helper";
import useOnline from "../utils/useOnline";
import userContext from "../utils/userContext";
// Props - Propertie

const Body = () => {
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setfilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState(""); // returns, function to update variable
  console.log(filteredRestaurants);

  const { user, setUser } = useContext(userContext);

  useEffect(() => {
    // use  API
    getRestaurants();
  }, []);

  async function getRestaurants() {
    const data = await fetch(
      "https://cors-handlers.vercel.app/api/?url=https%3A%2F%2Fwww.swiggy.com%2Fdapi%2Frestaurants%2Flist%2Fv5%3Fis-seo-homepage-enabled%3Dtrue%26page_type%3DDESKTOP_WEB_LISTING%26lat=28.7040592%26lng=77.1024901"
    );
    const json = await data.json();
    console.log(json);

    // optional chaining
    setAllRestaurants(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setfilteredRestaurants(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    console.log(json?.data?.cards[1]?.card);
  }

  const isOnline = useOnline();
  if (!isOnline) {
    return <h1>😱 offline, please check internet connection!!</h1>;
  }

  if (!allRestaurants) return null;

  // if (filteredRestaurants?.length == 0) {
  //   return "No Restaurant match your filter!";
  // }

  return filteredRestaurants?.length == 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="search-conatiner  p-5 bg-gray-100  my-5 rounded-md ">
        <input
          type="Search"
          className="focus:bg-gray-300 m-2 p-2 rounded-full ..."
          placeholder="Search-Restaurants"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
          className="p-2 m-2 bg-purple-900 hover:bg-gray-400 text-white rounded-md "
          // onClick={() => {
          // const data = filterData(searchText, allRestaurants);
          // console.log(data)
          // setAllRestaurants(data);
          // }}
          onClick={() =>
            filterData(searchText, allRestaurants, setfilteredRestaurants)
          }
        >
          Search
        </button>
        {/* 
            <input value={user.name} onChange={
                e => setUser({
                  ...user,
                  name: e.target.value,
                  
                })
            }>

             </input>
            <input value={user.email} onChange={
                e => setUser({
                  ...user,
                  email: e.target.value,
                  
                })
            }>
             </input>
 */}
      </div>

      <div className="flex flex-wrap bg-gray-100 shadow-lg ">
        {filteredRestaurants?.map((Restaurant) => {
          return (
            <Link
              to={"/Restaurant/" + Restaurant.info.id}
              key={Restaurant.info.id}
            >
              <RestrauntCard {...Restaurant.info} />
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default Body;
