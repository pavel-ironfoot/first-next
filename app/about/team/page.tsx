import { Metadata } from "next";

export const metadata: Metadata = {
    title: "About | Team",
    description:'about aour next app',
};

export default function Team (){
    return (
        <div>
            <h1>Our team:</h1>
            
            <div className="contact-page__links"><a target="_blank" href="https://www.linkedin.com/in/pavel-ironfoot/">Our Developer</a></div>
            
            <div className="contact-page__links"><a target="_blank" href="https://www.linkedin.com/in/pavel-ironfoot/">Designer</a></div>
        
            <div className="contact-page__links"><a target="_blank" href="https://www.linkedin.com/in/pavel-ironfoot/">Project Manager</a></div>
            
            <div className="contact-page__links"><a target="_blank" href="https://www.linkedin.com/in/pavel-ironfoot/">QA</a></div>
         
        </div>
    );
}