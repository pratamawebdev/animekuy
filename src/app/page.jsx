import AnimeCard from "@/components/Fragments/Global/AnimeCard";

import {
  getAnimeResponse,
  getNestedAnimeResponse,
  reproduce,
} from "@/lib/api-libs";
import AnimeLayouts from "@/components/Layouts/Home/AnimeLayouts";

const Page = async () => {
  const topAnime = await getAnimeResponse("top/anime", "limit=8");
  let recommendedAnime = await getNestedAnimeResponse(
    "recommendations/anime",
    "entry"
  );

  recommendedAnime = reproduce(recommendedAnime, 10);

  return (
    <main className="flex flex-col items-center gap-10 px-8 py-16 sm:p-16">
      <AnimeLayouts
        title="Most Popular"
        linkHref="/populer"
        searchActive="true"
      >
        {topAnime?.data.map((item, index) => (
          <AnimeCard key={item.id} anime={item} index={index} />
        ))}
      </AnimeLayouts>
    </main>
  );
};

export default Page;
