import React, { useState } from "react";
import Input from "components/Input";
import PasswordInput from "components/PasswordInput";
import styled from "@emotion/styled";
import { Common, Pretendard } from "styles/common";

const Login = () => {
  // const router = useRouter();
  const [wasSubmitted, setwasSubmitted] = useState(false);
  const [email, setEmail] = useState(false);
  const [pwd, setPwd] = useState(false);
  // const user = useUser({ redirectTo: "/", redirectIfFound: true });

  // const loginHandler = useMutation(login, {
  //   onSuccess: () => {
  //     //성공 시
  //     setToastState({
  //       ...ToastState,
  //       visible: true,
  //       text: "로그인에 성공했습니다!",
  //       toastType: "success",
  //     });
  //     setTimeout(() => {
  //       router.push("/");
  //     }, 1000);
  //   },
  //   onError: () => {
  //     //실패 시
  //   },
  // });

  const Login = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const fieldValues = Object.fromEntries(formData.entries());
    const loginEmail = fieldValues["이메일"];
    const pwd = fieldValues["비밀번호"];
    // loginHandler.mutate({ email: loginEmail, pwd: pwd });
    setwasSubmitted(true);
  };
  const ckBtn = email && pwd;

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
    opacity: ${!ckBtn ? 1 : 0.35};
    margin-bottom: 10px;
  `;

  // if (user === undefined) {
  //   return <div>Loading...</div>;
  // }

  return (
    <FormContainer>
      <div>
        <form noValidate onSubmit={Login}>
          <Input setValidate={setEmail} name="이메일" placeHolder="abc@email.com" wasSubmitted={wasSubmitted} type="email" />
          <PasswordInput name="비밀번호" placeHolder="8자 이상" wasSubmitted={wasSubmitted} setValidate={setPwd} />

          <div className="mt30">
            <Button>로그인</Button>
          </div>
        </form>
      </div>

      <OutLineButton>회원가입</OutLineButton>
    </FormContainer>
  );
};

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 250px;
  height: 400px;
  margin: 0 auto;
  padding: 10px;
`;

const OutLineButton = styled.button`
  width: 232px;
  height: 40px;
  border: 1px solid ${Common.colors.GY900};
  border-radius: 5px;
  ${Pretendard({ font: 1.2, weight: 700, color: Common.colors.GY900 })}
  outline: 0;
  padding-top: 8px;
  padding-bottom: 8px;
  background-color: #fff;
`;

export default Login;
