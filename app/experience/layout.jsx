export async function generateMetadata() {
    return {
        title: 'Experience | Hammontree Full-Stack Solutions LLC',
        description: 'Take a deep dive into what makes Hammontree Full-Stack Solutions qualified to tackle your next project.',
        keywords: 'Experience, resume, Hammontree, Web Development, Full-Stack, Solutions, Biography, Kaileb',
        icons: {
            icon: "/img/favicon.ico",
          },
    };
    };
    
    export default function ExperienceLayout({ children }) {
      return (
        <>
            {children}   
        </>
      );
    };
    