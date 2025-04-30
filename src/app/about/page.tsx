import { aboutMe, aboutSite } from "@/content/about/aboutHandler";

export default function About() {

    return (
        <>
            <div className="max-w-prose">
                <h1 className="mt-4 text-4xl text-center font-bold">About this Project</h1>
                {aboutSite.map((text, index) => (
                    <p key={index} className="my-2">
                        {text}
                    </p>
                ))}
            </div>
            
            <div className="max-w-prose w-full my-4 px-10">
                <div className="w-full border-t"></div>
            </div>

            <div className="max-w-prose">
                <h1 className="mb-4 text-4xl text-center font-bold">About Me</h1>
                {aboutMe.map((text, index) => (
                    <p key={index} className="my-2">
                        {text}
                    </p>
                ))}
            </div>
        </>
    );
}