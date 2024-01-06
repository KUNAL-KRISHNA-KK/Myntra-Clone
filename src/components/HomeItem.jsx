import React from "react";

const HomeItem = () => {
  return (
    <div>
      <div className="h-70 w-36  m-4">
        <img className="h-44 " src="images/3.jpg" />
        <text className="text-xs font-semibold">4.3 I1400</text>
        <br />
        <text className=" font-semibold">Carlton London</text>
        <br />
        <text className=" text-xs font-semibold">Rs.1674</text>
        <br />
        <button className="bg-green-500 rounded-md px-7">Add to Bag</button>
      </div>
    </div>
  );
};

export default HomeItem;
