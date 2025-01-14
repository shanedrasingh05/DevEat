import { useState, useContext } from "react";
import logo from "../assest/new.png";
import { Link } from "react-router-dom";
import userContext from "../utils/userContext";
import { useSelector } from "react-redux";
import store from "../utils/store";

const Title = () => (
  <a href="/">
    <img className="h-14 py-2 rounded-full ..." alt="logo" src={logo} />
  </a>
);

const loggedInUser = () => {
  return false;
};

const Header = () => {
  const [isloggedIn, setIsloggedIn] = useState(false);

  const { user } = useContext(userContext);

  const cartItems = useSelector(store => store.cart.items);
  console.log(cartItems);





  return (
    <div className="flex justify-between bg-gray-100 shadow-lg ">
      <Title />
      <div className="nav-items">
        <ul className="flex py-6 ">
          <Link to="/">
            <li className="px-2">Home</li>
          </Link>

          <Link to="/about">
            <li className="px-2">About</li>
          </Link>

          <Link to="/contact">
            <li className="px-2">Contact</li>
          </Link>

          <Link to="/instamart">
            <li className="px-2">InstaMart</li>
          </Link>

          <Link to="/cart">
            <li className="px-2">Cart- {cartItems.length} cart</li>
          </Link>
        </ul>
      </div>

      {user.name}

      {isloggedIn ? (
        <button onClick={() => setIsloggedIn(false)}>LogOut</button>
      ) : (
        <button onClick={() => setIsloggedIn(true)}>LogIN</button>
      )}
    </div>
  );
};

export default Header;
