import { useState } from "react";

const Navbar = () => {
  const [isi, setIsi] = useState(true);

  return (
    <div className="font-Jaro relative">
      <div className="border border-5 bg-slate-300 text-black">
        <div className="bg-slate-300 flex justify-between max-[580px]:hidden px-10">
          <div>
            <h1 className="text-3xl uppercase m-2">Toko Jogja</h1>
          </div>
          <div className="">
            <ul className="flex">
              <li
                onClick={() => {
                  window.location.href = "/";
                }}
                className="m-2 text-2xl hover:text-white hover:outline-1 hover-outline"
              >
                Home
              </li>
              <li className="m-2 text-2xl hover:text-white hover:outline-1 hover-outline">
                Shop
              </li>
              <li className="m-2 text-2xl hover:text-white hover:outline-1 hover-outline">
                Our Story
              </li>
            </ul>
          </div>
          <div className="flex">
            <img
              className="w-10 h-10 m-2"
              src="/cart.png"
              alt="cart"
            />
            <button
              onClick={() => (window.location.href = "/login")}
              className="border m-2 rounded-xl px-5 py-2 hover:bg-black hover:text-white"
            >
              Login
            </button>
          </div>
        </div>

        <div
          className="tablet min-[580px]:hidden"
          onClick={() => setIsi(!isi)}
        >
          <label className="btn btn-circle swap swap-rotate">
            {isi ? (
              <svg
                className="swap-off fill-current m-5"
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 512 512"
              >
                <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
              </svg>
            ) : (
              <svg
                className="swap-on fill-current hidden m-5"
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 512 512"
              >
                <polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
              </svg>
            )}
          </label>
        </div>
      </div>

      {!isi && (
        <div className="absolute top-0 left-0 w-full h-screen bg-slate-300 font-Jaro z-50">
          <div className="p-2 text-2xl flex justify-between">
            <h1>Toko Jogja</h1>
            <div onClick={() => setIsi(!isi)}>
              <label className="btn btn-circle swap swap-rotate">
                {isi ? (
                  <svg
                    className="swap-off fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 512 512"
                  >
                    <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
                  </svg>
                ) : (
                  <svg
                    className="swap-on fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 512 512"
                  >
                    <polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
                  </svg>
                )}
              </label>
            </div>
          </div>
          <div className="p-2">
            <ul>
              <li
                onClick={() => {
                  window.location.href = "/";
                }}
                className="mb-2 text-2xl hover:text-white hover:outline-1 hover-outline"
              >
                Home
              </li>
              <li className="mb-2 text-2xl hover:text-white hover:outline-1 hover-outline">
                Shop
              </li>
              <li className="mb-2 text-2xl hover:text-white hover:outline-1 hover-outline">
                Our Story
              </li>
            </ul>
          </div>
          <div className="p-2">
            <img
              className="w-10 h-10 m-2"
              src="/cart.png"
              alt="cart"
            />
            <button
              onClick={() => (window.location.href = "/login")}
              className="border rounded-xl px-5 py-2 hover:bg-black hover:text-white"
            >
              Login
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
