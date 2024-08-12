import React from "react";
import { Divider } from "@nextui-org/react";
import { Image } from "@nextui-org/react";

import AnimatedGridPattern from "./ui/animated-grid-pattern";
import { BorderBeam } from "./ui/border-beam";

import { cn } from "@/lib/utils";

const About = () => {
  return (
    <div id="section1">
      <div className="relative px-6 pt-14 lg:px-8">
        {/* <div
                    className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
                    aria-hidden="true"
                >
                    <div
                        className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
                        style={{
                            clipPath:
                                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                        }}
                    />
                </div> */}
        <div className="mx-auto  py-24">
          <div className="text-center">
            {/* <AnimatedGridPattern
              className={cn(
                "[mask-image:radial-gradient(300px_circle_at_center,white,transparent)]",
                "inset-x-0 inset-y-[-40%] h-[200%] skew-y-12",
              )}
              duration={3}
              maxOpacity={0.5}
              numSquares={30}
              repeatDelay={1}
            /> */}
            <div className="text-4xl text-white-900 py-8">About Me</div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className=" relative mt-6 flex items-center justify-center gap-x-6">
              <Image
                alt="NextUI hero Image with delay"
                height={400}
                radius="full"
                src="/New-DP1.jpg"
                width={400}
              />
              <BorderBeam delay={9} duration={12} size={250} />
            </div>
            <div className="flex items-center justify-center">
              <div className="mt-6 text-md md:text-lg leading-8 text-White-600">
                My journey in software engineering began with a simple 'Hello World' program and has since blossomed into a passion for creating innovative Products. From my early days at OpenWork Park to my recent role at Globalogy, I've cultivated a diverse skill set that spans the full software development lifecycle. <br/>
                I specialize in building robust, scalable applications using a variety of technologies. My expertise includes frontend development with <strong>React.js and Next.js</strong>, backend systems with <strong>Node.js and Express</strong>, and database optimization across<strong>SQL and NoSQL</strong> platforms. I've engineered responsive interfaces, developed secure APIs, and implemented advanced performance optimization strategies. <br/>
                <Divider className="my-3" />
                Beyond web development, I'm passionate about exploring emerging technologies and their potential to solve complex problems. Whether it's crafting e-commerce platforms, developing custom CMS solutions, or optimizing system architectures, I approach each project with a focus on efficiency, security, and user experience.<br/>
                Proficient in languages like <strong>JavaScript, TypeScript, and C++</strong>, I'm always eager to expand my technical repertoire. I thrive in collaborative environments and am dedicated to creating impactful software solutions that address real-world challenges across various domains of technology.
                <br />
                <Divider className="my-3" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
