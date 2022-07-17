import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import {
  Anchor,
  Box,
  Button,
  Center,
  Text,
  Grid,
  Stack,
  MediaQuery,
  Space,
  MantineProvider,
} from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import Link from 'next/link';
import Wrapper from '../components/Wrapper';

const Home: NextPage = () => {
  let largerThanSM = true;
  if (useMediaQuery('(max-width: 900px)')) {
    largerThanSM = false;
  }

  return (
    <>
      <Wrapper home>
        <Box
          component="main"
          sx={{
            padding: '2rem',
          }}
        >
          <Head>
            <title>naman arora</title>
            <meta name="description" content="Home" />
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
          <Box>
            <Center>
              <MediaQuery largerThan="xs" styles={{ fontSize: '4rem' }}>
                <Text
                  sx={{
                    fontSize: '2rem',
                    fontFamily: 'Crete Round',
                  }}
                >
                  namanarora.dev
                </Text>
              </MediaQuery>
            </Center>
            <Grid>
              <Grid.Col span={largerThanSM ? 6 : 12}>
                <Space h="xl" />
                <Stack>
                  <MediaQuery smallerThan="xs" styles={{ fontSize: '1rem' }}>
                    <Text
                      sx={{
                        fontSize: '1.5rem',
                        fontFamily: 'Rubik',
                      }}
                    >
                      This is a website for all my projects in{' '}
                      <MediaQuery
                        smallerThan="xs"
                        styles={{ fontSize: '1rem' }}
                      >
                        <Anchor
                          href="https://reactjs.org/"
                          target="_blank"
                          sx={{
                            fontSize: '1.5rem',
                            fontFamily: 'Rubik',
                          }}
                        >
                          ReactJS
                        </Anchor>
                      </MediaQuery>
                      ,{' '}
                      <MediaQuery
                        smallerThan="xs"
                        styles={{ fontSize: '1rem' }}
                      >
                        <Anchor
                          href="https://nextjs.org/"
                          target="_blank"
                          sx={{
                            fontSize: '1.5rem',
                            fontFamily: 'Rubik',
                          }}
                        >
                          NextJS
                        </Anchor>
                      </MediaQuery>
                      , and{' '}
                      <MediaQuery
                        smallerThan="xs"
                        styles={{ fontSize: '1rem' }}
                      >
                        <Anchor
                          href="https://mantine.dev/"
                          target="_blank"
                          sx={{
                            fontSize: '1.5rem',
                            fontFamily: 'Rubik',
                          }}
                        >
                          Mantine
                        </Anchor>
                      </MediaQuery>
                      ; the website uses Javascript and Typescript to function
                      and run the applications.
                    </Text>
                  </MediaQuery>
                  <MediaQuery smallerThan="xs" styles={{ fontSize: '1rem' }}>
                    <Text
                      sx={{
                        fontSize: '1.5rem',
                        fontFamily: 'Rubik',
                      }}
                    >
                      To learn about me and view my portfolio, visit my website:
                    </Text>
                  </MediaQuery>
                  <MantineProvider theme={{ primaryShade: 2 }}>
                    <Button
                      variant="outline"
                      radius="md"
                      size="md"
                      component="a"
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://namarora.me"
                      color=""
                      style={{ fontSize: '1.2rem', fontFamily: 'Rubik' }}
                    >
                      namarora.me
                    </Button>
                  </MantineProvider>
                  <MediaQuery largerThan="xs" styles={{ fontSize: '3rem' }}>
                    <Text
                      sx={{
                        fontSize: '2rem',
                        fontFamily: 'Crete Round',
                        textAlign: 'center',
                      }}
                    >
                      current projects:
                    </Text>
                  </MediaQuery>
                  <Link href="/apps/weather">
                    <Button
                      variant="outline"
                      radius="md"
                      size="md"
                      style={{ fontSize: '1.2rem', fontFamily: 'Rubik' }}
                    >
                      weather app
                    </Button>
                  </Link>
                  <Link href="/apps/mathnasium/text-generator">
                    <Button
                      variant="outline"
                      radius="md"
                      size="md"
                      style={{ fontSize: '1.2rem', fontFamily: 'Rubik' }}
                    >
                      mathnasium text generator
                    </Button>
                  </Link>
                </Stack>
              </Grid.Col>
              <Grid.Col span={largerThanSM ? 6 : 12}>
                <Center>
                  <Image
                    src="/images/coding.png"
                    alt="Development"
                    width={512}
                    height={512}
                  />
                </Center>
              </Grid.Col>
            </Grid>
          </Box>
        </Box>
      </Wrapper>
    </>
  );
};

export default Home;
