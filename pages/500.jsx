import { NextSeo } from "next-seo";
import Link from "next/link";
import loadable from "@loadable/component";

const Container = loadable(() => import("@/components/Container"));

export default function NotFound() {
  return (
    <div>
      <Container />
      <NextSeo title="Uber Eats Sale - 500" description="500" />
      <div className="flex flex-col justify-center mx-auto mt-12 text-center max-w-2x1">
        <h1 className="mb-4 text-6xl font-bold tracking-tight text-black md:text-5xl dark:text-lightwhite">
          500 – Server-side error occurred
        </h1>
        <Link href="/">
          <a className="w-64 p-1 mx-auto font-bold text-center text-black border border-gray-500 rounded-lg sm:p-4 dark:text-lightwhite">
            Try Returning Home
          </a>
        </Link>
      </div>
    </div>
  );
}
