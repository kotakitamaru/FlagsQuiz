import {writable} from "svelte/store";
import {loadCountries, loadCurrentCountry} from "../routes/flagsquiz/dataLoad";

export const countries = writable(await loadCountries());
export const currentCountryIndex = writable(loadCurrentCountry());