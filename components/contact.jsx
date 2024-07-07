import React from 'react'
import AnimatedGradientText from './magicui/animated-gradient-text'
import { cn } from "@/lib/utils";
import TypingAnimation from './magicui/typing-animation';
import { Code } from "@nextui-org/code";

const Contact = () => {
    return (
        <div id="section5">
            <div className="relative isolate px-6 pt-20 lg:px-8">

                <TypingAnimation
                    className="text-4xl font-bold text-white dark:text-black"
                    text="Crafting code, shaping ideas, and continuously evolving."
                />
                <div className="text-center relative isolate px-6 pt-20 lg:px-8">
                    <Code size="lg">getinTouch();</Code>
                </div>
                <div class="py-2">
                    <ul class="example-2">
                        <li class="icon-content">
                            <a
                                href="https://www.linkedin.com/in/engineer-chetan-sharma/"
                                aria-label="LinkedIn"
                                data-social="linkedin"
                            >
                                <div class="filled"></div>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    fill="currentColor"
                                    class="bi bi-linkedin"
                                    viewBox="0 0 16 16"
                                >
                                    <path
                                        d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"
                                        fill="currentColor"
                                    ></path>
                                </svg>
                            </a>
                            {/* <div class="tooltip">LinkedIn</div> */}
                        </li>
                        <li class="icon-content">
                            <a
                                href="mailto:chetansharma4287@gmail.com"
                                aria-label="Twitter"
                                data-social="twitter"
                            >
                                <div class="filled"></div>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="currentcolor" width="16"
                                    height="16" version="1.1" id="Capa_1" viewBox="0 0 75.294 75.294" >
                                    <g>
                                        <path d="M66.097,12.089h-56.9C4.126,12.089,0,16.215,0,21.286v32.722c0,5.071,4.126,9.197,9.197,9.197h56.9   c5.071,0,9.197-4.126,9.197-9.197V21.287C75.295,16.215,71.169,12.089,66.097,12.089z M61.603,18.089L37.647,33.523L13.691,18.089   H61.603z M66.097,57.206h-56.9C7.434,57.206,6,55.771,6,54.009V21.457l29.796,19.16c0.04,0.025,0.083,0.042,0.124,0.065   c0.043,0.024,0.087,0.047,0.131,0.069c0.231,0.119,0.469,0.215,0.712,0.278c0.025,0.007,0.05,0.01,0.075,0.016   c0.267,0.063,0.537,0.102,0.807,0.102c0.001,0,0.002,0,0.002,0c0.002,0,0.003,0,0.004,0c0.27,0,0.54-0.038,0.807-0.102   c0.025-0.006,0.05-0.009,0.075-0.016c0.243-0.063,0.48-0.159,0.712-0.278c0.044-0.022,0.088-0.045,0.131-0.069   c0.041-0.023,0.084-0.04,0.124-0.065l29.796-19.16v32.551C69.295,55.771,67.86,57.206,66.097,57.206z" />
                                    </g>
                                </svg>
                            </a>
                            {/* <div class="tooltip">facebook</div> */}
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Contact
