"use client";

import Image from "next/image";
import Modal from "../Modal/Modal";
import { useState } from "react";

export default function TechStack() {
    // State to track which modal is open
    const [openModalIndex, setOpenModalIndex] = useState(null);

    // Array of tech stack data for simplicity
    const techStack = [
        { name: "Apollo", src: "/img/techStack/Apollo.svg", href: "https://www.apollographql.com/docs/apollo-server" },
        { name: "CSS3", src: "/img/techStack/css3.svg", href: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
        { name: "ExpressJS", src: "/img/techStack/ExpressJS.svg", href: "https://expressjs.com/" },
        { name: "Figma", src: "/img/techStack/figma.svg", href: "https://www.figma.com/" },
        { name: "Github Pages", src: "/img/techStack/ghPages.svg", href: "https://pages.github.com/" },
        { name: "GraphQL", src: "/img/techStack/GraphQL.svg", href: "https://graphql.org/" },
        { name: "HTML5", src: "/img/techStack/html5.svg", href: "https://developer.mozilla.org/en-US/docs/Glossary/HTML5" },
        { name: "JavaScript", src: "/img/techStack/javascript.svg", href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
        { name: "jQuery", src: "/img/techStack/jQuery.svg", href: "https://jquery.com/" },
        { name: "MongoDB", src: "/img/techStack/MongoDB.svg", href: "https://www.mongodb.com/" },
        { name: "mySQL", src: "/img/techStack/mySQL.svg", href: "https://www.mysql.com/" },
        { name: "NodeJS", src: "/img/techStack/NodeJS.svg", href: "https://nodejs.org/en" },
        { name: "ReactJS", src: "/img/techStack/ReactJS.svg", href: "https://react.dev/" },
        { name: "SQL", src: "/img/techStack/sql.svg", href: "https://www.w3schools.com/sql/" },
        { name: "Vercel", src: "/img/techStack/vercel.svg", href: "https://vercel.com" },
    ];

    const handleModalOpen = (index) => {
        setOpenModalIndex(index);
    };

    const handleModalClose = () => {
        setOpenModalIndex(null);
    };

    return (
        <div className="bg-[var(--primary4)] py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <h2 className="title-text text-center text-lg font-semibold leading-8 text-white">
                    Your next project could be built using...
                </h2>
                <p className="text-center text-sm italic font-bold leading-8 text-[var(--primary2)]">
                    (Click the icons to learn more)
                </p>

                <div className="mx-auto mt-10 flex flex-wrap justify-evenly items-center gap-x-8 gap-y-10 max-w-lg sm:max-w-xl lg:mx-0 lg:max-w-none">
                    {techStack.map((tech, index) => (
                        <div key={index} className="flex flex-col items-center">
                            <Image
                                alt={tech.name}
                                src={tech.src}
                                width={100}
                                height={100}
                                className="object-contain cursor-pointer"
                                onClick={() => handleModalOpen(index)} // Open the modal for the clicked image
                            />

                            {/* Conditionally render the modal for the clicked image */}
                            {openModalIndex === index && (
                                <Modal
                                    title={tech.name}
                                    content={`Would you like to learn more about ${tech.name}?`}
                                    leftButton="Exit"
                                    rightButton="Learn More"
                                    onClose={handleModalClose} // Close the modal when either button is clicked
                                    imagesrc={tech.src}
                                    imagealt={tech.name}
                                    href={tech.href}
                                />
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
