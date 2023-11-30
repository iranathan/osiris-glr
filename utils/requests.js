import axios from "axios";

//Errors
class NotAuthenticated extends Error {
    constructor(message, ...args) {
        super(message, ...args);
        this.message = message;
    }
}


export default class RequestSession {
    constructor(token, baseURL) {
        this.session = axios.create({
            baseURL: baseURL,
            headers: {
                'authorization': `Bearer ${token}`,
            }
        });
    }

    async request(url, method, data) {
        const res = await this.session.request({
            url: url,
            method: method,
            data: data,
            validateStatus: () => true
        });

        if(res.status == 401) {
            throw new NotAuthenticated("Authentication failed.");
        }

        return res
    }
}
