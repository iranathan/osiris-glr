const osiris_glr = require("../index");
const client = new osiris_glr("TOKEN");

async function main() {
    const weeks = await client.getAgenda();
    weeks.forEach(week => {

    });
}

main();