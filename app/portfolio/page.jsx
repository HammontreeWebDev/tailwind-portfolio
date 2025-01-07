'use client'
import GridSection from "../ui/common/GridSection/GridSection"
import HeroImage from "../ui/common/HeroImage/HeroImage"

export default function Portfolio() {

    return (
        <div>
            <main className="isolate">
                <HeroImage
                        title={"Kaileb Hammontree's Project Portfolio"}
                        subText={"On this page you will find direct links to some of Kaileb's favorite projects. Additionally, feel free to visit GitHub to take a look at the repositories and discover more work that Kaileb has worked on."}
                        buttonText={"View Code Repositories"}
                        image1={"/img/home/brofit.png"}
                        image2={"/img/home/jesse.png"}
                        image3={"/img/home/outtaTouch.png"}
                        image4={"/img/home/pokewire.png"}
                        image5={"/img/home/toBeWith.png"}
                        btnHref={"https://github.com/HammontreeWebDev"}
                      />
                <GridSection
                    title={"Featured Projects"}
                    posts={[
                        {
                            id: 1,
                            title: 'Outta Touch',
                            href: 'https://outta-touch.herokuapp.com/',
                            imageUrl:
                                '/img/portfolio/outtaTouch.png',
                            alt: 'Outta Touch',
                            category: { title: 'MongoDB | Express.js | ReactJS | Node.js | Apollo Client | Apollo Server | Web-sockets | GraphQL | GraphQL Subscriptions' },
                        },
                        {
                            id: 2,
                            title: 'BroFit Personal Training',
                            href: 'https://www.reesewilder.com/',
                            imageUrl:
                                '/img/portfolio/brofit.png',
                            alt: 'BroFit Personal Training',
                            category: { title: 'HTML | BootStrap | CSS | JavaScript' },
                        },
                        {
                            id: 3,
                            title: 'Jesse Ryder Brown Foundation',
                            href: 'https://www.j-boocustoms.org/',
                            imageUrl:
                                '/img/portfolio/jesse.png',
                            alt: 'Jesse Ryder Brown Foundation',
                            category: { title: 'ReactJS | NextJS | Node.js | CSS | Figma' },
                        },
                        // More posts...
                    ]}
                />
            </main>
        </div>
    )
}