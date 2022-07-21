import { Anchor, Box, Center, Grid, MediaQuery, Text } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import Link from 'next/link';
import MainHead from '../../components/MainHead';
import PageTitle from '../../components/PageTitle';
import Wrapper from '../../components/Wrapper';

const Apps = () => {
  let largerThanSM = true;
  if (useMediaQuery('(max-width: 900px)')) {
    largerThanSM = false;
  }

  const completedAppNames = ['mathnasium text generator', 'weather app'];
  const completedAppLinks = ['/mathnasium/text-generator', '/weather'];
  const completedAppDescriptions = [
    'A text message generator for Mathnasium, which takes input in the form of text in order to return a text message that should be sent to parents.',
    "A weather app which utilizes a user's zip code to provide current weather information.",
  ];

  const wipAppNames = ['todo list', 'weight tracker'];
  const wipAppLinks = ['/todo', '/weight-tracker'];
  const wipAppDescriptions = [
    'A todo list app in which the user inputs tasks that need to be completed and then can strike them off when completed.',
    'A weight tracking app in which the user inputs their weight daily and the weight is subsequently graphed to show change in weight.',
  ];

  const completedApps = completedAppNames.map((item, index) => {
    const url = '/apps' + completedAppLinks[index];
    return (
      <>
        <Link href={url}>
          <Anchor color="pink">
            <Text
              align="left"
              weight={700}
              sx={{
                fontSize: '2rem',
                paddingTop: '1rem',
              }}
            >
              {item}
            </Text>
          </Anchor>
        </Link>
        <Text>{completedAppDescriptions[index]}</Text>
      </>
    );
  });

  const wipApps = wipAppNames.map((item, index) => {
    const url = '/apps' + wipAppLinks[index];
    return (
      <>
        <Link href={url}>
          <Anchor color="pink">
            <Text
              align="left"
              weight={700}
              color="pink"
              sx={{
                fontSize: '2rem',
                paddingTop: '1rem',
              }}
            >
              {item}
            </Text>
          </Anchor>
        </Link>{' '}
        <Text>{wipAppDescriptions[index]}</Text>
      </>
    );
  });

  return (
    <>
      <MainHead title="my apps" />
      <Wrapper>
        <PageTitle>my apps</PageTitle>
        <Grid>
          <Grid.Col span={largerThanSM ? 6 : 12}>
            <Box sx={{ paddingLeft: '1rem', paddingRight: '1rem' }}>
              <Text
                align="center"
                weight={700}
                color="blue"
                sx={{
                  fontSize: '3rem',
                }}
              >
                Completed Apps
              </Text>
              {completedApps}
            </Box>
          </Grid.Col>
          <Grid.Col span={largerThanSM ? 6 : 12}>
            <Box sx={{ paddingLeft: '1rem', paddingRight: '1rem' }}>
              <Text
                align="center"
                weight={700}
                color="blue"
                sx={{
                  fontSize: '3rem',
                }}
              >
                Work-In-Progress Apps
              </Text>
              {wipApps}
            </Box>
          </Grid.Col>
        </Grid>
      </Wrapper>
    </>
  );
};

export default Apps;
