// app/emoji-gallery.tsx
'use client'

import emojis from '@/data/-nya.json'
import Image from 'next/image'
import { useState } from 'react'

export default function EmojiGallery() {
  const [copied, setCopied] = useState<string | null>(null)

  const handleClick = async (name: string) => {
    try {
      await navigator.clipboard.writeText(name)
      setCopied(name)
      setTimeout(() => setCopied(null), 1000)
    } catch (err: unknown) {
      console.error('Failed to copy: ', err)
    }
  }

  return (
    <div className="grid grid-cols-[repeat(auto-fill,minmax(60px,1fr))] gap-1 p-2">
      {emojis.map((emoji) => (
        <button
          key={emoji.name}
          onClick={() => handleClick(emoji.name)}
          className="text-center text-xs leading-tight cursor-pointer hover:bg-zinc-800 rounded p-1 transition relative"
        >
          <div className="w-full aspect-square relative">
            <Image
              width={80}
              height={80}
              priority
              unoptimized
              src={emoji.url}
              alt={emoji.name}
              className="w-full h-full object-contain"
            />
            {copied === emoji.name && (
              <div className=" ml-1 absolute top-1/2 -translate-y-1/2 left-0 w-full h-1/2 bg-white/80 grid place-items-center rounded">
                <div className="text-xs font-bold">
                  <span className="text-zinc-950">Copied</span>
                  <span className="text-green-800">✓</span>
                </div>
              </div>
            )}
          </div>
          <div className="overflow-hidden text-ellipsis whitespace-nowrap">
            {emoji.name}
          </div>
        </button>
      ))}
    </div>
  )
}
