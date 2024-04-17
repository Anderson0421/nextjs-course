"use client"
import { useRouter } from "next/navigation"

export default function BlogPage() {
    const router = useRouter()
    return (
        <>
            <h1 className="text-4xl font-bold">Hello, My Blog!</h1>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur ad quos quaerat necessitatibus illo veritatis hic quibusdam aliquid aut nostrum! Assumenda, consequatur quisquam recusandae neque illo facilis quibusdam molestias voluptas.
            </p>
            <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
                onClick={() => {
                    alert('Hello, World!')
                    router.push('./')
                }}
            >
                Click
            </button>
        </>
    )
}