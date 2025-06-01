<script>
    import Termin from "$lib/components/Termin.svelte";
    let { data } = $props();
    const termin = data.termine && data.termine.length > 0 ? data.termine[0] : null;

</script>

<div class="container py-5 d-flex flex-column align-items-center justify-content-center">
    <div class="row  w-100 justify-content-center">
        <div class="col-12 col-md-8 d-flex flex-column align-items-center">
            <h2 class="fw-bold mb-2 text-center">Übersicht</h2>
            <div class="row g-4 w-100 justify-content-center">
                <div class="col-12 col-md-6 d-flex justify-content-center">
                    <div class="card text-center shadow rounded-4 info-container w-100">
                        <div class="card-body">
                            <h5 class="card-title">Geplante Termine</h5>
                            <h1 class="display-4 fw-bold">{data.countTermine}</h1>
                        </div>
                    </div>
                </div>
                <div class="col-12 col-md-6 d-flex justify-content-center">
                    <div class="card text-center shadow rounded-4 info-container w-100">
                        <div class="card-body">
                            <h5 class="card-title">Offene Wartelisten</h5>
                            <h1 class="display-4 fw-bold">{data.countWartelisteTermine}</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="row w-100 justify-content-center mt-5">
        <div class="col-12 col-md-8 align-items-center">
            <h2 class="fw-bold mb-3 text-center">Nächster Termin</h2>
            <div>
                <Termin termin={termin}/>
            </div>
        </div>
    </div>
</div>

<style>
    .info-container {
        background-color: #b2dfdb !important;
    }
</style>
