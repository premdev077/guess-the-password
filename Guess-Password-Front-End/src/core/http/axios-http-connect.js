import axios from "axios";

export const connect = axios.create({
  baseURL: "http://localhost:3080/api/",
  responseType: "json"
});


class AxiosHttpConnect {
    constructor(axios) {
      this.axios = axios;
    }

    create() {
        return new AxiosHttpConnect(
            axios.create({
                baseURL: "http://localhost:3080/api/",
                responseType: "json",
                'Content-Type': 'application/json',
            })
        )
    }

    get(path) {
      return this.axios.get(path).then(data => data).catch( err => err);

    }

    post(path, params = {}) {
      return this.axios.post(path, params).then(data => data).catch( err => err);
    }
}

export default AxiosHttpConnect;