import db from "$lib/db.js";

export async function load() {
    return {
        zahnaerzte: await db.getZahnaerzte(),
    };
}