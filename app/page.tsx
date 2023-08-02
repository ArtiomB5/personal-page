import { fetchData } from '@/tools/fetchData';
import { preload } from '@/tools/preload';
import Link from 'next/link';
import Image from 'next/image'
import { cookies } from 'next/dist/client/components/headers';
import { ThemeChanger } from '@/components/ThemeChanger';
import clsx from 'clsx';
import { Navbar } from '@/components/Navbar';
import { Avatar } from '@/components/Avatar/ui/Avatar';

export default async function Home() {
  const preloadUrls = ['contacts', 'summaries', 'experience', 'skills', 'courses', 'languages', 'links'];
  const currentPageUrls = ['summaries', 'links'];
  preload(preloadUrls);
  const avatarsUrls = await fetchData('http://127.0.0.1:3000/api/get/avatar');
  const cookieStore = cookies();
  const theme = cookieStore.get('theme')?.value || 'dark';

  const responses = await Promise.allSettled(currentPageUrls.map((url) => fetchData(`http://localhost:3000/api/get/${url}`)));
  const fulfilledData = responses.filter((resp) => resp.status === 'fulfilled').map((resp: any) => resp["value"]);
  const summary = fulfilledData[0];
  const links: Array<Record<"id" | "description" | "url", string>> = [...fulfilledData[1], { id: "/about", description: "About", url: "/about" }];
  return (
    <main className={"bg-surface px-6 py-8 text-primary h-full w-full"}>
      <Navbar />
      <div className={"bg-surface1 px-6 py-8 rounded-lg"}>
        <ThemeChanger />
        <div className={"flex flex-row justify-around"}>
          <Avatar src={avatarsUrls[theme]}/>
          <div href="#" class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Summary</h5>
            {summary.map((text: Record<"id" | "summary", "string">) => <div key={text.id} className={"font-normal text-gray-700 dark:text-gray-400"}>{text.summary}</div>)}
          </div>
        </div>

        <div className={"flex flex-col justify-between"}>
          {links.map((link: Record<"id" | "description" | "url", string>) => <Link
            key={link.id}
            href={link.url}
            className={"inline-flex items-center justify-center p-5 text-base font-medium text-gray-500 rounded-lg bg-gray-50 hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700 dark:hover:text-white"}
          >
            <svg aria-hidden="true" class="w-5 h-5 mr-3" viewBox="0 0 22 31" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_4151_63004)"><path d="M5.50085 30.1242C8.53625 30.1242 10.9998 27.8749 10.9998 25.1035V20.0828H5.50085C2.46546 20.0828 0.00195312 22.332 0.00195312 25.1035C0.00195312 27.8749 2.46546 30.1242 5.50085 30.1242Z" fill="#0ACF83" /><path d="M0.00195312 15.062C0.00195312 12.2905 2.46546 10.0413 5.50085 10.0413H10.9998V20.0827H5.50085C2.46546 20.0827 0.00195312 17.8334 0.00195312 15.062Z" fill="#A259FF" /><path d="M0.00195312 5.02048C0.00195312 2.24904 2.46546 -0.000244141 5.50085 -0.000244141H10.9998V10.0412H5.50085C2.46546 10.0412 0.00195312 7.79193 0.00195312 5.02048Z" fill="#F24E1E" /><path d="M11 -0.000244141H16.4989C19.5343 -0.000244141 21.9978 2.24904 21.9978 5.02048C21.9978 7.79193 19.5343 10.0412 16.4989 10.0412H11V-0.000244141Z" fill="#FF7262" /><path d="M21.9978 15.062C21.9978 17.8334 19.5343 20.0827 16.4989 20.0827C13.4635 20.0827 11 17.8334 11 15.062C11 12.2905 13.4635 10.0413 16.4989 10.0413C19.5343 10.0413 21.9978 12.2905 21.9978 15.062Z" fill="#1ABCFE" /></g><defs><clipPath id="clip0_4151_63004"><rect width="22" height="30.1244" fill="white" transform="translate(0 -0.000244141)" /></clipPath></defs></svg>
            <span class="w-full">{link.description}</span>
            <svg class="w-4 h-4 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
            </svg>
          </Link>)}
        </div>
        {/* <a href="#" class="inline-flex items-center justify-center p-5 text-base font-medium text-gray-500 rounded-lg bg-gray-50 hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700 dark:hover:text-white">
          <span class="w-full">Get started with our  Figma Design System</span>
          <svg class="w-4 h-4 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
          </svg>
        </a> */}
        {/* <Link href={'mailto:EMAILADDRESS'}>send email</Link> */}
      </div>
    </main>
  )
}