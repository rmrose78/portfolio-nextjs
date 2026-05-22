import React, { useState } from "react";
import Navbar from "../components/Navbar";

function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    setSubmitted(true);
  };

  return (
    <>
      <Navbar />
      <div className="navEmptySpace"></div>

      <main className="contact__main">
        <div className="contact__titleCtr">
          <h1 className="text-lm-tertiary dark:text-dm-tertiary">
            -- Contact --
          </h1>
        </div>

        {!submitted ? (
          <form
            className="form"
            action="https://formsubmit.co/a4e46790d16085ee55ce540fef11f6a8"
            method="POST"
          >
            <div className="nameCtr">
              <div>
                <label
                  htmlFor="firstName"
                  className="text-lm-text-primary dark:text-dm-text-primary"
                >
                  First Name
                </label>
                <input
                  id="firstName"
                  type="text"
                  name="firstName"
                  className="text-lm-tertiary dark:text-dm-tertiary border-[1px] rounded-lg border-lm-text-primary dark:border-dm-text-primary"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="lastName"
                  className="text-lm-text-primary dark:text-dm-text-primary"
                >
                  Last Name
                </label>
                <input
                  id="lastName"
                  type="text"
                  name="lastName"
                  className="text-lm-tertiary dark:text-dm-tertiary border-[1px] rounded-lg border-lm-text-primary dark:border-dm-text-primary"
                  required
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="email"
                className="text-lm-text-primary dark:text-dm-text-primary"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                name="email"
                className="text-lm-tertiary dark:text-dm-tertiary border-[1px] rounded-lg border-lm-text-primary dark:border-dm-text-primary"
                required
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="text-lm-text-primary dark:text-dm-text-primary"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                className="text-lm-tertiary dark:text-dm-tertiary border-[1px] rounded-lg border-lm-text-primary dark:border-dm-text-primary"
                required
              ></textarea>
            </div>

            <div className="btnCtr">
              <button
                type="submit"
                className="text-lm-secondary dark:text-dm-secondary bg-lm-tertiary dark:bg-dm-tertiary"
                onClick={handleSubmit}
              >
                Submit
              </button>
            </div>

            <input type="hidden" name="_subject" value="New submission!" />
            <input
              type="hidden"
              name="_next"
              value="https://ryanrose.netlify.app"
            />
            <input type="hidden" name="_captcha" value="false" />
          </form>
        ) : (
          <div className="thankYouCtr">
            <h1>Thank you!</h1>
            <h3>I will get back to you soon.</h3>
          </div>
        )}
      </main>
    </>
  );
}

export default Contact;
