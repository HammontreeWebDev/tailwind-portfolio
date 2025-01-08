'use client'
import GridSection from "@/app/ui/common/GridSection/GridSection"
import ExpHeroSection from "@/app/ui/[Experience]/ExpHeroSection"

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
                            title: 'Software Engineering Lead Analyst',
                            href: 'https://www.linkedin.com/in/kaileb-hammontree/',
                            imageUrl:
                                '/img/experience/evernorth.png',
                            alt: 'Software Engineer',
                            category: { title: 'April 2024 - Present | Contract Position With Evernorth Health Services' },
                        },
                        {
                            id: 2,
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
                            category: { title: 'September 2022 - December 2022 | University Of Central Florida' },
                        },
                        {
                            id: 2,
                            title: 'Cyber Defense Professional',
                            href: 'https://badgr.com/public/assertions/Rxyg7wKwTgWLC07_shNy6A?identity__email=kaileb47@outlook.com',
                            imageUrl:
                                '/img/experience/cyber.webp',
                            alt: 'Cyber Defense Professional',
                            category: { title: 'February 2021 - December 2021 | University Of Central Florida' },
                        },
                        // More posts...
                    ]}
                />
            </main>
        </div>
    )
}