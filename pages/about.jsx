import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import styles from "../styles/about.module.scss";
import Image from "next/image";
import profilePic from "../public/images/twitterPic.jpeg";
import reactImage from "../public/images/techStackImages/react.svg";
import nextjsImage from "../public/images/techStackImages/nextjs.svg";
import html5 from "../public/images/techStackImages/html5.svg";
import css3 from "../public/images/techStackImages/css3.svg";
import javascript from "../public/images/techStackImages/javascript.svg";
import sass from "../public/images/techStackImages/sass.svg";
import git from "../public/images/techStackImages/git.svg";

function About({ mobileStatus }) {
  return (
    <>
      <Navbar />
      <div className={styles.navEmptySpace}></div>
      <main className={styles.main}>
        <div className={styles.titleCtr}>
          <h1>-- About --</h1>
        </div>

        <div className={styles.bioCtr}>
          <div className={styles.profilePicCtr}>
            <div className={styles.profilePic}>
              <Image
                priority
                src={profilePic}
                layout="fill"
                objectFit="contain"
                alt="Ryan with baby"
              />
            </div>
          </div>

          <div>
            <h3>Learning Focus:</h3>
            <div className={styles.techCtr}>
              <div className={styles.techIconCtr}>
                <div>
                  <Image src={html5} alt="react" />
                </div>
                <div>
                  <Image src={css3} alt="nextjs" />
                </div>
                <div>
                  <Image src={javascript} alt="react" />
                </div>
                <div>
                  <Image src={sass} alt="react" />
                </div>
                <div>
                  <Image src={reactImage} alt="react" />
                </div>
                <div>
                  <Image src={nextjsImage} alt="react" />
                </div>
                <div>
                  <Image src={git} alt="react" />
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3>Development Journey</h3>
            <p>
              Hello, my name is Ryan Rose. I&apos;m a Developer currently based
              out of the Augusta, GA area. Currently, I&apos;m working and
              learning React and the Next.js Framework with{" "}
              <a
                href={"https://vetswhocode.io/about#our_stories"}
                target="_blank"
                rel="noreferrer"
              >
                <span className={styles.vetsWhoCode}>#VetsWhoCode</span>
              </a>
              . I find interest in all side of development, but currently
              focusing on the Frontend. Constantly learning new things keeps
              life interesting!
            </p>
          </div>

          <div>
            <h3>Interests</h3>
            <p>
              I am Husband, Father, Veteran and hockey fanatic (#LetsGoAvs).
              When I am not working on improving in web development, I like to
              explore different hobbies. Homebrewing and playing guitar have
              been my go to.
            </p>
          </div>
        </div>
      </main>
    </>
  );
}

export default About;
