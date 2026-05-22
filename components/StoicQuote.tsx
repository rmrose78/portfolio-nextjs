import axios from "axios";
import { useEffect, useState } from "react";
import ScaleText from "react-scale-text";

interface Data {
  author: string;
  quote: string;
}

const defaultData = {
  author: "",
  quote: "",
};

const StoicQuote: React.FC = () => {
  const [data, setData] = useState<Data>(defaultData);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const getStoicQuote = async () => {
      try {
        const response = await axios.get(
          `https://api.themotivate365.com/stoic-quote`,
        );
        setData(response?.data);
      } catch (err) {
        const msg = err instanceof Error ? err.message : String(err);
        console.error("StoicQuote error:", msg);
        setHasError(true);
      }
    };
    getStoicQuote();
  }, []);

  if (hasError) {
    return null;
  }

  return (
    <>
      <div className="mainCtr">
        <div className="bodyCtr">
          <ScaleText minFontSize={5} maxFontSize={20}>
            <p className="text-lm-primary dark:text-dm-tertiary">
              {data.quote}
            </p>
          </ScaleText>
        </div>
        <p>
          <span className="author text-lm-primary dark:text-dm-tertiary">
            - {data.author}
          </span>
        </p>
      </div>
    </>
  );
};

export default StoicQuote;
