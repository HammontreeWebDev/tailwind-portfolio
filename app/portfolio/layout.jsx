export async function generateMetadata() {
    return {
        title: 'Portfolio | Hammontree Full-Stack Solutions LLC',
        description: 'Take a look at Kaileb Hammontree and his project portfolio.',
        keywords: 'Portfolio, projects, websites, web design, Hammontree, Web Development, Full-Stack, Solutions, Biography, Kaileb',
        icons: {
            icon: "/img/favicon.ico",
          },
    };
    };
    
    export default function PortfolioLayout({ children }) {
      return (
        <>
            {children}   
        </>
      );
    };
    