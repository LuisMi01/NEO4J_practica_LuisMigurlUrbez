import { useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { GET_COMICS_TITLES } from '../queries/Query';
import TarjetaComic from './Tarjetas/TarjetaComic';

interface Comic {
    title: string;
    issue_number: number;
    year: number;
    description: string;
}

  
  interface GetComicsData {
    comics: Comic[];
  }

function Comics() {
    const { loading, error, data, refetch } = useQuery<GetComicsData>(GET_COMICS_TITLES);
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
        {data?.comics.map((comic) => (
          <TarjetaComic key={comic.title} comic={comic} link={`/comic/${comic.title.replace(/\s/g, '_')}`} />
        ))}
      </div>
    );
  }
  

export default Comics;
