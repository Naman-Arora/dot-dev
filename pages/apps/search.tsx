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
  Grid,
} from '@mantine/core';
import { getHotkeyHandler, useMediaQuery } from '@mantine/hooks';
import { NextPage } from 'next';
import { useState } from 'react';
import PageTitle from '../../components/PageTitle';
import Wrapper from '../../components/Wrapper';
import { TbArrowRight, TbSearch, TbExternalLink } from 'react-icons/tb';
import MainHead from '../../components/MainHead';

const Search: NextPage = () => {
  const largerThanSM = useMediaQuery('(min-width: 900px)', false);

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
    ) {
      queryLink = 'https://www.google.com/search?q=' + `${query}`;
    } else {
      queryLink = queries[queryType].link;
    }
    window.open(queryLink, '_blank');
  };

  return (
    <>
      <MainHead title="search" />
      <Wrapper>
        <PageTitle paddingTop={0}>search</PageTitle>
        <Grid sx={{}}>
          <Grid.Col span={largerThanSM ? 3 : 12}>
            <Box
              sx={(theme) => ({
                backgroundColor: theme.colors[queries[queryType].color],
                textAlign: 'center',
                padding: theme.spacing.md,
                borderRadius: theme.radius.lg,
              })}
            >
              <Text
                color="white"
                transform="uppercase"
                weight={600}
                sx={{
                  fontFamily: 'Rubik',
                }}
                size="xl"
              >
                Search {queries[queryType].name} for:
              </Text>
            </Box>
          </Grid.Col>

          <Grid.Col span={largerThanSM ? 9 : 12}>
            <Box
              sx={(theme) => ({
                textAlign: 'center',
                borderRadius: theme.radius.md,
                alignItems: 'center',
                justifyContent: 'center',
              })}
            >
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
                    sx={{ marginRight: '1rem', padding: '0.1rem' }}
                    onClick={openResult}
                  >
                    <TbExternalLink size={32} />
                  </ActionIcon>
                }
                placeholder="Search"
                rightSectionWidth={42}
                value={value}
                onChange={(event) => setValue(event.currentTarget.value)}
                onKeyDown={getHotkeyHandler([['Enter', openResult]])}
              />
            </Box>
          </Grid.Col>
        </Grid>
        <Space h="xl" />
        {''}
        {value.length > 0 && (
          <>
            <Box sx={{ padding: '1rem' }}>
              <Paper shadow="sm" radius="md" p="xl" withBorder>
                <Center>
                  <Box sx={{ padding: '1rem' }}>
                    <iframe
                      src={queries[queryType].link}
                      frameBorder="0"
                      width={1200}
                      height={1000}
                      style={{ borderRadius: '0.5rem' }}
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
