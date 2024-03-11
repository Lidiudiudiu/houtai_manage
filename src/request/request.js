import axios from "axios";
//创建实例
const instance = axios.create({
    baseURL: "http://tech.wolfcode.cn:23683",
    timeout: 10000
})
//创建请求拦截器
instance.interceptors.request.use(config => {
    return config
}, err => {
    return Promise.reject(err)
})


//创建响应拦截器
instance.interceptors.response.use(res => {
    let res_data = res.data
    if (res_data != 200) {
        this.$message({
            showClose: true,
            message: '验证码已失效',
            type: 'error'
        });
        return false;
    }
    return res_data
}, err => {
    return Promise.reject(err)
})

export default instance