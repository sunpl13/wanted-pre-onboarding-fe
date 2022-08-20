import React, { useEffect, useState } from "react";
import ListItem from "./ListItem";
import { Common } from "styles/common";
import styled from "@emotion/styled";

function TodoList() {
  // const dispatch = useDispatch();
  // const [active, setactive] = useState(-1); //수정버튼 토글을 위한 state
  // useEffect(() => {
  //   dispatch(GetTodoLoading());
  // }, [dispatch]);

  // const todolist = useSelector((state) => state.todo.todolist, shallowEqual);

  // console.log(todolist);

  // //체크 확인 함수
  // const toggleHandler = (id) => {
  //   const idx = todolist.findIndex((todo) => todo.id === id); //준 아이디와 같은 인덱스 찾기
  //   const toggleList = {
  //     ...todolist[idx],

  //     isCheck: !todolist[idx].isCheck,
  //   };
  //   console.log(toggleList);
  //   dispatch(ModifyToggleLoading(toggleList));
  // };

  // //변경함수
  // const ChangeHandler = (id, newTodo) => {
  //   const idx = todolist.findIndex((todo) => todo.id === id);
  //   const list = {
  //     ...todolist[idx],
  //     content: newTodo,
  //   };
  //   console.log(list);
  //   dispatch(ModifyTodoLoading(list));
  // };

  // //삭제 함수
  // const onRemove = (id) => {
  //   console.log("삭제버튼");
  //   dispatch(DeleteTodoLoading(id));
  // };

  //ListItem 컴포넌트 틀로 todolist data 만들기
  // const list = todolist.map((item) => {
  //   return (
  //     <ListItem
  //       text={item.content}
  //       key={item.id}
  //       checked={item.isCheck}
  //       id={item.id}
  //       onRemove={onRemove}
  //       onToggle={toggleHandler}
  //       active={active}
  //       setactive={setactive}
  //       todolist={todolist}
  //       onChange={ChangeHandler}
  //       date={item.createdAt}
  //     />
  //   );
  // });

  //useeffect로 투두 배열 받기
  return <div>투두</div>;
}

export default TodoList;
