import React, { useRef, useEffect, useState } from "react";
import { useTheme } from "next-themes";

import { AnimatedBeam } from "./ui/animated-beam";
import Particles from "./ui/particles";

const Journey = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const div1Ref = useRef<HTMLDivElement>(null);
  const div2Ref = useRef<HTMLDivElement>(null);
  const div3Ref = useRef<HTMLDivElement>(null);
  const div4Ref = useRef<HTMLDivElement>(null);
  const div5Ref = useRef<HTMLDivElement>(null);
  const { theme } = useTheme();
  const [color, setColor] = useState("#ffffff");

  useEffect(() => {
    setColor(theme === "dark" ? "#ffffff" : "#000000");
  }, [theme]);

  return (
    <div id="section2">
      <div ref={containerRef} className="relative isolate px-6 pt-14 lg:px-8">
        <Particles
          refresh
          className="absolute inset-0"
          color={color}
          ease={80}
          quantity={100}
        />
        <AnimatedBeam
          containerRef={containerRef}
          delay={1}
          duration={5}
          fromRef={div1Ref}
          pathColor="#ffaa40"
          pathWidth={4}
          toRef={div2Ref}
        />
        <AnimatedBeam
          containerRef={containerRef}
          delay={1.5}
          duration={5}
          fromRef={div2Ref}
          pathColor="#ffaa40"
          pathWidth={4}
          toRef={div3Ref}
        />
        <AnimatedBeam
          containerRef={containerRef}
          delay={2}
          duration={5}
          fromRef={div3Ref}
          pathColor="#ffaa40"
          pathWidth={4}
          toRef={div4Ref}
        />
        <AnimatedBeam
          containerRef={containerRef}
          delay={2.5}
          duration={5}
          fromRef={div4Ref}
          pathColor="#ffaa40"
          pathWidth={4}
          toRef={div5Ref}
        />
        <div
          aria-hidden="true"
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
        <div className="mx-auto  py-24">
          <div className="text-center">
            <div className="text-4xl text-white-900 py-8">
              My Professional Journey
            </div>
          </div>
          <div className="mt-6 space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent">
            {/* <!-- Item #1 --> */}
            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group ">
              {/* <!-- Icon --> */}
              <div
                ref={div1Ref}
                className="flex items-center justify-center w-10 h-10 rounded-full border  bg-indigo-500 group-[.is-active]:bg-emerald-500 text-slate-500 group-[.is-active]:text-emerald-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2"
              />
              {/* <!-- Card --> */}
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-transparent p-6 rounded border">
                <div className="flex items-center justify-between space-x-2 mb-1">
                  <div className="font-bold text-white-900 text-xl">
                    Full-stack Development Engineer @Globalogy, Remote, Canada
                  </div>
                  <time className="font-caveat font-medium text-indigo-500">
                    (01/02/2024 – 08/06/2024)
                  </time>
                </div>
                <div className="text-white-500">
                  <ul className="list-disc mx-2">
                    <li>Engineered a responsive web application using ReactJS, significantly improving mobile user engagement</li>
                    <li>Developed secure REST APIs with ExpressJS, enhancing data security and transaction efficiency</li>
                    <li>Optimized MySQL database performance, substantially reducing query response times</li>
                    <li>Implemented advanced indexing strategies, boosting overall system efficiency and reducing server load</li>
                  </ul>
                </div>
              </div>
            </div>
            {/* <!-- Item #2 --> */}
            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group ">
              {/* <!-- Icon --> */}
              <div
                ref={div2Ref}
                className="flex items-center justify-center w-10 h-10 rounded-full border  bg-indigo-500 group-[.is-active]:bg-emerald-500 text-slate-500 group-[.is-active]:text-emerald-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2"
              />
              {/* <!-- Card --> */}
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-transparent p-6 rounded border">
                <div className="flex items-center justify-between space-x-2 mb-1">
                  <div className="font-bold text-white-900 text-xl">
                    Full-stack Development Engineer @Wathare Infotech Solutions, Pune, India
                  </div>
                  <time className="font-caveat font-medium text-indigo-500">
                    (01/07/2022 – 31/01/2024)
                  </time>
                </div>
                <div className="text-white-500">
                  <ul className="list-disc mx-2">
                    <li>Developed and maintained web applications using JavaScript, React, Node.js, and Express.js, focusing on enhancing user
                      engagement and functionality.</li>
                    <li>Implemented RESTful APIs to improve data flow and integration between front-end and back-end systems.</li>
                    <li>Optimized MySQL database queries and structures, significantly improving application performance and response times.</li>
                    <li>Collaborated with UX/UI teams to redesign and improve user interfaces, enhancing overall user experience and retention.</li>
                    <li>Worked with  backend development efforts for scalable services, enabling robust functionality across  applications.</li>
                    <li>Worked within cross-functional teams to deliver high-quality software solutions, adhering to best practices and project
                      timelines.</li>
                  </ul>
                </div>
              </div>
            </div>
            {/* <!-- Item #3 --> */}
            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group ">
              {/* <!-- Icon --> */}
              <div
                ref={div3Ref}
                className="flex items-center justify-center w-10 h-10 rounded-full border  bg-indigo-500 group-[.is-active]:bg-emerald-500 text-slate-500 group-[.is-active]:text-emerald-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2"
              />
              {/* <!-- Card --> */}
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-transparent p-6 rounded border border-slate-200 shadow">
                <div className="flex items-center justify-between space-x-2 mb-1">
                  <div className="font-bold text-white-900 text-xl">
                    Junior Developer Intern, OPENWORK PARK, Noida, India
                  </div>
                  <time className="font-caveat font-medium text-indigo-500">
                    (01/2022 – 06/2022)
                  </time>
                </div>
                <div className="text-white-500">
                  <ul className="list-disc mx-2">
                    <li>Revamped website designs using AngularJS, contributing to improved user retention</li>
                    <li>Optimized frontend performance, notably reducing page load times and enhancing user experience</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* <!-- Item #4 --> */}
            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group ">
              {/* <!-- Icon --> */}
              <div
                ref={div4Ref}
                className="flex items-center justify-center w-10 h-10 rounded-full border  bg-indigo-500 group-[.is-active]:bg-emerald-500 text-slate-500 group-[.is-active]:text-emerald-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2"
              />
              {/* <!-- Card --> */}
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-transparent p-6 rounded border border-slate-200 shadow">
                <div className="flex items-center justify-between space-x-2 mb-1">
                  <div className="font-bold text-white-900 text-xl">
                    Master's in Computer Applications
                  </div>
                  <time className="font-caveat font-medium text-indigo-500">
                    2022
                  </time>
                </div>
                <div className="text-white-500">
                  <ul className="list-disc mx-2">
                    <li>
                      Bhartiya vidyapeeth's Institute of Computer Application
                      and Management(GGSIPU), <br />
                      📍 New Delhi
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        >
          <div
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Journey;
