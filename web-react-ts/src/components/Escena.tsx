import { useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { GET_ESCENAS } from '../queries/Query';
import TarjetaEscena from './Tarjetas/TarjetaEscena';

interface Event {
    title: string;
    end: string;
    start: string;
}
  
interface GetEscenasData {
    event: Event[];
}  

function Personajes() {
    const { loading, error, data, refetch } = useQuery<GetEscenasData>(GET_ESCENAS);
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
        {data?.event.map((escena) => (
          <TarjetaEscena key={escena.title} event={escena} link={`/escena/${escena.title.replace(/\s/g, '_')}`} />
        ))}
      </div>
    );
  }
  
  

export default Personajes;
