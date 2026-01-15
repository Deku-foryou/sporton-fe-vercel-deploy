import Image from "next/image";

const cartlist = [
  {
    name: "SportsOn Rockets Tennis",
    category: "Tennis",
    price: 250000,
    qty: 2,
    imgUrl: "product-2.svg",
  },

  {
    name: "SportsOn Hyperfast Shoes",
    category: "Running",
    price: 550000,
    qty: 1,
    imgUrl: "product-3.svg",
  },
  {
    name: "SportsOn HyperSoccer v2",
    category: "Football",
    price: 350000,
    qty: 1,
    imgUrl: "product-4.svg",
  },
];

const CartPopup = () => {
  return (
    <div className="absolute bg-white right-0 top-12 shadow-xl shadow-black/10 border border-gray-200 w-90">
      <div className="p-4 border-b border-gray-200 font-bold text-center">
        Shopping Cart
      </div>
      {cartlist.map((item, index) => (
        <div key={index} className="border-b border-gray-200 p-4 flex gap-3">
          <div className="bg-primary-light aspect-square w-16 flex justify-center items-center">
            <Image
              src={`/images/products/${item.imgUrl}`}
              width={63}
              height={63}
              alt={item.name}
              className="aspect-square object-contain"
            />
          </div>
          <div className="self-center mb-5">
            <div className="text-sm font-semibold text-xs mb-1">{item.name}</div>
            <div className="flex gap-3 font-medium text-xs">
              <div>{item.qty}x</div>
              <div className="text-primary">{item.price}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CartPopup;
