import React, { useRef, useState } from 'react';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faScrewdriverWrench } from '@fortawesome/free-solid-svg-icons'
import { faWindows, faApple } from '@fortawesome/free-brands-svg-icons';
import styles from './Testimonials.module.css';

export default function Testimonials() {
    const testimonialData = [
        {
            text: `<p>My hospital had <b>under-billed $75K</b> worth of procedural RVUs which took me 20 
            hours of manual chart review over the course of 6 months to recover. OpenAdapt 
            was able to do this job <b>automatically with just a few clicks</b>. The personalized 
            service and support were phenomenal. I will definitely be using OpenAdapt to audit 
            my procedures every month from now on.<p>`,
            author: `Victor Abrich, MD, FHRS; Electrophysiologist at MercyOne Waterloo Heart Care`
        },
        {
            text:`<p>We're trying to make a task miner which shows task flow. I use <b>OpenAdapter</b> to record your
            interactions and <b>pm4py</b> to make a task flow. 
            <br>I query <b>sqlite3</b> to make data for pm4py. </p>
            
            <p>Now I can make a simply task flow and still there is something to do.</p>
            
            <p>Anyway I'm very happy to get here thanks to OpenAdapter!</p>
            Thank you again for making OpenAdapter`,
            author:`Kibeom Kim`
        },
    ]
    return (
        <div className="testamonialRow">
        <h1 className={styles.header}>Testimonials</h1>
        <div className={styles.card_box}>
            
            {testimonialData.map((currTestimony) => (
                <div className={styles.card}>
                    <Image
                        className="invert text-center inline"
                        priority
                        src="/images/quote-left-solid.svg"
                        height={40}
                        width={40}
                        alt="Photo of quote logo"
                    />
                    <hr></hr>
                    <div className={styles.description} dangerouslySetInnerHTML={{ __html: currTestimony.text }} ></div>
                    <h2 className={styles.title}>   <hr></hr> — {currTestimony.author}</h2>
                </div>
            ))}
        </div>
        </div>
    )
}