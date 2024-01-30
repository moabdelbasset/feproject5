import axios from "axios";

axios.defaults.baseURL = 'https://beproject5-5d5ddb867f18.herokuapp.com/'
axios.defaults.headers.post['Content-Type'] = 'multipart/form-data'
axios.defaults.withCredentials = true