import { FaCartPlus } from "react-icons/fa";
import Link from "next/link";
import { useCartContext } from "@/hooks/useCart";

export default function Navbar() {
  const { total } = useCartContext();

  return (
    <div className="w-full bg-yellow-200">
      <div className="p-4 flex justify-between mx-4 ">
        <div>logo</div>
        <Link href="/cart" passHref>
          <div className="flex p-4 cursor-pointer">
            <div className="mr-2">
              <FaCartPlus size="1.5em" />
            </div>
            <div>{total.toFixed(2)} USD</div>
          </div>
        </Link>
      </div>
    </div>
  );
}
