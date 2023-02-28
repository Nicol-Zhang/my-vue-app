import axios from "axios";

axios.defaults.baseURL = "https://www.fastmock.site/mock/bd68d1ea4325272fcf50db3b5f80aa31/api"

const service = axios.create({
    //mock serve
    headers: {
        "Content-type": "application/json;charset=utf-8",
    },
});

const handleError = (errStatus)=>{
    let errMessage;
    if (errStatus){
        switch (errStatus){
            case 400:
                errMessage = "错误的请求";
                break;
            case 403:
                errMessage = '拒绝访问'
                break
            case 404:
                errMessage = '请求错误,未找到该资源'
                break
            case 405:
                errMessage = '请求方法未允许'
                break
            case 408:
                errMessage = '请求超时'
                break
            case 500:
                alert('服务器端出错')
                break
            case 501:
                errMessage = '网络未实现'
                break
            case 502:
                errMessage = '网络错误'
                break
            case 503:
                errMessage = '服务不可用'
                break
            case 504:
                errMessage = '网络超时'
                break
            case 505:
                errMessage = 'http版本不支持该请求'
                break
            default:
                errMessage = `其他连接错误 --${errStatus}`

        }
    }else {
        errMessage='无法连接到服务器'
    }
    return errMessage;
}
/*请求拦截*/
service.interceptors.request.use(
    function (config) {
        console.log("请求参数", config);
        return config;
    },
    function (error) {
        // 请求错误处理
        return Promise.reject(error);
    }
);

// 响应拦截器
service.interceptors.response.use(
    // 响应数据
    function (response) {
        if (response.status === 200){
            console.log("响应拦截器", response);
            return response.data
        } else {
            return Promise.reject(response.data);
        }
    },
    function (error) {
        // 响应错误
        handleError(error.status);
        return Promise.reject(error);
    }
);

export default service;