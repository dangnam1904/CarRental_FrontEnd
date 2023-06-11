import axios from 'axios'
const INSURANCE_BASE_REST_API_URL = 'http://localhost:8081/api/insurance';
class InsuranceService {
    getAllInsurance(){
        return axios.get(INSURANCE_BASE_REST_API_URL);
    }
}

export default new InsuranceService();