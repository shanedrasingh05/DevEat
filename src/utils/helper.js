
export function filterData(searchText, restaurants, setfilteredRestaurants) {
  const filterData = restaurants.filter((restaurant) =>
    restaurant.info.name.toLowerCase().includes(searchText.toLowerCase())
  );
  setfilteredRestaurants(filterData);
  // return filterData;
  // filterData;
}
  