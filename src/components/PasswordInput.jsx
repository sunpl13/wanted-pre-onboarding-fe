import { useState, useEffect } from "react";
import { ReactComponent as UnVisibleEye } from "assets/unVisibleEye.svg";
import { ReactComponent as VisibleEye } from "assets/visibleEye.svg";
import styled from "@emotion/styled";
import { getFieldError } from "utills/validate";
import { Common, Pretendard } from "styles/common";

const PasswordInput = (props) => {
  const { name, wasSubmitted, setValidate, placeHolder } = props;
  const [value, setValue] = useState("");
  const [touched, setTouched] = useState(false);
  const [inputType, setinputType] = useState("text"); //패스워드 버튼 눌렀을 때 변경 토글
  const [isVisiblePassword, setisVisiblePassword] = useState(false);
  const errorMessage = getFieldError(value, name);
  const displayErrorMessage = (wasSubmitted || touched) && errorMessage;
  const onClickVisibleIcon = () => {
    setisVisiblePassword(!isVisiblePassword);
  };

  useEffect(() => {
    const checkVal = () => {
      if (errorMessage === null) {
        setValidate(true);
      } else {
        setValidate(false);
      }
    };
    checkVal();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [errorMessage]);

  useEffect(() => {
    const changeInputType = () => {
      if (isVisiblePassword) {
        setinputType("text");
      } else {
        setinputType("password");
      }
    };
    changeInputType();
  }, [isVisiblePassword]);

  return (
    <Container>
      <label htmlFor={`${name}-input`}>{name}</label>
      <br />
      <InputContainer>
        <input
          id={`${name}-input`}
          name={name}
          type={inputType}
          onChange={(event) => setValue(event.currentTarget.value)}
          onBlur={() => setTouched(true)}
          aria-describedby={displayErrorMessage ? `${name}-error` : undefined}
          placeholder={placeHolder !== undefined ? placeHolder : ""}
        />
        {isVisiblePassword ? (
          <VisibleEye data-testid="visible" onClick={onClickVisibleIcon} width="22" height="22" />
        ) : (
          <UnVisibleEye data-testid="unvisible" onClick={onClickVisibleIcon} width="22" height="22" />
        )}
      </InputContainer>

      {displayErrorMessage ? (
        <Span role="alert" id={`${name}-error`}>
          {errorMessage}
        </Span>
      ) : null}
    </Container>
  );
};

const Span = styled.span`
  ${Pretendard({ font: 1.2, weight: 400, color: Common.colors.alert500 })}
`;

const Container = styled.div`
  margin-bottom: 10px;
  & .inputContainer {
    position: relative;
    & svg {
      position: absolute;
      right: 15px;
      top: 12px;
    }
  }

  & input {
    padding: 14.5px 15px;
    border: 1px solid ${Common.colors.GY700};
    border-radius: 10px;
    height: 20px;
    width: 200px;
  }
  & input::placeholder {
    ${Pretendard({ font: 1.4, weight: 400, color: Common.colors.GY500 })}
    letter-spacing: -0.03em;
  }
  & label {
    ${Pretendard({ font: 1.2, weight: 700, color: Common.colors.GY700 })}
  }
`;
const InputContainer = styled.div`
  position: relative;
  & svg {
    position: absolute;
    right: 30px;
    top: 12px;
  }
`;

export default PasswordInput;
