import axios from "axios";
import { base_url } from "../components/constants";

const http = axios.create({
  baseURL: base_url,
})

const Api = {
    getHouses: () => http.get('houses'),
    deleteHouse: (id) => http.delete('houses/' + id),
    postHouse: (data) => http.post('houses', data)
}


export default Api