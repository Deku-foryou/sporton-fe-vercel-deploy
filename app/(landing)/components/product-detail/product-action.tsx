"use client"

import {
  FiArrowRight,
  FiChevronDown,
  FiChevronUp,
  FiShoppingBag,
} from "react-icons/fi";
import Button from "../ui/button";
import { useState } from "react";
import { useRouter } from "next/navigation";

const ProductAction = () => {
  const {push} = useRouter();
   const [qty, setQty] = useState(1);

   const checkout = () => {

   }

  return (
    <div className="flex gap-5 items-stretch w-full">
      <div className="border border-gray-500 flex">
        <div className="w-14 text-xl font-medium border-r border-gray-500 flex justify-center items-center">
          <span>{qty}</span>
        </div>

        <div className="flex flex-col w-9">
          <button className="flex-1 border-b border-gray-500 flex items-center justify-center hover:bg-gray-100 cursor-pointer transition"
          onClick={() => setQty(qty + 1)}
          >
            <FiChevronUp size={16} />
          </button>

          <button className="flex-1 flex items-center justify-center hover:bg-gray-100 cursor-pointer transition"
          onClick={() => setQty(qty > 1 ? qty - 1 : qty)}
          >
            <FiChevronDown size={16} />
          </button>
        </div>
      </div>
      <Button className="px-4 flex-1 whitespace-nowrap flex gap-2 items-center justify-center">
        <FiShoppingBag size={24} />
        Add to Cart
      </Button>
      <Button
        className="px-4 flex-1 whitespace-nowrap flex gap-2 items-center justify-center"
        variant="dark" onClick={() => push("/checkout")}
      >
        Checkout Now
        <FiArrowRight size={24} />
      </Button>
    </div>
  );
};

export default ProductAction;
