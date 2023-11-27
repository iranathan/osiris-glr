const axios = require("axios");

//Errors
class NotAuthenticated extends Error {
    constructor(message, ...args) {
        super(message, ...args);
        this.message = message;
    }
}


class RequestSession {
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
            data: data
        });

        if(res.status == 401) {
            throw new NotAuthenticated("Authentication failed.");
        }

        return res
    }
}

module.exports = RequestSession;