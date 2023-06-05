import Link from "next/link";

import './about-us.css';

export default function AboutLayout({
    children,
}:{
    children: React.ReactNode;
}){
    return <div className="about-us-main">
        <h1>About Us</h1>
        <ul>
            <li>
                <Link href="/about/contacts">Contacts</Link>
            </li>
            <li>
                <Link href="/about/team">Team</Link>
            </li>
        </ul>
        <hr />
        {children}
    </div>
}