import {
  ActionIcon,
  Badge,
  Box,
  Space,
  Text,
  TextInput,
  Paper,
  Group,
  Transition,
} from '@mantine/core';
import { getHotkeyHandler } from '@mantine/hooks';
import { NextPage } from 'next';
import Head from 'next/head';
import { useState } from 'react';
import PageTitle from '../../components/PageTitle';
import Wrapper from '../../components/Wrapper';
import { TbArrowRight, TbSearch } from 'react-icons/tb';

const Search: NextPage = () => {
  const [value, setValue] = useState('');

  const engines = [
    'Search the Web for:',
    'Google:',
    'Wikipedia:',
    'Thesaurus:',
    'Dictionary:',
  ];

  let engineNum = 0;
  let query = '';

  const gogl = new RegExp('^g |^google ', 'gmi');
  const wiki = new RegExp('^w |^wikipedia ', 'gmi');
  const thes = new RegExp('^t |^thesaurus ', 'gmi');
  const dict = new RegExp('^d |^dictionary ', 'gmi');

  if (gogl.test(value)) {
    query = value.replace(gogl, '');
    engineNum = 1;
  } else if (wiki.test(value)) {
    query = value.replace(wiki, '');
    engineNum = 2;
  } else if (thes.test(value)) {
    query = value.replace(thes, '');
    engineNum = 3;
  } else if (dict.test(value)) {
    query = value.replace(dict, '');
    engineNum = 4;
  } else {
    query = value;
    engineNum = 0;
  }

  const queries = [
    ['Search the Web for:', 'grape', `https://www.google.com/search?q=`],
    ['Google', 'orange', `https://www.google.com/search?q=`],
    ['Twitter', 'blue', `https://twitter.com/search?q=`],
    [
      'Instagram',
      'pink',
      `https://www.instagram.com/explore/search/keyword/?q=`,
    ],
    [
      'LinkedIn',
      'indigo',
      `https://www.linkedin.com/search/results/all/?keywords=`,
    ],
    // ['Stack Overflow', 'yellow', ],
  ];

  return (
    <>
      <Head>
        <title>search</title>
        <meta name="description" content="search like spotlight" />
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
      <Wrapper>
        <PageTitle>search</PageTitle>
        <TextInput
          icon={<TbSearch size={36} />}
          radius="xl"
          size="xl"
          rightSection={
            <ActionIcon
              size={36}
              radius="xl"
              variant="filled"
              color="blue"
              sx={{ marginRight: '1rem' }}
              onClick={() => console.log('Hello!')}
            >
              <TbArrowRight size={36} />
            </ActionIcon>
          }
          placeholder="Search"
          rightSectionWidth={42}
          value={value}
          onChange={(event) => setValue(event.currentTarget.value)}
          onKeyDown={getHotkeyHandler([
            ['Enter', () => console.log('Enter Pressed!')],
          ])}
        />
        <Space h="xl" />{' '}
        {value.length > 0 && (
          <>
            <Box sx={{ padding: '1rem' }}>
              {/* <Transition
                mounted={value.length > 0}
                transition="fade"
                duration={500}
                timingFunction="ease"
              >
                {() => ( */}
              <Paper shadow="sm" radius="md" p="xl" withBorder>
                <Group>
                  <Badge size="xl" color={queries[engineNum][1]}>
                    {engines[engineNum]}
                  </Badge>
                  <Text<'a'>
                    component="a"
                    href={queries[engineNum][2] + `${query}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    size="xl"
                  >
                    {query}
                  </Text>
                </Group>
              </Paper>
              {/* )}
              </Transition> */}
            </Box>
          </>
        )}
      </Wrapper>
    </>
  );
};

export default Search;
