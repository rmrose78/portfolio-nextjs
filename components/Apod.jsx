import React, { useState, useEffect } from "react";
import { XIcon } from "@heroicons/react/solid";
import styles from "../styles/Apod.module.scss";
import Image from "next/image";

function Apod({ mobileStatus }) {
  let [imageData, setImageData] = useState(null);
  let [error, setError] = useState(null);
  let [loading, setLoading] = useState(true);
  let [display, setDisplay] = useState(false);

  // Fetch APOD api
  useEffect(() => {
    fetch("api/hello")
      .then((response) => {
        if (response.ok) return response.json();
        else throw response;
      })
      .then((data) => setImageData(data))
      .catch((error) => {
        console.error("Error found: ", error);
        setError(error);
      })
      .finally(() => setLoading(false));
  }, []);

  // if (loading) return "loading...";
  // if (error) return "Error!";

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
