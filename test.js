import osiris from "./index.js";
const client = new osiris();

(async () => {
    await client.getAgenda();
})()