import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Image from "next/image";
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
      <div className="navEmptySpace"></div>
      <div className="page">
        <main className="about__main text-lm-text-primary dark:text-dm-text-primary">
          <div className="about__titleCtr text-lm-tertiary dark:text-dm-tertiary">
            <h1>-- About --</h1>
          </div>

          <div className="bioCtr">
            <div className="profilePicCtr bg-lm-primary dark:bg-dm-primary">
              <div className="profilePic border-4 border-lm-secondary dark:border-dm-secondary">
                <Image
                  priority
                  src="/images/twitterPic.jpeg"
                  unoptimized
                  layout="fill"
                  objectFit="cover"
                  alt="Ryan with daughter wearing sunglasses"
                />
              </div>
            </div>

            <div>
              <h3 className="text-lm-tertiary dark:text-dm-tertiary">
                Technologies:
              </h3>
              <div className="techCtr">
                <div className="techIconCtr">
                  <div>
                    <Image src={html5} alt="HTML5" />
                  </div>
                  <div>
                    <Image src={css3} alt="CSS3" />
                  </div>
                  <div>
                    <Image src={javascript} alt="JavaScript" />
                  </div>
                  <div>
                    <Image src={sass} alt="Sass" />
                  </div>
                  <div>
                    <Image src={reactImage} alt="React" />
                  </div>
                  <div>
                    <Image src={nextjsImage} alt="Next.js" />
                  </div>
                  <div>
                    <Image src={git} alt="Git" />
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lm-tertiary dark:text-dm-tertiary">
                Development Journey
              </h3>
              <p>
                Hi, I&apos;m Ryan Rose, a Frontend Developer with nearly four
                years of production experience building React and TypeScript
                applications. I got my start in web development through{" "}
                <a
                  href={"https://vetswhocode.io/about-us"}
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="vetsWhoCode border-b-[1px] border-lm-tertiary dark:border-dm-tertiary hover:text-lm-tertiary dark:hover:text-dm-tertiary">
                    #VetsWhoCode
                  </span>
                </a>{" "}
                and have since spent those years building responsive interfaces
                in a professional setting. Lately I have been expanding into
                fullstack work, building a Python FastAPI backend paired with a
                React frontend to surface trending research from PubMed. I care
                about clean, maintainable code and building things that actually
                work well for the people using them.
              </p>
              &nbsp;
            </div>

            <div>
              <h3 className="text-lm-tertiary dark:text-dm-tertiary">
                Interests
              </h3>
              <p>
                I am a Husband, Father of three, U.S. Army Veteran, and hockey
                fanatic (#LetsGoAvs). Outside of work I spend most of my time
                with my kids, reading, and playing guitar. I have always been
                drawn to building things that matter, which is what led me from
                Biomedical Engineering to software development. Science and
                space have always fascinated me too, which probably explains the
                rest of this site.
              </p>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}

export default About;
