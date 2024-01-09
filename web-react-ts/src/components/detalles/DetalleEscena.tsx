'use client'
import { useParams, Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { GET_ESCENA_DETALLE } from '../../queries/Query';
interface Escena{
    title: string;
    end:string;
    start: string;
}
interface GetEscenaDetalle{
    escenaDetalle: Escena;
}
function DetalleComic () {

    let { title } = useParams<{ title?: string }>();
    title = title ? title.replace(/_/g, ' ') : '';
  const { loading, error, data } = useQuery<GetEscenaDetalle>(GET_ESCENA_DETALLE, {
    variables: { title },
    skip: !title,
  });

  if (!title) {
    return <p className='flex center justify-center bold text-4xl'>Error: No se proporcionó un nombre para la busqueda de la escena</p>;
  }
  if (loading) return <p className='flex center justify-center bold text-4xl'>Cargando...</p>;
  if (error) return <p className='flex center justify-center align-middle bold text-4xl'>Error en la base de datos</p>;
  if (!data || !data.escenaDetalle) return <p className='flex center justify-center align-middle bold text-4xl'>No se encontró la escena</p>;

    return (
        <div className="flex flex-col items-center m-3 ">
      <div className="bg-white rounded-lg shadow p-6 w-full">
        <h1 className="text-4xl font-bold mb-4 text-center">{data.escenaDetalle.title}</h1>
        <hr className="mb-4"/>
        <div className='text-center'>
          <p className="text-xl mb-2 font-bold">Comienzo</p>
          <p className="text-xl mb-2"> {data.escenaDetalle.start}</p>
          <p className="text-xl mb-2 font-bold">Final</p>
          <p className="text-xl mb-2">{data.escenaDetalle.end}</p>          
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

