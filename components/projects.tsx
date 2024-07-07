import React from 'react'
import {Image} from "@nextui-org/react";
import Link from 'next/link';
import { useRouter } from 'next/router';
import ShimmerButton from './ui/shimmer-button';

const Projects = () => {
    const projectss = [
        {
            label: "Software Engineer Intern, OpenWorkPark",
            title: "Travel Booking Dashboard",
            description: [
                "I led the development of dynamic and feature-rich dashboard for booking and managing flights, hotels, insurance of 1000s of users.",
                "Optimized the application using Lazy-loading to load it faster.",
                "Optimized SQL queries and indexes to improve the performance of APIs."
            ],
            demoID: "juby.handly5@gmail.com",
            password: "test@1234",
            tech: ["AngularJS", "TypeScript", "Nebular", "Tailwind CSS", "Docker", "Postman"],
            githubLink: "https://github.com/chetansharma428/Admin-Pannel",
            demoLink: "https://admin-pannel-demo.netlify.app/",
            imgSrc: "/Project-3.png"
        },
        {
            label: "Full Stack E-commerce platform with CMS Dashboard",
            title: "Sharma Paper House",
            description: [
                "Developed full-stack dynamic e-commerce platform and custom CMS.",
                "Implemented clerk authentication for secure backend management.",
                "Integrated Stripe for payment processing and transactions for checkout and payment forms.",
                "Added image optimization and lazy loading to improve performance.",
                "Provided complete solution for selling online with backend admin and robust frontend site",
            ],
            tech: ["NextJS",
                "MongoDB",
                "NodeJS",
                "PrismaORM",
                "TypeScript",
                "Clerk Auth",
                "Insomnia"],
            githubLink: "https://github.com/chetansharma428/ecommerce-store",
            demoLink: "https://ecommerce-sph.vercel.app/",
            imgSrc: "/sphstore.png"
        },
        {
            label: "Old Portfolio Website",
            title: "engineerchetansharma.com (V4)",
            description: [
                "An old Porfolio website build with angular",
            ],
            tech: ["AngularJS", "TypeScript", "Bootstrap", "css", "Docker"],
            githubLink: "https://github.com/chetansharma428/professional_web_portfolio",
            demoLink: "https://chetansharma428.github.io/professional_web_portfolio/",
            imgSrc: "/Portfolio-old.jpeg"
        },
        {
            label: "Dynamic CMS Dashboard",
            title: "Sharma Paper House Dashboard",
            description: [
                "Developed full-stack dynamic e-commerce custom CMS.",
                "Implemented clerk authentication for secure backend management.",
                "From this Dashboard we can Manage N numbers of Ecommerce platform from one place.",
                "Added image optimization and lazy loading to improve performance.",
                "Added complete Api intergation system to manage all api's",
            ],
            demoID: "sphstoredlk@gmail.com",
            password: "sphadmin",
            tech: ["NextJS",
                "MongoDB",
                "NodeJS",
                "PrismaORM",
                "TypeScript",
                "Clerk Auth",
                "Insomnia"],
            githubLink: "https://github.com/chetansharma428/ecommerce-admin",
            demoLink: "https://ecommerce-admin-5z2z.vercel.app/",
            imgSrc: "/sphadmin.png"
        },
        {
            label: "Single-Page Web Application for Fashion Events",
            title: "GlamourRise Academy",
            description: [
                "Designed and built a large scale Single Page Web-Application used by thousands of artists for event registration.",
                "Optimized the performance using Lazy-loading.",
                "Wrote modular and reusable components to improve maintainability and performance of application."
            ],
            tech: ["Angular JS", "JavaScript", "Bootstrap 5", "HTML", "CSS"],
            githubLink: "https://github.com/chetansharma428/Event-Website",
            demoLink: "https://chetansharma428.github.io/GlamourRise/",
            imgSrc: "/Project-2.png"
        },
        {
            label: "Messaging platform",
            title: "Dungeon-Chat",
            description: [
                "Designed and built cloud-native chat application where users can sign up, login and search their connected friends.",
                "Built the authentication using Google Firebase.",
                "Built real-time messaging feature for instant communication.",
                "Used Google Firebase's as backend services to ensure scalability and fault-tolerance."
            ],
            tech: ["React JS", "Firebase", "Tailwind CSS"],
            githubLink: "https://github.com/chetansharma428/DungeonChat",
            demoLink: "https://dungeon-chat.netlify.app",
            imgSrc: "/dungeon-chat-img.png"
        }
    ];

    return (
        <div id="section3">
            <div className="relative px-6 pt-14 lg:px-8">
                <div className="text-center">
                    <div className="text-4xl text-white-900 py-8">Software Applications I’ve Built</div>
                </div>
                {/* <section className="bg-transparent py-12">
                    <div className="container mx-auto px-4">
                        <h1 className="text-3xl font-bold text-white mb-8">&lt;/Projects&gt;</h1>
                        <div className="space-y-8">
                            {projects.map((project, index) => (
                                <ProjectCard key={index} {...project} />
                            ))}
                        </div>
                    </div>
                </section> */}
                <div
                    className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
                    aria-hidden="true"
                >
                    <div
                        className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
                        style={{
                            clipPath:
                                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                        }}
                    />
                </div>
                <div className="flex flex-col gap-8">
                    {projectss.map((project, index) => (
                        <div key={index} className="bg-transparent p-6 rounded-lg shadow-lg flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                            <div className="w-full lg:w-3/5 p-4 flex justify-center items-start" >
                                <div className="w-full md:h-80 lg:h-[300px] overflow-hidden rounded-md">
                                    <Image
                                        src={project.imgSrc}
                                        alt={project.title}
                                        width={800}
                                        height={300}
                                        className="w-full h-full"
                                    />
                                </div>
                            </div>
                            <div className="project-content lg:w-2/5">
                                <div className="project-label text-lg font-semibold mb-2 text-teal-300">{project.label}</div>
                                <h4 className="project-title text-2xl font-bold mb-4 dark:text-white">{project.title}</h4>
                                <div className="project-details">
                                    <div className="description mb-4 dark:text-gray-300">
                                        <ul className="list-disc pl-4">
                                            {project.description.map((desc, idx) => (
                                                <li key={idx}>{desc}</li>
                                            ))}
                                        </ul>
                                        {project.demoID && <p>Demo ID: {project.demoID} <br /> Pass: {project.password}</p>}
                                    </div>
                                    <div className="flex flex-wrap gap-2 mb-4 text-teal-400">
                                        {project.tech.map((tech, idx) => (
                                            <div key={idx} className="px-2 py-1 bg-gray-800 rounded-md">{tech}</div>
                                        ))}
                                    </div>
                                    <div className="project-links flex space-x-4">
                                        <Link href={project.demoLink} >
                                            <ShimmerButton className="shadow-2xl">Live view →</ShimmerButton>
                                        </Link>
                                        <Link href={project.githubLink} className="inline-flex items-center px-4 py-2 bg-gray-700 text-white rounded-full hover:bg-gray-600">
                                            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
                                            </svg>
                                            GitHub
                                        </Link>

                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    )
}

export default Projects
