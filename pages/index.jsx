import Image from "next/image";
import Navbar from "../components/Navbar";
import Apod from "../components/Apod";
import React, { useEffect, useRef, useState } from "react";
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
        onClick={handleSkipNav}
        onKeyPress={(e) => handleSkipNav(e)}
        className="skipNav text-lm-secondary dark:text-dm-secondary bg-lm-tertiary dark:bg-dm-tertiary"
      >
        Skip Navigation
      </a>
      <Navbar />
      <StoicQuote />
      <Apod mobileStatus={mobileStatus} skipNavRef={skipNavRef} />
      <div className="img-filter">
        <div className="bgImage">
          <Image
            priority
            src={bgImage}
            layout="fill"
            objectFit="cover"
            alt="Spaceman reachin with Earth in the background"
          />
        </div>
      </div>
      <main id="main" className="main">
        {/* Title banner */}
        <div className="mainTextCtr text-lm-secondary dark:text-dm-secondary">
          <h1>-- Hi I&apos;m --</h1>
          {/* <h1 className={styles.name}>Ryan Rose</h1> */}
          <div className="titleCtr text-lm-secondary dark:text-dm-secondary">
            <h3 className="text-lm-secondary dark:text-dm-secondary">
              A Frontend Developer
            </h3>
          </div>
        </div>
        {/* Social Media icons */}
        <div className="socialCtr text-lm-tertiary dark:text-dm-tertiary">
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
