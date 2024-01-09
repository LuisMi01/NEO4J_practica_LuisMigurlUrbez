'use client'

import '../App.css';
import Dropdown from 'react-bootstrap/Dropdown';
import { BiMenuAltRight } from 'react-icons/bi';



function Banner() {
  
  return (
    <div className="grid grid-cols-3 grid-rows-1 p-5 bg-slate-gray">
      <div className="flex row gap-3">
        Hola hola
      </div>


      <div className="flex items-center justify-center ">
        Marvel Universe
      </div>


      <div className="flex justify-end">
        <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
                <BiMenuAltRight size={30} />
            </Dropdown.Toggle>
            <Dropdown.Menu>
                <Dropdown.Item href="#/buscar">Buscar</Dropdown.Item>
                <Dropdown.Item href="#/comics">Comics</Dropdown.Item>
                <Dropdown.Item href="#/escenas">Escenas</Dropdown.Item>
                <Dropdown.Item href="#/personajes">Personajes</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    </div>
    </div>
  );
};

export default Banner;