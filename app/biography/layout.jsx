export async function generateMetadata() {
return {
    title: 'Biography | Hammontree Full-Stack Solutions LLC',
    description: 'Learn more about Hammontree Full-Stack Solutions and how we transform visions into digital reality.',
    keywords: 'About, Hammontree, Web Development, Full-Stack, Solutions, Biography, Kaileb',
    icons: {
      icon: "/img/favicon.ico",
    },
};
};

export default function AboutLayout({ children }) {
  return (
    <>
        {children}   
    </>
  );
};
