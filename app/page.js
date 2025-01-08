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
        image1={"/img/home/colors.png"}
        image2={"/img/home/bridge.png"}
        image3={"/img/home/mountains.png"}
        image4={"/img/home/aurora.png"}
        image5={"/img/home/eyes.png"}
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