"use client"
import { Editor } from '@monaco-editor/react'
import React from 'react'
import type { Snippet } from '@prisma/client'
import { Button } from './ui/button'
import { saveSnippet } from '@/actions'

const Editpage = ({ snippet }: { snippet: Snippet }) => {

    const [code, setCode] = React.useState(snippet.code)
    const changeEvent = (value: string = "") => {
        setCode(value)
    }
    // We cant use "useClient" and "useServer" on same page,
    // So we create a server action on diff. page 

    const updateSnippet = saveSnippet.bind(null, snippet.id, code)

    /*The .bind() method creates new function with the same body as the original function 
     (saveSnippet in this case).*/

    return (
        <div>
            <form action={updateSnippet} className='flex items-center justify-between mb-5'>
                <h1 className='text-2xl font-semibold'>Your Code Editor</h1>
                <Button type="submit">Save</Button>
            </form>
            <div>
                <Editor
                    height="80vh"
                    theme='vs-dark'
                    defaultLanguage="javascript"
                    defaultValue={code}
                    onChange={changeEvent}
                />
            </div>
        </div>
    )
}

export default Editpage