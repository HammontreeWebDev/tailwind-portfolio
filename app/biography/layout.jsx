export async function generateMetadata() {
  return {
    title: 'Biography',
    description: 'Meet Kaileb Hammontree — founder of Hammontree Full-Stack Solutions. Elite web and app engineering with passion, clarity, and focus.',
    alternates: { canonical: '/biography' },
    openGraph: {
      title: 'Biography | Hammontree Full-Stack Solutions',
      description: 'Learn about the founder and philosophy behind Hammontree Full-Stack Solutions.',
      url: '/biography',
    },
  };
}

export default function AboutLayout({ children }) {
  return children;
}
