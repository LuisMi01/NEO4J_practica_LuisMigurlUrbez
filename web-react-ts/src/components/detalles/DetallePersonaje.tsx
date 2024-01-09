'use client'
import { useParams, Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { GET_PERSONAJE_DETALLE } from '../../queries/Query';
interface Personaje{
    name: string;
    aliases: string;
    identity: string;
    education: string;
    place_of_origin: string;
}
interface GetPersonajeDetalle{
    personajeDetalle: Personaje;
}
function DetalleComic () {

    let { name } = useParams<{ name?: string }>();
  name = name ? name.replace(/_/g, ' ') : '';
  const { loading, error, data } = useQuery<GetPersonajeDetalle>(GET_PERSONAJE_DETALLE, {
    variables: { name },
    skip: !name,
  });

  if (!name) {
    return <p className='flex center justify-center bold text-4xl'>Error: No se proporcionó un nombre para la busqueda del personaje</p>;
  }
  if (loading) return <p className='flex center justify-center bold text-4xl'>Cargando...</p>;
  if (error) return <p className='flex center justify-center align-middle bold text-4xl'>Error en la base de datos</p>;
  if (!data || !data.personajeDetalle) return <p className='flex center justify-center align-middle bold text-4xl'>No se encontró el personaje</p>;

    return (
        <div className="flex flex-col items-center m-3 ">
      <div className="bg-white rounded-lg shadow p-6 w-full">
        <h1 className="text-4xl font-bold mb-4 text-center">{data.personajeDetalle.name}</h1>
        <hr className="mb-4"/>
        <div className='text-center'>
          <p className="text-xl mb-2 font-bold">Alias</p>
          <p className="text-xl mb-2"> {data.personajeDetalle.aliases}</p>
          <p className="text-xl mb-2 font-bold">Identidad</p>
          <p className="text-xl mb-2">{data.personajeDetalle.identity}</p>
          <p className="text-xl mb-2 font-bold">Educación: </p>
          <p className="text-xl mb-2">{data.personajeDetalle.education}</p>
          <p className='text-xl mb-2 font-bold'>Lugar de procedencia:</p>
          <p className="text-xl mb-4">
             {data.personajeDetalle.place_of_origin}
          </p>
        </div>
      </div>
      <div className="mt-4 w-full flex justify-center">
        <Link to="/" className="mr-4 bg-blue-500 hover:bg-blue-700 text-center shadow-lg transition cursor-pointer text-white font-bold py-2 px-4 rounded-lg w-full">
          Volver a la página principal
        </Link>
      </div>
    </div>
    )
}

export default DetalleComic;

