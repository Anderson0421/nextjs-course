import { NextResponse } from "next/server";

export async function GET(request, { params }) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${params.idUser}`)
    const data = await res.json()

    return NextResponse.json(data)
}