"use client";

import React, { useState } from "react";

const CollectionButton = ({
  anime_mal_id,
  user_email,
  anime_image,
  anime_title,
}) => {
  const [isCreated, setIsCreated] = useState(false);
  const handleCollection = async (event) => {
    event.preventDefault();

    const data = { anime_mal_id, user_email, anime_image, anime_title };
    const response = await fetch("/api/v1/collection", {
      method: "POST",
      body: JSON.stringify(data),
    });
    const collection = await response.json();
    if (collection.status == 200) {
      setIsCreated(true);
    }
    return;
  };

  return (
    <>
      {isCreated ? (
        <button className="px-2 py-1 bg-red-600 rounded">
          Remove to <br className=" md:hidden" /> collection
        </button>
      ) : (
        <button
          onClick={handleCollection}
          className="px-2 py-1 text-black bg-white rounded"
        >
          Add to <br className=" md:hidden" /> collection
        </button>
      )}
    </>
  );
};

export default CollectionButton;
