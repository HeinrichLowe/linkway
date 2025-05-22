import Link from "next/link";
import Image from "next/image";
import enResumeImage from "@/../public/files/cvs/resume-en.png";
import brResumeImage from "@/../public/files/cvs/resume-br.png";

const enResume = "/files/cvs/Paulo_Henrique_Silva_Leão_-_EN_Resume.pdf";
const brResume = "/files/cvs/Paulo_Henrique_Silva_Leão_-_BR_Resume.pdf";

export default function CVs() {
    return (
        <>
            <div className="flex flex-col items-center">
                <h2 className="mb-4 text-center text-2xl font-semibold">Resumes</h2>

                <div className="max-w-prose flex flex-col gap-10 md:flex-row md:gap-24">
                    <div className="w-full h-full">
                        <h3 className="text-center font-semibold">EN</h3>
                        <div className="flex flex-col items-center gap-2">
                            <Link href={enResume} target="_black" rel="noopener noreferrer">
                                <Image className="my-2 hover:brightness-95 active:translate-y-1 duration-200" src={enResumeImage} alt="Resume EN" />
                            </Link>
                            <Link
                                href={enResume}
                                download={"Paulo_Henrique_Silva_Leão_-_EN_Resume.pdf"}
                                title="Download my EN resume"
                                className="w-full px-4 py-1 text-center bg-white border border-stone-400 rounded-full hover:brightness-95 active:translate-y-1 duration-200"
                            >
                                Download
                            </Link>
                        </div>
                    </div>

                    <div className="w-full h-full">
                        <h3 className="text-center font-semibold">BR | PT</h3>
                        <div className="flex flex-col items-center gap-2">
                            <Link href={brResume} target="_black" rel="noopener noreferrer">
                                <Image className="my-2 hover:brightness-95 active:translate-y-1 duration-200" src={brResumeImage} alt="Resume EN" />
                            </Link>
                            <Link
                                href={brResume}
                                download={"Paulo_Henrique_Silva_Leão_-_EN_Resume.pdf"}
                                title="Download my BR/PT resume"
                                className="w-full px-4 py-1 text-center bg-white border border-stone-400 rounded-full hover:brightness-95 active:translate-y-1 duration-200"
                            >
                                Download
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className="">
                {
                    // "Future CVs versions will be available in this section."
                }
            </div>
        </>
    )
}