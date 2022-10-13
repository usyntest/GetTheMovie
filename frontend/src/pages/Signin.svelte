<script>
    import InputField from "./components/InputField.svelte";

    function onClick(event) {
        event.preventDefault()
    }
</script>

<div class="navbar bg-light mb-5 shadow-sm">
    <div class="navbar-brand mx-auto">
        GetTheMovie
    </div>
</div>

<div
        class="login-box bg-light position-relative col-sm-8 col-md-6 col-lg-4 mx-md-auto mx-3 text-secondary rounded-5 shadow">
    <h1 class="py-4 text-center">Sign Up</h1>
    <form>
        <div>
            <InputField text="Ken Adams" label="Enter your name" required=true type=true name="name"/>
            <InputField text="max 16 characters" label="Choose a username" required=true type="text"
                        name="username"/>
            <InputField text="you@example.com" label="Enter your email" required=true type="email"
                        name="email"/>
            <InputField text="min 8 characters" label="Choose a password" required=true type="password"/>
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
        top: 40px;
    }

    .navbar-brand {
        font-size: 1.5rem;
    }
</style>


