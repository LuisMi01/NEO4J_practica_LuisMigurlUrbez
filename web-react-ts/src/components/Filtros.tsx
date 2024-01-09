'use client'

import React, { useState } from 'react';

function Filtros() {
  const [selected, setSelected] = useState('Comics');

  return (
    <div className="mydict flex justify-center mt-2">
      <label className={`relative ml-1 p-2 rounded-l-md cursor-pointer shadow-md text-center transition-colors duration-500 border-2 border-blue-500 ${selected === 'Comics' ? 'bg-blue-200' : 'bg-white'}`}>
        <input type="radio" name="radio" className="absolute h-1 w-1 overflow-hidden whitespace-nowrap" checked={selected === 'Comics'} onChange={() => setSelected('Comics')} />
        <span className="block">Comics</span>
      </label>
      <label className={`relative ml-1 p-2 cursor-pointer shadow-md text-center transition-colors duration-500 border-t-2 border-b-2 border-blue-500 ${selected === 'Personajes' ? 'bg-blue-200' : 'bg-white'}`}>
        <input type="radio" name="radio" className="absolute h-1 w-1 overflow-hidden whitespace-nowrap" checked={selected === 'Personajes'} onChange={() => setSelected('Personajes')} />
        <span className="block">Personajes</span>
      </label>
      <label className={`relative ml-1 p-2 rounded-r-md cursor-pointer shadow-md text-center transition-colors duration-500 border-2 border-blue-500 ${selected === 'Escenas' ? 'bg-blue-200' : 'bg-white'}`}>
        <input type="radio" name="radio" className="absolute h-1 w-1 overflow-hidden whitespace-nowrap" checked={selected === 'Escenas'} onChange={() => setSelected('Escenas')} />
        <span className="block">Escenas</span>
      </label>
    </div>
  );
};

export default Filtros;