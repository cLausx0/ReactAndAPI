import Link from "next/link";

export default function Navbar() {
  return (
    <>
        <nav className="navbar">
            <h2>
                <Link href="/" className="blog-btn">Blog</Link>
            </h2>
            <ul>
                <li>
                    
                    <Link href="/" className="new-btn">Home</Link>
                </li>
                <li>
                    <Link href="/newPost" className="new-btn">Criar Post</Link>
                </li>
            </ul>
        </nav>
    </>
  )
}
