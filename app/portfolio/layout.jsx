export async function generateMetadata() {
  return {
    title: 'Portfolio',
    description: 'Featured client projects by Hammontree Full-Stack Solutions — custom web and app development for startups and enterprise.',
    alternates: { canonical: '/portfolio' },
    openGraph: {
      title: 'Project Portfolio | Hammontree Full-Stack Solutions',
      description: 'Explore client websites and applications built by Hammontree Full-Stack Solutions.',
      url: '/portfolio',
    },
  };
}

export default function PortfolioLayout({ children }) {
  return children;
}
