import { fetchData } from '@/tools/fetchData';
import Link from 'next/link'

export default async function About() {
  const urls = ['contacts', 'summaries', 'experience', 'skills', 'courses', 'languages', 'links'];

  const responses = await Promise.allSettled(urls.map((url) => fetchData(`http://localhost:3000/api/get/${url}`)));

  const fulfilledData = responses.filter((resp) => resp.status === 'fulfilled').map((resp: any) => resp["value"]); 

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <Link href={'/'}>home</Link>
      </div>
      <div>
        {JSON.stringify(fulfilledData)}
      </div>
    </main>
  )
}
