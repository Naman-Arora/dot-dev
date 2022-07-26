import { Box, Center, Code, List, Text, Title } from '@mantine/core';
import InfoTable from '../../components/apps/search/InfoTable';
import MainHead from '../../components/MainHead';
import PageTitle from '../../components/PageTitle';
import Wrapper from '../../components/Wrapper';

const Search = () => {
  return (
    <>
      <MainHead title="search" />
      <Wrapper>
        <Center>
          <PageTitle>multi-search</PageTitle>
        </Center>
        <Center>
          <Text
            sx={{
              fontFamily: 'Rubik',
              fontSize: '1.5rem',
            }}
          >
            Try it here: {''}
            <Text
              inherit
              component="a"
              href="https://search.namanarora.dev"
              sx={(theme) => ({
                color: theme.colors.cyan[4],
                '&:hover': {
                  textDecoration: 'underline',
                },
              })}
            >
              search.namanarora.dev
            </Text>
            {''}
          </Text>
        </Center>
        <Center>
          <Text
            sx={{
              fontFamily: 'Rubik',
              fontSize: '1.5rem',
            }}
          >
            Download it here: {''}
            <Text
              inherit
              component="a"
              href="https://search.namanarora.dev"
              sx={(theme) => ({
                color: theme.colors.cyan[4],
                '&:hover': {
                  textDecoration: 'underline',
                },
              })}
            >
              chrome webstore
            </Text>
            {''}
          </Text>
        </Center>
        <Box
          sx={{
            paddingRight: '2rem',
            paddingLeft: '2rem',
          }}
        >
          <Text color="pink">
            <Title
              sx={{
                fontFamily: 'Rubik',
              }}
            >
              About Multi-Search
            </Title>
          </Text>
          <Text
            sx={{
              fontFamily: 'Rubik',
              fontSize: '1.25rem',
            }}
          >
            Multi-Search is a new tab extension on the Google Chrome Webstore
            that utilizes{' '}
            <Text
              inherit
              component="a"
              target="_blank"
              rel="noopener noreferrer"
              href="https://reactjs.org/"
              sx={(theme) => ({
                color: theme.colors.cyan[4],
                '&:hover': {
                  textDecoration: 'underline',
                },
              })}
            >
              React
            </Text>
            ,{' '}
            <Text
              inherit
              component="a"
              target="_blank"
              rel="noopener noreferrer"
              href="https://mantine.dev/"
              sx={(theme) => ({
                color: theme.colors.cyan[4],
                '&:hover': {
                  textDecoration: 'underline',
                },
              })}
            >
              Mantine
            </Text>
            , and{' '}
            <Text
              inherit
              component="a"
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.typescriptlang.org/"
              sx={(theme) => ({
                color: theme.colors.cyan[4],
                '&:hover': {
                  textDecoration: 'underline',
                },
              })}
            >
              Typescript
            </Text>{' '}
            to provide a series of shortcut commands that can be used to make
            search queries across many different preset websites. The goal of
            this Google Chrome Extension is to replace your new tab page with a
            shortcut based search box. With supported websites, granted the
            setting is turned on, a preview of the response can be seen.
          </Text>
          <Text color="pink" id='previews'>
            <Title
              sx={{
                paddingTop: '2rem',
                fontFamily: 'Rubik',
              }}
            >
              Previews
            </Title>
          </Text>
          <Text
            sx={{
              fontFamily: 'Rubik',
              fontSize: '1.25rem',
            }}
          >
            Previews are powered by the{' '}
            <Text
              inherit
              component="span"
              sx={{
                fontFamily: 'monospace',
              }}
            >{`"<iframe>"`}</Text>{' '}
            html element. However, since some websites send an{' '}
            <Text
              inherit
              component="span"
              sx={{
                fontFamily: 'monospace',
              }}
            >
              "X-Frame-Options: SAMEORIGIN"
            </Text>{' '}
            response, not all websites allow previews.
          </Text>
          <Text color="pink" id='commands'>
            <Title
              sx={{
                paddingTop: '2rem',
                fontFamily: 'Rubik',
              }}
            >
              Shortcut Commands
            </Title>
          </Text>
          <Center>
            <InfoTable />
          </Center>
          <Text color="pink" id='acknowledgements'>
            <Title
              sx={{
                paddingTop: '2rem',
                fontFamily: 'Rubik',
              }}
            >
              Acknowledgements
            </Title>
          </Text>
          <List
            sx={{
              fontFamily: 'Rubik',
              fontSize: '1.25rem',
              paddingBottom: '1rem',
            }}
          >
            <List.Item>
              <Text
                weight={600}
                inherit
                component="a"
                target="_blank"
                rel="noopener noreferrer"
                href="https://reactjs.org/"
                sx={(theme) => ({
                  color: theme.colors.cyan[4],
                  '&:hover': {
                    textDecoration: 'underline',
                  },
                })}
              >
                <strong>ReactJS:</strong>
              </Text>{' '}
              for all the javascript libraries needed to run this app.
            </List.Item>
            <List.Item>
              <Text
                weight={600}
                inherit
                component="a"
                target="_blank"
                rel="noopener noreferrer"
                href="https://mantine.dev/"
                sx={(theme) => ({
                  color: theme.colors.cyan[4],
                  '&:hover': {
                    textDecoration: 'underline',
                  },
                })}
              >
                <strong>Mantine:</strong>
              </Text>{' '}
              for the components used in this app.
            </List.Item>
            <List.Item>
              <Text
                weight={600}
                inherit
                component="a"
                target="_blank"
                rel="noopener noreferrer"
                href="https://day.js.org/"
                sx={(theme) => ({
                  color: theme.colors.cyan[4],
                  '&:hover': {
                    textDecoration: 'underline',
                  },
                })}
              >
                <strong>DayJS:</strong>
              </Text>{' '}
              for the date and time libraries needed to run this app.
            </List.Item>
            <List.Item>
              <Text
                weight={600}
                inherit
                component="a"
                target="_blank"
                rel="noopener noreferrer"
                href="https://vercel.com/"
                sx={(theme) => ({
                  color: theme.colors.cyan[4],
                  '&:hover': {
                    textDecoration: 'underline',
                  },
                })}
              >
                <strong>Vercel:</strong>
              </Text>{' '}
              for freely hosting this web app.
            </List.Item>
            <List.Item>
              <Text
                weight={600}
                inherit
                component="a"
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/"
                sx={(theme) => ({
                  color: theme.colors.cyan[4],
                  '&:hover': {
                    textDecoration: 'underline',
                  },
                })}
              >
                <strong>Github:</strong>
              </Text>{' '}
              for freely saving the repositories of this web app.
            </List.Item>
            <List.Item>
              <Text
                weight={600}
                inherit
                component="a"
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/react-icons/react-icons"
                sx={(theme) => ({
                  color: theme.colors.cyan[4],
                  '&:hover': {
                    textDecoration: 'underline',
                  },
                })}
              >
                <strong>React Icons:</strong>
              </Text>{' '}
              for packaging all the freely avaliable icons specifically icons from{' '}
              <Text
                weight={600}
                inherit
                component="a"
                target="_blank"
                rel="noopener noreferrer"
                href="https://tabler-icons.io/"
                sx={(theme) => ({
                  color: theme.colors.cyan[4],
                  '&:hover': {
                    textDecoration: 'underline',
                  },
                })}
              >
                <strong>Tabler Icons</strong>
              </Text>{' '}
              and icons from{' '}
              <Text
                weight={600}
                inherit
                component="a"
                target="_blank"
                rel="noopener noreferrer"
                href="https://fontawesome.com//"
                sx={(theme) => ({
                  color: theme.colors.cyan[4],
                  '&:hover': {
                    textDecoration: 'underline',
                  },
                })}
              >
                <strong>Font Awesome</strong>
              </Text>
              {'.'}
            </List.Item>
          </List>
        </Box>
      </Wrapper>
    </>
  );
};

export default Search;
