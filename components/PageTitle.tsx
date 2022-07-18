import { Center, MediaQuery, Text } from '@mantine/core';

type Props = {
  children: React.ReactNode;
};

const PageTitle = (props: Props) => {
  return (
    <Center>
      <MediaQuery
        largerThan="sm"
        styles={{
          fontSize: '4rem',
          paddingTop: '1rem',
        }}
      >
        <Text
          sx={{
            fontSize: '2rem',
            fontFamily: 'Crete Round',
            textAlign: 'center',
            paddingTop: '2rem',
          }}
        >
          {props.children}
        </Text>
      </MediaQuery>
    </Center>
  );
};

export default PageTitle;
