'use client'
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Home()
{
  const router = useRouter();
  return (
    <div className="my-4">

      <h1 className="flex justify-center">
        Hello, Next.js. Welcome Home!
      </h1>

      <div className="flex justify-center">
        <Link className=" bg-blue-500 hover:bg-blue-700 text-white
         font-bold py-2 px-4 rounded" href="/about">
          Go to About</Link>
        <button onClick={() => router.push("/order-product")}>order product</button>
      </div>



    </div>

  );
}
