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
    ]
    return (
        <div className="testamonialRow">
        <h1 className={styles.header}>Some Testimonies</h1>
        <div className={styles.card_box}>
            
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
        </div>
    )
}