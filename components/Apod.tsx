import React, { useState, useEffect, useReducer } from "react";
import { XIcon } from "@heroicons/react/solid";
import Image from "next/image";
import axios from "axios";

interface ApodData {
  url: string;
  title: string;
  explanation: string;
}

type State = {
  loading: boolean;
  error: string | null | undefined;
  apodData: ApodData | null | undefined;
};

enum ACTIONS {
  CALL_API = "call-api",
  SUCCESS = "success",
  ERROR = "error",
}

interface Action {
  type: ACTIONS;
  data?: ApodData;
  error?: string;
}

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
        console.log({ response });
        dispatch({ type: ACTIONS.SUCCESS, data: response?.data });
      } catch (error) {
        console.error(error);
        dispatch({ type: ACTIONS.ERROR, error: error?.message });
      }
    };

    getApodData();
  }, []);

  const [display, setDisplay] = useState(false);

  const handleClick = () => {
    setDisplay(!display);
  };

  const renderButton = () => (
    <div>
      <button
        ref={skipNavRef}
        className={`apod__btn bg-lm-primary dark:bg-dm-tertiary text-lm-${
          mobileStatus ? "tertiary" : "primary"
        } dark:text-dm-primary hover:bg-lm-text-secondary hover:dark:bg-white`}
        onClick={handleClick}
      >
        {mobileStatus ? "APOD" : "Astronomy PoD"}
      </button>
    </div>
  );

  const renderContent = () => (
    <div className="contentCtr bg-lm-secondary dark:bg-dm-secondary border rounded-lg">
      <XIcon
        className="cursor-pointer text-lm-tertiary dark:text-dm-tertiary w-10 right-0 top-0 absolute"
        onClick={handleClick}
      />
      <div className="upperCtr">
        <h4 className="apodTitle text-lm-tertiary dark:text-dm-tertiary">
          Astronomy Picture of the Day
        </h4>

        <a href={apodData?.url} target="_blank" rel="noreferrer">
          <div className="imgCtr">
            <Image
              src={apodData?.url ? apodData?.url : ""}
              layout="fill"
              objectFit="contain"
              alt="Nasa Astronomy of the Day"
            />
          </div>
        </a>
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
    return <div>Error found: {error}</div>;
  }

  return <>{display ? renderContent() : renderButton()}</>;
};

export default Apod;
