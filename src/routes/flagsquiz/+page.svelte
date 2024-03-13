<script lang="ts">
    import "./+page.css"
    import {initializeCountries} from "./dataLoad.js";
    import GameWindow from "./GameWindow.svelte";

    let isGameStarted = false;
    let countries : Country[]= [];
    let currentCountryIndex : number = 0;

    let isUnMember = false;
    let isIndependent = false;

    async function startGame(){
        isGameStarted = true;
        [countries, currentCountryIndex] = await initializeCountries(isUnMember,isIndependent);
    }
</script>

<div class="gamePage">
    {#if isGameStarted}
        {#await startGame()}
            <h1>loading...</h1>
        {:then number}
            <GameWindow {countries} {currentCountryIndex}/>
        {/await}

    {:else}
        <label>
            UN Member
            <input type="checkbox" bind:checked={isUnMember}/>
        </label>

        <label>
            Independent
            <input type="checkbox" bind:checked="{isIndependent}"/>
        </label>
        <button on:click={startGame}>Start</button>
    {/if}
</div>
