import { Metadata } from "next";
import './blog-id.css';

async function getData(id: string) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
        next: {
            revalidate: 60,
        } 
    });

    return res.json();
}

type Props = {
    params: {
        id: string;
    }
}

export async function generateMetadata({
    params:{id},
    }: Props): Promise<Metadata> {
    return {
        title: `Blog ${id}`,
    };
}

export default async function Post({params:{id}}: Props) {
    const post = await getData(id);
    return (
        <div className="blog-id">
            <h1>Post Page number {id}</h1>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
        </div>
    );
}