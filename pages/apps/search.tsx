import {
  ActionIcon,
  Badge,
  Box,
  Space,
  Text,
  TextInput,
  Paper,
  Group,
  Center,
} from '@mantine/core';
import { getHotkeyHandler } from '@mantine/hooks';
import { NextPage } from 'next';
import { useState } from 'react';
import PageTitle from '../../components/PageTitle';
import Wrapper from '../../components/Wrapper';
import { TbArrowRight, TbSearch, TbExternalLink } from 'react-icons/tb';
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
    {
      name: 'The Web',
      color: 'grape',
      link: 'https://www.google.com/search?q=' + `${query}` + '&igu=1',
    },
    {
      name: 'Google',
      color: 'orange',
      link: 'https://www.google.com/search?q=' + `${query}` + '&igu=1',
    },
    {
      name: 'Wikipedia',
      color: 'cyan',
      link: 'https://www.wikipedia.org/wiki/' + `${query}`,
    },
    {
      name: 'Thesaurus',
      color: 'teal',
      link: 'https://www.thesaurus.com/browse/' + `${query}`,
    },
    {
      name: 'Dictionary',
      color: 'teal',
      link: 'https://www.dictionary.com/browse/' + `${query}`,
    },
  ];

  const q = [
    ['Twitter', 'blue', 'https://twitter.com/search?q='],
    [
      'Instagram',
      'pink',
      'https://www.instagram.com/explore/search/keyword/?q=',
    ],
    [
      'LinkedIn',
      'indigo',
      'https://www.linkedin.com/search/results/all/?keywords=',
    ],
    // ['Stack Overflow', 'yellow', ],
  ];

  const openResult = () => {
    let queryLink = '';
    if (
      queries[queryType].name == 'The Web' ||
      queries[queryType].name == 'Google'
    ){
      queryLink = 'https://www.google.com/search?q=' + `${query}`
    } else {
      queryLink = queries[queryType].link;
    }
      window.open(queryLink, '_blank');
  };

  const linkIcon = (
    <ActionIcon color="blue">
      <TbExternalLink size={36} />
    </ActionIcon>
  );

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
              onClick={openResult}
            >
              <TbArrowRight size={36} />
            </ActionIcon>
          }
          placeholder="Search"
          rightSectionWidth={42}
          value={value}
          onChange={(event) => setValue(event.currentTarget.value)}
          onKeyDown={getHotkeyHandler([['Enter', openResult]])}
        />
        <Space h="xl" />
        {''}
        {value.length > 0 && (
          <>
            <Box sx={{ padding: '1rem' }}>
              <Paper shadow="sm" radius="md" p="xl" withBorder>
                <Group>
                  <Badge
                    size="xl"
                    color={queries[queryType].color}
                    variant="filled"
                  >
                    Search {queries[queryType].name} for:
                  </Badge>
                  <Badge<'button'>
                    component="button"
                    color="dark"
                    size="xl"
                    radius="md"
                    variant="filled"
                    onClick={openResult}
                    rightSection={linkIcon}
                    sx={{ paddingRight: 0, cursor:"pointer" }}
                  >
                    {query}
                  </Badge>
                </Group>
                <Center>
                  <Box sx={{ padding: '1rem' }}>
                    <iframe
                      src={queries[queryType].link}
                      frameBorder="0"
                      width={1000}
                      height={1000}
                      style={{borderRadius: '0.5rem'}}
                    />
                  </Box>
                </Center>
              </Paper>
            </Box>
          </>
        )}
      </Wrapper>
    </>
  );
};

export default Search;
