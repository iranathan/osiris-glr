// Represents a Personalia of a user.
export default class Personalia {
    constructor(data) {
        this.name = data.naam;
        this.studentNumber = data.studentnummer;
        this.firstName = data.voornamen;
        this.nickName = data.roepnaam;
        this.birthday = Date.parse(data.geboortedatum);
        this.courses = data.opleidingen;
        this.groups = data.groepen;
    }
}
