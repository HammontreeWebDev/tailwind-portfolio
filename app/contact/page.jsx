'use client';

import CenteredCard from "../ui/common/CenteredCard/CenteredCard";
import ContactForm from "../ui/ContactForm/ContactForm";
import Socials from "../ui/Socials/Socials";

export default function Contact() {
  return (
    <>

      <CenteredCard
        title="Start Your Project"
        line1="Are you ready to start your project?"
        line2="Let Hammontree Full-Stack Solutions know more about your vision by filling out a brief questionnaire."
        btnText="Start"
        url="https://app.hellobonsai.com/f/a14a29cd17402aa"
      />

      <ContactForm />

      <Socials />
      
    </>
  );
}