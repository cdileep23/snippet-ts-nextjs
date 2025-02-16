
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { prisma } from '@/lib/prisma'
import { Label } from '@radix-ui/react-label'
import { redirect } from 'next/navigation'
import { format } from 'path'
import React from 'react'

const page = () => {
 async function  createSnippet(formData:FormData){
    'use server'
  const title=formData.get("title") as string

  const code=formData.get("code") as string

  const s=await prisma.snippets.create({
    data:{
        title,code
    }
  })
  console.log("created Snippet", s)
  redirect("/")
  

 }
 
  return (
    <div className="h-auto flex flex-col items-center justify-center bg-gray-100 p-6">
    <h1 className="text-4xl font-serif text-center mb-6">Create new Snippet</h1>
  
    <form action={createSnippet} className="w-full max-w-2xl bg-white p-6 rounded-lg shadow-lg">
      <div className="flex flex-col space-y-4">
      
        <div className="flex flex-col">
          <Label htmlFor="title" className="text-lg font-semibold mb-1">
            Title:
          </Label>
          <Input
            type="text"
            placeholder="Enter Title"
            name="title"
            id="title"
            className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
  
      
        <div className="flex flex-col">
          <Label htmlFor="code" className="text-lg font-semibold mb-1">
            Code:
          </Label>
          <Textarea
            placeholder="Enter Code"
            id="code"
            name="code"
            className="p-2 border border-gray-300 rounded-md h-40 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className='flex justify-end'>
            <Button type='submit'>Add</Button>
        </div>
      </div>
    </form>
  </div>
  
  )
}

export default page
