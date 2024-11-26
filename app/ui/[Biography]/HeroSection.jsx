export default function HeroSection() {
  return (
    <div className="relative isolate -z-10 overflow-hidden bg-gradient-to-b from-[var(--primary4)] pt-14">
      <div
        aria-hidden="true"
        className="absolute inset-y-0 right-1/2 -z-10 -mr-96 w-[200%] origin-top-right skew-x-[-30deg] bg-black shadow-xl shadow-[var(--primary4)] ring-1 ring-[var(--primary4)] sm:-mr-80 lg:-mr-96"
      />
      <div className="mx-auto max-w-7xl px-6 py-32 sm:py-40 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:grid lg:max-w-none lg:grid-cols-2 lg:gap-x-16 lg:gap-y-8 xl:grid-cols-1 xl:grid-rows-1 xl:gap-x-8">
          <div>
          <h1 className="max-w-2xl title-text text-balance text-5xl font-semibold tracking-tight text-[var(--primary2)] sm:text-7xl lg:col-span-2 xl:col-auto">
            Kaileb Hammontree
          </h1>
          <h2 className="max-w-2xl title-text text-balance text-xl font-semibold tracking-tight text-[var(--primary1)] sm:text-3xl lg:col-span-2 xl:col-auto">
            Owner | Developer | Consultant
          </h2>
          </div>
          <div className="mt-6 max-w-xl lg:mt-0 xl:col-end-1 xl:row-start-1">
            <p className="text-pretty text-lg font-medium text-white sm:text-xl/8">
            Thank you for taking the time out of your day to get to know me a little better. I'm looking forward to helping you accomplish your goals and take the next step in making your vision a reality.
            </p>
          </div>
          <img
            alt=""
            src="/img/bio/starwars.jpg"
            className="mt-10 aspect-[6/5] w-full max-w-lg rounded-2xl object-cover sm:mt-16 lg:mt-0 lg:max-w-none xl:row-span-2 xl:row-end-2 xl:mt-36"
          />
        </div>
      </div>
      <div className="absolute inset-x-0 bottom-0 -z-10 h-24 bg-gradient-to-t from-[var(--alt4)] sm:h-32" />
    </div>
  )
}