import {countries, currentCountryIndex} from "$lib/stores";
import {browser} from "$app/environment";

export async function fetchCountries() : Promise<Country[]>{
    return await fetch("https://restcountries.com/v3.1/all?fields=name,region,flags,altSpellings,unMember,independent")
        .then(res => res.json())
        .then(data => data)
}

export async function loadCountries() : Promise<Country[]>{
    const str = browser?localStorage.getItem("countries"):null;
    let countries;
    if(str !== null && str !== "") {
        countries = JSON.parse(str);
    }
    else
        countries = await fetchCountries();
    browser && localStorage.setItem("countries",JSON.stringify(countries));
    return countries;
}

export function loadCurrentCountry(){
    const str = browser?localStorage.getItem("currentCountry"):null;
    let maxVal:number = 0;
    countries.subscribe((value)=>{
        maxVal = value.length;
    })
    let curr;
    if(str !== null)
        curr = Number.parseInt(str);
    else
        curr = getRandomInt(maxVal);
    browser && localStorage.setItem("currentCountry",curr.toString());
    return curr;
}

export function getNuwCurrentCountry(){
    let maxVal:number = 0;
    countries.subscribe((value)=>{
        maxVal = value.length;
    })
    const curr = getRandomInt(maxVal);
    browser && localStorage.setItem("currentCountry",curr.toString());
    return curr;
}

function getRandomInt(max:number) {
    return Math.floor(Math.random() * max);
}