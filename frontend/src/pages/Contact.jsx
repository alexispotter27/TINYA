import ContactHero from "../components/contact/ContactHero";
import ContactInfo from "../components/contact/ContactInfo";
import ContactForm from "../components/contact/ContactForm";
import OfficeLocation from "../components/contact/OfficeLocation";
import SocialConnect from "../components/contact/SocialConnect";
import ContactFAQ from "../components/contact/ContactFAQ";
import ContactCTA from "../components/contact/ContactCTA";

export default function Contact() {
  return (
    <>
      <ContactHero />
      <ContactInfo />
      <ContactForm />
      <OfficeLocation />
      <SocialConnect />
      <ContactFAQ />
      <ContactCTA />
    </>
  );
}