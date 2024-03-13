interface Country{
    name: Name,
    region : string,
    altSpellings : string[],
    unMember : boolean,
    independent : boolean,
    flags : Flags,
}

interface Name{
    common : string,
    official : string,
}

interface Flags{
    svg : string,
    png : string,
}

