import React from 'react'

import { prisma } from '@/lib/prisma';
import EdditSnippet from '@/components/EdditSnippet';



const page = async ({
  params,
}: {
  params: Promise<{ id: string }>
}) => {
  const id=parseInt((await params).id)

  const res=await prisma.snippets.findUnique({
      where:{
          id
      }
      
  })

  if(!res){
    return <h1>Snippet Not Found</h1>
  }

  return (
    <div>
  
      <EdditSnippet snippet={res}/>
    
    </div>
  
  )
}

export default page
