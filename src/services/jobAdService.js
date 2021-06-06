import axios from "axios"

export default class JobAdService {
    getAll() {
        return axios.get("http://localhost:8080/api/jobAds/getAll?status=true");
    }

    add(jobAd) {
        return axios.post("http://localhost:8080/api/jobAds", jobAd);
    }

    update(jobAd) {
        return axios.put("http://localhost:8080/api/jobAds", jobAd);
    }

    delete(id) {
        return axios.delete(`http://localhost:8080/api/jobAds?id=${ id }`);
    }
}
