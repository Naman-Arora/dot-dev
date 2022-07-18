import {
  Affix,
  Box,
  Button,
  Center,
  Chip,
  Chips,
  Grid,
  MediaQuery,
  Modal,
  NumberInput,
  Space,
  Stack,
  Text,
} from '@mantine/core';
import { showNotification } from '@mantine/notifications';
import { NextPage } from 'next';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import { IconContext } from 'react-icons';
import { MdSettings } from 'react-icons/md';
import { BsExclamationLg } from 'react-icons/bs';
import { TiHome } from 'react-icons/ti';
import { useLocalStorage, useMediaQuery } from '@mantine/hooks';
import WeatherType from '../../components/apps/weather/weatherType';
import AdditionalWeatherInfo from '../../components/apps/weather/additionalWeatherInfo';
import WindSpeedIcon from '../../components/apps/weather/windSpeedIcon';
import WindDirectionIcon from '../../components/apps/weather/windDirection';

type jsonResponse = {
  [key: string]: any;
};

const Main: NextPage = () => {
  const [unit, setUnit] = useLocalStorage<'F' | 'C'>({
    key: 'unit-letter',
    defaultValue: 'C',
  });
  const [savedZipCode, setSavedZipCode] = useLocalStorage({
    key: 'zip-code',
    defaultValue: '10001',
  });
  const [data, setData] = useState<jsonResponse>([]);
  const [mounted, setMounted] = useState(false);
  const [locationModal, setLocationModal] = useState(false);
  const [zipCode, setZipCode] = useState(parseInt(savedZipCode));
  const [windDeg, setWindDeg] = useState(0);
  const [windSpeed, setWindSpeed] = useState(0);
  const [weatherCode, setWeatherCode] = useState(0);
  const [minWeatherInK, setMinWeatherInK] = useState(0);
  const [maxWeatherInK, setMaxWeatherInK] = useState(0);
  const [currentWeatherInK, setCurrentWeatherInK] = useState(0);
  const [city, setCity] = useState('');
  const [country, setCountry] = useState('');
  const [conditions, setConditions] = useState('');

  let minWeather: number;
  let maxWeather: number;
  let currentWeather: number;
  let speed: number;

  let largerThanSM: boolean = true;

  if (useMediaQuery('(max-width: 900px)')) {
    largerThanSM = false;
  }

  useEffect(() => {
    setMounted(true);
    fetch(`/api/weather/${zipCode}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(
            `This is an HTTP error: The status is ${response.status}`
          );
        }
        return response.json();
      })
      .then((actualData) => {
        console.log(actualData);
        setData(actualData);

        setCurrentWeatherInK(actualData.main.temp);
        setMinWeatherInK(actualData.main.temp_min);
        setMaxWeatherInK(actualData.main.temp_max);

        setWindDeg(actualData.wind.deg);
        setWindSpeed(actualData.wind.speed)
        setWeatherCode(actualData.weather[0].id);

        setCity(actualData.name);
        setCountry(actualData.sys.country);
        setConditions(actualData.weather[0].description);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  let deg = windDeg;
  let direction: string;
  if (deg > 15 && deg < 75) {
    direction = 'NE';
  } else if (deg >= 75 && deg <= 105) {
    direction = 'East';
  } else if (deg > 105 && deg < 165) {
    direction = 'SE';
  } else if (deg >= 165 && deg <= 195) {
    direction = 'South';
  } else if (deg > 195 && deg < 255) {
    direction = 'SW';
  } else if (deg >= 255 && deg <= 285) {
    direction = 'West';
  } else if (deg >= 285 && deg <= 345) {
    direction = 'NW';
  } else {
    direction = 'N';
  }

  const toF = (temp: number) => {
    return Math.round((9 / 5) * (temp - 273.15) + 32);
  };

  const toC = (temp: number) => {
    return Math.round(temp - 273.15);
  };

  const toMPH = (speed: number) =>{
    return Math.round(speed * 2.2369);
  }

  if (unit == 'F') {
    minWeather = toF(minWeatherInK);
    maxWeather = toF(maxWeatherInK);
    currentWeather = toF(currentWeatherInK);
    speed = toMPH(windSpeed);
  } else {
    minWeather = toC(minWeatherInK);
    maxWeather = toC(maxWeatherInK);
    currentWeather = toC(currentWeatherInK);
    speed = windSpeed;
  }

  const submitPressed = () => {
    if (zipCode == undefined || zipCode.toString().length != 5) {
      showNotification({
        message: 'Please enter a 5 digit zipcode!',
        autoClose: 5000,
        color: 'red',
        icon: <BsExclamationLg />,
      });
    } else if (zipCode != parseInt(savedZipCode)) {
      setSavedZipCode(zipCode.toString());
      setLocationModal(false);
      setTimeout(() => location.reload(), 1000);
    } else {
      setLocationModal(false);
      console.log(zipCode);
    }
  };

  return (
    <>
      <Head>
        <title>weather</title>
        <meta name="description" content="view the weather" />
        <link rel="icon" href="/main-favicon/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/main-favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/main-favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/main-favicon/favicon-16x16.png"
        />
        <link rel="manifest" href="/main-favicon/site.webmanifest" />
      </Head>
      {mounted && (
        <>
          <div className="weather-gradient-background">
            <div className="weather-glass" />
          </div>
          <IconContext.Provider
            value={{ color: 'white', className: 'global-class-name' }}
          >
            <Affix position={{ top: 10, right: 10 }}>
              <Button
                color="dark"
                radius="md"
                compact
                size="xl"
                onClick={() => setLocationModal(true)}
              >
                <MdSettings />
              </Button>
            </Affix>
            <Affix position={{ top: 10, left: 10 }}>
              <Button
                color="dark"
                radius="md"
                compact
                size="xl"
                onClick={() => setLocationModal(true)}
              >
                <TiHome />
              </Button>
            </Affix>
          </IconContext.Provider>
          <Modal
            centered
            opened={locationModal}
            onClose={() => setLocationModal(false)}
            title="Settings"
            size="md"
            overlayBlur={5}
            transition="fade"
            transitionDuration={500}
            transitionTimingFunction="ease"
          >
            <Center>
              <Text>Change Units:</Text>
            </Center>
            <Space h="sm" />
            <Center>
              <Chips
                variant="filled"
                spacing="md"
                size="md"
                multiple={false}
                value={unit}
                onChange={() =>
                  setUnit((current) => (current === 'C' ? 'F' : 'C'))
                }
              >
                <Chip value="F">Imperial</Chip>
                <Chip value="C">Metric</Chip>
              </Chips>
            </Center>
            <Space h="md" />
            <NumberInput
              placeholder="Change Zip Code"
              label="Change Zip Code"
              radius="md"
              size="md"
              required
              value={zipCode}
              onChange={(val: number) => setZipCode(val)}
              min={0}
            />
            <Space h="md" />
            <Button fullWidth size="md" radius="md" onClick={submitPressed}>
              Submit
            </Button>
          </Modal>
          <Center>
            <Stack>
              <MediaQuery smallerThan="sm" styles={{ fontsize: '3rem' }}>
                <Text
                  sx={{
                    fontSize: '6rem',
                    fontFamily: 'Crete Round',
                    textAlign: 'center',
                    paddingTop: '2rem',
                    color: 'white',
                  }}
                >
                  weather
                </Text>
              </MediaQuery>
              {largerThanSM ? (
                <></>
              ) : (
                <Text
                  sx={{
                    paddingBottom: '1rem',
                    fontSize: '4rem',
                    fontFamily: 'mukta',
                    textAlign: 'center',
                    color: 'white',
                  }}
                >
                  {city}, {country}
                </Text>
              )}
            </Stack>
          </Center>
          <Box
            sx={{
              paddingLeft: '2rem',
              paddingRight: '2rem',
            }}
          >
            <Center>
              <Grid justify="center" align="center" grow>
                <Grid.Col span={largerThanSM ? 6 : 12}>
                  <Text
                    inline
                    sx={{
                      textAlign: 'center',
                    }}
                  >
                    <WeatherType code={weatherCode} />
                  </Text>
                  <Text
                    sx={{
                      paddingTop: '2rem',
                      fontSize: '6rem',
                      fontFamily: 'Exo',
                      textAlign: 'center',
                      color: 'white',
                    }}
                  >
                    {currentWeather} &deg;
                    {unit == 'F' ? 'F' : 'C'}
                  </Text>
                  <Text
                    sx={{
                      padding: 0,
                      fontSize: '3rem',
                      fontFamily: 'mukta',
                      textAlign: 'center',
                      color: 'white',
                    }}
                    transform="capitalize"
                  >
                    {conditions}
                  </Text>
                </Grid.Col>
                <Grid.Col span={largerThanSM ? 6 : 12}>
                  {largerThanSM ? (
                    <Text
                      sx={{
                        padding: 0,
                        fontSize: '4rem',
                        fontFamily: 'mukta',
                        textAlign: 'center',
                        color: 'white',
                      }}
                    >
                      {city}, {country}
                    </Text>
                  ) : (
                    <></>
                  )}
                  <Grid justify="center" align="center" grow>
                    <Grid.Col span={6}>
                      {''}
                      <Text
                        sx={{
                          textAlign: 'center',
                        }}
                      >
                        <WindDirectionIcon deg={windDeg} />
                      </Text>
                      <Text
                        inline
                        sx={{
                          fontSize: '2rem',
                          fontFamily: 'mukta',
                          textAlign: 'center',
                          color: 'white',
                        }}
                      >
                        Wind is blowing {direction}
                      </Text>
                      
                    </Grid.Col>
                    <Grid.Col span={6}>
                      {''}
                      <Text
                        sx={{
                          textAlign: 'center',
                        }}
                      >
                        <WindSpeedIcon speed={windSpeed} />
                      </Text>
                      <Text
                        inline
                        sx={{
                          fontSize: '2rem',
                          fontFamily: 'mukta',
                          textAlign: 'center',
                          color: 'white',
                        }}
                      >
                        Wind Speed: {speed}{unit == 'F' ? ' mi/h' : ' m/s'}
                      </Text>
                    </Grid.Col>
                    <Grid.Col span={6}>
                      <AdditionalWeatherInfo>
                        {''}
                        {minWeather} &deg;
                        {unit == 'F' ? 'F' : 'C'}
                        {''}
                      </AdditionalWeatherInfo>
                      <Text
                        inline
                        sx={{
                          fontSize: '2rem',
                          fontFamily: 'mukta',
                          textAlign: 'center',
                          color: 'white',
                        }}
                      >
                        Minimum Temperature
                      </Text>
                    </Grid.Col>
                    <Grid.Col span={6}>
                      <AdditionalWeatherInfo>
                        {''}
                        {maxWeather} &deg;
                        {unit == 'F' ? 'F' : 'C'}
                        {''}
                      </AdditionalWeatherInfo>
                      <Text
                        inline
                        sx={{
                          fontSize: '2rem',
                          fontFamily: 'mukta',
                          textAlign: 'center',
                          color: 'white',
                        }}
                      >
                        Maximum Temperature
                      </Text>
                    </Grid.Col>
                  </Grid>
                </Grid.Col>
              </Grid>
            </Center>
          </Box>
        </>
      )}
    </>
  );
};

export default Main;
