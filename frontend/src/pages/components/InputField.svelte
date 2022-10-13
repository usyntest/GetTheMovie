<script>
    export let name;
    export let text;
    export let label;
    export let required;
    export let type
</script>

<div class="w-md-75  mx-3 mb-4">
    <label class="text-left" for={name}>{label}</label>
    <br>
    {#if required}
        <input class="w-100 rounded border-0 shadow" type={type} name={name} id={name} placeholder={text} required>
        {:else}
        <input class="w-100 rounded shadow" type={type} name={name} id={name} placeholder={text} required>
    {/if}
</div>

<style>
    input {
        font-size: 1.15rem;
        padding: 10px;
    }
</style>