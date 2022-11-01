import axios from "axios";
import { base_url } from "../components/constants";

const http = axios.create({
  baseURL: base_url,
})

const Api = {
    getHouses: () => http.get('houses'),
    deleteHouse: (id) => http.delete('houses/' + id),
    postHouse: (data) => http.post('houses', data),
    getCars: () => http.get('cars'),
    postCars: (data) => http.post('cars', data),
    deleteCars: (id) => http.delete('cars/' + id),
}


export default Api