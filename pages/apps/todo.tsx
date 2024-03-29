import { Button, Space, Text, TextInput } from '@mantine/core';
import { getHotkeyHandler } from '@mantine/hooks';
import { NextPage } from 'next';
import { useState } from 'react';
import MainHead from '../../components/MainHead';
import PageTitle from '../../components/PageTitle';
import Wrapper from '../../components/Wrapper';

const Todo: NextPage = () => {
  const [todoItems, setTodoItems] = useState<string[]>([]);
  const [task, setTask] = useState('');
  const [clicked, setClicked] = useState(false);

  const addTask = () => {
    setTask('');
    setTodoItems((prevData) => [...prevData, task]);
  };

  const items = todoItems.map((item, index) => {
    return (
      <li key={index}>
        <Text
          sx={{
            fontSize: '1.5rem',
            fontFamily: 'sans-serif',
          }}
          onClick={() => setClicked(true)}
          color={clicked ? 'green' : 'red'}
        >
          {item}
        </Text>
      </li>
    );
  });

  return (
    <>
      <MainHead title="todo list" />
      <Wrapper>
        <PageTitle>todo list</PageTitle>
        <TextInput
          placeholder="e.g: complete homework"
          label="Add task"
          radius="md"
          size="xl"
          required
          value={task}
          onChange={(event) => setTask(event.currentTarget.value)}
          onKeyDown={getHotkeyHandler([['Enter', addTask]])}
        />
        <Space h="md" />
        <Button fullWidth color="cyan" onClick={addTask} size="lg" radius="lg">
          Add Task
        </Button>
        {todoItems.length > 0 && (
          <Text
            align="left"
            weight={700}
            color="pink"
            sx={{
              fontSize: '2rem',
              paddingTop: '2rem',
            }}
          >
            Tasks:
          </Text>
        )}
        <ul>{items}</ul>
      </Wrapper>
    </>
  );
};

export default Todo;
