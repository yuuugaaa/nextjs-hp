import Head from "next/head"
import Link from "next/link"
import { useRouter } from "next/router"

export default function Layout({ children, title="HP by Next.js" }) {
  const currentUrl = useRouter().pathname

  return (
    <div className="flex justify-center items-center flex-col min-h-screen text-gray-600 text-sm font-sans bg-gray-100">
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header>
        <nav className="bg-gray-800 w-screen">
          <div className="flex items-center py-2 px-8">
            <div className="flex space-x-4">
              <Link href="/">
                <a className={
                  currentUrl === "/"
                  ? "text-gray-300 bg-gray-700 py-2 px-3 rounded"
                  : "text-gray-300 hover:bg-gray-700 py-2 px-3 rounded"
                }>
                  Home
                </a>
              </Link>
              <Link href="/blog">
                <a className={
                  currentUrl === "/blog" || currentUrl === "/post/[id]"
                  ? "text-gray-300 bg-gray-700 py-2 px-3 rounded"
                  : "text-gray-300 hover:bg-gray-700 py-2 px-3 rounded"
                }>
                  Blog
                </a>
              </Link>
              <Link href="/contact">
                <a className={
                  currentUrl === "/contact"
                  ? "text-gray-300 bg-gray-700 py-2 px-3 rounded"
                  : "text-gray-300 hover:bg-gray-700 py-2 px-3 rounded"
                }>
                  Contact
                </a>
              </Link>
            </div>
          </div>
        </nav>
      </header>

      <main className="flex flex-1 justify-center items-center flex-col w-screen">
        {children}
      </main>

      <footer className="w-screen border-t">
          <div className="flex justify-center items-center py-2 px-8">
            <p className="py-1 text-xs">Created by Next.js</p>
          </div>
      </footer>
    </div>
  )
}
