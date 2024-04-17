"use client"
import { useParams } from "next/navigation"

export default function UserDetail() {

    const params = useParams()
    console.log(params)

    return (
        <div onClick={() => alert('xd')}>
            <h1>User Detail</h1>
        </div>
    )
}