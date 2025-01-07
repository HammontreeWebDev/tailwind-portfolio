import Link from "next/link";

export default function ContentSection() {
    return (
        < div className="mt-32 overflow-hidden sm:mt-40" >
            <div className="mx-auto max-w-7xl px-6 lg:flex lg:px-8">
                <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-12 gap-y-16 lg:mx-0 lg:min-w-full lg:max-w-100vw lg:flex-none lg:gap-y-8">
                    <div className="lg:col-end-1 lg:w-full lg:max-w-lg lg:pb-8 text-center">
                        <h2 className="title-text text-4xl font-semibold tracking-tight text-[var(--primary2)] sm:text-5xl">
                            Passion, Clarity, Focus
                        </h2>
                        {/* PASSION */}
                        <p className="mt-6 text-xl/8 text-[var(--primary1)] title-text">
                            Without Passion, There Is No Vision
                        </p>
                        <p className="mt-6 text-base/7 text-white">
                            Passion is the spark that ignites purpose. It drives creativity, fuels ambition, and inspires action. Without passion, there is no vision, and without vision, the path forward remains unseen.
                        </p>
                        {/* CLARITY */}
                        <p className="mt-6 text-xl/8 text-[var(--primary1)] title-text">
                            Without Clarity, There Is No Direction
                        </p>
                        <p className="mt-6 text-base/7 text-white">
                            Clarity transforms vision into actionable goals. It sharpens focus, illuminates priorities, and clears the path ahead. Without clarity, efforts scatter, and direction fades.
                        </p>
                        {/* FOCUS */}
                        <p className="mt-6 text-xl/8 text-[var(--primary1)] title-text">
                            Without Focus, There Is No Achievement
                        </p>
                        <p className="mt-6 text-base/7 text-white">
                            Focus is the discipline that turns intention into reality. It channels energy, eliminates distractions, and ensures that every step forward brings you closer to success. Without focus, potential is left unrealized.
                        </p>
                        {/* SUCCESS */}
                        <p className="mt-6 text-xl/8 text-[var(--primary1)] title-text">
                            With Hammontree Full-Stack Solutions, Success Becomes Reality
                        </p>
                        <p className="mt-6 text-base/7 text-white">
                            Success is not just an outcome—it is the culmination of passion, clarity, and focus. At Hammontree Full-Stack Solutions, we define success through your satisfaction. Your vision is our mission, and your achievement is our goal. Together, we turn ideas into reality and ensure your digital presence exceeds expectations.
                            <br></br>
                            <br></br>
                            If you're ready to talk about your next step, then
                            <span className=" mt-3">
                                <Link className="text-md text-[var(--primary5)] title-text hover:text-[var(--primary4)]" href="/contact">
                                    &nbsp;contact us&nbsp;
                                </Link>
                            </span>
                            and we will get back to you soon for a consultation.
                        </p>
                    </div>
                    <div className="flex flex-wrap items-start justify-end gap-6 sm:gap-8 lg:contents">
                        <div className="w-0 flex-auto lg:ml-auto lg:w-auto lg:flex-none lg:self-center">
                            <img
                                alt=""
                                src="/img/bio/aboutPic1.jpg"
                                className="aspect-[7/5] max-w-100vw rounded-2xl bg-gray-50 object-cover"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}