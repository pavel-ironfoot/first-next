import { Metadata } from "next"
import Link from "next/link";

import './blog-main.css';

async function getData() {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
        next: {
            revalidate: 60,
        }
    });

    if(!res.ok) throw new Error('Unable to fetch posts');

    return res.json();
}

export const metadata: Metadata = {
    title: "Blog | Next App",
    description: "our blog information",
}

export default async function Blog() {
    const posts = await getData();
    return (<div className="blog-main">
        <h1>Blog Page</h1>
        <ul>
            {posts.map((elem: any) => (
                <li key={posts.id}>
                    <Link href={`/blog/${elem.id}`}>
                        {elem.title}
                    </Link>
                </li>
            ))}
        </ul>
    </div>);

}