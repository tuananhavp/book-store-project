import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteABook, fetchAllBook } from "../../redux/features/book/bookApi";
import Swal from "sweetalert2";
import { Link, useNavigate } from "react-router-dom";

const ManageBooks = () => {
  const navigate = useNavigate();
  // const [books, setBooks] = useState([]);
  const books = useSelector((state) => state.book.books);
  // setBooks(data);
  const dispatch = useDispatch();

  console.log(books);
  const handleDeleteABook = (id) => {
    console.log(id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success",
        });
        dispatch(deleteABook(id));
      }
    });

    // const reFetchBook = dispatch(fetchAllBook());
    // setBooks(reFetchBook);
  };
  useEffect(() => {
    dispatch(fetchAllBook());
  }, [dispatch]);
  return (
    <div className="w-full flex flex-col items-center justify-center">
      <div className="flex justify-between items-center bg-white w-5/6 px-3 py-5">
        <span className="font-bold text-gray-700 text-xl">All Books</span>
        <button className="px-3 py-1 bg-blue-600 rounded-md text-white font-bold hover:opacity-85">
          SEE ALL
        </button>
      </div>
      <table className="bg-white w-5/6 py-4 shadow-md text-sm">
        <thead className="">
          <tr className="border">
            <th className="px-5 text-start py-3">#</th>
            <th className="px-5 text-start py-3">BOOK TITLE</th>
            <th className="px-5 text-start py-3">CATEGORY</th>
            <th className="px-5 text-start py-3">PRICE</th>
            <th className="px-5 text-start py-3">ACTION</th>
          </tr>
        </thead>
        <tbody>
          {books.map((book, index) => {
            return (
              <tr key={index}>
                <td className="px-5 pt-5">{index + 1}</td>
                <td className="px-5 pt-5">{book.title}</td>
                <td className="px-5 pt-5"> {book.category}</td>
                <td className="px-5 pt-5">{book.newPrice}</td>
                <td className="px-5 pt-5">
                  <div className="flex items-center gap-5">
                    <Link
                      to={`/dashboard/edit-book/${book._id}`}
                      className="px-4 py-1 bg-blue-500 rounded-xl text-white font-bold hover:opacity-85"
                    >
                      Edit
                    </Link>
                    <button
                      onClick={() => {
                        handleDeleteABook(book._id);
                      }}
                      className="px-3 py-1 bg-red-500 rounded-xl text-white font-bold hover:opacity-85"
                    >
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ManageBooks;
