import Link from 'next/link';
import { NextSeo } from 'next-seo';
import loadable from '@loadable/component';

const Container = loadable(() => import('@/components/Container'));

export default function NotFound() {
    return (
        <div>
            <NextSeo title="Uber Eats Sale - 404" description="404" />
            <Container />
            <div className="flex flex-col justify-center mx-auto mt-32 text-center max-w-2x1">
                <h1 className="mb-4 text-5xl font-bold tracking-tight text-black dark:text-lightwhite">
                    404 – Unavailable
        </h1>
                <Link href="/">
                    <a className="w-64 p-1 mx-auto font-bold text-center text-black border border-gray-500 rounded-lg sm:p-4 dark:text-lightwhite">
                        Return Home
          </a>
                </Link>
            </div>
        </div>
    );
}
