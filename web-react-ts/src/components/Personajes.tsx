import { useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { GET_PERSONAJES } from '../queries/Query';
import TarjetaPersonaje from './Tarjetas/TarjetaPersonajes';

interface Personaje {
    name: string
    aliases: string
    identity: string
    education: string
    place_of_origin: string
}
  
interface GetPersonajeData {
    personaje: Personaje[];
}  

function Comics() {
    const { loading, error, data, refetch } = useQuery<GetPersonajeData>(GET_PERSONAJES);
    useEffect(() => {
      refetch();
    }, [refetch]);
    
    
    if (loading) return <p className="flex center justify-center align-middle bold text-4xl">Cargando...</p>;
    if (error) {
      console.error(error);
      return <p className="flex center justify-center align-middle bold text-4xl">Error</p>;
    }
  
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-center items-center">
        {data?.personaje.map((personaje) => (
          <TarjetaPersonaje key={personaje.name} personaje={personaje} link={`/personaje/${personaje.name.replace(/\s/g, '_')}`} />
        ))}
      </div>
    );
  }
  

export default Comics;
