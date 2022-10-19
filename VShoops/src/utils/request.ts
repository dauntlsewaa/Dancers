import axios from 'axios';


const service = axios.create({
    baseURL: "/apis",
    timeout: 50000,
});


// 添加请求拦截器
service.interceptors.request.use(
    (config: any) => {
        console.log(config)
        return config;
    }
);

// 添加响应拦截器
service.interceptors.response.use(
    /* 约束一下response */
    (response: any) => {
        return response.data
    }
);

export default service;