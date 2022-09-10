import axios from 'axios'


//定义一个接口的统一前缀路径
axios.defaults.baseURL="http://localhost:8888";
axios.interceptors.response.use(function(response){
    console.log(response.data)
    if (response.data.code!==200){
        vm.$message({
            showClose: true,
            message: response.data.msg,
            type: 'error'
        });
    }


    return response
},function(err){
    return Promise.reject(err)
})

axios.interceptors.request.use(
    config => {

        // 判断是否存在token，如果存在的话，则每个http header都加上token
        let token = localStorage.getItem('token')

        if (!config.headers.hasOwnProperty('token') && token) {
            config.headers.token = token;
        }
        if (token===null&&vm._router.history.current.name!=='LoginUser'){
            vm.$message.warning('请先登录!')
            vm._router.push('loginUser')
            return config;
        }

        return config;
    },
    error => {
        return Promise.reject(error);
    });