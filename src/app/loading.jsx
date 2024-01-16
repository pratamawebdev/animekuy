import Spinner from "@/components/Fragments/Global/Spinner";
import React from "react";

const Loading = () => {
  return (
    <div className="flex items-center justify-center w-full">
      <Spinner />
    </div>
  );
};

export default Loading;
