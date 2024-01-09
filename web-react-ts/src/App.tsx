'use client'
import './App.css';
import Banner from './components/Banner';
import Filtros from './components/Filtros'
import Comics from './components/Comics';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import DetalleComic from './components/detalles/DetalleComic';
import DetallePersonaje from './components/detalles/DetallePersonaje';
import Personajes from './components/Personajes'
import DetalleEscena from './components/detalles/DetalleEscena';
import Escena from './components/Escena'



// Crea un cliente Apollo
const client = new ApolloClient({
  uri: 'http://localhost:4001/graphql', //esto por ahora funciona en local, si quiero usarlo en server hay que cambiarlo
  cache: new InMemoryCache()
});


function App() {
  return (
    <div className="bg-robin-egg-blue min-h-screen">
      
       <ApolloProvider client={client}>
        <Router>
          <Banner/>
          <Filtros/>
          <Routes>
            <Route path="/comics" element={<Comics />} />
            <Route path="/comic/:title" element={<DetalleComic />} />
            <Route path="/personajes" element={<Personajes />} />
            <Route path="/personaje/:name" element={<DetallePersonaje />} />
            <Route path="/escenas" element={<Escena />} />
            <Route path="/personaje/:name" element={<DetalleEscena />} />
          </Routes>
        </Router>
      </ApolloProvider>
    </div>
  );
}

export default App
