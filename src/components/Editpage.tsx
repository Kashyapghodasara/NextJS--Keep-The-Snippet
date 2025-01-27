"use client"
import { Editor } from '@monaco-editor/react'
import React from 'react'
import type { Snippet } from '@prisma/client'
import { Button } from './ui/button'

const Editpage = ({ snippet }: { snippet: Snippet }) => {

    const [code, setCode] = React.useState(snippet.code)

    return (
        <div>
            <form className='flex items-center justify-between mb-5'>
               <h1 className='text-2xl font-semibold'>Your Code Editor</h1>
                <Button>Save</Button>
            </form>
            <Editor
                    height="80vh"
                    theme='vs-dark'
                    defaultLanguage="javascript"
                    defaultValue={code}
                />
        </div>
    )
}

export default Editpage