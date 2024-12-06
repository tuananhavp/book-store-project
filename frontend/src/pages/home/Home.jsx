import Banner from "./Banner";
import News from "./News";
import Recommend from "./Recommend";
import TopSeller from "./TopSeller";

const Home = () => {
  return (
    <>
      <Banner />
      <TopSeller />
      <Recommend />
      <News />
    </>
  );
};

export default Home;
