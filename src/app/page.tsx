import Link from "next/link";
import { Seal } from "@/components/brand";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center min-h-screen bg-gradient-to-b from-[#F3F4F6] to-white text-gray-900">
      <div className="flex flex-col items-center gap-6 text-center">
        <Seal />
        <h1 className="text-5xl font-semibold tracking-wide font-serif">
          INDUS
        </h1>
        <p className="text-lg text-gray-600 max-w-md">
          Born by the river. Built for the road.
          <br />
          Modern denim from India for India — and the world.
        </p>
        <Link
          href="/brand-book"
          className="mt-4 px-6 py-3 rounded-lg bg-[#112B4A] text-white text-sm font-medium hover:bg-[#1a3d62] transition-colors"
        >
          View Brand Book
        </Link>
      </div>
    </div>
  );
}
