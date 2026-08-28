export async function generateMetadata() {
  return {
    title: 'Contact',
    description: 'Start your project with Hammontree Full-Stack Solutions. Get in touch for custom web and app development.',
    alternates: { canonical: '/contact' },
    openGraph: {
      title: 'Contact | Hammontree Full-Stack Solutions',
      description: 'Reach out to discuss your next web or app project.',
      url: '/contact',
    },
  };
}

export default function ContactLayout({ children }) {
  return children;
}
