import { ShoppingCart } from "lucide-react";
import { useState } from "react";

export default function Navbar({
  setCartCount,
  cartCount,
}: {
  setCartCount: React.Dispatch<React.SetStateAction<number>>;
  cartCount: number;
}) {
  const [popup, setPopup] = useState<boolean>(false);
  return (
    <nav className="flex justify-between px-5 py-6 border-b border-gray-400 fixed top-0 inset-x-0">
      <p className="font-bold text-lg font-archivo">sneakers</p>
      <div className="relative">
        <ShoppingCart
          className="cursor-pointer"
          onClick={() => setPopup(!popup)}
        />
        {cartCount > 0 && (
          <p className="absolute font-semibold text-xs size-5 rounded-full bg-amber-600 text-white inline-flex justify-center items-center -top-1/2 -right-1/2">
            {cartCount}
          </p>
        )}
        {popup && (
          <button
            className="absolute -bottom-20 right-0 bg-red-500 px-5 py-2.5 rounded-lg text-white text-lg font-medium cursor-pointer"
            onClick={() => {
              setCartCount(0);
              setPopup(!popup);
            }}
          >
            Delete
          </button>
        )}
      </div>
    </nav>
  );
}
