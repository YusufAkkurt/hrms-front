import axios from "axios";

export default class JobService {
    getAll() {
        return axios.get("http://localhost:8080/api/jobPositions");
    }
}
