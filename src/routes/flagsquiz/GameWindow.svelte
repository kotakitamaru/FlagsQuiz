
<script lang="ts">
    import { getRandomInt } from "./dataLoad";
    import type { Country } from "$lib/types";

    const { initialCountries, initialIndex } = $props<{ initialCountries: Country[]; initialIndex: number }>();

    let input: HTMLInputElement | undefined;
    let countries = $state<Country[]>([...initialCountries]);
    let currentCountryIndex = $state<number>(initialIndex);
    const currentCountry = $derived(countries[currentCountryIndex]);

    function onInputHandle(e: Event) {
        const target = e.target as HTMLInputElement;
        const str = target.value.toLowerCase();
        if (
            str === currentCountry.name.common.toLowerCase() ||
            currentCountry.altSpellings
                .slice(1, -1)
                .map((x: string) => x.toLowerCase())
                .includes(str)
        ) {
            countryDone(currentCountryIndex);
            target.value = "";
        }
    }
    function skip() {
        countryDone(currentCountryIndex);
    }

    function countryDone(indx: number) {
        countries.splice(indx, 1);
        countries = countries;
        if (countries.length > 0) {
            currentCountryIndex = getRandomInt(countries.length);
        }
        console.log(currentCountry.name.common.toLowerCase()+","+
            currentCountry.altSpellings
                .map(x => x.toLowerCase()))
    }
</script>

<div class="gameWindow">
    <h1>{countries.length}/{initialCountries.length}</h1>
    <img class="flagImg" src={currentCountry.flags.svg} alt="flag"/>
    <input bind:this={input} type="text" oninput={onInputHandle}/>
    <button onclick={skip}>skip</button>
</div>