const axios = require('axios').default

const axiosInstance = axios.create({
    baseURL: 'http://localhost:4000/api',
    timeout: 1000,
    headers: {'X-Custom-Header': 'foobar'}
});

axiosInstance.defaults.headers.common['Authorization'] = 'PPPPPPPPPPPPPPP';
axiosInstance.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

export default axiosInstance;