import { getImgUrl } from "../../utils/getImgUrl";
import { AiOutlineShoppingCart } from "react-icons/ai";

const BookCard = () => {
  const book = {
    id: 1,
    name: "book-1.png",
    description: "Description of book 1",
    price: 10.99,
  };

  return (
    <div className="flex gap-10 items-end mt-9 round-lg">
      {/* Left Side */}
      <div>
        <img
          className="w-full bg-cover p-2 rounded-md cursor-pointer hover:scale-105 transition-all duration-200"
          src={getImgUrl(book.name)}
          alt=""
        />
      </div>

      {/* Right Side */}
      <div className="p-3">
        <h3 className="font-medium text-lg">Name of book</h3>
        <p className="font-secondary font-light mt-4">
          dLindberghs Pharmacy is an Athens, Georgia, institution...
        </p>
        <p className="mt-4 font-secondary font-semibold">
          $ 27.58{" "}
          <span className="line-through ml-3 text-[#6C6C6C]">$36.6</span>
        </p>
        <button className="btn-primary mt-4  p-2 group">
          <AiOutlineShoppingCart className="text-white size-6 group-hover:text-black" />
          Add to Basket
        </button>
      </div>
    </div>
  );
};

export default BookCard;
