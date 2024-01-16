import PreviousButton from "@/components/Elements/PreviousButton";
import AnimeLayouts from "@/components/Layouts/Home/AnimeLayouts";
import { authUserSession } from "@/lib/auth-libs";
import prisma from "@/lib/prisma";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Page = async () => {
  const user = await authUserSession();
  const collection = await prisma.collection.findMany({
    where: { user_email: user.email },
  });

  return (
    <section className="flex flex-col min-h-screen gap-10 px-8 py-16 sm:p-16">
      <AnimeLayouts title="My Collections" classname="mt-11">
        {collection.length > 0 ? (
          collection.map((collect, index) => (
            <Link
              key={index}
              href={`/anime/${collect.anime_mal_id}`}
              className="relative "
            >
              <Image
                src={collect.anime_image}
                alt={collect.anime_title}
                width={350}
                height={350}
                className="w-full"
              />
            </Link>
          ))
        ) : (
          <p className="text-xl font-semibold text-gray-500">
            There is no collection available..
          </p>
        )}
      </AnimeLayouts>
      <PreviousButton />
    </section>
  );
};

export default Page;
