import axios from 'axios'

const fetch = axios.create({
    baseURL: 'http://localhost:3005', //设置默认api路径
    timeout: 10000, //设置超时时间
    headers: { 'X-Custom-Header': 'value' }
})

export default fetch