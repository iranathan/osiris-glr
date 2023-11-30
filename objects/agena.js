import Docent from "./docent.js";

// represents a lesson in a day
export class AgendaAppointment {
    constructor(data) {
        this.id = data.id_rooster;
        this.studentNumber = data.studentnummer;
        this.date = new Date(data.datum);
        this.startTime = data.tijd_vanaf;
        this.endTime = data.tijd_tm;
        this.subject = data.onderwerp;
        this.subtopic = data.subonderwerp;
        this.location = data.locatie;
        this.teachers = data.docenten.map(d => new Docent(d));
    }
}

// represents a day in a week
export class AgendaDay {
    constructor(data) {
        this.date = new Date(data.datum);
        this.appointments = data.rooster.map(a => new AgendaAppointment(a));
    }
}

// represents a week of the agenda
export default class AgendaWeek {
    constructor(data) {
        console.log(data)
        this.year = data.jaar;
        this.week = data.week;
        this.startDate = new Date(data.startdatum);
        this.endDate = new Date(data.einddatum);
        this.days = data.dagen.map(dag => new AgendaDay(dag));
    }
}

