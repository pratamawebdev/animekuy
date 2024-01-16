import AnimeCard from "@/components/Fragments/Global/AnimeCard";
import AnimeLayouts from "@/components/Layouts/Home/AnimeLayouts";
import { getAnimeResponse } from "@/lib/api-libs";
import React from "react";

const Page = async ({ params }) => {
  const { keyword } = params;
  const decodedKeyword = decodeURI(keyword);
  const searchAnime = await getAnimeResponse("anime", `q=${decodedKeyword}`);

  return (
    <>
      <div className="flex flex-col min-h-screen gap-10 px-8 py-16 sm:p-16">
        <AnimeLayouts
          searchActive="true"
          title={`Pencarian untuk ${decodedKeyword}...`}
          classname="mt-11"
        >
          {searchAnime?.data?.length > 0 ? (
            searchAnime.data.map((item, index) => (
              <AnimeCard key={index} anime={item} />
            ))
          ) : (
            <p>No results available for "{decodedKeyword}"</p>
          )}
        </AnimeLayouts>
      </div>
    </>
  );
};

export default Page;
