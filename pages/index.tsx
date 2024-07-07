import DefaultLayout from "@/layouts/default";
import Meteors from "@/components/ui/meteors";
import Herosection from "@/components/herosection";
import About from "@/components/about";
import Journey from "@/components/journey";
import Projects from "@/components/projects";
import Skills from "@/components/skills";
import Contact from "@/components/contact";
export default function IndexPage() {
  return (
    <DefaultLayout>
      {/* <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="inline-block max-w-lg text-center justify-center">
          <h1 className={title()}>Make&nbsp;</h1>
          <h1 className={title({ color: "violet" })}>beautiful&nbsp;</h1>
          <br />
          <h1 className={title()}>
            websites regardless of your design experience.
          </h1>
          <h4 className={subtitle({ class: "mt-4" })}>
            Beautiful, fast and modern React UI library.
          </h4>
        </div>

        <div className="flex gap-3">
          <Link
            isExternal
            className={buttonStyles({
              color: "primary",
              radius: "full",
              variant: "shadow",
            })}
            href={siteConfig.links.docs}
          >
            Documentation
          </Link>
          <Link
            isExternal
            className={buttonStyles({ variant: "bordered", radius: "full" })}
            href={siteConfig.links.github}
          >
            <GithubIcon size={20} />
            GitHub
          </Link>
        </div>

        <div className="mt-8">
          <Snippet hideCopyButton hideSymbol variant="bordered">
            <span>
              Get started by editing{" "}
              <Code color="primary">pages/index.tsx</Code>
            </span>
          </Snippet>
        </div>
      </section> */}
      <Meteors />
      <Herosection />
      <About />
      <Journey />
      <Projects />
      <Skills />
      <Contact />
    </DefaultLayout>
  );
}
