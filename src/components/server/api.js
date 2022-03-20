import axios from "axios";

const api = axios.create ({
 baseUrl: 'http://localhost:3000/'
})

api.get('/Promocoes')
export default api