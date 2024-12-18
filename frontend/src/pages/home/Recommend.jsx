import BookCard from "../books/BookCard";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper/modules";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllBook } from "../../redux/features/book/bookApi";

const Recommend = () => {
  const books = useSelector((state) => state.book.books);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllBook());
  }, []);

  return (
    <>
      <h1 className="font-semibold mt-20 text-2xl">Recommendation for you</h1>

      <div>
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
          {books.slice(8, 16).map((book, index) => {
            return (
              <SwiperSlide key={index}>
                <BookCard book={book} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </>
  );
};

export default Recommend;
