import request from "@/utils/request";
import { Login } from "@/types/api";

export default {
  login: (data: Login.params) => {
    return request({
      url: "/users/login",
      method: "post",
      data,
    });
  },
};
