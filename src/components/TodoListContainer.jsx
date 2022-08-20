import React from "react";
import Insert from "./Insert";
import TodoList from "./TodoList";
import { Common } from "styles/common";
import styled from "@emotion/styled";

const TodoListContainer = () => {
  return (
    <Container>
      <Title>To Do List!</Title>
      <InsertContainer>
        <Insert />
      </InsertContainer>
      <ListContainer>
        <TodoList />
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
