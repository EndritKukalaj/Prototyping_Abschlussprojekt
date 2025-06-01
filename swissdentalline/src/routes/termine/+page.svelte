<script>
    import Termin from "$lib/components/Termin.svelte";
    let { data } = $props();
</script>

<div class="container mt-4">
    <h2>Deine Termine</h2>
    <p>Hier findest du eine Übersicht deiner Termine.</p>
    <div class="row mb-3">
        <div class="col-12">
            <a href="/termine/create" class="btn w-100 d-flex align-items-center justify-content-start add-termin-btn">
                <i class="bi bi-plus-lg me-2"></i>
                Neuen Termin erfassen
            </a>
        </div>
    </div>
    <div class="row">
        {#each data.termine as termin}
            <div class="col-12 mb-4">
                <Termin {termin} />
            </div>
        {/each}
    </div>
</div>

<style>
    .add-termin-btn {
        background-color: #53b1aa;
        height: 60px;
    }
    .add-termin-btn:hover {
        background-color: #39a19a;
    }
</style>
