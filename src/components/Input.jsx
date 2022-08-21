import { useState, useEffect } from "react";
import { getFieldError } from "utils/validate";
import styled from "@emotion/styled";
import { Common, Pretendard } from "styles/common";

function Input({ name, wasSubmitted, type, placeHolder, setValidate }) {
  const [value, setValue] = useState("");
  const [touched, setTouched] = useState(false);

  const errorMessage = getFieldError(value, name);
  const displayErrorMessage = (wasSubmitted || touched) && errorMessage;

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

  return (
    <Container>
      <label htmlFor={`${name}-input`}>{name}</label>
      <br />

      <input
        id={`${name}-input`}
        name={name}
        type={type}
        onChange={(event) => setValue(event.currentTarget.value)}
        onBlur={() => setTouched(true)}
        aria-describedby={displayErrorMessage ? `${name}-error` : undefined}
        placeholder={placeHolder !== undefined ? placeHolder : ""}
      />
      <br />

      {displayErrorMessage ? (
        <ErrorMessage role="alert" id={`${name}-error`}>
          {errorMessage}
        </ErrorMessage>
      ) : null}
    </Container>
  );
}

const Container = styled.div`
  margin-bottom: 10px;
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

const ErrorMessage = styled.span`
  ${Pretendard({ font: 1.2, weight: 400, color: Common.colors.alert500 })}
`;

export default Input;
