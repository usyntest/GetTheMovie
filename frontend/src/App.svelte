<script>
    import {Router, Route, Link} from "svelte-routing"

    import "./App.css"

    import Login from "./pages/Login.svelte";
    import Signin from "./pages/Signin.svelte";
    import Home from "./pages/Home.svelte"

</script>
    <Router>
        <Route path="/" component={Home}/>
        <Route path="/login" component={Login}/>
        <Route path="/signin" component={Signin}/>
    </Router>

