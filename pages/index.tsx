import DefaultLayout from "@/layouts/default";
import Meteors from "@/components/ui/meteors";
import Herosection from "@/components/herosection";
import About from "@/components/about";
import Journey from "@/components/journey";
import Projects from "@/components/projects";
import Skills from "@/components/skills";
import Contact from "@/components/contact";
import BackToTop from "@/components/backtotop";
export default function IndexPage() {
  return (
    <DefaultLayout>
      <Meteors />
      <Herosection />
      <About />
      <Journey />
      <Projects />
      <Skills />
      <Contact />
      <BackToTop/>
    </DefaultLayout>
  );
}
