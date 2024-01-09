'use client'
import './App.css';
import Banner from './components/Banner';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

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
          <Banner />
          <hr/>
          <Routes>
            <Route /> 
          </Routes>
        </Router>
      </ApolloProvider>
    </div>
  );
}

export default App
