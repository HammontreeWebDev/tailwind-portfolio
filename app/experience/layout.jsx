export async function generateMetadata() {
  return {
    title: 'Experience',
    description: 'Professional experience, certifications, and tech stack behind Hammontree Full-Stack Solutions.',
    alternates: { canonical: '/experience' },
    openGraph: {
      title: 'Experience | Hammontree Full-Stack Solutions',
      description: 'Enterprise engineering background and full-stack expertise.',
      url: '/experience',
    },
  };
}

export default function ExperienceLayout({ children }) {
  return children;
}
