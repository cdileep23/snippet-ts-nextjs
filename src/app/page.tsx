import { Button } from "@/components/ui/button";
import { prisma } from "@/lib/prisma";

import Link from "next/link";

// export const dynamic="force-dynamic"//disabling caching features (making dynaic route)
// export const revalidate=0;//everytime fresh data(disabling caching)

export default async  function Home() {
const snippets=await prisma.snippets.findMany();

  return (
    <div className="container flex flex-col h-screen">
    <h1 className="font-bold text-4xl mb-4">
     Snippet
    </h1>
    <div className="flex items-center justify-between mb-4" >
<h1 className="font-semibold">Add new Snippet</h1>
<Link href='/snippet/new'>
<Button >Add</Button>
</Link>

    </div>
    <div >
      <h1 className="underline font-thin mb-3">All Snippets</h1>
      <div >
{
  snippets.map((e)=>(
    <div key={e.id} className="flex items-center justify-between mb-2 bg-slate-200 p-2 rounded-md">
      <h1>{e.title}</h1>
      <Link href={`/snippet/${e.id}`}>
      <Button variant={'link'}>View</Button>
      </Link>
     
      </div>
  ))
}
      </div>
    </div>
    </div>
  );
}
