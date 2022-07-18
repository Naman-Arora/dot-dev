import {
  Box,
  Text,
  Center,
  Stack,
  Button,
  Space,
  NumberInput,
  Drawer,
  Modal,
} from '@mantine/core';
import { DatePicker } from '@mantine/dates';
import { NextPage } from 'next';
import Head from 'next/head';
import { useState } from 'react';
import Graph from '../../components/Graph';
import PageTitle from '../../components/PageTitle';
import Wrapper from '../../components/Wrapper';

const Weight: NextPage = () => {
  const [drawerOpened, setDrawerOpened] = useState(false);
  const [addDataModalOpened, setAddDataModalOpened] = useState(false);
  const [weightVal, setWeightVal] = useState(0);
  const [dateVal, setDateVal] = useState<Date | null>(new Date());

  const addWeight = () => {
    setAddDataModalOpened(false);
    console.log('dateVal: ' + dateVal);
    console.log('weightVal: ' + setWeightVal);
  };

  return (
    <>
      <Head>
        <title>weight tracker</title>
        <meta name="description" content="track your weight" />
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
        <Modal
          centered
          opened={addDataModalOpened}
          onClose={() => setAddDataModalOpened(false)}
          title="Add Today's Weight"
          size="md"
          overlayBlur={5}
          transition="fade"
          transitionDuration={500}
          transitionTimingFunction="ease"
        >
          <NumberInput
            placeholder="Today's Weight (in pounds)"
            label="Today's Weight:"
            radius="md"
            required
            value={weightVal}
            onChange={(val: number) => setWeightVal(val)}
          />
          <Space h="md" />
          <DatePicker
            allowLevelChange={false}
            placeholder="Pick a date"
            label="Today's Date:"
            required
            firstDayOfWeek="sunday"
            value={dateVal}
            onChange={setDateVal}
          />
          <Space h="md" />
          <Button fullWidth onClick={addWeight}>
            Submit
          </Button>
        </Modal>
        <PageTitle>weight tracker</PageTitle>
        <Center
          sx={{
            margin: '0rem',
          }}
        >
          <Graph />
        </Center>
        <Center>
          <div style={{ width: 200 }}>
            <Button
              fullWidth
              size="md"
              onClick={() => setAddDataModalOpened(true)}
            >
              Add Data
            </Button>
          </div>
          <Space w="md" />
          <div style={{ width: 200 }}>
            <Button fullWidth size="md" onClick={() => setDrawerOpened(true)}>
              View Past Data
            </Button>
          </div>
        </Center>
      </Wrapper>
    </>
  );
};

export default Weight;
