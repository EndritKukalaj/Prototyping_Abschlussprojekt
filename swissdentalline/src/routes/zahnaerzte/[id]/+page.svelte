<script>
    import ZahnarztDetails from "$lib/components/ZahnarztDetails.svelte";
    let { data } = $props();
</script>

<div class="container mt-5 mb-5">
    <div class="row align-items-center">
        <div class="col-auto text-end">
            <button class="btn px-5 py-2 rounded-pill fw-bold shadow back-btn">
                <a href="/zahnaerzte" class="text-decoration-none text-black">Zurück</a>
            </button>
        </div>
    </div>
</div>
<ZahnarztDetails zahnarzt={data.zahnarzt} />
