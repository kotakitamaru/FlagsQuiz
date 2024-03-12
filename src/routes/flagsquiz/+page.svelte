<script lang="ts">
    import {countries, currentCountryIndex} from "$lib/stores";
    import {getNuwCurrentCountry} from "./dataLoad";

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
            $currentCountryIndex = getNuwCurrentCountry();
            e.target.value = "";
        }
    }
    function skip(){
        $countries.splice($currentCountryIndex, 1);
        localStorage.setItem("countries",JSON.stringify($countries));
        $currentCountryIndex = getNuwCurrentCountry();
        console.log($countries[$currentCountryIndex].name.common + " " + $countries.length);
        input.value = "";
    }
</script>

<div>
    <img src={currentCountry.flags.svg} alt="flag"/>
    <input bind:this={input} type="text" on:input={onInputHandle}/>
    <button on:click={skip}>skip</button>
</div>
