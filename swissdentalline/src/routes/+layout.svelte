<script>
    let {children} = $props();
</script>

<div>
    <nav class="navbar navbar-light navbar-expand-lg border-bottom border-body" style="background-color: #b2dfdb;">
        <div class="container-fluid">
          <a class="navbar-brand" href="/">SwissDentalLine</a>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
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
