<script lang="ts">
    import "./+page.css";
    import { initializeCountries } from "./dataLoad";
    import GameWindow from "./GameWindow.svelte";
    import type { Country } from "$lib/types";

    let isUnMember = $state(false);
    let isIndependent = $state(false);
    let isGameStarted = $state(false);

    let loadPromise = $state<Promise<[Country[], number]> | null>(null);

    function startGame() {
        loadPromise = initializeCountries(isUnMember, isIndependent);
        isGameStarted = true;
    }
</script>

<div class="gamePage">
    {#if isGameStarted}
        {#await loadPromise!}
            <h1>loading...</h1>
        {:then result}
            <GameWindow initialCountries={result[0]} initialIndex={result[1]} />
        {/await}
    {:else}
        <label>
            UN Member
            <input type="checkbox" bind:checked={isUnMember}/>
        </label>

        <label>
            Independent
            <input type="checkbox" bind:checked={isIndependent}/>
        </label>
        <button onclick={startGame}>Start</button>
    {/if}
</div>
