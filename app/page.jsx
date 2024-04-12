
import Users from "@/components/Users"

export const metadata = {
    title: "Home Page",
    description: "This is the home page",
    keywords: "home, page, welcome"
}

export default function HomePage() {
    {/* Componentes del lado del servidor */ }
    return (
        <>
            <h1 className="text-4xl font-bold">Hello, World!</h1>
            {/* Componentes del lado del cliente */}
            <Users />
        </>
    )
}