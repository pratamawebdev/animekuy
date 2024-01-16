"use client";

import { useRouter } from "next/navigation";
import React from "react";

const Page = () => {
  const router = useRouter();
  return (
    <div className="flex items-center justify-center min-h-screen bg-fixed bg-bottom bg-cover error-bg">
      <div className="container">
        <div className="row">
          <div className="text-center col-sm-8 offset-sm-2 text-gray-50 -mt-52">
            <div className="relative ">
              <h1 className="relative font-sans font-bold text-9xl tracking-tighter-less text-shadow">
                <span>4</span>
                <span>0</span>
                <span>4</span>
              </h1>
              <span className="absolute top-0 -ml-12 font-semibold text-gray-300">
                Oops!
              </span>
            </div>
            <h5 className="-mt-3 -mr-10 font-semibold text-gray-300">
              Page not found
            </h5>
            <p className="mt-2 mb-6 text-gray-100">
              we are sorry, but the page you requested was not found
            </p>
            <button
              onClick={() => router.back()}
              className="px-5 py-3 text-sm font-medium tracking-wider bg-red-400 rounded-full shadow-sm text-gray-50 hover:shadow-lg"
            >
              Got to Home
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
