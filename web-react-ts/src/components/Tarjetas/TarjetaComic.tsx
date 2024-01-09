'use client'
import React from 'react';
import { Link } from 'react-router-dom';


interface Comic {
    title: string;
    issue_number: number;
    year: number;
    description: string;
}

interface TarjetaComicProps {
    comic: Comic;
    link: string
}

const TarjetaComic: React.FC<TarjetaComicProps> = ({ comic, link }) => {
    return (
        <div className="m-4 transition-all duration-200 ease-in-out transform hover:scale-105">
            <div className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-white w-70 h-80 flex flex-col">
                <h2 className="px-6 py-4 font-bold text-lg">{comic.title}</h2>
                    <hr/>
                <div className="px-6 py-4 flex-grow flex flex-col flex-start">
                    <p className="text-gray-700 text-base">Número serial: {comic.issue_number}</p>
                    <p className="text-gray-700 text-base">Año: {comic.year}</p>
                </div>
                <div className="flex flex-col space-y-2 p-2">
                    <Link to={`/comic/${comic.title}`} className="transition-all duration-200 ease-in-out transform hover:scale-105">
                        <button
                            className="w-full bg-blue-500 text-white p-2 rounded shadow-md hover:shadow-lg transition cursor-pointer">Más información
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default TarjetaComic;
