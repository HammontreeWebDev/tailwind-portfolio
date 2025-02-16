'use client';

import CenteredCard from "@/app/ui/common/CenteredCard/CenteredCard.jsx";
import ContactForm from "@/app/ui/ContactForm/ContactForm.jsx";
import Socials from "@/app/ui/Socials/Socials.jsx";

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