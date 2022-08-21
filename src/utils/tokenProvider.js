export const getAccessToken = () => {
  return localStorage.getItem("accessToken");
};

export const setAccessToken = (token) => {
  localStorage.setItem("accessToken", token);
};
