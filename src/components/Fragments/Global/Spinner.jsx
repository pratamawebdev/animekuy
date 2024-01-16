import Image from "next/image";
import React from "react";

const Spinner = () => {
  return (
    <div>
      <Image
        src="./spinner.svg"
        alt="spinner"
        width={56}
        height={56}
        className="object-contain"
      />
    </div>
  );
};

export default Spinner;
