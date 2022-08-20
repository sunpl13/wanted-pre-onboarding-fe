import styled from "@emotion/styled";
import React, { useState } from "react";
import { Common } from "styles/common";

function ListItem(props) {
  const { text, checked, id, onToggle, onRemove, active, setactive, onChange, date } = props;
  const [NewTodo, setNewTodo] = useState(""); //변경할 todo content 명

  //input 토글 하나만 바꾸는 함수
  const editToggleHandler = () => {
    setactive(id);
    if (active === id) {
      setactive(-1);
    }
  };

  //바꿀 명 저장 state
  const changeInputHandler = (e) => {
    setNewTodo(e.target.value);
  };

  return (
    <TodoItems onClick={() => onToggle(id)}>
      <Remove
        onClick={(e) => {
          e.stopPropagation(); //이벤트 확산 방지(부모 onToggle 함수 실행 x)
          onRemove(id);
        }}
      >
        x
      </Remove>
      <div className={`todo_content ${checked ? "checked" : ""}`}>
        <ChangeTodo>
          <div>
            {active === id ? (
              <input
                type="text"
                defaultValue={text || NewTodo}
                onChange={changeInputHandler}
                onClick={(e) => {
                  e.stopPropagation();
                }}
              />
            ) : (
              text
            )}
          </div>
        </ChangeTodo>
      </div>
      {active === id ? (
        NewTodo === "" || NewTodo === text ? ( //아무것도 입력하지 않거나 값이 기존 값과 동일하다면
          <Edit>
            <Date>{active === id ? "" : date}</Date>
            <img
              src={process.env.PUBLIC_URL + "/images/edit.png"}
              alt="수정버튼"
              onClick={(e) => {
                e.stopPropagation();
                editToggleHandler();
              }}
            />
          </Edit>
        ) : (
          //입력이 있다면 값을 다르게 보여줌
          <Edit>
            <img
              src={process.env.PUBLIC_URL + "/images/check.png"}
              width="20"
              height="20"
              alt="수정확인 버튼"
              onClick={(e) => {
                e.stopPropagation();
                onChange(id, NewTodo);
                editToggleHandler();
              }}
            />
          </Edit>
        )
      ) : (
        <Edit>
          <Date>{active === id ? "" : date}</Date>
          <img
            src={process.env.PUBLIC_URL + "/images/edit.png"}
            alt="수정버튼"
            onClick={(e) => {
              e.stopPropagation();
              editToggleHandler();
            }}
          />
        </Edit>
      )}
      {checked && <CheckMark>✓</CheckMark>}
    </TodoItems>
  );
}

export default ListItem;

const TodoItems = styled.div`
  display: flex;
  padding: 1rem;
  align-items: center;
  cursor: pointer;
  transition: all 0.15s;
  user-select: none;

  &:hover {
    background: ${Common.colors.BL100};
  }

  &:hover .remove {
    opacity: 1;
  }

  .todo_item + .todo_item {
    border-top: 1px solid #e2e2e2;
  }
`;

const Remove = styled.div`
  margin-right: 1rem;
  color: ${Common.colors.alert500};
  font-weight: 600;
  opacity: 0;
`;

const TodoContent = styled.div`
  flex: 1;
  word-break: break-all;
`;

const Checked = styled.div`
  text-decoration: line-through;
  color: ${Common.colors.GY300};
`;
const CheckMark = styled.div`
  font-size: 1.5rem;
  line-height: 1rem;
  margin-left: 1rem;
  color: ${Common.colors.BL400};
  font-weight: 800;
`;
const Edit = styled.div`
  padding-right: 10px;
  cursor: pointer;
  display: flex;

  &:hover {
    transform: translate(1px, 1px);
  }
`;
const ChangeTodo = styled.div`
  flex: 1;
  font-size: 1.1rem;
  outline: none;
  border: none;
  border-bottom: 1px solid ${Common.colors.BL400}; ;
`;
const Date = styled.div`
  margin-right: 4rem;
  color: ${Common.colors.GY100};
`;
