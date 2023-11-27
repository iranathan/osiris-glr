// utils
const RequestSession = require("./utils/requests.js");

// objects
const Personalia = require("./objects/personalia.js");
const AgendaWeek = require("./objects/agena.js");


// Represents an authenticated osiris client
class Client {
    constructor(token, baseURL="https://glr.osiris-student.nl") {
        this.session = new RequestSession(token, baseURL);
    }

    async getPersonalia() {
        const request = await this.session.request("/student/osiris/student/personalia/", "GET");
        return new Personalia(request.data);
    }
    
    async getAgenda(offset=0, limit=5) {
        // adding url params.
        let url = `/student/osiris/student/rooster/per_week?offset=${offset}&limit=${limit}`;
        const request = await this.session.request(url, "GET");
        return request.data.items.map(week => new AgendaWeek(week))
    }
}

module.exports = Client;