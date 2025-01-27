import React from 'react'
import Link from 'next/link'
import { prisma } from '@/lib/prisma'
import { Button } from '@/components/ui/button'

const dynamicPageSnippet = async ({ params }: { params: Promise<{ id: string }> }) => {

  // Slug value always be in String formate
  const id = parseInt((await params).id)
  const snippet = await prisma.snippet.findUnique({
    where: {
      id
    }
  })
  if (!snippet) return <h1 className='text-xl font-semibold'>Snippet is Not available</h1>

  return (
    <div className=''>
      <div className='flex flex-row items-center justify-between'>
        <Link href={'/'}><h1 className="text-4xl font-bold pb-12 underline"> Home </h1></Link>
        <div className='flex flex-row gap-4'>
          <Link href={`/snippet/${snippet.id}/edit`}>
            <Button variant={'outline'}>Edit</Button>
          </Link>
          <Button variant='destructive'>Delete</Button>
        </div>
      </div>
      <div className='mt-10 items-start flex flex-col'>
        <h1 className='text-2xl font-semibold mb-2 font-sans'>
          {snippet.title}
        </h1>
        <pre className='p-2 bg-slate-200 rounded-md w-full font-medium'>
          <code>{snippet.code}</code>
        </pre>
      </div>
    </div>
  )
}

export default dynamicPageSnippet