const osiris_glr = require("osiris.js");
const client = new osiris_glr("TOKEN");

// simple agenda logger 
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