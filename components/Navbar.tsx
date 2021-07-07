import { FaCartPlus } from "react-icons/fa";
import { useState } from "react";

export default function Navbar() {
  const [price, setPrice] = useState(0);
  return (
    <div className="w-full bg-yellow-200">
      <div className="p-4 flex justify-between mx-4 ">
        <div>logo</div>
        <button
          className="flex p-4"
          onClick={() => {
            setPrice((prevPrice) => prevPrice + 1);
          }}
        >
          <div className="mr-2">
            <FaCartPlus size="1.5em" />
          </div>
          <div>{price.toFixed(2)} USD</div>
        </button>
      </div>
    </div>
  );
}
