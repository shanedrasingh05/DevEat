import { useState ,useEffect} from "react";

const useRestaurant = (id) =>{
  const [restaurant, setRestaurant] = useState(null);

  // Get data from API 
   useEffect(() => {
     getRestaurantInfo();
   }, []);

   async function getRestaurantInfo() {
     const data = await fetch(
       
          "https://cors-handlers.vercel.app/api/?url=https%3A%2F%2Fwww.swiggy.com%2Fdapi%2Fmenu%2Fpl%3Fpage-type%3DREGULAR_MENU%26complete-menu%3Dtrue%26catalog_qa%3Dundefined%26submitAction%3DENTER%26restaurantId%3D" +
            id +
            "%26lat=28.7040592%26lng=77.1024901"

       // "https://cors-handlers.vercel.app/api/?url=https%3A%2F%2Fwww.swiggy.com%2Fdapi%2Fmenu%2Fpl%3Fpage-type%3DREGULAR_MENU%26complete-menu%3Dtrue%26catalog_qa%3Dundefined%26submitAction%3DENTER%26restaurantId%3D10301%26lat=28.7040592%26lng=77.1024901" + id
     );
     const json = await data.json();
     console.log(json);
     setRestaurant(json.data);
   }

  // Return restaurant data

  return restaurant
}
export default useRestaurant;