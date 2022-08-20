//이메일 정규식
const emailValidate = (text) => {
  const email = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/;

  if (email.test(text)) {
    return true;
  } else {
    return false;
  }
};

//비밀번호 정규식
const passwordValidate = (password) => {
  const regPassword = /^[A-Za-z0-9]{4,12}$/;
  if (regPassword.test(password)) {
    return true;
  } else {
    return false;
  }
};

//터치 호버 풀었을 때 유효성검사 메시지 출력
function getFieldError(value, name) {
  if (!value) return "필수 입력 값 입니다!";
  let check = false;
  switch (name) {
    case "이메일":
      check = emailValidate(value);
      if (!check) return "올바른 이메일을 입력해주세요.";
      break;
    case "비밀번호":
      check = passwordValidate(value);
      if (!check) return "비밀번호는 최소 8자, 하나 이상의 문자, 숫자 및 특수문자 입니다.";
      break;
    default:
      return null;
  }
  return null;
}

export { emailValidate, passwordValidate, getFieldError };
