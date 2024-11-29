import { useEffect, useState } from "react";
import Character from "./Character";
import Paginator from "./Paginator";

const NarutoCharacters = () => {
  const [characters, setCharacters] = useState([]);
  const [info, setInfo] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetch(`https://narutodb.xyz/api/character?page=${page}`)
      .then(response => response.json())
      .then(data => {
        console.log("API Response:", data);
        setCharacters(data.results || []);
        setInfo(data.info || {});
        setIsLoading(false);
      })
      .catch(error => {
        console.error("Error fetching characters:", error);
        setCharacters([]);
        setIsLoading(false);
      });
  }, [page]);

  return (
    <div>
      {isLoading && <p>Cargando...</p>}
      {!isLoading && characters.length === 0 && <p>No hay personajes disponibles.</p>}
      <div className="row row-cols-1 row-cols-md-2 g-2">
        {!isLoading && characters.map(character => (
          <Character 
            key={character.id} 
            id={character.id} 
            name={character.name} 
            images={character.images?.[0] && <img src={character.images[0]} alt={character.name} />}

            
          />
        ))}
      </div>
      <Paginator page={page} info={info} setPage={setPage} />
    </div>
  );
};

export default NarutoCharacters;
