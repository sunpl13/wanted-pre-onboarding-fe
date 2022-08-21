import React from "react";
import Insert from "./Insert";
import TodoList from "./TodoList";
import { Common } from "styles/common";
import styled from "@emotion/styled";
import Todo from "api/todo";
import { useEffect, useState } from "react";
import { useRef } from "react";

const TodoListContainer = () => {
  const [todos, setTodos] = useState([]);
  const inputRef = useRef(null);
  const getTodos = async () => {
    const res = await Todo.getTodos();

    if (res.status === 200) {
      setTodos(res.data);
    }
  };

  const insertHandler = async (todo) => {
    const res = await Todo.createTodo(todo);
    console.log(res);
    if (res.status === 201) {
      inputRef.current.value = ""; //성공하면 input 지우기
      getTodos();
    }
  };

  const deleteHandler = async (id) => {
    const res = await Todo.deleteTodo(id);

    if (res.status === 204) {
      getTodos();
    }
    console.log(res);
  };

  const changeHandler = async (id, todo, isCompleted) => {
    const res = await Todo.updateTodo(id, todo, isCompleted);
    if (res.status === 200) {
      getTodos();
    }
    console.log(res);
  };

  useEffect(() => {
    getTodos();
  }, []);

  return (
    <Container>
      <Title>To Do List!</Title>
      <InsertContainer>
        <Insert insertHandler={insertHandler} refs={inputRef} />
      </InsertContainer>
      <ListContainer>
        <TodoList todoList={todos} deleteHandler={deleteHandler} changeHandler={changeHandler} />
      </ListContainer>
    </Container>
  );
};

export default TodoListContainer;

const Container = styled.div`
  width: 512px;
  background: white;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  margin: 0 auto;
  margin-top: 100px;
  border: 1px solid ${Common.colors.BL300};
  border-radius: 5px;
`;
const Title = styled.div`
  padding: 1rem;
  font-size: 3rem;
  text-align: center;
  font-weight: bolder;
  background: ${Common.colors.BL300};
  color: white;
`;

const InsertContainer = styled.div`
  padding: 1rem;
  border-bottom: 1px solid ${Common.colors.BL300};
`;

const ListContainer = styled.div`
  min-height: 300px;
`;
