<script>
    import InputField from "./components/InputField.svelte";

    function onClick(e) {
        e.preventDefault();
    }
</script>



<div class="navbar bg-light mb-5 shadow-sm">
    <div class="navbar-brand mx-auto">
        GetTheMovie
    </div>
</div>

<div
        class="login-box bg-light position-relative col-sm-8 col-md-6 col-lg-4 mx-md-auto mx-3 text-secondary rounded-5 shadow">
    <h1 class="py-4 text-center">Login</h1>
    <form>
        <div>
            <InputField text="you@example.com" label="Enter your email" required=true name="email"/>
            <InputField text="********" label="Enter your password" required="true" name="password"/>
        </div>
        <div class="text-center">
            <button class="btn btn-primary btn-lg mx-2 my-4" on:click={onClick} type="submit">Login</button>
            <button class="btn btn-secondary btn-lg mx-2 my-4" type="button">Signup</button>
        </div>

    </form>
</div>

<style>
    h1 {
        font-size: 3rem;
        font-weight: 700;
        margin: 0;
    }

    .login-box {
        position: relative;
        top: 100px;
    }
</style>
