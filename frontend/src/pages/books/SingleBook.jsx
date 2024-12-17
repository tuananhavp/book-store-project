import { useEffect } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";

import { fetchABook } from "../../redux/features/book/bookApi";
import { addToCart } from "../../redux/features/cart/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getImgUrl } from "../../utils/getImgUrl";

const SingleBook = () => {
  // Take the book id
  const { id } = useParams();
  const book = useSelector((state) => state.book.book);
  const dispatch = useDispatch();

  const handleAddToCart = (book) => {
    dispatch(addToCart(book));
  };

  useEffect(() => {
    // Fetch the book with the given id
    dispatch(fetchABook(id));
  }, []);

  return (
    <>
      <div className="shadow-2xl max-w-xl min-h-fit">
        <div className="p-10">
          <h2 className="font-bold text-lg mb-5">{book.title}</h2>
          <div className="lg:h-72 lg:flex-shrink-0 rounded-mds">
            <img
              className="bg-cover rounded-md cursor-pointer hover:scale-105 transition-all duration-200 object-cover "
              src={getImgUrl(book.coverImage)}
              alt=""
            />
          </div>
          <div className="mb-2">
            <strong>
              Category:&nbsp;{" "}
              <span className="font-medium">{book.category}</span>
            </strong>
          </div>
          <div className="mb-2">
            <strong>
              Published:&nbsp;
              <span className="font-medium">
                {new Date(book.updatedAt).toLocaleDateString()}
              </span>
            </strong>
          </div>
          <div className="mb-2">
            <strong>
              Description:&nbsp;
              <span className="font-medium">{book.description}</span>
            </strong>
          </div>
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
    </>
  );
};

export default SingleBook;
