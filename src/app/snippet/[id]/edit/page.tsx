import Editpage from '@/components/Editpage'
import { prisma } from '@/lib/prisma'
import React from 'react'

const page = async ({params} : {params : Promise<{id: string}>}) => {

    const id = parseInt((await params).id)
    const snippet = await prisma.snippet.findUnique({where: {id}})

    if(!snippet) return <h1>Snippet is not Available</h1>

  return (
    <div>
       <Editpage snippet = {snippet} />
    </div>
  )
}

export default page