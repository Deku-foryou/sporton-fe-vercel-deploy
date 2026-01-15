import Image from "next/image";
import Link from "next/link";
import { FiPlus } from "react-icons/fi";

const prductlist = [
  {
    name: "SportsOn Slowlivin",
    category: "Running",
    price: 450000,
    imgUrl: "product-1.svg",
  },

  {
    name: "SportsOn Rockets Tennis",
    category: "Tennis",
    price: 250000,
    imgUrl: "product-2.svg",
  },

  {
    name: "SportsOn Hyperfast Shoes",
    category: "Running",
    price: 550000,
    imgUrl: "product-3.svg",
  },
  {
    name: "SportsOn HyperSoccer v2",
    category: "Football",
    price: 350000,
    imgUrl: "product-4.svg",
  },
  {
    name: "SportsOn Slowlivin",
    category: "Running",
    price: 850000,
    imgUrl: "product-5.svg",
  },
  {
    name: "SportOn Basket Pro",
    category: "Basketball",
    price: 150000,
    imgUrl: "product-6.svg",
  },
  {
    name: "SportsOn Rockets Tennis",
    category: "Tennis",
    price: 350000,
    imgUrl: "product-7.svg",
  },
  {
    name: "SportsOn Hyperfast Shoes",
    category: "running",
    price: 150000,
    imgUrl: "product-8.svg",
  },
];

const ProductsSection = () => {
  return (
    <section id="products-section" className="container mx-auto mt-25">
      <h2 className="font-bold italic text-4xl text-center mb-11">
        <span className="text-primary">OUR</span> PRODUCTS
      </h2>
      <div className="grid grid-cols-4 gap-5">
        {prductlist.map((product, index) => (
          <Link
            href="#"
            key={index}
            className="p-1.5 bg-white hover:shadow-xl duration-300"
          >
            <div className="bg-primary-light aspect-square w-full flex justify-center items-center relative">
              <Image
                src={`/images/products/${product.imgUrl}`}
                alt={product.name}
                width={300}
                height={300}
                className="aspect-square oobject-contain"
              />
              <button className=" text-white bg-primary w-10 h-10 p-2! absolute right-3 top-3">
                <FiPlus className="" size={24} />
              </button>
            </div>
            <h3 className="font-medium text-lg mb-1.5 mt-4">{product.name}</h3>
            <div className="flex justify-between mb-5">
              <div className="text-gray-500">{product.category}</div>
              <div className="font-medium text-primary">
                {Intl.NumberFormat("id-ID", {
                  style: "currency",
                  currency: "IDR",
                  maximumFractionDigits: 3,
                }).format(product.price)}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default ProductsSection;
