import React from "react";
import styles from "./about.module.css";
import AboutSocialLinks from "./aboutImageAssets/AboutSocialLinks";

export default function About({ isMobile, windowWidth }) {
  const styleWindow = () => {
    if (windowWidth < 380) {
      return { marginLeft: "60px" };
    } else if (windowWidth < 530) {
      return { marginLeft: "50px" };
    } else {
      return { marginLeft: "250px" };
    }
  };

  const styleSizeH1 = () => {
    if (windowWidth < 380) {
      return { fontSize: "60px" };
    } else if (windowWidth < 515) {
      return { fontSize: "80px" };
    } else {
      return {};
    }
  };

  console.log(windowWidth);

  return (
    <div>
      <div className={styles.barrier}></div>
      <div className={!isMobile ? styles.container : styles.mobileContainer}>
        <div
          className={
            !isMobile ? styles.aboutMeBoxLeft : styles.aboutMeBoxMobile
          }
          style={styleWindow()}
        >
          <h1 style={styleSizeH1()}>Mark Stanley</h1>
          <h2>full stack developer student</h2>
          <AboutSocialLinks />
        </div>
        <div
          className={
            !isMobile ? styles.aboutMeBoxRight : styles.aboutMeBoxMobile
          }
          style={isMobile ? styleWindow() : {}}
        >
          <p>
            My name is <span className={styles.boldSans}>Mark Stanley. </span> I
            am a junior standing undergraduate student at the{" "}
            <span className={styles.boldSans}>
              University of Wisconsin-Madison,{" "}
            </span>
            where I am studying{" "}
            <span className={styles.boldSans}>
              Computer Science and Mathematics.
            </span>
          </p>
          <br></br>
          <p>
            I am currently developing websites for clients as a freelance web
            developer, and am enthusiastic to discuss with possible clients.
            Furthermore, I am learning about data analysis an machine learning.
          </p>
          <br></br>
          <p>
            Further than the computer, I play the{" "}
            <span className={styles.boldSans}> euphonium</span> in the
            university low-brass ensemble, and play recreational{" "}
            <span className={styles.boldSans}>volleyball and roundnet.</span>
          </p>
        </div>
      </div>
    </div>
  );
}
