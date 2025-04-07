import EmojiGallery from '@/components/emoji-gallery'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <header className="m-4 max-w-100 mx-auto">
        <div className="flex justify-center items-center h-16">
          <span className="text-3xl font-bold text-zinc-500">
            ネコチャン絵文字一覧
          </span>
        </div>

        <div className="flex justify-center items-center mt-4">
          <p className="text-zinc-400">
            ネコチャン絵文字は
            <Link
              href="https://x.com/shi_ka_ma_tsu"
              target="_blank"
              rel="noopener noreferrer"
            >
              しかまつ
            </Link>
            さんが作成し、配布している絵文字です。
          </p>
        </div>
        <ul className="flex flex-col justify-center items-start mt-4 text-sm text-zinc-400 list-disc mx-6">
          <li>
            <Link
              href="https://x.com/shi_ka_ma_tsu"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-500 hover:text-zinc-300 transition"
            >
              しかまつさんのTwitter
            </Link>
          </li>
          <li>
            <Link
              href="https://note.com/shikamatsu/n/nd217dc0617db"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-500 hover:text-zinc-300 transition"
            >
              ネコチャン絵文字配布場所
            </Link>
          </li>
          <li>
            <Link
              href="https://note.com/shikamatsu/n/n8818bb5ebea1"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-500 hover:text-zinc-300 transition"
            >
              ネコチャン絵文字の利用に関するおやくそくなど
            </Link>
          </li>
        </ul>
      </header>
      <main className="min-h-screen bg-zinc-950 text-white">
        <EmojiGallery />
      </main>
    </>
  )
}
