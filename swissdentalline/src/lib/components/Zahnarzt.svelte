<script>
    let { zahnarzt } = $props();
</script>

<div class="card border border-light shadow-sm rounded-4 p-3 zahnarzt-container">
    <a href="/zahnaerzte/{zahnarzt._id}" class="text-decoration-none text-black">
        <div class="d-flex align-items-start">
            <div class="me-3 d-flex align-items-center justify-content-center">
                <span class="bg-white rounded-circle d-flex align-items-center justify-content-center zahnarzt-img-container">
                    <img
                        src="images/{zahnarzt.vorname}_{zahnarzt.nachname}.png"
                        alt="Profilbild"
                        class="zahnarzt-img"
                    />
                </span>
            </div>
            <div>
                <p class="mb-1 fw-bold fs-5">Dr. {zahnarzt.vorname} {zahnarzt.nachname}</p>
                <p>{zahnarzt.praxis.name}</p>
            </div>
        </div>
    </a>
</div>

<style>
    .zahnarzt-container {
        background-color: #8bddf1 !important;
    }

    .zahnarzt-container:hover {
        background-color: #6ed5ef !important;
    }

    .zahnarzt-img-container {
        width: 80px;
        height: 80px;
        overflow: hidden;
    }

    .zahnarzt-img {
        width: 80px;
        height: 80px;
        object-fit: cover;
        border-radius: 50%;
    }
</style>
