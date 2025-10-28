export interface Country{
    name: Name,
    region : string,
    altSpellings : string[],
    unMember : boolean,
    independent : boolean,
    flags : Flags,
}

export interface Name{
    common : string,
    official : string,
}

export interface Flags{
    svg : string,
    png : string,
}

