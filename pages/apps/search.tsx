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
import { useState } from 'react';
import PageTitle from '../../components/PageTitle';
import Wrapper from '../../components/Wrapper';
import { TbArrowRight, TbSearch } from 'react-icons/tb';
import MainHead from '../../components/MainHead';

const Search: NextPage = () => {
  const [value, setValue] = useState('');

  let query = '';
  let queryType = 0;

  const gogl = new RegExp('^g |^google ', 'gmi');
  const wiki = new RegExp('^w |^wikipedia ', 'gmi');
  const thes = new RegExp('^t |^thesaurus ', 'gmi');
  const dict = new RegExp('^d |^dictionary ', 'gmi');

  if (gogl.test(value)) {
    query = value.replace(gogl, '');
    queryType = 1;
  } else if (wiki.test(value)) {
    query = value.replace(wiki, '');
    queryType = 2;
  } else if (thes.test(value)) {
    query = value.replace(thes, '');
    queryType = 3;
  } else if (dict.test(value)) {
    query = value.replace(dict, '');
    queryType = 4;
  } else {
    query = value;
    queryType = 0;
  }

  const queries = [
    ['Search the Web for:', 'grape', `https://www.google.com/search?q=`],
    ['Google:', 'orange', `https://www.google.com/search?q=`],
    ['Wikipedia:', 'cyan', `https://www.wikipedia.org/wiki/`],
    ['Thesaurus:', 'teal', `https://www.thesaurus.com/browse/`],
    ['Dictionary:', 'teal', `https://www.dictionary.com/browse/`],
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
      <MainHead title="search" />
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
                  <Badge
                    size="xl"
                    color={queries[queryType][1]}
                    variant="filled"
                  >
                    {queries[queryType][0]}
                  </Badge>
                  <Text<'a'>
                    component="a"
                    href={queries[queryType][2] + `${query}`}
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
