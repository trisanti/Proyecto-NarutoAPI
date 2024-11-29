import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Character from "./Character";
const CharacterDetails = () => {
    const {id} = useParams();
    const [character, setCharacter]=useState({})
    const [isLoading, setIsLoading]=useState(true);
    useEffect(() => {
        fetch(`https://narutodb.xyz/api/character/${id}`)
        .then(response => response.json())
        .then (data => {
            setCharacter(data);
            setIsLoading(false);
        })
    }, [id])


    return(
        <>
         {isLoading ? 'Cargando...' : ''}
         {!isLoading && 
                <Character id={character.id} 
                name={character.name} 
                images={character.images} />
            }
        </>
    );
}

export default CharacterDetails;