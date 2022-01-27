import Link from "next/link";
import { NextSeo } from "next-seo";
import loadable from "@loadable/component";

const Shell = loadable(() => import("@/components/Shell"));

export default function NotFound() {
  return (
    <div>
      <NextSeo title="Uber Eats Sale - 404" description="404" />
      <Shell />
      <div className="max-w-2x1 mx-auto mt-32 flex flex-col justify-center text-center">
        <h1 className="dark:text-lightwhite mb-4 text-5xl font-bold tracking-tight text-black">
          404 – Unavailable
        </h1>
        <Link href="/">
          <a className="dark:text-lightwhite mx-auto w-64 rounded-lg border border-gray-500 p-1 text-center font-bold text-black sm:p-4">
            Return Home
          </a>
        </Link>
      </div>
    </div>
  );
}
