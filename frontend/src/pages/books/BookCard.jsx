import { getImgUrl } from "../../utils/getImgUrl";
import { Link } from "react-router-dom";

import { AiOutlineShoppingCart } from "react-icons/ai";
import PropTypes from "prop-types";
import { addToCart } from "../../redux/features/cart/cartSlice";
import { useDispatch } from "react-redux";
const BookCard = ({ book }) => {
  const dispatch = useDispatch();

  const handleAddToCart = (book) => {
    dispatch(addToCart(book));
  };
  return (
    <div className="pb-8 px-11">
      <div className="lg:flex gap-3 items-center mt-9 round-lg shadow-md hover:shadow-none">
        {/* Left Side */}
        <div className="lg:h-72 lg:flex-shrink-0 rounded-md">
          <Link to={`/book/${book._id}`}>
            <img
              className="w-full bg-cover p-2 rounded-md cursor-pointer hover:scale-105 transition-all duration-200"
              src={getImgUrl(book.coverImage)}
              alt=""
            />
          </Link>
        </div>

        {/* Right Side */}
        <div className="p-3">
          <Link to={`/book/${book._id}`}>
            <h3 className="font-medium text-lg hover:text-blue-500">
              {book.title.length > 15
                ? `${book.title.slice(0, 15)}...`
                : book.title}
            </h3>
          </Link>
          <Link to={`/book/${book._id}`}>
            <p className="xl:inline-block hidden font-secondary font-light mt-4">
              {book.description.length > 53
                ? `${book.description.slice(0, 53)}...`
                : book.description}
            </p>
          </Link>
          <p className="mt-4 font-secondary font-semibold">
            {book.newPrice}
            <span className="line-through ml-3 text-[#6C6C6C]">
              {book.oldPrice}
            </span>
          </p>
          <button
            className="btn-primary mt-4  p-2 group"
            onClick={() => {
              handleAddToCart(book);
            }}
          >
            <AiOutlineShoppingCart className="text-white size-6 group-hover:text-black" />
            Add to Basket
          </button>
        </div>
      </div>
    </div>
  );
};

BookCard.propTypes = {
  book: PropTypes.object.isRequired,
};
export default BookCard;
