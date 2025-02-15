import React from 'react'
import Link from 'next/link'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import { prisma } from '@/lib/prisma'
import { redirect } from 'next/navigation'
import {revalidatePath} from "next/cache"

const page = () => {

    async function createSnippet(formData: FormData) {
        "use server" // this is a serverSide code
        const title = formData.get("title") as string;
        const code = formData.get("code") as string;

        const createdSnippet = await prisma.snippet.create({
            data: {
                title,
                code
            }
        })
        console.log("Created Snippet", createdSnippet);
        revalidatePath("/")  // On Demand Caching - better performance
        redirect("/")
    }

    return (
        <div>
            <div className="flex items-center justify-between">
                <div className=" m-2">
                    <Link href={"/"}><h1 className="text-4xl font-bold mb-12"> Home </h1></Link>
                </div>
            </div>
            <form action={createSnippet}>
                <div>
                    <Label className='text-black text-md font-semibold'>Title</Label>
                    <Input type="text" name="title" id="title" className='border-zinc-700' />
                </div>
                <div>
                    <Label className='text-black text-md font-semibold'>Code</Label>
                    <Textarea name="code" id="code" className='border-zinc-700' />
                </div>
                <div className='mt-2'>
                    <Button type="submit" className='text-sm'>New</Button>
                </div>
            </form>
        </div>
    )
}

export default page