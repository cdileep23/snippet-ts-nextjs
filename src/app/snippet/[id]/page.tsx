import { deleteSnippet } from '@/actions'
import { Button } from '@/components/ui/button'
import { prisma } from '@/lib/prisma'
import Link from 'next/link'
import * as actions from "@/actions"

import React from 'react'
import { notFound } from 'next/navigation'


const page = async({
    params,
  }: {
    params: Promise<{ id: string }>
  }) => {
    const id=parseInt((await params).id)
    await new Promise((r) => setTimeout(r, 2000));

    const res=await prisma.snippets.findUnique({
        where:{
            id
        }
        
    })
    console.log("before")
const HandleDeleteAction=actions.deleteSnippet.bind(null,id)
console.log("after")
    if(!res){
       notFound()
    }
  return (
    <div>
        <div className='flex items-center justify-between mb-4'>
        <h1 className='font-semibold underline'>
{res?.title}
</h1>
<div className='flex items-center gap-3'>
   <Link href={`/snippet/${res?.id}/edit`}><Button>Edit</Button></Link> 
    <Button onClick={HandleDeleteAction} variant={'destructive'}>Delete</Button>
</div>
        </div>

<pre className='bg-slate-400 p-4'>
    <code>{res?.code}</code>
</pre>

    </div>
  )
}

export default page

export const generateStaticParams=async()=>{
  const snippets=await prisma.snippets.findMany()
  return snippets.map((e)=>{
    return {id:e.id.toString()}
})
}