import React, { useContext, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/assets";
import RelatedProducts from "../components/RelatedProducts";

const Product = () => {
  const { productId } = useParams();
  const { products, currency, addToCart } = useContext(ShopContext);
  const [productData, setProductData] = useState(null);
  const [image, setImage] = useState("");
  const [size, setSize] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const selectedProduct = products.find((item) => item._id === productId);
    if (selectedProduct) {
      setProductData(selectedProduct);
      setImage(selectedProduct.image[0]);
    }
  }, [productId, products]);

  if (!productData) return <div className="opacity-0"></div>;

  return (
    <div className="border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100">
      {/* ✅ Product Section */}
      <div className="flex gap-12 sm:gap-12 flex-col sm:flex-row">
        {/* ✅ Product Images */}
        <div className="flex-1 flex flex-col-reverse gap-3 sm:flex-row">
          <div className="flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full">
            {productData.image.map((img, idx) => (
              <img
                key={idx}
                onClick={() => setImage(img)}
                src={img}
                alt=""
                className="w-[24%] sm:w-full sm:m-3 flex-shrink-0 cursor-pointer"
              />
            ))}
          </div>
          <div className="w-full sm:w-[80%]">
            <img className="w-full h-auto" src={image} alt={productData.name} />
          </div>
        </div>

        {/* ✅ Product Info */}
        <div className="flex-1">
          <h1 className="font-medium text-2xl mt-2">{productData.name}</h1>
          <div className="flex items-center gap-1 mt-2">
            <img src={assets.star_icon} alt="" className="w-3.5" />
            <img src={assets.star_icon} alt="" className="w-3.5" />
            <img src={assets.star_icon} alt="" className="w-3.5" />
            <img src={assets.star_icon} alt="" className="w-3.5" />
            <img src={assets.star_dull_icon} alt="" className="w-3.5" />
            <p className="pl-2">(122)</p>
          </div>

          {/* ✅ Price with discount */}
          <p className="mt-5 text-3xl font-medium flex items-center gap-3">
            {currency}
            {(productData.price * 0.8).toFixed(0)}
            <span className="text-gray-500 line-through text-xl">
              {currency}
              {productData.price}
            </span>
            <span className="text-sm text-red-500">20% OFF</span>
          </p>

          {/* ✅ Description */}
          <p className="mt-5 text-gray-500 md:w-4/5">{productData.description}</p>

          {/* ✅ Size Selector */}
          <div className="flex flex-col gap-4 my-8">
            <p>Select Size (Optional)</p>
            <div className="flex gap-2">
              {productData.sizes.map((s, idx) => (
                <button
                  key={idx}
                  onClick={() => setSize(s)}
                  className={`border py-2 px-4 bg-gray-100 ${
                    s === size ? "border-orange-500" : ""
                  }`}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          {/* ✅ Buttons */}
          <div className="flex gap-4">
            <button
              onClick={() => {
                const selectedSize = size || "Free Size";
                addToCart(productData._id, selectedSize);
              }}
              className="bg-black text-white px-8 py-3 text-sm active:bg-gray-700"
            >
              ADD TO CART
            </button>

            <button
              onClick={() => {
                const selectedSize = size || "Free Size";
                addToCart(productData._id, selectedSize);
                navigate("/place-order");
              }}
              className="bg-orange-500 text-white px-8 py-3 text-sm active:bg-orange-700"
            >
              BUY NOW
            </button>
          </div>

          {/* ✅ Extra Info */}
          <hr className="mt-8 sm:w-4/5" />
          <div className="text-sm text-gray-500 mt-5 flex flex-col gap-1">
            <p>100% Original Product.</p>
            <p>Cash on Delivery is available on this product.</p>
            <p>Easy Return and Exchange policy within 7 Days</p>
          </div>
        </div>
      </div>

      {/* ✅ Description & Reviews */}
      <div className="mt-20">
        <div>
          <div className="flex">
            <b className="border px-5 py-3 text-sm">Description</b>
            <p className="border px-5 py-3 text-sm">Reviews (122)</p>
          </div>
          <div className="flex flex-col gap-4 border px-6 py-6 text-sm text-gray-600">
            <p>
              Discover elegance with Auraa — timeless, anti-tarnish jewelry
              crafted to perfection. Affordable luxury for every moment, made
              just for you.
            </p>
            <p>
              Shine brighter with Auraa. Premium designs, lasting shine,
              budget-friendly glam — handcrafted jewelry that elevates your
              everyday beauty effortlessly.
            </p>
          </div>
        </div>
      </div>

      {/* ✅ Related Products */}
      <RelatedProducts
        category={productData.category}
        subCategory={productData.subCategory}
      />
    </div>
  );
};

export default Product;



