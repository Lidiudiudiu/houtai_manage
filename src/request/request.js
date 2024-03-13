import axios from "axios";
//创建实例
const instance = axios.create({
    baseURL: "http://tech.wolfcode.cn:23683",
    timeout: 10000
})
//创建请求拦截器
instance.interceptors.request.use(config => {

    const token = localStorage.getItem("edb-authorization-token")
    if (token && !config.url.endsWith("/login") && !config.url.endsWith("/capchaImage")) {
        config.headers["Authorization"] = "Bearer " + token;
    }

    return config
}, err => {
    return Promise.reject(err)
})


//创建响应拦截器
instance.interceptors.response.use(res => {
    return res.data
}, err => {
    return Promise.reject(err)
})

export default instance