import Image from "next/image";
import Navbar from "../components/Navbar";
import Apod from "../components/Apod";
import React, { useEffect, useRef, useState } from "react";
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
            src="/images/astronaut.jpeg"
            layout="fill"
            objectFit="cover"
            alt="Spaceman reachin with Earth in the background"
          />
        </div>
      </div>
      <main
        id="main"
        className="main flex flex-col items-center justify-center"
      >
        {/* Title centered on page */}
        <div className="relative z-10 flex flex-col items-center justify-center flex-1 max-h-[20rem]">
          <div className="mainTextCtr text-lm-secondary dark:text-dm-secondary">
            <h1>-- Hi I&apos;m --</h1>
            <div className="titleCtr text-lm-secondary dark:text-dm-secondary">
              <h3 className="text-lm-secondary dark:text-dm-secondary">
                A Frontend Developer
              </h3>
            </div>
          </div>
        </div>

        {/* Pitch and Social */}
        <div className="relative z-10 w-full max-w-sm md:max-w-xl px-4 py-3 bg-lm-secondary dark:bg-dm-secondary border rounded-lg text-lm-tertiary dark:text-dm-tertiary text-center">
          <p className="pitchText">
            Frontend Developer with nearly four years of production experience
            in React and TypeScript. I have a background in Biomedical
            Engineering and U.S. Army service, and I am drawn to building things
            that actually make a difference. Also I have a thing for space,
            which explains all of this.
          </p>
          <div className="pitchIcons flex flex-row justify-center gap-6 mt-3">
            <a
              href="https://github.com/rmrose78"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={["fab", "github"]} />
            </a>
            <a
              href="https://www.linkedin.com/in/ryan-rose-272626170/"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={["fab", "linkedin"]} />
            </a>
          </div>
        </div>
      </main>
    </>
  );
}
