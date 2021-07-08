import { FaCartPlus } from "react-icons/fa";
import { useCartContext } from "@/hooks/useCart";

export default function Navbar() {
  const { total } = useCartContext();

  return (
    <div className="w-full bg-yellow-200">
      <div className="p-4 flex justify-between mx-4 ">
        <div>logo</div>
        <button className="flex p-4" onClick={() => {}}>
          <div className="mr-2">
            <FaCartPlus size="1.5em" />
          </div>
          <div>{total.toFixed(2)} USD</div>
        </button>
      </div>
    </div>
  );
}
