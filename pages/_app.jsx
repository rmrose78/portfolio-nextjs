import "../styles/globals.scss";
import "@fortawesome/fontawesome-svg-core/styles.css"; // FA: import Font Awesome CSS
import { config } from "@fortawesome/fontawesome-svg-core"; // FA: -
config.autoAddCss = false; // FA: Tell Font Awesome to skip adding the CSS automatically since it's being imported above
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";

library.add(fab, faCoffee);

function MyApp({ Component, pageProps }) {
  let [windowWidth, setWindowWidth] = useState("");
  let [mobileStatus, setMobileStatus] = useState(
    windowWidth < 760 ? true : false
  );

  return <Component {...pageProps} mobileStatus={mobileStatus} />;
}

export default MyApp;
