export default function TimelineSection() {
  const timeline = [
    {
      name: 'Cyber Defense Certificate Program (UCF)',
      description:
        'Graduated with knowledge in topics including but not limited to: computer networking, network security, system administration, and ethical hacking.',
      date: 'Dec 2021',
      dateTime: '2021-12',
    },
    {
      name: 'Full-Stack Coding Boot Camp (UCF)',
      description:
        'Graduated with finely tuned technical skills needed in order to be able to design and program modern day websites and applications, from front to back. ',
      date: 'Dec 2022',
      dateTime: '2022-12',
    },
    {
      name: 'Founded Company',
      description:
        'Hammontree Full-Stack Solutions was founded, so that Kaileb could share his passion with you.',
      date: 'Jun 2023',
      dateTime: '2023-06',
    },
    {
      name: 'BroFit Personal Training',
      description:
        `A website for BroFit Personal Training was launched. Check out everything Reese is offering by clicking the link below.`,
      link: {
        text: "BroFit Personal Training",
        url: "https://www.reesewilder.com/",
      },
      date: 'Jun 2023',
      dateTime: '2023-06',
    },
    {
      name: 'Jesse Ryder Brown Foundation',
      description:
        `A website for the Jesse Ryder Brown Foundation, "J-Boo Customs", was launched. Click on the link below to learn how you can honor the memory of 11 year old Jesse Brown and connect with the organization responsible for spreading awareness of Strep A.`,
      link: {
        text: "J-Boo Customs",
        url: "https://www.j-boocustoms.org/",
      },
      date: 'Sep 2023',
      dateTime: '2023-09',
    },
  ];
  
  return (
    <div className="mx-auto -mt-8 max-w-7xl px-6 lg:px-8">
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-8 overflow-hidden lg:mx-0 lg:max-w-none lg:grid-cols-4">
        {timeline.map((item) => (
          <div key={item.name}>
            <time dateTime={item.dateTime} className="flex items-center text-sm/6 font-semibold text-[var(--primary2)]">
              <svg viewBox="0 0 4 4" aria-hidden="true" className="mr-4 size-1 flex-none">
                <circle r={2} cx={2} cy={2} fill="currentColor" />
              </svg>
              {item.date}
              <div
                aria-hidden="true"
                className="absolute -ml-2 h-px w-screen -translate-x-full bg-gray-900/10 sm:-ml-4 lg:static lg:-mr-6 lg:ml-8 lg:w-auto lg:flex-auto lg:translate-x-0"
              />
            </time>
            <p className="mt-6 text-lg/8 font-semibold tracking-tight text-[var(--primary4)] title-text">{item.name}</p>
            <p className="mt-1 text-base/7 text-white">{item.description}</p>
            {item.link && (
            <p className=" mt-3">
              <a className="text-md text-[var(--primary5)] title-text hover:text-[var(--primary4)]" href={item.link.url} target="_blank" rel="noopener noreferrer">
                {item.link.text}
              </a>
            </p>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}