
<script lang="ts">
    import {countriesLength, getRandomInt} from "./dataLoad";
    let input;
    export let countries : Country[];
    export let currentCountryIndex : number;

    $: currentCountry = countries[currentCountryIndex];

    function onInputHandle(e){
        const str = e.target.value.toLowerCase();
        if(str == currentCountry.name.common.toLowerCase()
            || currentCountry.altSpellings
                .slice(1,-1)
                .map(x => x.toLowerCase())
                .includes(str))
        {
            countryDone(currentCountryIndex)
            e.target.value = "";
        }
    }
    function skip(){
        countryDone(currentCountryIndex)
    }

    function countryDone(indx:number){
        countries.splice(indx,1);
        countries = countries;
        console.log(countries.length)
        currentCountryIndex = getRandomInt(countries.length)
        console.log(currentCountry.name.common.toLowerCase()+","+
            currentCountry.altSpellings
                .map(x => x.toLowerCase()))
    }
</script>

<div class="gameWindow">
    <h1>{countries.length}/{countriesLength()}</h1>
    <img class="flagImg" src={currentCountry.flags.svg} alt="flag"/>
    <input bind:this={input} type="text" on:input={onInputHandle}/>
    <button on:click={skip}>skip</button>
</div>