'use client'
import GridSection from "@/app/ui/common/GridSection/GridSection.jsx";
import ExpHeroSection from "@/app/ui/[Experience]/ExpHeroSection.jsx";
import TechStack from "../ui/TechStack/TechStack";

export default function Experience() {

    return (
        <div>
            <main className="isolate">
                <ExpHeroSection />
                <GridSection
                    title={"Professional Experience"}
                    posts={[
                        {
                            id: 1,
                            title: 'Business Analytics Lead Analyst',
                            href: 'https://www.linkedin.com/in/kaileb-hammontree/',
                            imageUrl:
                                '/img/experience/forsyth_health_logo.jpeg',
                            alt: 'Business Analyst',
                            category: { title: 'April 2025 - Present | Forsyth Health' },
                        },
                        {
                            id: 2,
                            title: 'Software Engineering Lead Analyst',
                            href: 'https://www.linkedin.com/in/kaileb-hammontree/',
                            imageUrl:
                                '/img/experience/evernorth_logo.jpeg',
                            alt: 'Software Engineer',
                            category: { title: 'April 2024 - March 2025 | Contract Position With Evernorth Health Services' },
                        },
                        {
                            id: 3,
                            title: 'Owner | Developer',
                            href: '/portfolio',
                            imageUrl:
                                '/img/experience/avatar.jpg',
                            alt: 'Kaileb Hammontree',
                            category: { title: 'June 2023 - Present | Hammontree Full-Stack Solutions LLC' },
                        },
                        // More posts...
                    ]}
                />
                <TechStack />
                <GridSection
                    title={"Professional Education"}
                    posts={[
                        {
                            id: 1,
                            title: 'Coding Boot Camp',
                            href: 'https://badgr.com/public/assertions/ewkha2NyQ8-IAo-788fTUA?identity__email=kaileb47@outlook.com',
                            imageUrl:
                                '/img/experience/bootCamp.webp',
                            alt: 'UCF Coding Boot Camp',
                            category: { title: 'Certified December 2022 | University Of Central Florida' },
                        },
                        {
                            id: 2,
                            title: 'Cyber Defense Professional',
                            href: 'https://badgr.com/public/assertions/Rxyg7wKwTgWLC07_shNy6A?identity__email=kaileb47@outlook.com',
                            imageUrl:
                                '/img/experience/cyber.webp',
                            alt: 'Cyber Defense Professional',
                            category: { title: 'Certified December 2021 | University Of Central Florida' },
                        },
                        // More posts...
                    ]}
                />
            </main>
        </div>
    )
}