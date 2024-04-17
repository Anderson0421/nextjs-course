import Link from "next/link"

export default function Navbar() {
    return (
        <nav>
            <Link href={'/'} >Home</Link>
            <Link href={"/blog"}>Blog</Link>
            <Link href={"/blog/category"}>Category</Link>
        </nav>
    )
}