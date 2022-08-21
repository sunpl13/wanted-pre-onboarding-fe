import React, { useState } from "react";
import styled from "@emotion/styled";
import { Common, Pretendard } from "styles/common";

function Insert({ insertHandler, refs }) {
  const [todo, settodo] = useState("");
  const onchangeHandler = (e) => {
    settodo(e.target.value);
  };
  const insert = () => {
    insertHandler(todo);
  };

  return (
    <Form>
      <input type="text" ref={refs} onChange={(e) => onchangeHandler(e)} />
      <AddBtn onClick={insert}>추가하기</AddBtn>
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
