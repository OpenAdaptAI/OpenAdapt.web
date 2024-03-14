import React, { useRef, useState } from 'react';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faScrewdriverWrench } from '@fortawesome/free-solid-svg-icons'
import { faWindows, faApple } from '@fortawesome/free-brands-svg-icons';
import styles from './Testimonies.module.css';

export default function Testimonies() {
    const TestimonyData = [
        {
            text: `My hospital had <b>under-billed $75K</b> worth of procedural RVUs which took me 20 
            hours of manual chart review over the course of 6 months to recover. OpenAdapt 
            was able to do this job <b>automatically with just a few clicks</b>. The personalized 
            service and support were phenomenal. I will definitely be using OpenAdapt to audit 
            my procedures every month from now on. `,
            author: `Victor Abrich, MD, FHRS; Electrophysiologist at MercyOne Waterloo Heart Care`
        },
        {
            text:`We're trying to make a task miner which shows task flow. I use <b>OpenAdapter</b> to record your
            interactions and <b>pm4py</b> to make a task flow. 
            <br>I query <b>sqlite3</b> to make data for pm4py. 
            <br>
            <br>
            Now I can make a simply task flow and still there is something to do.
            <br>
            <br>
            Anyway I'm very happy to get here thanks to OpenAdapter!
            <br>
            <br>
            Thank you again for making OpenAdapter`,
            author:`Ribeam Kim`
        },
        /*{
            text: `Great AI Work. Fixed the issues in my ship and now me and Chewbacca can race the galaxy! Vroom 🚀`,
            author: `Han Solo, space person`
        },
        {
            text: `As a small business owner, managing billing discrepancies was an ongoing challenge until I found OpenAdapt. Unbeknownst to us, we were missing out on $40K in procedural RVUs. The manual effort to recover it was daunting. OpenAdapt simplified the entire process with its automated solution, saving me valuable time and resources. The team's personalized assistance made the transition seamless. I highly recommend OpenAdapt for anyone seeking efficiency in revenue recovery.`,
            author: `Emily Thompson`
        },
        {
            text: `OpenAdapt revolutionized the way we approach procedural audits. Before using their platform, identifying $60K in under-billed RVUs was a tedious task. With OpenAdapt, it became an effortless journey, completed in a fraction of the time. The user-friendly interface and exceptional customer support exceeded my expectations. I'm now a loyal advocate, incorporating OpenAdapt into our monthly auditing routine for sustained financial accuracy.`,
            author: `Robert Davis`
        }, {
            text: `Managing procedural RVUs had become a headache until OpenAdapt came to the rescue. Our oversight led to $55K in lost revenue, and manual recovery efforts were eating into our time. OpenAdapt's automated solution streamlined the process, recovering the under-billed amount with ease. The personalized support provided by the OpenAdapt team ensured a smooth transition. I'm impressed with the results and will continue relying on OpenAdapt for our monthly audits.`,
            author: `Robert Davis`
        },*/
    ]
    return (
        <div className={styles.card_box}>
            <h1 className={styles.header}>Some Testimonies</h1>
            {TestimonyData.map((curr_testimony) => (
                <div className={styles.card}>
                    <Image
                        className="invert text-center inline"
                        priority
                        src="/images/quote-left-solid.svg"
                        height={40}
                        width={40}
                        alt="Photo of quote"
                    />
                    <hr></hr>
                    <p className={styles.description} dangerouslySetInnerHTML={{ __html: curr_testimony.text }} ></p>
                    <h2 className={styles.title}>   <hr></hr> — {curr_testimony.author}</h2>
                </div>
            ))}
        </div>
    )
}