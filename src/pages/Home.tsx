import Navbar from "../components/Navbar/Navbar";
import Tags from "../components/Tags/Tags";
import Footer from "../components/UI/Footer";
import Pagination from "../components/UI/Pagination";
import VideoGrid from "../components/VideoGrid/VideoGrid";

const Home = () => {
  return (
    <>
      <Tags />
      <VideoGrid />
      <Pagination />
    </>
  );
};

export default Home;
