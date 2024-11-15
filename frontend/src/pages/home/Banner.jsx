import React from "react";
import { Link } from "react-router-dom";
import book1 from "../../assets/books/book-1.png";
import book2 from "../../assets/books/book-2.png";
import book3 from "../../assets/books/book-3.png";
const Banner = () => {
  return (
    <main className="md:flex-row  flex flex-col-reverse items-center justify-between md:h-[378px] h-[578px] gap-12 mt-20 ">
      {/* Left Side */}
      <div className="md:w-[45%] w-full">
        <h1 className="md:text-5xl text-2xl font-medium">
          New Releases This Week
        </h1>
        <p className="text-base md:mt-6 mt-5">
          It's time to update your reading list with some of the latest and
          greatest releases in the literary world. From heart-pumping thrillers
          to captivating memoirs, this week's new releases offer something for
          everyone
        </p>
        <Link to={"/"}>
          <button className="btn-primary md:mt-9 mt-5">Subcribe</button>
        </Link>
      </div>
      {/* Right */}
      <div className="flex md:w-[45%] w-full mt-10 items-center ">
        <img
          className="md:w-[328px] md:h-[398px] w-[278px] h-[278px] z-20 hover:translate-x-4 hover:scale-105 transition-transform"
          src={book1}
          alt="book1"
        />
        <img
          className="md:w-[308px] md:h-[338px] w-[238px] h-[238px] -ml-36 mt-5 z-10 hover:translate-x-4 hover:scale-110 transition-transform"
          src={book2}
          alt="book1"
        />
        <img
          className="md:w-[288px] md:h-[308px] w-[208px] h-[208px] -ml-36 mt-7 z-0 hover:translate-x-1 hover:scale-110 transition-transform"
          src={book3}
          alt="book1"
        />
      </div>
    </main>
  );
};

export default Banner;
