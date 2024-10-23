export default function CenteredCard({ title, line1, line2, btnText, url }) {
    return (
        <div className="py-16 sm:py-24">
            <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div className="flex flex-col items-center relative isolate overflow-hidden bg-[var(--p4-25)] px-6 py-24 shadow-2xl sm:rounded-3xl sm:px-24 xl:py-32">
                    <h2 className="title-text text-[var(--primary2)] mx-auto max-w-3xl text-center text-4xl font-semibold tracking-tight sm:text-5xl">
                        { title }
                    </h2>
                    <p className="mx-auto my-6 max-w-lg text-center text-lg text-white">
                        { line1 }
                        <br />
                        { line2 }
                    </p>

                    <a

                        href={ url }
                        className=" text-center w-1/4 flex-none rounded-md bg-[var(--primary5)] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-white hover:text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                    >
                        { btnText }
                    </a>

                    <svg
                        viewBox="0 0 1024 1024"
                        aria-hidden="true"
                        className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-x-1/2"
                    >
                        <circle r={512} cx={512} cy={512} fill="url(#759c1415-0410-454c-8f7c-9a820de03641)" fillOpacity="0.7" />
                        <defs>
                            <radialGradient
                                r={1}
                                cx={0}
                                cy={0}
                                id="759c1415-0410-454c-8f7c-9a820de03641"
                                gradientUnits="userSpaceOnUse"
                                gradientTransform="translate(512 512) rotate(90) scale(512)"
                            >
                                <stop stopColor="#7A3FFC" />
                                <stop offset={1} stopColor="#B83FFC" stopOpacity={0} />
                            </radialGradient>
                        </defs>
                    </svg>
                </div>
            </div>
        </div>
    )
}  