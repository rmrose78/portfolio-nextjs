import React, { useState } from "react";
import Navbar from "../components/Navbar";

function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const formData = new FormData(e.target);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_KEY,
          firstName: formData.get("firstName"),
          lastName: formData.get("lastName"),
          email: formData.get("email"),
          message: formData.get("message"),
        }),
      });

      const data = await response.json();

      if (data.success) {
        setSubmitted(true);
      } else {
        setError(
          "An error occurred while submitting the form. Please try again.",
        );
      }
    } catch (err) {
      console.error("Error submitting form:", err);
      setError(
        "An error occurred while submitting the form. Please try again.",
      );
    } finally {
      setLoading(false);
    }
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
          <form className="form" onSubmit={handleSubmit}>
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

            {error && <p className="text-red-500 text-sm">{error}</p>}

            <div className="btnCtr">
              <button
                type="submit"
                disabled={loading}
                className="text-lm-secondary dark:text-dm-secondary bg-lm-tertiary dark:bg-dm-tertiary"
              >
                {loading ? "Submitting..." : "Submit"}
              </button>
            </div>
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
