<script>
    let { termin } = $props();
</script>

<div class="card shadow-sm rounded-4 p-3 termin-container">
    <a href="/termine/{termin._id}" class="text-decoration-none text-black">
        <div class="row align-items-center">

            <div class="col-12 col-md-3 d-flex align-items-center">
                <h5 class="fw-bold mb-0">{termin.behandlung.titel}</h5>
            </div>

            <div class="col-12 p-1 col-md-4 d-flex align-items-center">
                <span class="bg-white rounded-circle d-flex align-items-center justify-content-center icon-container me-3">
                    <i class="bi bi-calendar2-event text-dark icon"></i>
                </span>
                <div>
                    <div class="fw-bold">Datum</div>
                    <div>
                        {new Date(termin.datum).toLocaleTimeString("de-CH",{ hour: "2-digit", minute: "2-digit" })} Uhr,
                        {new Date(termin.datum).toLocaleDateString("de-CH",{ day: "2-digit", month: "long", year: "numeric" })}
                    </div>
                </div>
            </div>
            
            <div class="col-12 p-1 col-md-4 d-flex align-items-center">
                <span class="bg-white rounded-circle d-flex align-items-center justify-content-center icon-container me-3">
                    <i class="bi bi-cash-coin text-dark icon"></i>
                </span>
                <div>
                    <div class="fw-bold">Preis</div>
                    <div>{termin.behandlung.preis} CHF</div>
                </div>
            </div>
        </div>
    </a>
</div>

<style>
    .termin-container {
        background-color: #b2dfdb !important;
    }
    .termin-container:hover {
        background-color: #87d7cf !important;
    }
    .icon-container {
        width: 60px;
        height: 60px;
    }
    .icon {
        font-size: 30px;
    }
</style>
