import axios from "axios";
import { useEffect, useState } from "react";
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
      <div className="mainCtr">
        <div className="bodyCtr">
          <ScaleText minFontSize={5} maxFontSize={20}>
            <p className="text-lm-primary dark:text-dm-tertiary">
              {quoteData.body}
            </p>
          </ScaleText>
        </div>
        <p>
          <span className="author text-lm-primary dark:text-dm-tertiary">
            - {quoteData.author}
          </span>
        </p>
      </div>
    </>
  );
}

export default StoicQuote;
