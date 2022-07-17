import type { NextApiRequest, NextApiResponse } from 'next';

export default (req: NextApiRequest, res: NextApiResponse) => {
  const { zipCode } = req.query;

  fetch(
    `https://api.openweathermap.org/data/2.5/weather?zip=${zipCode},us&appid=${process.env.WEATHER_API_KEY}`
  )
    .then((response) => {
      if (!response.ok) {
        throw new Error(
          `This is an HTTP error: The status is ${response.status}`
        );
      }
      return response.json();
    })
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      res.status(500).json({ main: err.message });
    });
};
