import Image from "next/image";

const navigation = {
    main: [
        { name: 'KailebHammontree.com', href: 'https://www.kailebhammontree.com/' },
        { name: 'Biography', href: '/biography' },
        { name: 'Contact', href: '/contact' },
        { name: 'Portfolio', href: '/portfolio' },
        { name: 'Experience', href: '/experience' },
    ],
    social: [
        {
            name: 'Facebook',
            href: 'https://www.facebook.com/hammontreefullstacksolutions/',
            icon: (props) => (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 512 512" {...props}>
                    <path fill="currentColor" d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48c27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256" />
                </svg>
            ),
        },

        {
            name: 'LinkedIn',
            href: 'https://www.linkedin.com/in/kaileb-hammontree/',
            icon: (props) => (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 20 20" {...props}>
                    <path fill="currentColor" d="M10 .4C4.698.4.4 4.698.4 10s4.298 9.6 9.6 9.6s9.6-4.298 9.6-9.6S15.302.4 10 .4M7.65 13.979H5.706V7.723H7.65zm-.984-7.024c-.614 0-1.011-.435-1.011-.973c0-.549.409-.971 1.036-.971s1.011.422 1.023.971c0 .538-.396.973-1.048.973m8.084 7.024h-1.944v-3.467c0-.807-.282-1.355-.985-1.355c-.537 0-.856.371-.997.728c-.052.127-.065.307-.065.486v3.607H8.814v-4.26c0-.781-.025-1.434-.051-1.996h1.689l.089.869h.039c.256-.408.883-1.01 1.932-1.01c1.279 0 2.238.857 2.238 2.699z" />
                </svg>
            ),
        },

        {
            name: 'StackOverflow',
            href: 'https://stackoverflow.com/users/20187731/hammontreewebdev?tab=profile',
            icon: (props) => (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 16 16" {...props}>
                    <path fill="currentColor" fillRule="evenodd" d="M10.849.33a.75.75 0 0 0-1.115 1.003l3.68 4.088a.75.75 0 1 0 1.115-1.004zM7.6 2.443a.75.75 0 0 1 1.048-.166L13.1 5.51a.75.75 0 1 1-.882 1.213L7.767 3.49a.75.75 0 0 1-.166-1.047m-.589 2.424a.75.75 0 1 0-.61 1.37l5.025 2.238a.75.75 0 1 0 .61-1.37zM4.82 8.11a.75.75 0 0 1 .89-.577l5.38 1.143a.75.75 0 0 1-.313 1.467L5.396 9a.75.75 0 0 1-.577-.89M2 10.25a.75.75 0 0 1 1.5 0V12A1.5 1.5 0 0 0 5 13.5h6a1.5 1.5 0 0 0 1.5-1.5v-1.75a.75.75 0 0 1 1.5 0V12a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3zm3.25.25a.75.75 0 0 0 0 1.5h5.5a.75.75 0 0 0 0-1.5z" clipRule="evenodd" />
                </svg>
            ),
        },

        {
            name: 'GitHub',
            href: 'https://github.com/HammontreeWebDev',
            icon: (props) => (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 16 16" {...props}>
                    <path fill="currentColor" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59c.4.07.55-.17.55-.38c0-.19-.01-.82-.01-1.49c-2.01.37-2.53-.49-2.69-.94c-.09-.23-.48-.94-.82-1.13c-.28-.15-.68-.52-.01-.53c.63-.01 1.08.58 1.23.82c.72 1.21 1.87.87 2.33.66c.07-.52.28-.87.51-1.07c-1.78-.2-3.64-.89-3.64-3.95c0-.87.31-1.59.82-2.15c-.08-.2-.36-1.02.08-2.12c0 0 .67-.21 2.2.82c.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82c.44 1.1.16 1.92.08 2.12c.51.56.82 1.27.82 2.15c0 3.07-1.87 3.75-3.65 3.95c.29.25.54.73.54 1.48c0 1.07-.01 1.93-.01 2.2c0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
                </svg>
            ),
        }
    ],
}

// Badge data
const bootCampBadgeData =
{
    url: "https://api.badgr.io/public/assertions/ewkha2NyQ8-IAo-788fTUA",
    image: "https://api.badgr.io/public/assertions/ewkha2NyQ8-IAo-788fTUA/image"
}
    ;

const cyberBadgeData =
{
    url: "https://api.badgr.io/public/assertions/Rxyg7wKwTgWLC07_shNy6A",
    image: "https://api.badgr.io/public/assertions/Rxyg7wKwTgWLC07_shNy6A/image"
}
    ;

export default function Footer() {
    return (
        <footer className="bg-black">
            <div className="mx-auto max-w-7xl overflow-hidden px-6 py-20 sm:py-24 lg:px-8">
                <nav aria-label="Footer" className="-mb-6 columns-2 sm:flex sm:justify-center sm:space-x-12">
                    {navigation.main.map((item) => (
                        <div key={item.name} className="pb-6">
                            <a href={item.href} className="text-sm leading-6 text-white hover:text-[var(--primary4)]">
                                {item.name}
                            </a>
                        </div>
                    ))}
                </nav>
                <div className="mt-10 flex justify-center space-x-10">
                    {navigation.social.map((item) => (
                        <a key={item.name} href={item.href} className="text-white hover:text-[var(--primary4)]">
                            <span className="sr-only">{item.name}</span>
                            <item.icon aria-hidden="true" className="h-6 w-6" />
                        </a>
                    ))}
                </div>
                <p className="mt-10 title-text text-center text-xs leading-5 text-white">
                    &copy; 2023 - {new Date().getFullYear()} Hammontree Full-Stack Solutions LLC. All rights reserved.
                </p>
                <div className="mt-10 flex justify-center space-x-10">
                    <a href={bootCampBadgeData.url}>
                        <Image
                            alt="UCF Coding Boot Camp"
                            height={100}
                            width={100}
                            src={bootCampBadgeData.image}
                            className="rounded-full"
                        />
                    </a>

                    <a href={cyberBadgeData.url}>
                        <Image
                            alt="UCF Cyber Defense Certificate"
                            height={100}
                            width={100}
                            src={cyberBadgeData.image}
                            className="rounded-full"
                        />
                    </a>
                </div>
            </div>
        </footer>
    )
}  