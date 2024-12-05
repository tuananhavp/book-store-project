import { getImgUrl } from "../../utils/getImgUrl";
import { AiOutlineShoppingCart } from "react-icons/ai";

const BookCard = ({ book }) => {
  return (
    <div className="pb-4 px-10">
      <div className="flex gap-3 items-center mt-9 round-lg">
        {/* Left Side */}
        <div className="sm:h-72 sm:flex-shrink-0 border rounded-md">
          <img
            className="w-full bg-cover p-2 rounded-md cursor-pointer hover:scale-105 transition-all duration-200"
            src={getImgUrl(book.coverImage)}
            alt=""
          />
        </div>

        {/* Right Side */}
        <div className="p-3">
          <h3 className="font-medium text-lg">{book.title}</h3>
          <p className="font-secondary font-light mt-4">
            {book.description.length > 80
              ? `${book.description.slice(0, 80)}...`
              : book.description}
          </p>
          <p className="mt-4 font-secondary font-semibold">
            {book.newPrice}
            <span className="line-through ml-3 text-[#6C6C6C]">
              {book.oldPrice}
            </span>
          </p>
          <button className="btn-primary mt-4  p-2 group">
            <AiOutlineShoppingCart className="text-white size-6 group-hover:text-black" />
            Add to Basket
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
