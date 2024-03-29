import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/product/productSlice';

export default function ListingItem({ product }) {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(product));
  }

  return (
    <div className='bg-white shadow-md hover:shadow-lg transition-shadow overflow-hidden rounded-lg w-full sm:w-[330px]'>
      <Link to={`/product-details/${product.id}`}>
        <img  
          src={product.image || 'https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1669124939/Croma%20Assets/Entertainment/Headphones%20and%20Earphones/Images/262565_0_gsz0tr.png'}
          alt="product image"
          className="h-[320px] sm:h-[220px] w-full object-contain hover:scale-105 transition-scale duration-300"
        />
      </Link>
      <div className='p-3 flex flex-col gap-2 w-full'>
        <p className='truncate text-lg font-semibold text-slate-700'>
          {product.title}
        </p>
        <p className='text-sm text-gray-600 line-clamp-2'>
          {product.description}
        </p>
        <p className='text-slate-500 mt-2 font-semibold '>
          ₹{product.price}
        </p>
        <div className='flex gap-10'>
          <button 
            onClick={handleAddToCart}
            className="bg-green-500 text-white py-2 px-4 mt-2 rounded-lg hover:bg-green-600 focus:outline-none focus:shadow-outline-green"
          >
            Add to Cart
          </button>
          <Link to={`/product-details/${product.id}`}>
            <button className="bg-gray-800 text-white py-2 px-4 mt-2 rounded-lg hover:bg-gray-700 focus:outline-none focus:shadow-outline-gray">
              View Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
