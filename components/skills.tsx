import React from 'react'
import IconCloud from "@/components/magicui/icon-cloud";
import Image from 'next/image';
import { BorderBeam } from './ui/border-beam';
import ShineBorder from './ui/shine-border';
import DotPattern from './magicui/dot-pattern';
import { cn } from "@/lib/utils";

const slugs = [
    "typescript",
    "javascript",
    "java",
    "react",
    "html5",
    "css3",
    "express",
    "nextdotjs",
    "prisma",
    "firebase",
    "vercel",
    "docker",
    "git",
    "github",
    "visualstudiocode",
    "figma",
    "angular",
    "bootstrap",
    "mysql",
    "tailwindcss",
    "nextui",
    "postman",
    "springboot"
];

const Skills = () => {
    return (
        <div id="section4">
            <div className="relative">
                <div
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
                </div>
                <div className="text-center">
                    <div className="text-4xl text-white-900 py-8">Technologies & Skills</div>
                </div>
                <div className="relative grid grid-cols-1 md:grid-cols-2">
                    <div className="flex justify-center">
                        <div className="relative flex max-w-[32rem] items-center justify-center overflow-hidden bg-transparent px-20 pb-20 pt-8 ">
                            <IconCloud iconSlugs={slugs} />
                        </div>
                    </div>
                    <div className="grid grid-cols-1 gap-5">
                        <div className="relative flex-1 flex flex-col gap-4 bg-cardPrimary p-4 rounded-md shadow-lg box">
                            <div className="col text-2xl h4">Frontend</div>
                            <div className="col flex flex-row justify-around flex-wrap gap-3">
                                <div className="col">
                                    <p>Angular JS<span><Image src="/angular.svg" alt="Angular JS" width={48} height={48} /></span></p>
                                </div>
                                <div className="col">
                                    <p>JavaScript <span><Image src="/javascript.svg" alt="JavaScript" width={48} height={48} /></span></p>
                                </div>
                                <div className="col">
                                    <p>React JS <span><Image src="/react.svg" alt="React JS" width={48} height={48} /></span></p>
                                </div>
                                <div className="col">
                                    <p>Tailwind CSS<span><Image src="/tailwind-css.svg" alt="Tailwind CSS" width={48} height={48} /></span></p>
                                </div>
                                <div className="col">
                                    <p>Bootstrap 5 <span><Image src="/bootstrap.svg" alt="Bootstrap 5" width={48} height={48} /></span></p>
                                </div>
                                <div className="col">
                                    <p>HTML <span><Image src="/html.svg" alt="HTML" width={48} height={48} /></span></p>
                                </div>
                                <div className="col">
                                    <p>CSS <span><Image src="/css.svg" alt="CSS" width={48} height={48} /></span></p>
                                </div>
                            </div>
                            <BorderBeam size={300} duration={12} delay={9} />
                        </div>
                        <div className="relative flex-1 flex flex-col gap-4 bg-cardPrimary p-4 rounded-md shadow-lg box">
                            <div className="col text-2xl h4">Backend</div>
                            <div className="col flex flex-row flex-wrap gap-4">
                                <div className="col">
                                    <p className="flex justify-center items-start flex-col gap-2 pb-2" >Next JS </p><span><svg aria-label="Next.js logotype" height="18" role="img" viewBox="0 0 394 79"><path d="M261.919 0.0330722H330.547V12.7H303.323V79.339H289.71V12.7H261.919V0.0330722Z" fill="currentcolor"></path><path d="M149.052 0.0330722V12.7H94.0421V33.0772H138.281V45.7441H94.0421V66.6721H149.052V79.339H80.43V12.7H80.4243V0.0330722H149.052Z" fill="currentcolor"></path><path d="M183.32 0.0661486H165.506L229.312 79.3721H247.178L215.271 39.7464L247.127 0.126654L229.312 0.154184L206.352 28.6697L183.32 0.0661486Z" fill="currentcolor"></path><path d="M201.6 56.7148L192.679 45.6229L165.455 79.4326H183.32L201.6 56.7148Z" fill="currentcolor"></path><path clip-rule="evenodd" d="M80.907 79.339L17.0151 0H0V79.3059H13.6121V16.9516L63.8067 79.339H80.907Z" fill="currentcolor" fill-rule="evenodd"></path><path d="M333.607 78.8546C332.61 78.8546 331.762 78.5093 331.052 77.8186C330.342 77.1279 329.991 76.2917 330 75.3011C329.991 74.3377 330.342 73.5106 331.052 72.8199C331.762 72.1292 332.61 71.7838 333.607 71.7838C334.566 71.7838 335.405 72.1292 336.115 72.8199C336.835 73.5106 337.194 74.3377 337.204 75.3011C337.194 75.9554 337.028 76.5552 336.696 77.0914C336.355 77.6368 335.922 78.064 335.377 78.373C334.842 78.6911 334.252 78.8546 333.607 78.8546Z" fill="currentcolor"></path><path d="M356.84 45.4453H362.872V68.6846C362.863 70.8204 362.401 72.6472 361.498 74.1832C360.585 75.7191 359.321 76.8914 357.698 77.7185C356.084 78.5364 354.193 78.9546 352.044 78.9546C350.079 78.9546 348.318 78.6001 346.75 77.9094C345.182 77.2187 343.937 76.1826 343.024 74.8193C342.101 73.456 341.649 71.7565 341.649 69.7207H347.691C347.7 70.6114 347.903 71.3838 348.29 72.0291C348.677 72.6744 349.212 73.1651 349.895 73.5105C350.586 73.8559 351.38 74.0286 352.274 74.0286C353.243 74.0286 354.073 73.8286 354.746 73.4196C355.419 73.0197 355.936 72.4199 356.296 71.6201C356.646 70.8295 356.831 69.8479 356.84 68.6846V45.4453Z" fill="currentcolor"></path><path d="M387.691 54.5338C387.544 53.1251 386.898 52.0254 385.773 51.2438C384.638 50.4531 383.172 50.0623 381.373 50.0623C380.11 50.0623 379.022 50.2532 378.118 50.6258C377.214 51.0075 376.513 51.5164 376.033 52.1617C375.554 52.807 375.314 53.5432 375.295 54.3703C375.295 55.061 375.461 55.6608 375.784 56.1607C376.107 56.6696 376.54 57.0968 377.103 57.4422C377.656 57.7966 378.274 58.0874 378.948 58.3237C379.63 58.56 380.313 58.76 380.995 58.9236L384.14 59.6961C385.404 59.9869 386.631 60.3778 387.802 60.8776C388.973 61.3684 390.034 61.9955 390.965 62.7498C391.897 63.5042 392.635 64.413 393.179 65.4764C393.723 66.5397 394 67.7848 394 69.2208C394 71.1566 393.502 72.8562 392.496 74.3285C391.491 75.7917 390.043 76.9369 388.143 77.764C386.252 78.582 383.965 79 381.272 79C378.671 79 376.402 78.6002 374.493 77.8004C372.575 77.0097 371.08 75.8463 370.001 74.3194C368.922 72.7926 368.341 70.9294 368.258 68.7391H374.235C374.318 69.8842 374.687 70.8386 375.314 71.6111C375.95 72.3745 376.78 72.938 377.795 73.3197C378.819 73.6923 379.962 73.8832 381.226 73.8832C382.545 73.8832 383.707 73.6832 384.712 73.2924C385.708 72.9016 386.492 72.3564 387.055 71.6475C387.627 70.9476 387.913 70.1206 387.922 69.1754C387.913 68.312 387.654 67.5939 387.156 67.0304C386.649 66.467 385.948 65.9944 385.053 65.6127C384.15 65.231 383.098 64.8856 381.899 64.5857L378.081 63.6223C375.323 62.9225 373.137 61.8592 371.541 60.4323C369.937 59.0054 369.143 57.115 369.143 54.7429C369.143 52.798 369.678 51.0894 370.758 49.6261C371.827 48.1629 373.294 47.0268 375.148 46.2179C377.011 45.4 379.114 45 381.456 45C383.836 45 385.92 45.4 387.719 46.2179C389.517 47.0268 390.929 48.1538 391.952 49.5897C392.976 51.0257 393.511 52.6707 393.539 54.5338H387.691Z" fill="currentcolor"></path></svg></span>
                                </div>
                                <div className="col">
                                    <p>Express JS <span><Image src="/express-js.svg" alt="Express JS" width={48} height={48} /></span></p>
                                </div>
                                <div className="col">
                                    <p>Spring boot <span><Image src="/springboot.png" alt="Express JS" width={48} height={48} /></span></p>
                                </div>
                            </div>
                            <BorderBeam size={300} duration={12} delay={9} />
                        </div>
                        <div className="relative flex-1 flex flex-col gap-4 bg-cardPrimary p-4 rounded-md shadow-lg box">
                            <div className="col text-2xl h4">Database</div>
                            <div className="col flex flex-row flex-wrap gap-4">
                                <div className="col">
                                    <p>MySQL <span><Image src="/mysql-48.png" alt="MySQL" width={48} height={48} /></span></p>
                                </div>
                                <div className="col">
                                    <p>MongoDB <span><Image src="/mongo-db-64.png" alt="MongoDB" width={48} height={48} /></span></p>
                                </div>
                            </div>
                            <BorderBeam size={300} duration={12} delay={9} />
                        </div>
                        <div className="relative flex-1 flex flex-col gap-4 bg-cardPrimary p-4 rounded-md shadow-lg box">
                            <div className="col text-2xl h4">DevOps</div>
                            <div className="col flex flex-row flex-wrap gap-4">
                                <div className="col">
                                    <p>Docker <span><Image src="/docker.svg" alt="Docker" width={48} height={48} /></span></p>
                                </div>
                                <div className="col">
                                    <p>Postman <span><Image src="/postman-api.svg" alt="Postman" width={48} height={48} /></span></p>
                                </div>
                                <div className="col">
                                    <p>Insomnia <span><Image src="/insomnia.svg" alt="Insomnia" width={48} height={48} /></span></p>
                                </div>
                                <div className="col">
                                    <p>Git <span><Image src="/git.svg" alt="Git" width={48} height={48} /></span></p>
                                </div>
                            </div>
                            <BorderBeam size={300} duration={12} delay={9} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills