"use client"

import Link from "next/link"

export default function PostCard({ post }) {
    return (
        <Link href={`posts/${post.id}`} >
            <h3>{post.title}</h3>
            <p>{post.body}</p>
            <button onClick={() => alert('XD')}>
                Ver más
            </button>
        </Link>
    )
}