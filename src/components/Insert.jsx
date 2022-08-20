import React, { useState } from "react";
import styled from "@emotion/styled";
import { Common, Pretendard } from "styles/common";

function Insert() {
  const [todo, settodo] = useState("");
  const date = new Date();

  // const onchangeHandler = (e) => {
  //   settodo(e.target.value);
  // };

  // //  todolist 생성 함수
  // const insertHandler = () => {
  //   //이미 추가된 리스트에 추가할 값이 있는지 확인
  //   if (list.some((item) => item.content === todo)) {
  //     alert("리스트에 이미 추가되어 있습니다!");
  //   } else {
  //     //id 값이 주어지지 않을 때
  //     dispatch(
  //       CreateTodoLoading({
  //         id: list.length === 0 ? 0 : list[list.length - 1].id + 1, //배열의 마지막 인덱스의 id 값에서 +1
  //         content: todo,
  //         createdAt: date,
  //         isCheck: false,
  //       })
  //     );
  //     /*     id 값이 주어졌을 때
  //   dispatch(
  //     CreateTodoLoading({
  //       content: todo,
  //       createdAt: date,
  //       isCheck: false,
  //     })
  //   );
  //   */
  //   }
  // };

  return (
    <Form>
      <input type="text" />
      <AddBtn>추가하기</AddBtn>
    </Form>
  );
}

export default Insert;

const Form = styled.div`
  display: flex;

  & input {
    flex: 1;
    ${Pretendard({ font: 2.4, weight: 400, color: "#000" })}

    outline: none;
    border: none;
    border-bottom: 1px solid ${Common.colors.BL400};
  }
`;

const AddBtn = styled.button`
  padding: 5px 10px;
  margin-left: 10px;
  background: #a7e28d;
  border-radius: 3px;
  font-weight: 800;
  border: none;
  cursor: pointer;
  color: white;

  &:hover {
    background: #ff7373;
  }
`;
