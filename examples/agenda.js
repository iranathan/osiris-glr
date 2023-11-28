// should be osiris-glr when installing through npm.
const osiris_glr = require("../index");
const client = new osiris_glr("TOKEN");

async function main() {
    const weeks = await client.getAgenda();
    weeks.forEach(week => {
        console.log("WEEK", week.week);
        week.days.forEach(day => {
            // day.date is a date object.
            console.log(`  ${day.date.getDay()}`);
            day.appointments.forEach(appointment => {
                console.log(`    ${appointment.subject} ${appointment.startTime} - ${appointment.endTime}`)
            });
        });
    });
}

main();