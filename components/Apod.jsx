import React, { useState, useEffect, useReducer } from "react";
import { XIcon } from "@heroicons/react/solid";
import styles from "../styles/Apod.module.scss";
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

function Apod({ mobileStatus }) {
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

  useEffect(() => {
    console.log(state.apodData);
  }, [state.apodData]);

  let [display, setDisplay] = useState(false);

  // let [secondaryFetch, setSecondaryFetch] = useState(true);

  // useEffect(() => {
  //   if (imageData.media_type !== "image" && secondaryFetch) {
  //     const getImageData = async () => {
  //       let response = await axios.get("api/apodSecondary");
  //       setImageData(response.data);
  //     };

  //     getImageData().catch(console.error);
  //   }
  //   return setSecondaryFetch(false);
  // }, [imageData]);

  const handleClick = () => {
    setDisplay(!display);
  };

  if (loading === true) "Loading...";
  if (error === true) `error found ${error}`;

  return (
    <>
      {display ? (
        <div className={styles.contentCtr}>
          <XIcon
            className="text-[#ffd486] w-10 right-0 top-0 absolute"
            onClick={handleClick}
          />
          <div className={styles.upperCtr}>
            <h4 className={styles.apodTitle}>Astronomy Picture of the Day</h4>

            <a href={apodData.hdurl} target="blank">
              <div className={styles.imgCtr}>
                <Image
                  src={apodData.url}
                  layout="fill"
                  objectFit="contain"
                  alt="Nasa Astronomy of the Day"
                />
              </div>
            </a>
          </div>
          <div className={styles.lowerCtr}>
            <div className={styles.titleCtr}>
              <h4>{apodData.title}</h4>
            </div>
            <p>{apodData.explanation}</p>
          </div>
        </div>
      ) : mobileStatus ? (
        <div>
          <button className={styles.btn} onClick={handleClick}>
            APOD
          </button>
        </div>
      ) : (
        <div>
          <button className={styles.btn} onClick={handleClick}>
            Astronomy PoD
          </button>
        </div>
      )}
    </>
  );
}

export default Apod;
