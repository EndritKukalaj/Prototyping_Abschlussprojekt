<script>
  import ZahnarztDetails from "$lib/components/ZahnarztDetails.svelte";
  let { data } = $props();
  let selectedId = $state(
    data.zahnaerzte.length > 0 ? data.zahnaerzte[0]._id : null,
  );
  let selectedZahnarzt = $derived(
    data.zahnaerzte.find((d) => d._id === selectedId),
  );
</script>

<div class="container p-4 shadow rounded-4 mt-2 mb-5">
  <div class="mb-3">
    <a
      href="/termine"
      class="btn px-5 py-2 rounded-pill fw-bold shadow text-decoration-none text-black back-btn"
      >Zurück</a
    >
  </div>
  <div class="col"><h3 class="fw-bold mb-4">Neuen Termin erfassen</h3></div>
  <form method="POST" action="?/create">
    <div class="mb-4">
      <label class="form-label fw-bold fs-5" for="b1"
        >Wählen Sie ihre Behandlung aus:</label
      >
      <div class="row g-2">
        <div class="col-12 col-md-6">
          <input
            type="radio"
            class="btn-check"
            name="behandlung"
            id="b1"
            value="Dentalhygiene"
            required
          /><label class="behandlung-btn w-100 py-3" for="b1"
            >Dentalhygiene (120 CHF)</label
          >
        </div>
        <div class="col-12 col-md-6">
          <input
            type="radio"
            class="btn-check"
            name="behandlung"
            id="b2"
            value="Zahnfüllung"
          /><label class="behandlung-btn w-100 py-3" for="b2"
            >Zahnfüllung (150 CHF)</label
          >
        </div>
        <div class="col-12 col-md-6">
          <input
            type="radio"
            class="btn-check"
            name="behandlung"
            id="b3"
            value="Wurzelbehandlung"
          /><label class="behandlung-btn w-100 py-3" for="b3"
            >Wurzelbehandlung (200 CHF)</label
          >
        </div>
        <div class="col-12 col-md-6">
          <input
            type="radio"
            class="btn-check"
            name="behandlung"
            id="b4"
            value="Implantatberatung"
          /><label class="behandlung-btn w-100 py-3" for="b4"
            >Implantatberatung (130 CHF)</label
          >
        </div>
        <div class="col-12 col-md-6">
          <input
            type="radio"
            class="btn-check"
            name="behandlung"
            id="b5"
            value="Prophylaxe"
          /><label class="behandlung-btn w-100 py-3" for="b5"
            >Prophylaxe (120 CHF)</label
          >
        </div>
        <div class="col-12 col-md-6">
          <input
            type="radio"
            class="btn-check"
            name="behandlung"
            id="b6"
            value="Allgemeine Kontrolle"
          /><label class="behandlung-btn w-100 py-3" for="b6"
            >Allgemeine Kontrolle (80 CHF)</label
          >
        </div>
      </div>
    </div>

    <div class="mb-3">
      <label for="terminDatum" class="form-label fw-bold fs-5"
        >Datum und Uhrzeit</label
      >
      <input
        type="datetime-local"
        class="form-control py-3 px-4 rounded-4"
        id="terminDatum"
        name="datum"
        required
      />
    </div>

    <div class="mb-3">
      <label for="arztDropdown" class="form-label fw-bold fs-5"
        >Zahnarzt wählen</label
      >
      <select
        class="form-select py-3 px-4 rounded-4"
        id="arztDropdown"
        name="zahnarztId"
        bind:value={selectedId}
        required
      >
        <option selected disabled>Bitte wählen...</option>
        {#each data.zahnaerzte as zahnarzt}
          <option value={zahnarzt._id}
            >Dr. {zahnarzt.vorname} {zahnarzt.nachname}</option
          >
        {/each}
      </select>
      {#if selectedZahnarzt}
        <ZahnarztDetails zahnarzt={selectedZahnarzt} />
      {/if}
    </div>

    <div class="form-check form-switch mb-4">
      <label class="form-check-label fw-bold fs-5" for="wartelisteCheckbox">
        Auf Warteliste setzen
      </label>
      <input
        class="form-check-input wartelisten-switch"
        type="checkbox"
        id="wartelisteCheckbox"
        name="warteliste"
      />
    </div>
    <div class="mt-4 text-start">
      <button
        type="submit"
        class="btn px-5 py-3 rounded-pill fw-bold shadow submit-btn"
        >Termin vereinbaren</button
      >
    </div>
  </form>
</div>

<style>
  .back-btn {
    background-color: #b2dfdb;
  }
  .back-btn:hover {
    background-color: #80cbc4;
  }
  .submit-btn {
    background-color: #88e791;
  }
  .submit-btn:hover {
    background-color: #76d678;
  }
  .behandlung-btn {
    display: flex;
    align-items: center;
    background-color: #6dd3df;
    border-radius: 14px;
    padding: 16px 20px;
    cursor: pointer;
  }
  .behandlung-btn:hover {
    background-color: #62bdc7;
  }
  .btn-check:checked + .behandlung-btn {
    background-color: #62bdc7;
  }
  .wartelisten-switch {
    width: 60px;
    height: 30px;
    margin-right: 20px;
  }
</style>
