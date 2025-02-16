prisma setup

npm i prisma
npx prisma init --datasource-provider sqlite
crate snippet schema we have properties title , code

Model documentation -- https://www.prisma.io/docs/orm/prisma-schema/data-model/models


csr-->Client Side Rendering(Normal react component)
ssr-->server side Rendering (Looks like Normal react component + you can eecute server side code)

Nextjs ---> ssr(By Deafult all components/pages  in src/app are ssr  )

if we want to use csr in next js then we add a string called "use client" on the top of code

'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'

export default function ClientComponent() {
  const [count, setCount] = useState(0)

  return (
    <div className="flex flex-col items-center justify-center space-y-4">
      <h1 className="text-2xl font-bold">Client-Side Interactivity</h1>
      <p>Current Count: {count}</p>
      <Button onClick={() => setCount(count + 1)}>
        Increment
      </Button>
    </div>
  )
}


if we want to ssr in next js then we add 'use server' on the top of page

'use server'

// This directive marks the entire file as containing server-side code
export async function submitForm(formData: FormData) {
  // This is a Server Action - code that runs exclusively on the server
  const name = formData.get('name')
  const email = formData.get('email')

  // Server-side operations like database writes, external API calls, etc.
  console.log('Received submission:', { name, email })

  return {
    success: true,
    message: `Thank you, ${name}!`
  }
}

// You can also have individual functions marked with 'use server'
export async function validateEmail(email: string) {
  // Perform server-side email validation
  const emailRegex = /^+@+\.+$/
  return emailRegex.test(email)
}




serveractions is another way to avoid creating api end point we can direct interact db and create somepthing on db
server actons are asynchronous functions that are executed on the server. They can be called in Server and Client Components to handle form submissions and data mutations in Next.js applications.

export default function Page() {
  // Server Action
  async function create() {
    'use server'
    // Mutate data
  }
 
  return '...'
}


npx prisma migrate dev --name add-snippet-mode to migrate db to clod 

Initialize prisma client


to view each code snippet  we will use dynamic rounting
to acheive this in next js  [id] we name folder like this to acheive dynamic routing this is clled slug

 Dynamic Segment can be created by wrapping a folder's name in square brackets: [folderName]. For example, [id] or [slug].
 