import SearchBar from "@/components/Fragments/Global/SearchBar";
import Link from "next/link";
import React from "react";

const AnimeLayouts = ({
  title,
  classname,
  children,
  linkHref,
  linkTitle = "See More",
  searchActive,
}) => {
  return (
    <section className="">
      <div className="flex items-center justify-between mb-8 ">
        <div className={`flex flex-col gap-4 sm:flex-row ${classname}`}>
          <h2 className="text-3xl font-bold text-white">{title}</h2>
          {searchActive ? <SearchBar /> : null}
        </div>
        {linkHref && linkTitle ? (
          <Link href={linkHref} className="text-xl underline transition-all">
            {linkTitle}
          </Link>
        ) : null}
      </div>
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2">
        {children}
      </div>
    </section>
  );
};

export default AnimeLayouts;
