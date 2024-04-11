
export const metadata = {
    title: 'Category Page',
}
export default function CategoryLayout({ children }) {
    return (
        <div>
            <h1>Category Layout</h1>
            {children}
        </div>
    );
}