import db from "$lib/db.js";
import { redirect } from "@sveltejs/kit";

export async function load({ params }) {
    return {
        zahnarzt: await db.getZahnarztById(params.id),
    }
};

export const actions = {
    delete: async ({ request }) => {
        const data = await request.formData();
        await db.deleteZahnarzt(data.get("id"));
        redirect(303, "/zahnaerzte");
    },
};
