<script lang="ts">
    import {countries, currentCountryIndex} from "$lib/stores";
    import {countryGuessed, getNuwCurrentCountry} from "./dataLoad";

    let input;

    $: currentCountry = $countries[$currentCountryIndex]
    function onInputHandle(e){
        const str = e.target.value.toLowerCase();
        if(str == currentCountry.name.common.toLowerCase()
            || currentCountry.altSpellings
                .slice(1,-1)
                .map(x => x.toLowerCase())
                .includes(str))
        {
            console.log(str)
            countryGuessed();
            $currentCountryIndex = getNuwCurrentCountry();
            e.target.value = "";
        }
    }
    function skip(){
        countryGuessed();
        $currentCountryIndex = getNuwCurrentCountry();
        input.value = "";
    }
</script>

<div>
    <img src={currentCountry.flags.png} alt="flag"/>
    <input bind:this={input} type="text" on:input={onInputHandle}/>
    <button on:click={skip}>skip</button>
</div>
