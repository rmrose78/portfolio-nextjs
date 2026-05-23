import React, { useState, useEffect, useReducer } from "react";
import { XIcon } from "@heroicons/react/solid";
import Image from "next/image";
import axios from "axios";

interface ApodData {
  url: string;
  title: string;
  explanation: string;
}

interface State {
  loading: boolean;
  error: string | null | undefined;
  apodData: ApodData | null | undefined;
}

type Action =
  | { type: typeof ACTIONS.CALL_API }
  | { type: typeof ACTIONS.SUCCESS; data: ApodData }
  | { type: typeof ACTIONS.ERROR; error: string };

const ACTIONS = {
  CALL_API: "call-api",
  SUCCESS: "success",
  ERROR: "error",
} as const;

const apodDataReducer = (state: State, action: Action): State => {
  switch (action.type) {
    case ACTIONS.CALL_API:
      return { ...state, loading: true };
    case ACTIONS.SUCCESS:
      return { ...state, loading: false, apodData: action.data };
    case ACTIONS.ERROR:
      return { ...state, loading: false, error: action.error };
    default:
      return state;
  }
};

const initialState: State = {
  apodData: null,
  loading: false,
  error: null,
};

interface Props {
  mobileStatus: boolean;
  skipNavRef: React.RefObject<HTMLButtonElement>;
}

const Apod: React.FC<Props> = ({ mobileStatus, skipNavRef }) => {
  const [state, dispatch] = useReducer(apodDataReducer, initialState);
  const { apodData, loading, error } = state;

  useEffect(() => {
    dispatch({ type: ACTIONS.CALL_API });
    const getApodData = async () => {
      try {
        const response = await axios.get<ApodData>("api/getApodData");
        dispatch({ type: ACTIONS.SUCCESS, data: response?.data });
      } catch (error) {
        console.error(error);
        const errorMessage =
          error instanceof Error ? error.message : "An error occurred";
        dispatch({ type: ACTIONS.ERROR, error: errorMessage });
      }
    };

    getApodData();
  }, []);

  const [display, setDisplay] = useState(false);

  const handleClick = () => {
    setDisplay(!display);
  };

  const renderButton = () => (
    <>
      <button
        ref={skipNavRef}
        className={`apod__btn bg-lm-primary dark:bg-dm-tertiary text-lm-${
          mobileStatus ? "tertiary" : "primary"
        } dark:text-dm-primary hover:bg-lm-text-secondary hover:dark:bg-white`}
        onClick={handleClick}
      >
        {`Today in Space`}
      </button>
    </>
  );

  const renderContent = () => (
    <div className="contentCtr bg-lm-secondary dark:bg-dm-secondary border rounded-lg">
      <button
        onClick={handleClick}
        aria-label="Close Astronomy Picture of the Day modal"
        className="absolute right-0 top-0 p-2 cursor-pointer text-lm-tertiary dark:text-dm-tertiary focus-visible:outline-2 focus-visible:outline-offset-2"
      >
        <XIcon className="w-6 h-6" />
      </button>
      <div className="upperCtr">
        <h4 className="apodTitle text-lm-tertiary dark:text-dm-tertiary">
          Astronomy Picture of the Day
        </h4>

        {apodData?.url ? (
          <a href={apodData.url} target="_blank" rel="noreferrer">
            <div className="imgCtr">
              <Image
                src={apodData.url}
                layout="fill"
                objectFit="contain"
                alt="Nasa Astronomy of the Day"
                unoptimized
              />
            </div>
          </a>
        ) : null}
      </div>
      <div className="lowerCtr border border-lm-tertiary dark:border-dm-tertiary bg-lm-primary dark:bg-dm-primary">
        <div className="titleCtr text-lm-tertiary dark:text-dm-tertiary">
          <h4>{apodData?.title}</h4>
        </div>
        <p className="text-lm-tertiary dark:text-dm-tertiary">
          {apodData?.explanation}
        </p>
      </div>
    </div>
  );

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    // Don't render the component UI when the APOD API fails in production.
    // The error is already logged in the catch; return null to avoid showing
    // an intrusive error message at the top of the page.
    return null;
  }

  return <>{display ? renderContent() : renderButton()}</>;
};

export default Apod;
