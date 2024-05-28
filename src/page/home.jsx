import Category from "../component/categorypage";
import LandingPage from "../component/landingpage";
import Navbar from "../component/navbar";

const Home = () => {
  return (
    <div className="min-w-full min-h-screen ">
      <Navbar />
      <LandingPage />
      <Category />
    </div>
  );
};

export default Home;
