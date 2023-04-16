import { NextApiRequest, NextApiResponse } from "next";
import axios, { AxiosError } from "axios";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const maxRetries = 3;
  let retries = 0;
  let data: any = null;
  const apiKey = process.env.NEXT_PUBLIC_APOD_API_KEY;

  if (!apiKey) {
    res.status(500).send("API key is missing or not defined.");
    return;
  }

  while (retries < maxRetries) {
    try {
      const response = await axios.get(
        `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`
      );
      data = response.data;
      break;
    } catch (error) {
      retries++;

      if (axios.isAxiosError(error)) {
        console.error(
          `Error fetching APOD data (attempt ${retries}): ${error.message}`
        );
        if (error.response) {
          console.error(`Response status: ${error.response.status}`);
        }
      } else {
        console.error(
          `Error fetching APOD data (attempt ${retries}):`,
          error instanceof Error ? error.message : error
        );
      }
    }
  }

  if (data) {
    res.status(200).json(data);
  } else {
    res.status(500).send("Failed to fetch APOD data");
  }
};

export default handler;
