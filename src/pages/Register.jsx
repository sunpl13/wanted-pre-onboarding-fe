import React, { useState } from "react";
import ConfirmPassword from "components/ConfirmPassword";
import PasswordInput from "components/PasswordInput";
import styled from "@emotion/styled";
import { Common, Pretendard } from "styles/common";
import { getFieldError } from "utills/validate";
// import { ClipLoader } from "react-spinners";

const Register = () => {
  const [wasSubmitted, setwasSubmitted] = useState(false);
  const [validatePassword, setvalidatePassword] = useState(false);
  const [touched, setTouched] = useState(false); //터치에 대한 state
  const [buttonNameState, setbuttonNameState] = useState(false); //이메일 인증 메일 보내고 난 후 버튼 이름 변경 state
  const [authNumber, setAuthNumber] = useState("");
  const [visibleAuthInput, setVisibleAuthInput] = useState(false); //이메일 인증 보내지면 인증번호 입력할 input 컴포넌트 토글

  const [email, setemail] = useState("");
  const errorMessage = getFieldError(email, "이메일"); //에러 메시지
  const displayErrorMessage = (wasSubmitted || touched) && errorMessage;
  const [isSame, setIsSame] = useState(false);

  const Button = styled.button`
    width: 232px;
    height: 40px;
    border-radius: 5px;
    ${Pretendard({ font: 1.2, weight: 700, color: "#fff" })}
    outline: 0;
    border: 0;
    padding-top: 8px;
    padding-bottom: 8px;
    background-color: ${Common.colors.BL500};
    opacity: ${!validatePassword ? 1 : 0.35};
  `;

  const emailAuthHandler = (e) => {
    e.preventDefault();
  };

  const checkAuth = (e) => {
    e.preventDefault();
  };

  const registerHandler = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const fieldValues = Object.fromEntries(formData.entries());
    setwasSubmitted(true);
  };

  return (
    <SignUpContainer>
      <form onSubmit={registerHandler}>
        <Label htmlFor={`email-input`}>이메일 주소</Label>
        <br />
        <div style={{ marginBottom: "10px", width: "100%" }}>
          <EmailContainer>
            <input
              id={`email-input`}
              onChange={(e) => setemail(e.currentTarget.value)}
              onBlur={() => setTouched(true)}
              type="email"
              placeholder="abc@gmail.com"
            />
          </EmailContainer>
          {displayErrorMessage ? (
            <ErrorMessage role="alert" id={`auth-error`}>
              {errorMessage}
            </ErrorMessage>
          ) : null}
        </div>

        <div className="password-container">
          <PasswordInput name="비밀번호" wasSubmitted={wasSubmitted} setValidate={setvalidatePassword} />
          <ConfirmPassword setIsSame={setIsSame} name="비밀번호 확인" passwordInputName="비밀번호" wasSubmitted={wasSubmitted} />
        </div>
        <Button type="submit">가입하기</Button>
      </form>
    </SignUpContainer>
  );
};

export default Register;

const EmailContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 6px;

  position: relative;
  & input {
    padding: 14.5px 15px;
    border: 1px solid ${Common.colors.GY700};
    border-radius: 10px;
    height: 20px;
    width: 200px;
  }
  & input:disabled {
    padding: 14.5px 15px;
    border-radius: 10px;
    background-color: ${Common.colors.GY50};
    border: none;
  }
  & span {
    position: absolute;
    top: 8px;
    right: calc(30% + 16px);
    ${Pretendard({ font: 1.2, weight: 400, color: Common.colors.alert500 })}
  }
`;
const Label = styled.label`
  ${Pretendard({ font: 1.2, weight: 700, color: Common.colors.GY700 })}
`;

const ErrorMessage = styled.span`
  ${Pretendard({ font: 1.2, weight: 400, color: Common.colors.alert500 })}
  margin-bottom: 10px;
`;

const SignUpContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 250px;
  height: 400px;
  margin: 0 auto;
  padding: 10px;

  & .password-container {
    width: 100%;
  }
`;
