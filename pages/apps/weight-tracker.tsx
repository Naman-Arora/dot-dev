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
import { useState } from 'react';
import Graph from '../../components/apps/weight-tracker/Graph';
import MainHead from '../../components/MainHead';
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
      <MainHead title="weight tracker" />
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
