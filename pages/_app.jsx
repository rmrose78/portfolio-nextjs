import "../styles/globals.scss";
import "../styles/Home.scss";
import "../styles/Navbar.scss";
import "../styles/about.scss";
import "../styles/contact.scss";
import "../styles/Apod.scss";
import "@fortawesome/fontawesome-svg-core/styles.css"; // FA: import Font Awesome CSS
import { config } from "@fortawesome/fontawesome-svg-core"; // FA: -
config.autoAddCss = false; // FA: Tell Font Awesome to skip adding the CSS automatically since it's being imported above
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";
import { ThemeProvider } from "next-themes";

library.add(fab, faCoffee);

function MyApp({ Component, pageProps }) {
  let [windowWidth, setWindowWidth] = useState("");
  let [mobileStatus, setMobileStatus] = useState(
    windowWidth < 760 ? true : false
  );

  return (
    <ThemeProvider attribute="class">
      <div className="bg-white dark:bg-dm-primary -z-99">
        <Component {...pageProps} mobileStatus={mobileStatus} />
      </div>
    </ThemeProvider>
  );
}

export default MyApp;
