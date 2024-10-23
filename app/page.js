import HeroImage from "./ui/common/HeroImage/HeroImage";
import Testimonial from "./ui/common/Testimonial/Testimonial";
import TechStack from "./ui/TechStack/TechStack";

export default function Home() {
  return (
    <>

      <HeroImage
        title={"Transforming Visions Into Digital Reality"}
        subText={"From dynamic, full-scale applications to professional front-end websites, Hammontree Full-Stack Solutions is here to bring your ideas to life."}
        buttonText={"Get started"}
        image1={"/img/home/brofit.png"}
        image2={"/img/home/jesse.png"}
        image3={"/img/home/outtaTouch.png"}
        image4={"/img/home/pokewire.png"}
        image5={"/img/home/toBeWith.png"}
        btnHref={"/contact"}
      />

      <Testimonial
        quote={"Awesome company, and made my life so much easier!"}
        client={"Reese Wilder"}
        occupation={"Owner of BroFit Training"}
        picture={"/img/home/brofitLogo.webp"}
      />

      <TechStack />

    </>
  );
}