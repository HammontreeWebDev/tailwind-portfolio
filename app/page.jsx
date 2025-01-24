import HeroImage from "@/app/ui/common/HeroImage/HeroImage.jsx";
import Testimonial from "@/app/ui/common/Testimonial/Testimonial.jsx";
import TechStack from "@/app/ui/TechStack/TechStack.jsx";
import SwiperCarousel from "./ui/common/Swiper/SwiperCarousel";

const slideArray = [
  <Testimonial
    quote={"Awesome company, and made my life so much easier!"}
    client={"Reese Wilder"}
    occupation={"Owner of BroFit Training"}
    picture={"/img/home/reese.jpeg"}
  />,
  <Testimonial
    quote={
      "I am so thankful for all of Kaileb’s hard work, expertise, and flexibility when creating this website from scratch. He was easy to work with and really took the time to listen to my vision. Would recommend to anyone wanting a unique and individually designed website!"
    }
    client={"Karah Hammontree"}
    occupation={"Owner of To Be With Counseling"}
    picture={"/img/home/karah.png"}
  />
]

export const metadata = {
  title: {
    template: '%s | Hammontree Full-Stack Solutions LLC',
    default: 'Hammontree Full-Stack Solutions LLC',
  },
  description: 'Discover Hammontree Full-Stack Solutions and learn about how they can help you transform your vision into digital reality.',
  keywords: 'Kaileb, Hammontree, Full-Stack, Solutions, Web Development, Website Designer, Create Website, javascript, react, central florida, florida, orlando',
  icons: {
    icon: "/img/favicon.ico",
  },
}

export default function Home() {
  return (
    <>

      <HeroImage
        title={"Transforming Visions Into Digital Reality"}
        subText={"From dynamic, full-scale applications to professional front-end websites, Hammontree Full-Stack Solutions is here to bring your ideas to life."}
        buttonText={"Get started"}
        image1={"/img/home/colors.png"}
        image2={"/img/home/bridge.png"}
        image3={"/img/home/mountains.png"}
        image4={"/img/home/aurora.png"}
        image5={"/img/home/eyes.png"}
        btnHref={"/contact"}
      />
      <div className="px-6 py-12">
        <h2 className="text-3xl font-bold text-white title-text text-center mb-8">
          What Our Clients Say
        </h2>
        <SwiperCarousel
          slides={slideArray}
        />
      </div>
      <TechStack />

    </>
  );
}