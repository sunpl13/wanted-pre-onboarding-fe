import React, { useState } from "react";
import ListItem from "./ListItem";

function TodoList({ todoList, deleteHandler, changeHandler }) {
  const [active, setactive] = useState(-1); //수정버튼 토글을 위한 state

  //체크 확인 함수
  const toggleHandler = (id) => {
    const idx = todoList.findIndex((todo) => todo.id === id); //준 아이디와 같은 인덱스 찾기
    changeHandler(id, todoList[idx].todo, !todoList[idx].isCompleted);
  };

  //변경함수
  const ChangeHandler = (id, newTodo) => {
    const idx = todoList.findIndex((todo) => todo.id === id);
    changeHandler(id, newTodo, todoList[idx].isCompleted);
  };

  //ListItem 컴포넌트 틀로 todolist data 만들기
  const list = todoList.map((item) => {
    return (
      <ListItem
        text={item.todo}
        key={item.id}
        checked={item.isCompleted}
        id={item.id}
        onRemove={deleteHandler}
        onToggle={toggleHandler}
        active={active}
        setactive={setactive}
        todoList={todoList}
        onChange={ChangeHandler}
        date={item.createdAt}
      />
    );
  });

  //useeffect로 투두 배열 받기
  return <div>{list}</div>;
}

export default TodoList;
