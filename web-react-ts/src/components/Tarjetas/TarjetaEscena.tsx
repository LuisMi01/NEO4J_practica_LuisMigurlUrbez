'use client'
import React from 'react';
import { Link } from 'react-router-dom';


interface Event {
    title: string;
    start: string;
    end: string;
}

interface TarjetaEventProps {
    event: Event;
    link: string
}

const TarjetaComic: React.FC<TarjetaEventProps> = ({ event, link }) => {
    return (
        <div className="m-4 transition-all duration-200 ease-in-out transform hover:scale-105">
            <div className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-white w-70 h-80 flex flex-col">
                <h2 className="px-6 py-4 font-bold text-lg">{event.title}</h2>
                    <hr/>
                <div className="px-6 py-4 flex-grow flex flex-col flex-start">
                    <p className="text-gray-700 text-base">Comienzo: {event.start}</p>
                    <p className="text-gray-700 text-base">Finalización: {event.start}</p>
                </div>
                <div className="flex flex-col space-y-2 p-3">
                    <Link to={`/escena/${event.title}`} className="transition-all duration-200 ease-in-out transform hover:scale-105">
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
