import React, { useState, useEffect, useReducer } from "react";
import { XIcon } from "@heroicons/react/solid";
import Image from "next/image";
import axios from "axios";

const ACTIONS = {
  CALL_API: "call-api",
  SUCCESS: "success",
  ERROR: "error",
};

const apodDataReducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.CALL_API:
      return { ...state, loading: true };
    case ACTIONS.SUCCESS:
      return { ...state, loading: false, apodData: action.data };
    case ACTIONS.ERROR:
      return { ...state, loading: false, error: action.error };
  }
};

const intialState = {
  apodData: "",
  loading: false,
  error: null,
};

function Apod({ mobileStatus, skipNavRef }) {
  const [state, dispatch] = useReducer(apodDataReducer, intialState);
  const { apodData, loading, error } = state;

  useEffect(() => {
    dispatch({ type: ACTIONS.CALL_API });
    const getApodData = async () => {
      let response = await axios.get("api/apodDefault");
      if (response.status == 200) {
        dispatch({ type: ACTIONS.SUCCESS, data: response.data });
      }
      dispatch({ type: ACTIONS.ERROR, error: response.error });
    };

    getApodData();
  }, []);

  // useEffect(() => {
  //   console.log(state.apodData);
  // }, [state.apodData]);

  let [display, setDisplay] = useState(false);

  const handleClick = () => {
    setDisplay(!display);
  };

  if (loading === true) "Loading...";
  if (error === true) `error found ${error}`;

  return (
    <>
      {display ? (
        <div className="contentCtr bg-lm-secondary dark:bg-dm-secondary border rounded-lg">
          <XIcon
            className="bg-lm-tertiary dark:bg-dm-tertiary w-10 right-0 top-0 absolute"
            onClick={handleClick}
          />
          <div className="upperCtr">
            <h4 className="apodTitle text-lm-tertiary dark:text-dm-tertiary">
              Astronomy Picture of the Day
            </h4>

            <a href="hdurl" target="blank">
              <div className="imgCtr">
                <Image
                  src={apodData.url}
                  layout="fill"
                  objectFit="contain"
                  alt="Nasa Astronomy of the Day"
                />
              </div>
            </a>
          </div>
          <div className="lowerCtr border border-lm-tertiary dark:border-dm-tertiary bg-lm-primary dark:bg-dm-primary">
            <div className="titleCtr text-lm-tertiary dark:text-dm-tertiary">
              <h4>{apodData.title}</h4>
            </div>
            <p>{apodData.explanation}</p>
          </div>
        </div>
      ) : mobileStatus ? (
        <div>
          <button
            ref={skipNavRef}
            className="apod__btn bg-lm-primary dark:bg-dm-tertiary text-lm-tertiary dark:text-dm-primary hover:bg-lm-text-secondary hover:dark:bg-white"
            onClick={handleClick}
          >
            APOD
          </button>
        </div>
      ) : (
        <div>
          <button
            ref={skipNavRef}
            className="apod__btn bg-lm-primary dark:bg-dm-tertiary text-lm-primary dark:text-dm-primary hover:bg-lm-text-secondary hover:dark:bg-white"
            onClick={handleClick}
          >
            Astronomy PoD
          </button>
        </div>
      )}
    </>
  );
}

export default Apod;
