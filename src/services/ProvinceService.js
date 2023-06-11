import axios from 'axios'
const PROVINCE_BASE_REST_API_URL = 'http://localhost:8081/api/province';
class ProvinceService {
   getAllProvince(){
         return axios.get(PROVINCE_BASE_REST_API_URL);
         
    }
}

export default new ProvinceService();