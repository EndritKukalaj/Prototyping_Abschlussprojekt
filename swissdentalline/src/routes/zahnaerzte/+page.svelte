<script>
    import Termin from "$lib/components/Termin.svelte";
    import Zahnarzt from "$lib/components/Zahnarzt.svelte";
    let { data } = $props();
</script>

<div class="container mt-4">
    <h2>Zahnärzte</h2>
    <p>Hier findest du eine Übersicht aller Zahnärzte.</p>
    <div class="row">
        {#each data.zahnaerzte as zahnarzt}
            <div class="col-12 col-md-6 mb-4">
                <Zahnarzt {zahnarzt} />
            </div>
        {/each}
    </div>
</div>
