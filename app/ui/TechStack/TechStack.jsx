import Image from "next/image";

export default function TechStack() {
    return (
        <div className="bg-[#0a0a0a] py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <h2 className="text-center text-lg font-semibold leading-8 text-white">
                    Your next project could be built using. . .
                </h2>

                {/* //! Row 1 */}

                <div className="mx-auto mt-10 flex flex-wrap justify-evenly items-center gap-x-8 gap-y-10 max-w-lg sm:max-w-xl lg:mx-0 lg:max-w-none">
                    <Image
                        alt="Apollo"
                        src="/img/techStack/Apollo.svg"
                        width={100}
                        height={100}
                        className="object-contain"
                    />
                    <Image
                        alt="Reform"
                        src="/img/techStack/css3.svg"
                        width={100}
                        height={100}
                        className="object-contain"
                    />
                    <Image
                        alt="Tuple"
                        src="/img/techStack/ExpressJS.svg"
                        width={100}
                        height={100}
                        className="object-contain"
                    />
                    <Image
                        alt="SavvyCal"
                        src="/img/techStack/figma.svg"
                        width={100}
                        height={100}
                        className="object-contain"
                    />
                    <Image
                        alt="Statamic"
                        src="/img/techStack/ghPages.svg"
                        width={100}
                        height={100}
                        className="object-contain"
                    />
                </div>

                {/* //! Row 2 */}

                <div className="mx-auto mt-10 flex flex-wrap justify-evenly items-center gap-x-8 gap-y-10 max-w-lg sm:max-w-xl lg:mx-0 lg:max-w-none">
                    <Image
                        alt="Apollo"
                        src="/img/techStack/GraphQL.svg"
                        width={100}
                        height={100}
                        className="object-contain"
                    />
                    <Image
                        alt="Reform"
                        src="/img/techStack/html5.svg"
                        width={100}
                        height={100}
                        className="object-contain"
                    />
                    <Image
                        alt="Tuple"
                        src="/img/techStack/javascript.svg"
                        width={100}
                        height={100}
                        className="object-contain"
                    />
                    <Image
                        alt="SavvyCal"
                        src="/img/techStack/jQuery.svg"
                        width={100}
                        height={100}
                        className="object-contain"
                    />
                    <Image
                        alt="Statamic"
                        src="/img/techStack/MongoDB.svg"
                        width={100}
                        height={100}
                        className="object-contain"
                    />
                </div>

                {/* //! Row 3 */}

                <div className="mx-auto mt-10 flex flex-wrap justify-evenly items-center gap-x-8 gap-y-10 max-w-lg sm:max-w-xl lg:mx-0 lg:max-w-none">
                    <Image
                        alt="Apollo"
                        src="/img/techStack/mySQL.svg"
                        width={100}
                        height={100}
                        className="object-contain"
                    />
                    <Image
                        alt="Reform"
                        src="/img/techStack/NodeJS.svg"
                        width={100}
                        height={100}
                        className="object-contain"
                    />
                    <Image
                        alt="Tuple"
                        src="/img/techStack/ReactJS.svg"
                        width={100}
                        height={100}
                        className="object-contain"
                    />
                    <Image
                        alt="SavvyCal"
                        src="/img/techStack/sql.svg"
                        width={100}
                        height={100}
                        className="object-contain"
                    />
                    <Image
                        alt="Statamic"
                        src="/img/techStack/vercel.svg"
                        width={100}
                        height={100}
                        className="object-contain"
                    />
                </div>

            </div>
        </div>
    )
}
