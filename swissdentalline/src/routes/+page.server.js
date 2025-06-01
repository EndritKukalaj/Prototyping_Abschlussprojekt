import db from "$lib/db.js";

export async function load({ params }) {
    return {
        countTermine: await db.countAllTermine(),
        countWartelisteTermine: await db.countWartelisteTermine(),
        termine: await db.getTermine(),
    }
};