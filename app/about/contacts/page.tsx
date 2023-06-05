import { Metadata } from "next";

export const metadata: Metadata = {
    title: "About | Contacts",
    description:'about aour next app',
};

export default function ContactPage (){
    return (
        <div>
            <h1>Contact Page</h1>
            <div className="contact-page__links"><a target="_blank" href="https://github.com/pavel-ironfoot">GitHub</a></div>
            <div className="contact-page__links"><a target="_blank" href="https://www.linkedin.com/in/pavel-ironfoot/">Linkedin</a></div>
            <div className="contact-page__links">
                <a target="_blank" href="mailto:khuzdblacksmith@gmail.com">khuzdblacksmith@gmail.com</a>
            </div>
            <div className="contact-page__links">
            <a href="https://my-website-three-alpha.vercel.app/" target="_blank" rel="noopener noreferrer">              
                My web-site
            </a>  
            </div>
        </div>
    );
}