import React from "react";
import Link from "next/link";
import wonders from "./wonders";
import Image from "next/image";

const Home = () => {
  return (
    <main className="container mx-auto mt-20 md:mt-0">
      <h1 className="text-center text-3xl font-bold mt-10 md:mt-0">
        New Wonders of the World
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 p-2">
        {wonders.map(({ id, src, name }) => (
          <Link key={id} href={`/photo-feed/${id}`}>
            <Image
              alt={name}
              src={src}
              className="w-full object-cover aspect-square"
            />
          </Link>
        ))}
      </div>
    </main>
  );
};

export default Home;
