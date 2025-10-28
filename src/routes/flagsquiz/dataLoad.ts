import type { Country } from "$lib/types";

let countries: Country[] = [];

export async function initializeCountries(isUnMember = false, isIndependent = false): Promise<[Country[], number]> {
    countries = await fetch("https://restcountries.com/v3.1/all?fields=name,region,flags,altSpellings,unMember,independent")
        .then(res => res.json() as Promise<Country[]>)
        .then((data: Country[]) => {
            return data;
        })

    if(isUnMember)
        countries = countries.filter(x => x.unMember)
    if(isIndependent)
        countries = countries.filter(x => x.independent)

    return [[...countries], getRandomInt(countries.length)]
}

export function countriesLength(){
    return countries.length;
}

export function getRandomInt(max:number) {
    return Math.floor(Math.random() * max);
}