import React from "react";
import Navbar from "../components/Navbar";
import styles from "../styles/contact.module.scss";

function Contact() {
  return (
    <>
      <Navbar />
      <div className={styles.navEmptySpace}></div>

      <main className={styles.main}>
        <div className={styles.titleCtr}>
          <h1>-- Contact --</h1>
        </div>
      </main>

      <form
        className={styles.form}
        action="https://formsubmit.co/5f2477ca63df714c2c4a13a5a8d6b803"
        method="POST"
      >
        <div className={styles.nameCtr}>
          <div>
            <label htmlFor="name">First Name</label>
            <input type="name" name="name" required />
          </div>
          <div>
            <label htmlFor="Last&nbsp;Name">Last Name</label>
            <input type="name" name="last&nbsp;name" required />
          </div>
        </div>

        <div>
          <label htmlFor="email">Email</label>
          <input type="email" name="email" required />
        </div>
        <div>
          <label htmlFor="message">Message</label>
          <textarea name="message" rows="4" required></textarea>
        </div>
        <div className={styles.btnCtr}>
          <button type="submit">Submit</button>
        </div>
        <input type="hidden" name="_subject" value="New submission!" />
      </form>
    </>
  );
}

export default Contact;
