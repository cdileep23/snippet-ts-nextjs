'use client';
import { useRouter } from 'next/navigation'
import React, { useState } from 'react';
import Editor from '@monaco-editor/react';
import type { Snippets } from '@prisma/client';
import { Label } from './ui/label';
import { Input } from './ui/input';
import { Button } from './ui/button';
import * as actions from '@/actions';


const EditSnippet = ({ snippet }: { snippet: Snippets }) => {
    const router = useRouter()
  const [code, setCode] = useState(snippet.code);
  const [title, setTitle] = useState(snippet.title);
  const [isSaving, setIsSaving] = useState(false);

  const handleCodeChange = (value: string | undefined) => {
    if (value !== undefined) {
      setCode(value);
    }
  };

const handleSave=actions.saveSnippet.bind(null,snippet.id,code,title)
  return (
    <div className="max-h-screen p-6 bg-gray-100">
     
      <div className="mb-4">
        <Label htmlFor="title" className="text-lg font-semibold mb-1">
          Title:
        </Label>
        <Input
          type="text"
          placeholder="Enter Title"
          name="title"
          id="title"
          value={title} 
          onChange={(e) => setTitle(e.target.value)} 
          className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
        />
      </div>

    
      <Editor
        height="70vh"
        theme="vs-dark"
        defaultLanguage="javascript"
        value={code} 
        className="mb-4 border rounded"
        onChange={handleCodeChange}
      />

      
      <div className="flex justify-end">
        <Button
          onClick={handleSave}
          disabled={isSaving}
          className={`px-4 py-2 rounded-md text-white ${
            isSaving ? 'bg-gray-500 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-600'
          }`}
        >
          {isSaving ? 'Saving...' : 'Save'}
        </Button>
      </div>
    </div>
  );
};

export default EditSnippet;
