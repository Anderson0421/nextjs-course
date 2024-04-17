// Podemos aprovechar que next.js se ejecuta en el servidor para hacer peticiones a la API y 
//obtener los datos que necesitamos para mostrar en la página.

import PostCard from "@/components/PostCard"

async function loadPosts() {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await res.json()

    await new Promise((resolve) =>  setTimeout(resolve, 3000))
        
    return data
}

export default async function Posts() {

    const posts = await loadPosts()

    return (
        <>
            {
                posts.map((post, index) => {
                    return (
                        <PostCard post={post} key={index} />
                    )
                })
            }
        </>
    )
}