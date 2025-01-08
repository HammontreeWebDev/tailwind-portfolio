"use client";

import Image from "next/image";
import Modal from "@/app/ui/common/Modal/Modal.jsx";
import { useState } from "react";

export default function Socials() {
    // State to track which modal is open
    const [openModalIndex, setOpenModalIndex] = useState(null);

    // Array of socials stack data for simplicity
    const socials = [
        { name: "FaceBook", src: "/img/socials/facebook.svg", href: "https://www.facebook.com/hammontreefullstacksolutions/" },
        { name: "LinkedIn", src: "/img/socials/linkedin.svg", href: "https://www.linkedin.com/in/kaileb-hammontree/" },
        { name: "Stack Overflow", src: "/img/socials/stack.svg", href: "https://stackoverflow.com/users/20187731/hammontreewebdev?tab=profile" },
        { name: "GitHub", src: "/img/socials/github.svg", href: "https://github.com/HammontreeWebDev" },
    ];

    const handleModalOpen = (index) => {
        setOpenModalIndex(index);
    };

    const handleModalClose = () => {
        setOpenModalIndex(null);
    };

    return (
        <div className="bg-[var(--p4-25)] py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <h2 className="title-text text-center text-lg font-semibold leading-8 text-white">
                    Stay Connected!
                </h2>

                <div className="mx-auto mt-10 flex flex-wrap justify-evenly items-center gap-x-8 gap-y-10 max-w-lg sm:max-w-xl lg:mx-0 lg:max-w-none">
                    {socials.map((socials, index) => (
                        <div key={index} className="flex flex-col items-center">
                            <Image
                                alt={socials.name}
                                src={socials.src}
                                width={100}
                                height={100}
                                className="object-contain cursor-pointer"
                                onClick={() => handleModalOpen(index)} // Open the modal for the clicked image
                            />

                            {/* Conditionally render the modal for the clicked image */}
                            {openModalIndex === index && (
                                <Modal
                                    title={socials.name}
                                    content={`You will now be directed to ${socials.name}'s website`}
                                    leftButton="Stay Here"
                                    rightButton={`Visit ${socials.name}`}
                                    onClose={handleModalClose} // Close the modal when either button is clicked
                                    imagesrc={socials.src}
                                    imagealt={socials.name}
                                    href={socials.href}
                                />
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}