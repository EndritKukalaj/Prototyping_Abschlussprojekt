<script>
  import ZahnarztDetails from "$lib/components/ZahnarztDetails.svelte";

  let { data } = $props();
</script>

<div class="container pt-5">
  <div class="row align-items-center mb-5">
    <div class="col-auto text-end">
      <button class="btn px-5 rounded-pill fw-bold shadow back-btn">
        <a href="/termine" class="text-decoration-none text-black">Zurück</a>
      </button>
    </div>
    <div class="col text-center">
      <h2 class="fw-bold m-0">Termin</h2>
    </div>
    <div class="col-auto text-end">
      <form method="POST" action="?/delete">
        <input type="hidden" name="id" value={data.termin._id} />
        <button type="submit" class="btn px-5 rounded-pill fw-bold shadow mb-3 delete-btn"> Löschen </button>
      </form>
    </div>
  </div>
  <div class="row g-4">
    <div class="col-md-6 col-lg-6">
      <div
        class="card shadow rounded-4 p-3 d-flex flex-row align-items-center gap-3 info-container"
      >
        <div
          class="bg-white rounded-circle p-3 d-flex align-items-center justify-content-center"
        >
          <i class="bi bi-clipboard2-pulse fs-3"></i>
        </div>
        <div>
          <h6 class="fw-bold mb-1">Behandlung</h6>
          <p class="mb-0">{data.termin.behandlung.titel}</p>
        </div>
      </div>
    </div>

    <div class="col-md-6 col-lg-6">
      <div
        class="card shadow rounded-4 p-3 d-flex flex-row align-items-center gap-3 info-container"
      >
        <div
          class="bg-white rounded-circle p-3 d-flex align-items-center justify-content-center"
        >
          <i class="bi bi-calendar-event fs-3"></i>
        </div>
        <div>
          <h6 class="fw-bold mb-1">Datum</h6>
          <p class="mb-0">
            {new Date(data.termin.datum).toLocaleTimeString("de-CH", {
              hour: "2-digit",
              minute: "2-digit",
            })} Uhr,&nbsp;
            {new Date(data.termin.datum).toLocaleDateString("de-CH", {
              day: "2-digit",
              month: "long",
              year: "numeric",
            })}
          </p>
        </div>
      </div>
    </div>

    <div class="col-md-6 col-lg-6">
      <div
        class="card shadow rounded-4 p-3 d-flex flex-row align-items-center gap-3 info-container"
      >
        <div
          class="bg-white rounded-circle p-3 d-flex align-items-center justify-content-center"
        >
          <i class="bi bi-cash-coin fs-3"></i>
        </div>
        <div>
          <h6 class="fw-bold mb-1">Preis</h6>
          <p class="mb-0">{data.termin.behandlung.preis} CHF</p>
        </div>
      </div>
    </div>

    <div class="col-md-6 col-lg-6">
      <div
        class="card shadow rounded-4 p-3 d-flex flex-row align-items-center gap-3 info-container"
      >
        <div
          class="bg-white rounded-circle p-3 d-flex align-items-center justify-content-center"
        >
          <i class="bi bi-clock-history fs-3"></i>
        </div>
        <div>
          <h6 class="fw-bold mb-1">Wartelisteneintrag</h6>
          <p class="mb-0">{data.termin.warteliste ? "Ja" : "Nein"}</p>
        </div>
      </div>
    </div>
  </div>

  <hr />
  <ZahnarztDetails zahnarzt={data.zahnarzt} />
</div>

<style>
  .info-container {
    height: 120px;
  }

  .back-btn {
    background-color: #b2dfdb;
  }
  .back-btn:hover {
    background-color: #80cbc4;
  }

  .delete-btn {
    background-color: #f49593;
  }
  .delete-btn:hover {
    background-color: #e86d6b;
  }
</style>
