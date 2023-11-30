// utils
import RequestSession from "./utils/requests.js";

// objects
import Personalia from "./objects/personalia.js";
import AgendaWeek from "./objects/agena.js";

// Represents an authenticated osiris client
export default class Client {
    constructor(token, baseURL="https://glr.osiris-student.nl") {
        this.session = new RequestSession(token, baseURL);
    }

    changeToken(token) {
        this.session.token = token
    }

    async getPersonalia() {
        const request = await this.session.request("https://glr.osiris-student.nl/student/osiris/gebruiker", "GET");
        return new Personalia(request.data);
    }
    
    async getAgenda(offset=0, limit=5) {
        // adding url params.
        let url = `/student/osiris/student/rooster/per_week?offset=${offset}&limit=${limit}`;
        const request = await this.session.request(url, "GET");
        return request.data.items.map(week => new AgendaWeek(week))
    }
}