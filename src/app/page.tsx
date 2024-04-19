import AboutComponent from "./@about/page";
import ContactComponent from "./@contact/page";
import ExperienceComponent from "./@experience/page";
import HomeComponent from "./@home/page";
import SkillsComponent from "./@skills/page";
export default function Home() {
  return (
    <>
      <HomeComponent />
      <AboutComponent />
      <SkillsComponent />
      <ExperienceComponent />
      <ContactComponent />
    </>
  );
}
