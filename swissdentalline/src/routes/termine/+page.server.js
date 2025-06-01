import db from "$lib/db.js";

export async function load() {
    return {
        termine: await db.getTermine(),
    };
}