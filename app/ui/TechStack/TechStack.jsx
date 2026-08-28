"use client";

import Image from "next/image";
import Modal from "@/app/ui/common/Modal/Modal.jsx";
import { useState } from "react";

export default function TechStack() {
  const [openModal, setOpenModal] = useState(null);

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
    { name: "ReactJS", src: "/img/techStack/ReactJS.svg", href: "https://react.dev/" },
    { name: "Vercel", src: "/img/techStack/vercel.svg", href: "https://vercel.com" },
  ];

  const additionalTech = [
    { name: "Tableau", src: "/img/techStack/Tableau.svg", href: "https://www.tableau.com/why-tableau/what-is-tableau" },
    { name: "DataBricks", src: "/img/techStack/Databricks.svg", href: "https://docs.databricks.com/aws/en/introduction/" },
    { name: "Alteryx", src: "/img/techStack/Alteryx.svg", href: "https://www.alteryx.com/" },
    { name: "SQL", src: "/img/techStack/sql.svg", href: "https://www.w3schools.com/sql/" },
    { name: "MongoDB", src: "/img/techStack/MongoDB.svg", href: "https://www.mongodb.com/" },
    { name: "mySQL", src: "/img/techStack/mySQL.svg", href: "https://www.mysql.com/" },
    { name: "NodeJS", src: "/img/techStack/NodeJS.svg", href: "https://nodejs.org/en" },
  ];

  const renderGrid = (items, prefix) => (
    <div className="mx-auto mt-10 flex flex-wrap justify-center items-center gap-4 max-w-4xl">
      {items.map((tech, index) => {
        const key = `${prefix}-${index}`;
        return (
          <div key={key}>
            <button
              type="button"
              onClick={() => setOpenModal(key)}
              className="rounded-xl border border-canvas-border bg-canvas-elevated p-4 transition-colors hover:border-secondary/40 hover:bg-canvas-muted"
            >
              <Image alt={tech.name} src={tech.src} width={56} height={56} className="object-contain opacity-80" />
            </button>
            {openModal === key && (
              <Modal
                title={tech.name}
                content={`Would you like to learn more about ${tech.name}?`}
                leftButton="Close"
                rightButton="Learn More"
                onClose={() => setOpenModal(null)}
                imagesrc={tech.src}
                imagealt={tech.name}
                href={tech.href}
              />
            )}
          </div>
        );
      })}
    </div>
  );

  return (
    <section className="border-t border-canvas-border py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="text-center">
          <p className="eyebrow mb-3">Tech stack</p>
          <h2 className="font-display text-2xl font-bold text-ink sm:text-3xl">Website &amp; Application Development</h2>
          <p className="mt-2 text-sm text-ink-subtle">Click any icon to learn more</p>
        </div>
        {renderGrid(techStack, "web")}

        <div className="mt-20 text-center">
          <h2 className="font-display text-2xl font-bold text-ink sm:text-3xl">Backend &amp; Data</h2>
          <p className="mt-2 text-sm text-ink-subtle">Click any icon to learn more</p>
        </div>
        {renderGrid(additionalTech, "backend")}
      </div>
    </section>
  );
}
