import React from 'react';

const Principal: React.FC = () => {
    return (
        <div className='p-10'>
            <h1 className="flex center justify-center bold text-4xl p-5">Bienvenido a la web de Marvel Comics</h1>
            <hr/>
            <p className="flex center justify-center bold text-2xl p-5">Puedes comenzar explorando entre escenas, personajes y comics pulsando sobre los botones de arriba.</p>
            <p className="flex center justify-center bold text-2xl p-5">También puedes buscar los personas que tu quieras desde el buscador.</p>
        </div>
    );
};

export default Principal;
