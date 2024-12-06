import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

import news1 from "../../assets/news/news-1.png";
import news2 from "../../assets/news/news-2.png";
import news3 from "../../assets/news/news-3.png";
import news4 from "../../assets/news/news-4.png";
const News = () => {
  const news = [
    {
      id: 1,
      title: "Global Climate Summit Calls for Urgent Action",
      description:
        "World leaders gather at the Global Climate Summit to discuss urgent strategies to combat climate change, focusing on reducing carbon emissions and fostering renewable energy solutions.",
      image: news1,
    },
    {
      id: 2,
      title: "Breakthrough in AI Technology Announced",
      description:
        "A major breakthrough in artificial intelligence has been announced by researchers, with new advancements promising to revolutionize industries from healthcare to finance.",
      image: news2,
    },
    {
      id: 3,
      title: "New Space Mission Aims to Explore Distant Galaxies",
      description:
        "NASA has unveiled plans for a new space mission that will aim to explore distant galaxies, with hopes of uncovering insights into the origins of the universe.",
      image: news3,
    },
    {
      id: 4,
      title: "Stock Markets Reach Record Highs Amid Economic Recovery",
      description:
        "Global stock markets have reached record highs as signs of economic recovery continue to emerge following the challenges posed by the global pandemic.",
      image: news4,
    },
    {
      id: 5,
      title: "Innovative New Smartphone Released by Leading Tech Company",
      description:
        "A leading tech company has released its latest smartphone model, featuring cutting-edge technology, improved battery life, and a sleek new design.",
      image: news2,
    },
  ];
  return (
    <div className="mt-20">
      <h1 className="font-semibold mt-20 text-2xl">News</h1>
      <Swiper
        className="mt-10"
        navigation={{
          enabled: true,
          hideOnClick: true,
        }}
        breakpoints={{
          200: {
            sliderPerView: 1,
            spaceBetween: 10,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 60,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 60,
          },
        }}
        modules={[Navigation]}
      >
        {news.map((item, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="flex flex-col-reverse lg:flex-row sm:justify-between items-center gap-12 px-11">
                {/* Left Side */}
                <div className="">
                  <h3 className="text-[#0D0842] font-semibold text-lg">
                    {item.title}
                  </h3>
                  <div className="h-1 w-14 my-5  bg-yellow-400 rounded-md "></div>
                  <p className="font-secondary font-semibold sm:block hidden">
                    {item.description.length > 240
                      ? `${item.description.slice(0, 240)}...`
                      : item.description}
                  </p>
                </div>
                {/* Right Side */}
                <div className="lg:flex-shrink-0">
                  <img src={item.image} alt="book-cover" />
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default News;
