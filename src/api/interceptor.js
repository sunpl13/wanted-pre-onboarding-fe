import axios from "axios";
import { getAccessToken } from "utils/tokenProvider";
const instance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

/*
    1. 요청 인터셉터를 작성합니다.
    2개의 콜백 함수를 받습니다.

    1) 요청 바로 직전 - 인자값: axios config
    2) 요청 에러 - 인자값: error
*/
instance.interceptors.request.use(
  (config) => {
    const token = getAccessToken();

    try {
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
    } catch (err) {
      throw new Error(err);
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

/*
    2. 응답 인터셉터를 작성합니다.
    2개의 콜백 함수를 받습니다.

    1) 응답 정성 - 인자값: http response
    2) 응답 에러 - 인자값: http error
*/
instance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default instance;
