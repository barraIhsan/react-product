import { Minus, Plus } from "lucide-react";
import { useState } from "react";
import { twJoin } from "tailwind-merge";

export default function ProductDetail({
  cartCount,
  setCartCount,
}: {
  cartCount: number;
  setCartCount: React.Dispatch<React.SetStateAction<number>>;
}) {
  const [selected, setSelected] = useState<number>(0);
  const [qty, setQty] = useState<number>(0);
  return (
    <main className="flex justify-center items-center gap-30 container mx-auto min-h-screen">
      <div className="space-y-5 size-fit">
        <img
          src={"/img/product-" + (selected + 1) + ".jpg"}
          className="size-120 rounded-lg"
        />
        <div className="flex gap-5 justify-between">
          {Array.from({ length: 4 }).map((_, i) => (
            <img
              key={i}
              src={"/img/product-" + (i + 1) + ".jpg"}
              className={twJoin(
                "size-20 rounded-lg cursor-pointer",
                selected == i && "outline-2",
              )}
              onClick={() => setSelected(i)}
            />
          ))}
        </div>
      </div>
      <div className="space-y-5 max-w-lg">
        <p className="uppercase font-bold text-gray-400">Converse</p>
        <h1 className="font-bold text-6xl">Walk Star Trainer</h1>
        <p className="text-gray-400">
          These low-profile sneakers are your perfect casual wear companion.
          Featuring a durable rubber outer sole, they’ll withstand everything
          the weather can offer.
        </p>
        <div className="flex gap-2.5 text-xl">
          <p className="font-bold">Rp799.000</p>
          <p className="line-through">Rp999.000</p>
        </div>
        <div className="mt-5 flex gap-5">
          <div className="flex gap-2.5">
            <button
              className="p-2.5 rounded-lg bg-gray-100 size-12 flex justify-center items-center cursor-pointer"
              onClick={() => qty > 0 && setQty(qty - 1)}
            >
              <Minus className="text-amber-600 stroke-5 size-6" />
            </button>
            <p className="p-2.5 rounded-lg bg-gray-100 size-12 text-center font-medium text-lg">
              {qty}
            </p>
            <button
              className="p-2.5 rounded-lg bg-gray-100 size-12 flex justify-center items-center cursor-pointer"
              onClick={() => setQty(qty + 1)}
            >
              <Plus className="text-amber-600 stroke-5 size-6" />
            </button>
          </div>
          <button
            className="bg-amber-600 text-white font-medium px-4 py-2.5 rounded-lg cursor-pointer"
            onClick={() => {
              setCartCount(cartCount + qty);
              setQty(0);
            }}
          >
            Add to cart
          </button>
        </div>
      </div>
    </main>
  );
}
