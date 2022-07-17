import { MediaQuery, Text } from '@mantine/core';

type Props = {
  children: React.ReactNode;
};

const AdditionalWeatherInfo = (props: Props) => {
  return (
    <>
      <MediaQuery smallerThan="sm" styles={{ fontsize: '3rem' }}>
        <Text
          sx={{
            fontSize: '4rem',
            fontFamily: 'Exo',
            textAlign: 'center',
            color: 'white',
          }}
        >
          {props.children}
        </Text>
      </MediaQuery>
    </>
  );
};

export default AdditionalWeatherInfo;
