import axios from "axios";
import { useEffect, useState } from "react";
import "../styles/StoicQuote.module.scss";
import styles from "../styles/StoicQuote.module.scss";
import ScaleText from "react-scale-text";

function StoicQuote() {
  const [quoteData, setQuoteData] = useState("");

  useEffect(() => {
    async function getStoicQuote() {
      try {
        let response = await axios.get(
          `https://stoicquotesapi.com/v1/api/quotes/random`
        );
        setQuoteData(response.data);
      } catch {
        console.log(`Error found: ${error}`);
      }
    }
    getStoicQuote();
  }, []);

  return (
    <>
      <div className={styles.mainCtr}>
        <div className={styles.bodyCtr}>
          <ScaleText minFontSize={5} maxFontSize={20}>
            <p>{quoteData.body}</p>
          </ScaleText>
        </div>
        <p>
          <span className={styles.author}>- {quoteData.author}</span>
        </p>
      </div>
    </>
  );
}

export default StoicQuote;
