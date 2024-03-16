import instance from "./request";

//获取验证码请求
export const GetCaptchaCodeApi = () => instance.get("/prod-api/captchaImage")

//发起登录请求
export const LoginApi = (params) => instance.post("/prod-api/login", params);

//获取菜单路由信息
export const GetUserRoutersApi = () => instance.get("/prod-api/getRouters");

//获取用户信息
export const GetUserInfoApi = () => instance.get("/prod-api/getInfo");

//客户管理--客户列表展示
export const GetCustomerListApi = (params) => instance.get("/prod-api/customer", { params });

//导出表格数据接口
export const CustomerExportApi = (params, configs) => instance.post("/prod-api/customer/export", params, configs);