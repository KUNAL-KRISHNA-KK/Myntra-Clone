import React from "react";

const Sale = () => {
  return (
    <div className="h-16 flex justify-center items-center bg-blue-200">
      <text className="font-semibold">
        Sale Ends In. <text className="text-red-600">2</text>H{" "}
        <text className="text-red-600">30</text>M{" "}
        <text className="text-red-600">26</text>S{" "}
      </text>
    </div>
  );
};

export default Sale;
