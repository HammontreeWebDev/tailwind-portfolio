"use client";

import Image from "next/image";
import Modal from "@/app/ui/common/Modal/Modal.jsx";
import { useState } from "react";

export default function Socials() {
  const [openModalIndex, setOpenModalIndex] = useState(null);

  const socials = [
    { name: "Facebook", src: "/img/socials/facebook.svg", href: "https://www.facebook.com/hammontreefullstacksolutions/" },
    { name: "LinkedIn", src: "/img/socials/linkedin.svg", href: "https://www.linkedin.com/in/kaileb-hammontree/" },
    { name: "Stack Overflow", src: "/img/socials/stack.svg", href: "https://stackoverflow.com/users/20187731/hammontreewebdev?tab=profile" },
    { name: "GitHub", src: "/img/socials/github.svg", href: "https://github.com/HammontreeWebDev" },
  ];

  return (
    <section className="border-t border-canvas-border py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="text-center">
          <p className="eyebrow mb-3">Connect</p>
          <h2 className="font-display text-2xl font-bold text-ink sm:text-3xl">Stay in the loop</h2>
        </div>
        <div className="mx-auto mt-10 flex flex-wrap justify-center gap-4">
          {socials.map((social, index) => (
            <div key={social.name}>
              <button
                type="button"
                onClick={() => setOpenModalIndex(index)}
                className="rounded-xl border border-canvas-border bg-canvas-elevated p-5 transition-colors hover:border-secondary/40"
              >
                <Image alt={social.name} src={social.src} width={48} height={48} className="object-contain opacity-80" />
              </button>
              {openModalIndex === index && (
                <Modal
                  title={social.name}
                  content={`You'll be directed to ${social.name}.`}
                  leftButton="Stay Here"
                  rightButton={`Visit ${social.name}`}
                  onClose={() => setOpenModalIndex(null)}
                  imagesrc={social.src}
                  imagealt={social.name}
                  href={social.href}
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
