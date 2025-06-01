<script>
    let { zahnarzt } = $props();
</script>

<div class="container my-3 p-4 border rounded shadow-lg bg-white">
    <div class="row">
        <div class="col-md-5 d-flex flex-column align-items-center">
            <div class="position-relative text-center">
                <span class="bg-white rounded-circle">
                    <img
                        src="../images/{zahnarzt.vorname}_{zahnarzt.nachname}.png"
                        alt="Profilbild"
                        class="rounded-circle profil-img"
                    />
                </span>
            </div>
        </div>
        <div class="col-md-7">
            <h4><strong>Dr. {zahnarzt.vorname} {zahnarzt.nachname}</strong></h4>
            <h5 class="text-muted">{zahnarzt.praxis.name}</h5>

            <address class="mb-3">
                {zahnarzt.praxis.strasse}<br />
                {zahnarzt.praxis.plz}
                {zahnarzt.praxis.ort}<br />
                {zahnarzt.telefon}<br />
                {zahnarzt.email}
            </address>
        </div>
    </div>
</div>

<style>
    .profil-img {
        width: 220px;
        height: 220px;
        object-fit: cover;
        border: 1px solid #007b7f;
    }
</style>
