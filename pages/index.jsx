import Image from "next/image";
import Navbar from "../components/Navbar";
import Apod from "../components/Apod";
import React, { useRef, useEffect } from "react";
import styles from "../styles/Home.module.scss";
import bgImage from "../public/images/astronaut.jpeg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import StoicQuote from "../components/StoicQuote";

export default function Home({ mobileStatus }) {
  const skipNavRef = useRef();

  const handleSkipNav = () => {
    skipNavRef.current.focus();
  };

  return (
    <>
      <a
        tabIndex={0}
        className={styles.skipNav}
        onClick={handleSkipNav}
        onKeyPress={(e) => {
          if (e.key === "Enter") handleSkipNav();
        }}
      >
        Skip Navigation
      </a>
      <Navbar />
      <StoicQuote />
      <Apod mobileStatus={mobileStatus} skipNavRef={skipNavRef} />
      <div className={styles.bgImage}>
        <Image
          priority
          src={bgImage}
          layout="fill"
          objectFit="cover"
          alt="Spaceman reachin with Earth in the background"
        />
      </div>

      <main id="main" className={styles.main}>
        {/* Title banner */}
        <div className={styles.mainTextCtr}>
          <h1>-- Hi I&apos;m --</h1>
          {/* <h1 className={styles.name}>Ryan Rose</h1> */}
          <div className={styles.titleCtr}>
            <h3>A Frontend Developer</h3>
          </div>
        </div>
        {/* Social Media icons */}
        <div className={styles.socialCtr}>
          <div>
            <a
              href="https://github.com/rmrose78"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={["fab", "github"]} />
            </a>
          </div>
          <div>
            <a
              href="https://www.linkedin.com/in/ryan-rose-272626170/"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={["fab", "linkedin"]} />
            </a>
          </div>
          {/* <div>
            <a
              href="https://twitter.com/RyanRos79331176"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={["fab", "twitter"]} />
            </a>
          </div> */}
        </div>
      </main>
    </>
  );
}
