'use client'

import '../App.css';
import githubLogo from '../images/githublogo.png';
import uaxLogo from '../images/uaxlogo.png';
import Dropdown from 'react-bootstrap/Dropdown';
import { BiMenuAltRight } from 'react-icons/bi';



function Banner() {
  
  return (
    <div className="grid grid-cols-3 grid-rows-1 p-5 bg-slate-gray">
      <div className="flex row gap-3">
        <div onClick={() => {
          window.open('https://github.com/LuisMi01/NEO4J_practica_LuisMigurlUrbez', '_blank');
        }
        }
             className="hidden md:block text-sm font-semibold py-0.5 px-0.5 rounded-full hover:bg-neutral-100 transition cursor-pointer ">
          <img className="rounded-full object-cover" src={githubLogo} alt={"Github"} width={50} height={50} />
        </div>
        <div onClick={() => {
          window.open('https://uax.com', '_blank');
        }
        }
             className="hidden md:block text-sm font-semibold py-0.5 px-0.5 rounded-full hover:bg-neutral-100 transition cursor-pointer">
          <img className="rounded-full object-cover" src={uaxLogo} alt={"Uax"} width={50} height={50} />
        </div>
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