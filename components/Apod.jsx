import React, { useState, useEffect, useCallback } from "react";
import { XIcon } from "@heroicons/react/solid";
import styles from "../styles/Apod.module.scss";
import Image from "next/image";
import axios from "axios";

function Apod({ mobileStatus }) {
  let [imageData, setImageData] = useState("");
  let [display, setDisplay] = useState(false);
  let [error, setError] = useState("");

  useEffect(() => {
    const getImageData = async () => {
      let response = await axios.get("api/apodDefault");
      setImageData(response.data);
    };

    getImageData().catch(console.error);
  }, []);

  useEffect(() => {
    if (imageData.media_type !== "image") {
      const getImageData = async () => {
        let response = await axios.get("api/apodSecondary");
        setImageData(response.data);
      };

      getImageData().catch(console.error);
    }
  }, [imageData]);

  // Content toggle
  const handleClick = () => {
    setDisplay(!display);
  };

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

            <a href={imageData.hdurl} target="blank">
              <div className={styles.imgCtr}>
                <Image
                  src={imageData.url}
                  layout="fill"
                  objectFit="contain"
                  alt="Nasa Astronomy of the Day"
                />
              </div>
            </a>
          </div>
          <div className={styles.lowerCtr}>
            <div className={styles.titleCtr}>
              <h4>{imageData.title}</h4>
            </div>
            <p>{imageData.explanation}</p>
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
