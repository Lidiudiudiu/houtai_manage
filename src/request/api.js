import instance from "./request";

//获取验证码请求

export const GetCaptchaCodeApi = () => instance.get("/prod-api/captchaImage")

//发起登录请求

export const LoginApi = (params) => instance.post("/prod-api/login", params);

//获取菜单路由信息
export const GetUserRoutersApi = () => instance.get("/prod-api/getRouters");