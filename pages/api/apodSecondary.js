export default async function handler(req, res) {
  const data = await fetch(
    `https://api.nasa.gov/planetary/apod?api_key=${process.env.NODE_ENV_APOD_API_KEY_SECONDARY}`
  ).then((response) => response.json());
  res.status(200).json(data);
}
