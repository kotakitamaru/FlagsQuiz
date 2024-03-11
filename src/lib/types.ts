interface Country{
    name: Name,
    region : string,
    altSpellings : string[],
    unMember : boolean,
    independent : boolean,
    flags : object,
}

interface Name{
    common : string,
    official : string,
}

