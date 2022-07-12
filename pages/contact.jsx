import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";

function Contact() {
  const [submitted, setSubmitted] = useState(true);

  const handleSubmit = () => {
    setSubmitted(false);
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
        <form
          className="form"
          action="https://formsubmit.co/5f2477ca63df714c2c4a13a5a8d6b803"
          method="POST"
        >
          <div className="nameCtr">
            <div>
              <label
                htmlFor="name"
                className="text-lm-text-primary dark:text-dm-text-primary "
              >
                First Name
              </label>
              <input
                type="name"
                name="name"
                className="text-lm-tertiary dark:text-dm-tertiary border-[1px] rounded-lg border-lm-text-primary dark:border-dm-text-primary"
                required
              />
            </div>
            <div>
              <label
                htmlFor="Last&nbsp;Name"
                className="text-lm-text-primary dark:text-dm-text-primary"
              >
                Last Name
              </label>
              <input
                type="name"
                name="last&nbsp;name"
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
        </form>

        {/* {submitted ? (
        ) : (
          <div className="thankYouCtr">
            <h1>Thank you!</h1>
            <h3>I will get back to you soon.</h3>
          </div>
        )} */}
      </main>
    </>
  );
}

export default Contact;
