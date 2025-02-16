export default function LogoSection() {
  return (
    <div className="mx-auto mt-32 max-w-7xl sm:mt-40 sm:px-6 lg:px-8">
      <div className="relative isolate overflow-hidden px-6 py-24 text-center shadow-2xl sm:rounded-3xl sm:px-16">
        <p className="mx-auto mt-6 max-w-xl text-lg/8 text-white">
          "I'm a nerd at heart. Outside of being a software engineer, I enjoy video games, writing songs, singing, playing guitar, studio gear, and most of all sharing all of these passions with my wife and children."
        </p>
        <p className="text-md title-text text-[var(--primary2)]"> - Kaileb Hammontree</p>
        
        <div aria-hidden="true" className="absolute -top-24 right-0 -z-10 transform-gpu blur-3xl">
          <div
            style={{
              clipPath:
                'polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)',
            }}
            className="aspect-[1404/767] w-[87.75rem] bg-gradient-to-r from-[#B83FFC] to-[#675E7D] opacity-25"
          />
        </div>
      </div>
    </div>
  )
}