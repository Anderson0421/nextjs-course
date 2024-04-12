"use client"

import { useEffect, useState } from "react"

export default function Users() {

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(data => console.log(data))
    }, [])

    return (
        <>
            <h1>Users</h1>
        </>
    )
}