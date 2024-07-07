"use client";
import React from 'react'
import { cn } from "@/lib/utils";
import ShimmerButton from './ui/shimmer-button'
import Link from 'next/link';
import AnimatedGridPattern from './ui/animated-grid-pattern'
import { BorderBeam } from './ui/border-beam';

const Herosection = () => {
    return (
        <div>
            <div className="relative isolate px-6 pt-14 lg:px-8">
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
                <div className="mx-auto max-w-2xl py-24">
                    <div className="">
                        <div className="text-4xl font-bold tracking-tight text-white-900 sm:text-6xl">
                            <h1 className="text-2xl font-bold tracking-tight text-white-900 sm:text-3xl"> Hi, My name is </h1>
                            Chetan Sharma.
                        </div>
                        <div className="mt-6 text-lg leading-8 text-White-600 ">
                            I'm a <span className='font-bold'>Full-stack Software Development Engineer</span> with extensive experience in building web applications with cutting edge technologies. I've a strong foundation in algorithms and data structures and I enjoy solving new coding challenges to learn and grow my skills to the next level.
                        </div>
                        <div className="mt-10 flex items-center justify-center gap-x-6">
                            <Link href="mailto:chetansharma4287@gmail.com">
                                <ShimmerButton className="shadow-2xl">
                                    <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
                                        Hire Me
                                    </span>
                                </ShimmerButton>
                            </Link>
                        </div>
                    </div>
                </div>
                {/* <AnimatedGridPattern
                    numSquares={30}
                    maxOpacity={0.5}
                    duration={3}
                    repeatDelay={1}
                    className={cn(
                        "[mask-image:radial-gradient(300px_circle_at_center,white,transparent)]",
                        "inset-x-0 inset-y-[-50%] h-[200%] skew-y-12",
                    )}
                /> */}
                <div
                    className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
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
            </div>
        </div>
    )
}

export default Herosection
