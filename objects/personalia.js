// Represents a Personalia of a user.
export default class Personalia {
    constructor(data) {
        this.name = `${data.roepnaam} ${data.acternaam}`;
        this.role = data.rol;
        this.gender = data.geslacht;
        this.studentNumber = data.studentnummer;
        this.firstName = data.roepnaam;
        this.age = data.leeftijd;
    }
}
