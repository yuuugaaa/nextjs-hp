import Link from "next/link"
import Layout from "../../components/Layout";
import { getAllPostIds, getPostData } from "../../lib/posts";

export default function Post({ post }) {
  if (!post) {
    return <div>Loading...</div>
  }

  return (
    <Layout title={post.title}>
      <p className="mb-2 text-gray-500">
        {"ID : "}
        {post.id}
      </p>
      <p className="mb-2 text-xl font-bold px-10 text-center">{post.title}</p>
      <p className="mb-2 px-8 text-center">{post.body}</p>
      <Link href="/blog">
        <div className="flex items-center cursor-pointer p-1 hover:text-gray-400">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M18.75 19.5l-7.5-7.5 7.5-7.5m-6 15L5.25 12l7.5-7.5"
            />
          </svg>
          <span>Back</span>
        </div>
      </Link>
    </Layout>
  )
}

export async function getStaticPaths() {
  const paths = await getAllPostIds()

  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const { post } = await getPostData(params.id)

  return {
    props: {
      post,
    }
  }
}