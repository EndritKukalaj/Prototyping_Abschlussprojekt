<script>
    let {children} = $props();
    let navOpen = $state(false);
</script>

<div>
    <nav class="navbar navbar-light navbar-expand-lg border-bottom border-body" style="background-color: #b2dfdb;">
        <div class="container-fluid">
            <a class="navbar-brand" href="/">SwissDentalLine</a>
            <button class="navbar-toggler" type="button" aria-controls="navbarSupportedContent" aria-expanded={navOpen} aria-label="Toggle navigation" onclick={() => navOpen = !navOpen}>
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class={"collapse navbar-collapse" + (navOpen ? " show" : "")} id="navbarSupportedContent">
                <ul class="navbar-nav me-auto">
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="/termine">Termine</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="/termine/create">Neuen Termin erstellen</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="/zahnaerzte">Zahnärzte</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>

    {@render children()}
</div>
