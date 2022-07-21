import type { NextPage } from 'next';
import { Box, Center, Text } from '@mantine/core';
import Wrapper from '../components/Wrapper';
import MainHead from '../components/MainHead';

const Credits: NextPage = () => {
  return (
    <>
      <Wrapper>
        <Box
          component="main"
          sx={{
            padding: '2rem',
          }}
        >
          <MainHead title="credits" />
          <Box>
            <Center>
              <Text
                sx={{
                  fontSize: '3rem',
                  fontFamily: 'Crete Round',
                }}
              >
                credits
              </Text>
            </Center>
            <Box>
              <a
                href="https://www.flaticon.com/free-icons/development"
                title="development icons"
              >
                Development icons created by Freepik - Flaticon
              </a>
            </Box>
          </Box>
        </Box>
      </Wrapper>
    </>
  );
};

export default Credits;
