"use client";

import AnimeCard from "@/components/Fragments/Global/AnimeCard";
import Pagination from "@/components/Fragments/Global/Pagination";
import AnimeLayouts from "@/components/Layouts/Home/AnimeLayouts";
import { getAnimeResponse } from "@/lib/api-libs";
import React, { useEffect, useState } from "react";

const Page = () => {
  const [page, setPage] = useState(1);
  const [topAnime, setTopAnime] = useState([]);

  const fetchData = async () => {
    const populerAnime = await getAnimeResponse("top/anime", `page=${page}`);
    setTopAnime(populerAnime);
  };

  useEffect(() => {
    fetchData();
  }, [page]);

  return (
    <>
      <div className="flex flex-col min-h-screen gap-10 px-8 py-16 sm:p-16">
        <AnimeLayouts title="Most Popular" searchActive="true" classname="mt-8">
          {topAnime?.data?.map((item, index) => (
            <AnimeCard key={item.id} anime={item} index={index} />
          ))}
        </AnimeLayouts>
        <Pagination
          page={page}
          lastPage={topAnime.pagination?.last_visible_page}
          setPage={setPage}
        />
      </div>
    </>
  );
};

export default Page;
