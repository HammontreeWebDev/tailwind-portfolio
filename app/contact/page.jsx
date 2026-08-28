'use client';

import CenteredCard from "@/app/ui/common/CenteredCard/CenteredCard.jsx";
import ContactForm from "@/app/ui/ContactForm/ContactForm.jsx";
import Socials from "@/app/ui/Socials/Socials.jsx";

export default function Contact() {
  return (
    <>
      <CenteredCard
        title="Start Your Project"
        line1="Ready to bring your vision to life?"
        line2="Tell us about your project with a brief questionnaire — it only takes a few minutes."
        btnText="Begin Questionnaire"
        url="https://app.hellobonsai.com/f/a14a29cd17402aa"
      />
      <ContactForm />
      <Socials />
    </>
  );
}
