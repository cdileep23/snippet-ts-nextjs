'use client'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'

import { Label } from '@radix-ui/react-label'

import React, { useActionState } from 'react'
import * as actions from '@/actions'
const Page = () => {
  const[formStateData,action]=useActionState(actions.createSnippet,{message:""})
 
 
  return (
    <div className="h-auto flex flex-col items-center justify-center bg-gray-100 p-6">
    <h1 className="text-4xl font-serif text-center mb-6">Create new Snippet</h1>
  
    <form action={action} className="w-full max-w-2xl bg-white p-6 rounded-lg shadow-lg">
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
        <div className='text-red-600'>
          {formStateData.message}
        </div>
      </div>
    </form>
  </div>
  
  )
}

export default Page
