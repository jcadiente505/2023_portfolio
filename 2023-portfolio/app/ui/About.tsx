"use client";

import styles from "./About.module.css";
import globalStyles from "../app.module.scss";
import { montserrat, sourceSans } from "../assets/fonts/fonts";
import useInView from "./useInView";
import React, { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import profile from "../assets/images/jake_photo.jpg";

export const About = () => {
    const aboutMeRef = useRef<HTMLDivElement>(null);
    const observedElements = useInView([aboutMeRef]);

    console.log(observedElements.aboutMe);

  return (
    <div ref={aboutMeRef} className={`${styles.aboutMeContainer}`} data-myproperty="aboutMe">
      <h2 className={`${observedElements.aboutMe?.isInView === true ? styles.aboutMeHeaderShow : ''} ${styles.aboutMeHeader} ${montserrat.className}`}>
        <span className={`${observedElements.aboutMe?.isInView === true ? styles.aboutMeHeaderTextShow : ''} ${styles.aboutMeHeaderText}`}>Who am I?</span>
      </h2>
      <div className={styles.aboutMeContent}>
      <p className={`${styles.aboutMeBio} ${observedElements.aboutMe?.isInView === true ? styles.aboutMeBioShow : ''}`}>
        You wanna know a little more about me? Sure! A lifelong tech enthusiast.
        My passion for technology began early, building PCs and working with
        html to make the most impressive MySpace page possible! What started out as a hobby to impress my friends quickly grew into a skill that I leveraged in the workforce. 
        I carried that passion with me throughout the years working for some amazing companies such as an <Link className={globalStyles.inlineLink} target="_blank" href="https://www.silvertech.com/">exciting agency</Link>,
         a <Link className={globalStyles.inlineLink} target="_blank" href="https://www.goport.com/">cruise vacation planner</Link>,
         and now currently for one of the <Link className={globalStyles.inlineLink} href="https://www.capco.com/">largest fintech consulting agencies</Link> in the world.
      </p>
      <Image
        src={profile}
        alt="photo of jacob cadiente"
        height={400}
        width={400}
        className={`${observedElements.aboutMe?.isInView === true ? styles.AboutMeImgAnimate : ''} ${styles.aboutMeImg}`}
      />
      </div>
    </div>
  );
};

export default About;
