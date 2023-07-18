import React, { useState } from 'react';
import Link from "next/link"
import { motion } from "framer-motion"
import Image from 'next/image';

import EmailForm from '@components/EmailForm'
import IndustriesGrid from '@components/IndustriesGrid'

import styles from './MastHead.module.css'

// Import the SVG files as React components
import EyeSvg from 'public/images/;
import HandSvg from './hand.svg';
import BubbleSvg from './bubble.svg';

export default function Home() {
    const [feedbackData, setFeedbackData] = useState({
        name: '',
        email: '',
        message: ''
    });

    return (
        <div className={styles.section}>
            <div className="relative flex items-center justify-center h-screen overflow-hidden">
                <div className="relative z-30 p-5 text-2xl">
                    <div className="hero-content text-center">
                        <div className="grid grid-flow-row auto-rows-max">
                            <h1 className="text-6xl mb-6 md:text-7xl">
                                <span className="font-thin">Open</span>Adapt
                                <span className="font-thin">.AI</span>
                            </h1>
                            <div className="flex flex-col align-items-center justify-content-center mr-2">
                                <motion.div
                                    animate={{
                                        y: [-3, 3, -3]
                                    }}
                                    transition={{
                                      duration: 2,
                                      ease: "easeInOut",
                                      times: [0, .5, 1],
                                      repeat: Infinity,
                                      repeatDelay: 0,
                                    }}
                                >
                                    <Image
                                      className="invert text-center inline"
                                      priority
                                      src="/images/new_masthead.svg"
                                      height={85}
                                      width={85}
                                      alt="Large Language Model"
                                    />
                                </motion.div>
                            </div>
                            <h2 className="text-4xl my-10 font-extralight">
                                AI for Humans.
                            </h2>
                            <div>
                                <Link className="btn btn-primary ml-2 mt-2" href="#industries">
                                    Learn How
                                </Link>
                            </div>
                            <h3 className="my-10 font-light">
                                <span className="inline-block p-2">
                                    Automate your workflows.
                                </span>
                                <br/>
                                <span className="inline-block p-2 -my-2">
                                    Record, replay, and share.
                                </span>
                                <br />
                                <span className="bg-white bg-opacity-20 inline-block p-2 py-0">
                                    <b>No programming required.</b>
                                </span>
                            </h3>
                            <EmailForm />
                        </div>
                    </div>
                </div>
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute z-10 object-cover w-full h-full opacity-50"
                >
                    <source
                        src="./hero.mp4"
                        type="video/mp4"
                    />
                    Your browser does not support the video tag.
                </video>
                <div className="absolute top-0 right-0 z-50">
                    <div className="relative z-50 inline-block mr-2 mt-2">
                        <a className="github-button mr-2" href="https://github.com/MLDSAI/OpenAdaptAI/fork" data-color-scheme="no-preference: dark_high_contrast; light: dark_high_contrast; dark: dark;" data-icon="octicon-repo-forked" data-size="large" data-show-count="true" aria-label="Fork MLDSAI/OpenAdaptAI on GitHub">Fork</a>
                    </div>
                    <div className="relative z-50 inline-block mr-2 mt-2">
                        <a className="github-button" href="https://github.com/MLDSAI/OpenAdaptAI" data-color-scheme="no-preference: dark_high_contrast; light: dark_high_contrast; dark: dark;" data-icon="octicon-star" data-size="large" data-show-count="true" aria-label="Star MLDSAI/OpenAdaptAI on GitHub">Star</a>
                    </div>
                </div>
            </div>
            <IndustriesGrid />
        </div>
    )
}
