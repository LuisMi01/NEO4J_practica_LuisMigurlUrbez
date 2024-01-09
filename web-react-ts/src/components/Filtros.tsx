'use client'
import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';

function Filtros() {
    const history = useNavigate();
    const [selected, setSelected] = useState('Comics');
  
    const handleSelection = (selection: string) => {
      setSelected(selection);
      history(`/${selection.toLowerCase()}`);
    }

  return (
    <div className="mydict flex justify-center mt-2">
      <label className={`relative ml-1 p-2 rounded-l-md cursor-pointer shadow-md text-center transition-colors duration-500 border-2 border-blue-500 ${selected === 'Comics' ? 'bg-blue-200' : 'bg-white'}`}>
        <input type="radio" name="radio" className="absolute h-1 w-1 overflow-hidden whitespace-nowrap" checked={selected === 'Comics'} onChange={() => handleSelection('Comics')} />
        <span className="block">Comics</span>
      </label>
      <label className={`relative ml-1 p-2 cursor-pointer shadow-md text-center transition-colors duration-500 border-t-2 border-b-2 border-blue-500 ${selected === 'Personajes' ? 'bg-blue-200' : 'bg-white'}`}>
        <input type="radio" name="radio" className="absolute h-1 w-1 overflow-hidden whitespace-nowrap" checked={selected === 'Personajes'} onChange={() => handleSelection('Personajes')} />
        <span className="block">Personajes</span>
      </label>
      <label className={`relative ml-1 p-2 rounded-r-md cursor-pointer shadow-md text-center transition-colors duration-500 border-2 border-blue-500 ${selected === 'Escenas' ? 'bg-blue-200' : 'bg-white'}`}>
        <input type="radio" name="radio" className="absolute h-1 w-1 overflow-hidden whitespace-nowrap" checked={selected === 'Escenas'} onChange={() => handleSelection('Escenas')} />
        <span className="block">Escenas</span>
      </label>
    </div>
  );
};

export default Filtros;