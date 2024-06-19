import Link from "next/link";

export default function Home()
{
  return (
    <div>

      <h1>
        Hello, Next.js
      </h1>
      <Link className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" href="/about">Go to About</Link>

    </div>

  );
}
