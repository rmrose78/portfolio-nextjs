import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
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
                  src={profilePic}
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
              <h3 className="text-lm-tertiary dark:text-dm-tertiary">
                Development Journey
              </h3>
              <p>
                Hi, I&apos;m Ryan Rose, a Developer currently based out of the
                Augusta, GA area. I use this website to showcase technologies I
                am currently working with like React, Next.JS, Sass and Tailwind
                CSS. I completed training with a focus in Frontend Development
                with{" "}
                <a
                  href={"https://vetswhocode.io/about#our_stories"}
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="vetsWhoCode border-b-[1px] border-lm-tertiary dark:border-dm-tertiary hover:text-lm-tertiary dark:hover:text-dm-tertiary">
                    #VetsWhoCode
                  </span>
                </a>{" "}
                and currently working with my cohort on a project for Veterans
                that will be intoduced to the site.
              </p>
              &nbsp;
            </div>

            <div>
              <h3 className="text-lm-tertiary dark:text-dm-tertiary">
                Interests
              </h3>
              <p>
                I am Husband, Father, Veteran and hockey fanatic (#LetsGoAvs).
                When I am not working on improving in web development, I like to
                explore different hobbies. Homebrewing and playing guitar have
                been my go to.
              </p>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}

export default About;
