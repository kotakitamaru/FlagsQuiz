let countries : Country[];

export async function initializeCountries(isUnMember = false, isIndependent = false){
    let maxVal: number = -1;
    countries = await fetch("https://restcountries.com/v3.1/all?fields=name,region,flags,altSpellings,unMember,independent")
        .then(res => res.json())
        .then(data => {
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