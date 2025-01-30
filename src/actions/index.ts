"use server"
import {prisma} from '@/lib/prisma'
import { redirect } from 'next/navigation'

export const saveSnippet = async (id: number, code: string) => {
    const res = await prisma.snippet.update({
        where: {
            id
        },
        data: {code}
    })
    redirect(`/snippet/${id}`)
}

export const deleteSnippet = async (id: number) => {
    const res = await prisma.snippet.delete({
        where: { id }
    })
    redirect(`/`)
}