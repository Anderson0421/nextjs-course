import PostCard from "@/components/PostCard";
import Posts from '../page'
import { Suspense } from "react"

async function LoadPost(id) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    const data = await res.json();
    return data
}

export default async function PostPage({ params }) {

    const post = await LoadPost(params.id)

    return (
        <div>
            <h1>{post.id} {post.title}</h1>
            <p>{post.body}</p>

            <h3>
                Otras publicaciones...
            </h3>
            <Suspense fallback={
                <h1>Cargando...</h1>
            }>
                <Posts />
            </Suspense>
        </div>
    )
}
