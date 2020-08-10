import axios from 'axios'

const api = axios.create({
    baseURL: 'https://api.met.no/weatherapi/locationforecast/2.0',
})

export default api