import axios from "axios";
import { error } from "console";
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

  useEffect(() => {
    const getStoicQuote = async () => {
      try {
        const response = await axios.get(
          `https://api.themotivate365.com/stoic-quote`
        );
        setData(response?.data);
      } catch (error) {
        console.error(`Error found: ${error}`);
      }
    };
    getStoicQuote();
  }, []);

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
