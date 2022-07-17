import {
  Affix,
  Button,
  Center,
  Checkbox,
  Group,
  MediaQuery,
  Modal,
  NumberInput,
  Radio,
  RadioGroup,
  Space,
  Stack,
  Text,
  TextInput,
} from '@mantine/core';
import { useClipboard } from '@mantine/hooks';
import { showNotification } from '@mantine/notifications';
import { NextPage } from 'next';
import Head from 'next/head';
import { useState, useEffect } from 'react';
import dayjs from 'dayjs';
import { IconContext } from 'react-icons';
import { BiNote } from 'react-icons/bi';
import { BsCheckLg, BsExclamationLg } from 'react-icons/bs';
import Wrapper from '../../../components/Wrapper';

dayjs().format();

const MathnasiumGenerator: NextPage = () => {
  const clipboard = useClipboard({ timeout: 3000 });

  const [numPages, setNumPages] = useState(0);
  const [studentName, setStudentName] = useState('');
  const [instructorName, setInstructorName] = useState('');
  const [topicsWorkedOn, setTopicsWorkedOn] = useState('');
  const [topicsStruggled, setTopicsStruggled] = useState('');

  const [struggle, setStruggle] = useState(false);
  const [modalOpened, setModalOpened] = useState(false);
  const [allNotesOpened, setAllNotesOpened] = useState(false);
  const [homeworkCompleted, setHomeworkCompleted] = useState(false);
  const [assesmentCompleted, setAssesmentCompleted] = useState(false);

  const [workType, setWorkType] = useState('pages');

  const [studentData, setStudentData] = useState<string[]>([]);
  const [studentNames, setStudentNames] = useState<string[]>([]);

  let hour: number = dayjs().get('h');
  let day: number = dayjs().get('d');

  let ending: string;
  let messageButtonDisabled: boolean = true;

  if (day == 5 || day == 6) {
    ending = 'weekend!';
  } else if (hour < 16) {
    ending = 'afternoon!';
  } else {
    ending = 'evening!';
  }

  let resultString: string =
    'Hi! This is ' +
    instructorName +
    ' from Mathnasium of The Woodlands, and I worked with ' +
    studentName +
    ' today. ';

  if (workType == 'assesment') {
    if (assesmentCompleted) {
      resultString =
        resultString +
        studentName +
        ' worked on an assesment today and completed it. You will receive an email from us within one week that contains their results and a link to schedule a meeting with your center manager if you would like to discuss their assessment results. Have a great ' +
        ending;
    } else {
      resultString =
        resultString +
        studentName +
        ' began working on an assesment today, but has not completed it yet. ' +
        studentName +
        ' will continue to work on it next session. Have a great ' +
        ending;
    }
  } else if (workType == 'homework') {
    if (homeworkCompleted) {
      if (!struggle) {
        resultString =
          resultString +
          'We worked on ' +
          studentName +
          "'s homework over " +
          topicsWorkedOn +
          ' and it was completed. ' +
          studentName +
          ' had a great session, finished ' +
          numPages +
          ' pages, and showed a clear understanding of the material completed. Have a great ' +
          ending;
      } else {
        resultString =
          resultString +
          'We worked on ' +
          studentName +
          "'s homework over " +
          topicsWorkedOn +
          ' and it was completed. ' +
          studentName +
          ' finished ' +
          numPages +
          ' pages today, but needs more practice on ' +
          topicsStruggled +
          '. We will continue to work with them next session to ensure a better understanding of this topic. Have a great ' +
          ending;
      }
    } else {
      if (!struggle) {
        resultString =
          resultString +
          'We worked on ' +
          studentName +
          "'s homework over " +
          topicsWorkedOn +
          ', but they have not completed it yet. If needed, ' +
          studentName +
          ' will continue to work on it next session. Overall, ' +
          studentName +
          ' had a great session, completed  ' +
          numPages +
          ' pages, and showed a clear understanding of the material completed. Have a great ' +
          ending;
      } else {
        resultString =
          resultString +
          'We worked on ' +
          studentName +
          "'s homework over " +
          topicsWorkedOn +
          ', but they have not completed it yet. If needed, ' +
          studentName +
          ' will continue to work on it next session.' +
          studentName +
          ' completed  ' +
          numPages +
          ' pages today, but needs more practice on ' +
          topicsStruggled +
          '. We will continue to work with ' +
          studentName +
          ' next session to ensure a better understanding of this topic. Have a great ' +
          ending;
      }
    }
  } else {
    if (!struggle) {
      resultString =
        resultString +
        'We worked on ' +
        topicsWorkedOn +
        '. ' +
        studentName +
        ' had a great session, completed ' +
        numPages +
        ' pages, and showed a clear understanding of the material completed. Have a great ' +
        ending;
    } else {
      resultString =
        resultString +
        ' We worked on ' +
        topicsWorkedOn +
        '. ' +
        studentName +
        ' completed ' +
        numPages +
        ' pages today, but needs more practice on ' +
        topicsStruggled +
        '. We will continue to work with ' +
        studentName +
        ' next session to ensure a better understanding of this topic. Have a great ' +
        ending;
    }
  }

  if (studentName == '' || instructorName == '' || numPages == undefined) {
    messageButtonDisabled = true;
  } else {
    messageButtonDisabled = false;
  }

  const copyFromNotes = (item: string) => {
    clipboard.copy(item);
    showNotification({
      message: 'Copied to Clipboard!',
      autoClose: 3000,
      color: 'teal',
      icon: <BsCheckLg />,
    });
  };

  const saveAndOpen = () => {
    if (messageButtonDisabled) {
      showNotification({
        message: 'Please fill out all the fields!',
        autoClose: 5000,
        color: 'red',
        icon: <BsExclamationLg />,
      });

    } else {
      setModalOpened(true);
      setStudentData((prevData) => [...prevData, resultString]);
      setStudentNames((prevData) => [...prevData, studentName]);
    }
  };

  const showAllMessages = () => {
    setModalOpened(false);
    setTimeout(() => {
      setAllNotesOpened(true);
    }, 100);
  };

  const swt = (value: string) => {
    setWorkType(value);
    setNumPages(0);
  }

  const reset = () => {
    setStudentName('');
    setTopicsWorkedOn('');
    setTopicsStruggled('');
    
    setWorkType('pages');
    setNumPages(0);

    setStruggle(false);
    setAssesmentCompleted(false);
    setHomeworkCompleted(false);
    setStruggle(false);
  };

  const data = studentData.map((item, index) => {
    return (
      <>
        <Text align="center" weight={700} size="lg" color="pink">
          {studentNames[index]}'s Message:
        </Text>
        <Text>{item}</Text>
        <Space h="sm" />
        <Button
          fullWidth
          radius="md"
          color="violet"
          onClick={() => copyFromNotes(item)}
        >
          Copy Message?
        </Button>
        <Space h="md" />
      </>
    );
  });

  return (
    <>
      <Head>
        <title>mathnasium text</title>
        <meta
          name="description"
          content="text message generator for mathnasium"
        />
        <link rel="icon" href="/memo-favicon/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/memo-favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/memo-favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/memo-favicon/favicon-16x16.png"
        />
        <link rel="manifest" href="/memo-favicon/site.webmanifest" />
      </Head>
      <Affix position={{ top: 30, right: 30 }}>
        <Group spacing="sm" position="center">
          <IconContext.Provider
            value={{ color: 'white', className: 'global-class-name' }}
          >
            <Button
              color="cyan"
              radius="md"
              compact
              size="xl"
              onClick={() => setAllNotesOpened(true)}
            >
              <BiNote />
            </Button>
          </IconContext.Provider>
        </Group>
      </Affix>
      <Wrapper>
        <Modal
          centered
          opened={modalOpened}
          onClose={() => setModalOpened(false)}
          title="Message Content:"
          size="md"
          overlayBlur={5}
          transition="fade"
          transitionDuration={500}
          transitionTimingFunction="ease"
        >
          <Text>{resultString}</Text>
          <Space h="md" />
          <Button
            fullWidth
            radius="md"
            color={clipboard.copied ? 'teal' : 'blue'}
            onClick={() => copyFromNotes(resultString)}
            data-autofocus
          >
            {clipboard.copied ? 'Copied!' : 'Copy?'}
          </Button>
          <Space h="md" />
          <Button
            fullWidth
            radius="md"
            color="violet"
            onClick={showAllMessages}
          >
            View All Messages
          </Button>
          <Space h="sm" />
        </Modal>
        <Modal
          centered
          opened={allNotesOpened}
          onClose={() => setAllNotesOpened(false)}
          title="Messages for All Students"
          size="xl"
          overlayBlur={5}
          overflow="outside"
          transition="fade"
          transitionDuration={600}
          transitionTimingFunction="ease"
        >
          {data}
        </Modal>
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
              mathnasium text generator
            </Text>
          </MediaQuery>
        </Center>
        <Stack>
          <TextInput
            placeholder="e.g: Naman"
            label="Your Name:"
            radius="md"
            size="md"
            required
            value={instructorName}
            onChange={(event) => setInstructorName(event.currentTarget.value)}
          />
          <TextInput
            placeholder="e.g: Sophia"
            label="Student Name:"
            radius="md"
            size="md"
            required
            value={studentName}
            onChange={(event) => setStudentName(event.currentTarget.value)}
          />
          <RadioGroup
            value={workType}
            onChange={(val) => swt(val)}
            label="What did the student work on today?"
            size="md"
            required
          >
            <Radio value="pages" label="Pages" />
            <Radio value="homework" label="Homework" />
            <Radio value="assesment" label="Assesment" />
          </RadioGroup>
          {(workType == 'pages' || workType == 'homework') && (
            <TextInput
              placeholder="e.g: solving equations, graphing linear functions, and identifying quadrilaterals"
              label="Pages worked on: (write as a phrase)"
              radius="md"
              size="md"
              required
              value={topicsWorkedOn}
              onChange={(event) => setTopicsWorkedOn(event.currentTarget.value)}
            />
          )}
          {(workType == 'pages' || workType == 'homework') && (
            <>
              <NumberInput
                placeholder="e.g: 5"
                label="Number of pages worked on:"
                radius="md"
                size="md"
                min={0}
                required
                value={numPages}
                onChange={(val: number) => setNumPages(val)}
              />
            </>
          )}
          {workType == 'assesment' && (
            <Checkbox
              label="Assesment Completed?"
              radius="md"
              size="md"
              checked={assesmentCompleted}
              onChange={(event) =>
                setAssesmentCompleted(event.currentTarget.checked)
              }
            />
          )}
          {workType == 'homework' && (
            <Checkbox
              label="Homework Completed?"
              radius="md"
              size="md"
              checked={homeworkCompleted}
              onChange={(event) =>
                setHomeworkCompleted(event.currentTarget.checked)
              }
            />
          )}
          {(workType == 'pages' || workType == 'homework') && (
            <Checkbox
              label="Did the student struggle?"
              radius="md"
              size="md"
              checked={struggle}
              onChange={(event) => setStruggle(event.currentTarget.checked)}
            />
          )}
          {struggle && (
            <TextInput
              placeholder="e.g: solving equations"
              label="Topics struggled with: (write one topic)"
              radius="md"
              size="md"
              required
              value={topicsStruggled}
              onChange={(event) =>
                setTopicsStruggled(event.currentTarget.value)
              }
            />
          )}
          <Button
            radius="md"
            size="md"
            color={messageButtonDisabled ? 'red' : 'indigo'}
            onClick={saveAndOpen}
          >
            Create Message
          </Button>
          <Button
            variant="outline"
            color="red"
            radius="md"
            size="md"
            onClick={reset}
          >
            Reset Form?
          </Button>
        </Stack>
      </Wrapper>
    </>
  );
};

export default MathnasiumGenerator;
