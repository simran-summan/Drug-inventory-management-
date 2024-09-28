import React from "react";
import { Link, Outlet } from "react-router-dom";

function Home() {
  return (
    <>
      <nav className="bg-gray-800 p-4 shadow-lg">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl text-white font-bold">PharmaScout</h1>
          <div>
            <Link
              to="/login"
              className="text-white border-2 border-white hover:bg-gray-700 hover:text-white px-6 py-2 rounded-lg transition duration-300 font-semibold"
            >
              Login
            </Link>
          </div>
        </div>
      </nav>
      <div className="flex items-center justify-center h-screen bg-gradient-to-b from-gray-500 to-gray-800">
        <h1 className="text-6xl font-extrabold text-white drop-shadow-lg">
          Welcome to PharmaScout!
        </h1>
      </div>

      <Outlet />
    </>
  );
}

export default Home;
