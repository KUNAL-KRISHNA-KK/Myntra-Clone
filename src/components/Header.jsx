import React from "react";

const Header = () => {
  return (
    <>
      <div className="bg-white h-16 flex">
        <div className=" w-1/6">
          <img className="h-16 mx-4" src="images/myntra.png" />
        </div>
        <div className=" w-2/6 flex  items-center">
          <a href="#" className="mx-2">
            MEN
          </a>
          <a href="#" className="mx-2">
            WOMEN
          </a>
          <a href="#" className="mx-2">
            KIDS
          </a>
          <a href="#" className="mx-2">
            BEAUTY
          </a>
        </div>

        <div className=" w-3/6 flex">
          <input
            className="bg-slate-100 h-10 m-2 w-4/6 "
            type="text"
            placeholder="Search for products"
          />
          <a href="#">
            <img className="h-10 m-2" src="images/profileIcon.png" />
          </a>
          <a href="#">
            <img className=" h-14" src="images/wishlist.png" />
          </a>
          <a href="#">
            <img className=" h-14" src="images/bag.jpg" />
          </a>
        </div>
      </div>
    </>
  );
};

export default Header;
