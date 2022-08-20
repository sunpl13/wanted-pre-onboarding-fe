import { useState, useEffect, useRef } from "react";
import usePasswordValue from "hooks/usePasswordValue";
import { ReactComponent as UnVisibleEye } from "assets/unVisibleEye.svg";
import { ReactComponent as VisibleEye } from "assets/visibleEye.svg";
import { Common, Pretendard } from "styles/common";
import styled from "@emotion/styled";

const ConfirmPassword = (props) => {
  const { name, passwordInputName, wasSubmitted, setIsSame, placeHolder } = props;
  const ref = useRef(null);
  const passwordValue = usePasswordValue(ref, passwordInputName);
  const [value, setValue] = useState("");
  const [touched, setTouched] = useState(false);
  const [inputType, setinputType] = useState("text"); //패스워드 버튼 눌렀을 때 변경 토글
  const [isVisiblePassword, setisVisiblePassword] = useState(false);
  const errorMessage = passwordValue !== value ? "비밀번호가 일치하지 않습니다." : null;
  const displayErrorMessage = (wasSubmitted || touched) && errorMessage;

  const onClickVisibleIcon = () => {
    setisVisiblePassword(!isVisiblePassword);
  };

  useEffect(() => {
    if (errorMessage === null) {
      setIsSame(true);
    } else {
      setIsSame(false);
    }
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
    <Container key={name}>
      <label htmlFor={`${name}-input`}>{name}</label>
      <br />
      <InputContainer>
        <input
          ref={ref}
          id={`${name}-input`}
          name={name}
          type={inputType}
          onChange={(event) => setValue(event.currentTarget.value)}
          onBlur={() => setTouched(true)}
          aria-describedby={displayErrorMessage ? `${name}-error` : undefined}
          placeholder={placeHolder}
        />
        {isVisiblePassword ? (
          <VisibleEye onClick={onClickVisibleIcon} width="22" height="22" />
        ) : (
          <UnVisibleEye onClick={onClickVisibleIcon} width="22" height="22" />
        )}
      </InputContainer>
      {displayErrorMessage ? (
        <Span role="alert" id={`${name}-error`} className="pwdCheck-message">
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

export default ConfirmPassword;
