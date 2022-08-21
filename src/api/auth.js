import api from "api/interceptor";
import { setAccessToken } from "utils/tokenProvider";

class Auth {
  async signUp(email, password) {
    const res = await api.post("/auth/signup", {
      email: email,
      password: password,
    });
    return res;
  }

  async login(email, password) {
    const res = await api.post("/auth/signin", {
      email: email,
      password: password,
    });

    if (res.status === 200) {
      setAccessToken(res.data.access_token);
    }

    return res;
  }
}

export default new Auth();
