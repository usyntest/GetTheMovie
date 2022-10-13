<script>
    import {Link} from "svelte-routing"
</script>

<nav class="navbar navbar-expand-lg bg-light shadow-sm">
    <div class="container-lg">
        <div class="navbar-brand">
            GetTheMovie
        </div>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="links ms-auto navbar-nav">
                <div class="nav-item">
                    <Link to="/login" class="btn btn-sm btn-outline-primary m-2">Login</Link>
                    <Link to="/signin" class="btn btn-sm btn-outline-secondary m-2">Signin</Link>
                </div>
            </div>
        </div>
    </div>
</nav>

