import Link from "next/link";
import './../styles/TheHeader.css';
export const TheHeader =() =>{
    return (
        <header className="header-container">
            <Link href="/">Home</Link>
            <Link href="/blog">Blog</Link>
            <Link href="/about">About</Link>
        </header>
    );
}

