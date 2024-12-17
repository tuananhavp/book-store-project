import BookCard from "../books/BookCard";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { fetchAllBook } from "../../redux/features/book/bookApi";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper/modules";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const TopSeller = () => {
  const categories = [
    "Choose your genre",
    "Fiction",
    "Business",
    "Marketing",
    "Horror",
    "Adventure",
    "Books",
  ];
  const [selectedCategory, setCategory] = useState("Choose your genre");
  const books = useSelector((state) => state.book.books);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllBook());
  }, []);

  // const [books, setBooks] = useState([]);
  // useEffect(() => {
  //   // Fetch the top selling books from an API
  //   fetch("http://localhost:5000/api/books/")
  //     .then((response) => response.json())
  //     .then((data) => setBooks(data))
  //     .catch((err) => console.error("Failed to fetch books", err));
  // }, []);
  const filterBook =
    selectedCategory === "Choose your genre"
      ? books
      : books?.filter(
          (book) => book.category === selectedCategory.toLowerCase()
        );

  console.log(filterBook);

  return (
    <div className="mt-20">
      {/* Selection Part */}
      <h1 className="font-semibold text-2xl">Top Seller</h1>
      <select
        value={selectedCategory}
        className="p-3 bg-slate-100 rounded-lg focus-visible: mt-7"
        onChange={(e) => {
          setCategory(e.target.value);
        }}
      >
        {categories.map((c) => {
          return (
            <option key={c} value={c}>
              {c}
            </option>
          );
        })}
      </select>

      {/* Show the Books */}
      <Swiper
        navigation={{
          enabled: true,
          hideOnClick: true,
        }}
        pagination={{
          dynamicBullets: true,
        }}
        breakpoints={{
          200: {
            sliderPerView: 1,
            spaceBetween: 10,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 0,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 60,
          },
          1024: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          1180: {
            slidesPerView: 2,
            spaceBetween: 70,
          },
          1700: {
            slidesPerView: 3,
            spaceBetween: 0,
          },
        }}
        modules={[Pagination, Navigation]}
      >
        {filterBook.map((book, index) => {
          return (
            <SwiperSlide key={index}>
              <BookCard book={book} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default TopSeller;
