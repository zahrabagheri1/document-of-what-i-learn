import { useLoaderData } from "react-router-dom"
import { HomeLoaderData } from "../@types/type"
import Post from "../components/home/post"

export default function Home() {

  const data = useLoaderData()

  const { posts } = data as HomeLoaderData
  console.log(posts)

  return (
    <div className="flex flex-row  gap-5 flex-wrap w-[90%] m-auto">
      {posts.map((post) => (

        <Post title={post.title} description={post.description} image={post.image} key={post.id} category={post.category} />
      ))}

    </div>
  )
}
