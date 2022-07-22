import { Center, MediaQuery, Text } from '@mantine/core';

type Props = {
  children: React.ReactNode;
  paddingTop?: number;
};

const PageTitle = (props: Props) => {
  let pT: number;
  if(props.paddingTop == null){
    pT = 1;
  } else {
    pT = props.paddingTop;
  }

  return (
    <Center>
      <MediaQuery
        largerThan="sm"
        styles={{
          fontSize: '4rem',
          paddingTop: `${pT}` + 'rem',
        }}
      >
        <Text
          sx={{
            fontSize: '3rem',
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
