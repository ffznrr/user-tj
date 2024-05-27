const LandingPage = () => {
  return (
    <div className="w-full h-96 px-10 py-10 sm:h-1/8 md:h-[650px] md:object-cover ">
      <div className="w-full h-full relative">
        <img
          className="rounded-xl w-full h-full object-cover"
          src="/water.avif"
          alt=""
        />
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white text-xl  sm:text-3xl font-Jaro">
          <h1>Mineral Sehat!</h1>
          <button className="border-2 px-3 py-2  sm:border-4 text-white sm:px-5 sm:py-2 rounded-xl mx-auto ml-3 hover:bg-white hover:text-black">
            Buy Now!
          </button>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
