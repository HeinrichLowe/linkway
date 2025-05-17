"use client";

import { useState } from "react";
import { ProjectType } from "@/types/ProjectsType";
import Image from "next/image";
import Link from "next/link";
import TechTag from "./TechTag";

export default function ProjectsView({
    projects,
}: {
    projects: ProjectType[];
}) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentImage, setCurrentImage] = useState<string | null>(null);

    const openModal = (image: string) => {
        setCurrentImage(image);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setCurrentImage(null);
        setIsModalOpen(false);
    };

    return (
        <div className="max-w-prose w-full px-2 lg:px-0">
            {projects.map((project, index) => (
                <div key={index} className="mb-8">
                    <h2 className="text-2xl text-center font-bold mb-2">
                        {project.title}
                    </h2>
                    <p className="mb-4">{project.description}</p>

                    <div className="flex flex-wrap gap-4 mb-4 justify-center">
                        {Array.isArray(project.images) ? (
                            project.images.map((image, imgIndex) => (
                                <Image
                                    key={imgIndex}
                                    src={image}
                                    alt={`${project.title} image ${imgIndex + 1}`}
                                    width={300}
                                    height={200}
                                    className="w-1/3 h-auto rounded-lg shadow-md cursor-pointer"
                                    onClick={() => openModal(image)}
                                />
                            ))
                        ) : (
                            <Image
                                src={project.images}
                                alt={`${project.title} image`}
                                width={300}
                                height={200}
                                className="w-1/3 h-auto rounded-lg shadow-md cursor-pointer"
                                onClick={() =>
                                    typeof project.images === "string" &&
                                    openModal(project.images)
                                }
                            />
                        )}
                    </div>

                    <div className="mb-4 flex justify-center gap-10">
                        {typeof project.links === "string" ? (
                            <Link
                                href={project.links}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="underline lg:no-underline lg:hover:underline"
                            >
                                View Project Code
                            </Link>
                        ) : (
                            <>
                                {project.links.back && (
                                    <Link
                                        href={project.links.back}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="underline lg:no-underline lg:hover:underline mr-4"
                                    >
                                        View Back-end Code
                                    </Link>
                                )}
                                {project.links.front && (
                                    <Link
                                        href={project.links.front}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="underline lg:no-underline lg:hover:underline"
                                    >
                                        View Front-end Code
                                    </Link>
                                )}
                            </>
                        )}
                    </div>

                    <div>
                        <h3 className="font-semibold">Technologies Used:</h3>
                        <div className="flex flex-wrap gap-2 mt-2 px-4">
                            {project.technologies.map((tech, techIndex) => (
                                <TechTag key={techIndex} tech={tech} />
                            ))}
                        </div>
                    </div>

                    {index < projects.length - 1 && (
                        <div className="w-full flex justify-center">
                            <br />
                            <br />
                            <div className="w-3/4 border-b-2"></div>
                        </div>
                    )}
                </div>
            ))}

            {isModalOpen && currentImage && (
                <div
                    className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
                    onClick={closeModal}
                >
                    <div
                        className="max-h-screen px-3 lg:px-0 lg:py-2 overflow-y-auto"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <Link href={currentImage} target="_blank" rel="noopener noreferrer">
                            <Image
                                src={currentImage}
                                alt="Expanded image"
                                width={800}
                                height={600}
                                className="rounded-lg cursor-pointer"
                            />
                        </Link>
                        <button
                            onClick={closeModal}
                            className="w-8 h-8 absolute top-1 right-1 text-white bg-red-500/75 rounded-full cursor-pointer"
                        >
                            ✕
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}
