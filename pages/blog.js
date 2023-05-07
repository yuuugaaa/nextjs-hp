import Layout from "../components/Layout"
import Post from "../components/Post"
import { getAllPostsData } from "../lib/posts"

export default function Blog({ posts }) {
  return (
    <Layout title="Blog">
      <ul className="m-8 bg-white shadow-xl p-6 max-w-2xl rounded">
        <div className="pb-2 text-center">
          <p className="font-bold text-xl">Posts</p>
        </div>
        {posts && posts.map((post) => <Post key={post.id} post={post} />)}
      </ul>
    </Layout>
  )
}

export async function getStaticProps() {
  const posts = await getAllPostsData()
  return {
    props: {
      posts,
    },
  }
}