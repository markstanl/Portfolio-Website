import React from 'react';
import styles from './about.module.css';
import AboutSocialLinks from './aboutImageAssets/AboutSocialLinks';

export default function About({isMobile, windowWidth}){

    const styleWindow = () => {
        if(windowWidth < 380){
            return {marginLeft: '60px'}
        }
        else if (windowWidth < 530){
            return {marginLeft: '50px'}
        }
        else {
            return {}
        }
    }

    const styleSizeH1 = () => {
        if(windowWidth < 380){
            return {fontSize: '60px'}
        }
        else if(windowWidth < 515){
            return {fontSize: '80px'}
        }
        else {
            return {}
        }
    }

    console.log(windowWidth);

    return(
        <div>
            <div className={styles.barrier}></div>
            <div className={!isMobile ? styles.container : styles.mobileContainer} style={styleWindow()} >
                <div className={!isMobile ? styles.aboutMeBoxLeft : styles.aboutMeBoxMobile} > 
                <h1 style={styleSizeH1()}>Mark Stanley</h1>
                    <h2>student looking for a software engineer internship</h2>
                    <AboutSocialLinks />
                </div>
                <div className={!isMobile ? styles.aboutMeBoxRight : styles.aboutMeBoxMobile}>
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