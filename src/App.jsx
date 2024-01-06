import React from "react";
import Header from "./components/Header";
import Sale from "./components/Sale";
import HomeItem from "./components/HomeItem";

const App = () => {
  return (
    <>
      <Header />
      <Sale />
      <HomeItem />

      <div className="bg-slate-100 h-48 flex justify-around">
        <div>
          <h1 className="font-semibold">ONLINE SHOPPING</h1>

          <div className="text-xs ">
            <text>Men</text>
            <br />
            <text>Women</text>
            <br />
            <text>Kids</text>
            <br />
            <text>Home and Living</text>
            <br />
            <text>Beauty</text>
            <br />
            <text>Gift Card</text>
            <br />
            <text>Myntra Insider</text>
            <br />
          </div>
        </div>

        <div>
          <h1 className="font-semibold">ONLINE SHOPPING</h1>

          <div className="text-xs ">
            <text>Men</text>
            <br />
            <text>Women</text>
            <br />
            <text>Kids</text>
            <br />
            <text>Home and Living</text>
            <br />
            <text>Beauty</text>
            <br />
            <text>Gift Card</text>
            <br />
            <text>Myntra Insider</text>
            <br />
          </div>
        </div>

        <div>
          <h1 className="font-semibold">ONLINE SHOPPING</h1>

          <div className="text-xs ">
            <text>Men</text>
            <br />
            <text>Women</text>
            <br />
            <text>Kids</text>
            <br />
            <text>Home and Living</text>
            <br />
            <text>Beauty</text>
            <br />
            <text>Gift Card</text>
            <br />
            <text>Myntra Insider</text>
            <br />
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
