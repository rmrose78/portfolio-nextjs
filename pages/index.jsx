import Image from "next/image";
import Head from "next/head";
import Navbar from "../components/Navbar";
import Apod from "../components/Apod";
import React, { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Quote from "../components/Quote";

export default function Home({ mobileStatus }) {
  const skipNavRef = useRef();

  const handleSkipNav = () => {
    skipNavRef.current.focus();
  };

  return (
    <>
      <Head>
        <link rel="preload" as="image" href="/images/astronaut.jpeg" />
      </Head>
      <a
        tabIndex={0}
        onClick={handleSkipNav}
        onKeyPress={(e) => handleSkipNav(e)}
        className="skipNav text-lm-secondary dark:text-dm-secondary bg-lm-tertiary dark:bg-dm-tertiary"
      >
        Skip Navigation
      </a>
      <Navbar />
      <Quote />
      <Apod mobileStatus={mobileStatus} skipNavRef={skipNavRef} />
      <div className="img-filter">
        <div className="bgImage">
          <Image
            priority
            src="/images/astronaut.jpeg"
            unoptimized
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
        <div className="textSection">
          <div className="textBackdrop">
            <div className="mainTextCtr text-lm-secondary dark:text-dm-secondary">
              <h1>-- Frontend Developer --</h1>
              <div className="titleCtr text-lm-secondary dark:text-dm-secondary">
                <h3 className="text-lm-secondary dark:text-dm-secondary">
                  Make things that matter
                </h3>
              </div>
            </div>
          </div>
        </div>

        {/* Pitch and Social */}
        <div className="relative z-10 w-full max-w-sm md:max-w-xl px-4 py-3 bg-lm-secondary dark:bg-dm-secondary border rounded-lg text-lm-tertiary dark:text-dm-tertiary text-center opacity-90">
          <p className="pitchText">
            Frontend Developer with nearly four years of production experience
            in React. U.S. Army Veteran and Biomedical Engineering graduate,
            drawn to building things that actually make a difference. Also, I
            have a thing for space, which explains all of this.
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
