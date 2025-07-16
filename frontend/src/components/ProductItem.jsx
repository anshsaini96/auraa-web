import React, { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import { Link } from 'react-router-dom';

const ProductItem = ({ id, image, name, price }) => {
  const { currency } = useContext(ShopContext);
  const discountPercent = 20;
  const discountedPrice = (price * (1 - discountPercent / 100)).toFixed(0);

  return (
    <Link className='text-gray-700 cursor-pointer' to={`/product/${id}`}>
      <div className='overflow-hidden'>
        <img
          className='w-full h-[250px] object-cover rounded-md hover:scale-110 transition ease-in-out'
          src={image[0]}
          alt={name}
        />
      </div>
      <p className='pt-3 pb-1 text-sm'>{name}</p>

      {/* Discounted Price */}
      <p className='text-sm font-medium flex items-center gap-2'>
        <span>{currency}{discountedPrice}</span>
        <span className='line-through text-gray-400 text-xs'>
          {currency}{price}
        </span>
        <span className='text-red-500 text-xs'>{discountPercent}% OFF</span>
      </p>
    </Link>
  );
};

export default ProductItem;
