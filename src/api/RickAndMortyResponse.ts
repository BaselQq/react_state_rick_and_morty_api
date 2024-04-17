
/*
* {
    "info": {
        "count": 826,
        "pages": 42,
        "next": "https://rickandmortyapi.com/api/character/?page=2",
        "prev": null
    },
    "results": [
        {
            "id": 1,
            "name": "Rick Sanchez",
            "status": "Alive",
            "species": "Human",
* */

export type RickAndMortyData = {
    info: {
        count: number
    }
    results: {
        id: number,
        name: string,
        status: string
    }[]
}

 export async function getResponse(): Promise<RickAndMortyData> {
        const response = await fetch("https://rickandmortyapi.com/api/character/");
        const data = await response.json();
        return data;
}