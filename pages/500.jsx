import { NextSeo } from "next-seo";
import Link from "next/link";
import loadable from "@loadable/component";

const Shell = loadable(() => import("@/components/Shell"));

export default function NotFound() {
  return (
    <div>
      <Shell />
      <NextSeo title="Uber Eats Sale - 500" description="500" />
      <div className="max-w-2x1 mx-auto mt-12 flex flex-col justify-center text-center">
        <h1 className="dark:text-lightwhite mb-4 text-6xl font-bold tracking-tight text-black md:text-5xl">
          500 – Server-side error occurred
        </h1>
        <Link href="/">
          <a className="dark:text-lightwhite mx-auto w-64 rounded-lg border border-gray-500 p-1 text-center font-bold text-black sm:p-4">
            Try Returning Home
          </a>
        </Link>
      </div>
    </div>
  );
}
