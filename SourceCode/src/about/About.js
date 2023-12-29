import React from 'react';
import styles from './about.module.css';
import AboutSocialLinks from './aboutImageAssets/AboutSocialLinks';

export default function About(){

    return(
        <div>
            <div className={styles.barrier}></div>
            <div className={styles.container}>
                <div className={styles.aboutMeBoxLeft}> 
                    <h1>Mark Stanley</h1>
                    <h2>student looking for a software engineer internship</h2>
                    <AboutSocialLinks />
                </div>
                <div className={styles.aboutMeBoxRight}>
                    <p>            My name is <span className={styles.boldSans}>Mark Stanley. </span> I am a current 
                    undergraduate student at the <span className={styles.boldSans}>University of Wisconsin-Madison,</span> 
                    where I am studying  <span className={styles.boldSans}>Computer Science and Mathematics.</span></p>
                    <br></br>
                    <p>I am currently searching for an <span className={styles.boldSans}>internship in software engineering, </span>
                        and am enthusiastic to land a position, and learn more about the field.</p>
                    <br></br>
                    <p>Further than the computer, I play the <span className={styles.boldSans}> euphonium</span> in the university low-brass ensemble, and play 
                        recreational <span className={styles.boldSans}>volleyball and roundnet.</span></p>
                </div>
            </div>
        </div>
    );
}