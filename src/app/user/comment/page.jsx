import PreviousButton from "@/components/Elements/PreviousButton";
import AnimeLayouts from "@/components/Layouts/Home/AnimeLayouts";
import { authUserSession } from "@/lib/auth-libs";
import prisma from "@/lib/prisma";
import Link from "next/link";
import React from "react";

const Page = async () => {
  const user = await authUserSession();
  const comments = await prisma.comment.findMany({
    where: { user_email: user?.user?.email },
  });

  return (
    <section className="flex flex-col min-h-screen gap-10 px-8 py-16 sm:p-16">
      <AnimeLayouts title="My Comments" classname="mt-11">
        {comments.length > 0 ? (
          comments.map((comment) => (
            <Link
              href={`/anime/${comment.anime_mal_id}`}
              key={comment.id}
              className="p-4 bg-gray-800 text-color-dark"
            >
              <p className="text-base font-bold">{comment.anime_title}</p>
              <p className="italic">{comment.comment}</p>
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
