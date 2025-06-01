import db from "$lib/db.js";
import { redirect } from "@sveltejs/kit";

export async function load() {
    return {
        zahnaerzte: await db.getZahnaerzte(),
    };
}

export const actions = {
    create: async ({ request }) => {
        const data = await request.formData();
        let termin = {
            behandlung: {
                titel: data.get("behandlung"),
                preis: 0,
            },
            datum: data.get("datum"),
            zahnarztId: data.get("zahnarztId"),
            warteliste: data.get("warteliste") === "on",
        }
        switch (data.get("behandlung")) {
            case "Dentalhygiene":
            case "Prophylaxe":
                termin.behandlung.preis = 120;
                break;
            case "Zahnfüllung":
                termin.behandlung.preis = 150;
                break;
            case "Wurzelbehandlung":
                termin.behandlung.preis = 200;
                break;
            case "Implantatberatung":
                termin.behandlung.preis = 130;
                break;
            case "Allgemeine Kontrolle":
                termin.behandlung.preis = 80;
                break;
            default:
                termin.behandlung.preis = 0;
        }
        await db.createTermin(termin);
        redirect(303, "/termine");
    }
}
