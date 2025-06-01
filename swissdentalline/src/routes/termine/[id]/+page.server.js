import db from "$lib/db.js";
import { redirect } from "@sveltejs/kit";

export async function load({ params }) {
    const data = await db.getTerminFullDetails(params.id);
    return {
        termin: data.termin,
        zahnarzt: data.zahnarzt,
        behandlung: data.behandlung
    }
};

export const actions = {
    delete: async ({ request }) => {
        const data = await request.formData();
        await db.deleteTermin(data.get("id"));
        redirect(303, "/termine");
    },
};
