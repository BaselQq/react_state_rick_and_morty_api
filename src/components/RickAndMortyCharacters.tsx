import { getResponse, RickAndMortyData } from "../api/RickAndMortyResponse.ts";
import { useEffect, useState } from "react";

export const RickAndMortyCharacters = () => {

    const [characters, setCharacters] = useState<RickAndMortyData>()
    const [search, setSearch] = useState("");

    async function loadCharacters() {
        const data: RickAndMortyData = await getResponse();
        setCharacters(data);
    }

    useEffect(() => {
        loadCharacters();
    }, []);

    const handleChange = (e: { target: {value: string}}) => {
        setSearch(e.target.value);
        setFound(true);
    }

    return(
        <>
        <input type="text" onChange={handleChange}/>
            {characters?.results.map((character) => (
                (search == "" || character.name.toLowerCase().includes(search)) && (
                    <div key={character.id}>
                        <h2>{character.name}</h2>
                        <h2>{character.status}</h2>
                    </div>
                )
            ))}
        </>
    )
}