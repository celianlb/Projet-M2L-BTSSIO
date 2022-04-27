import logo from './logo.svg';
import './App.css';

import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';


import Accueil from './Pages/Accueil/Accueil'
import Competition from './Pages/Competition';
import Compte from './Pages/Compte';
import Connexion from './Pages/Connexion';
import Contact from './Pages/Contact';
import Inscription from './Pages/Inscription';
import Live from './Pages/Live';
import Circuit from './Components/Circuit'

function App() {
 const [users, setUsers] = useState([]);

  console.log('reset')
  return (
    <div className="App">
      <BrowserRouter>
        
        <Routes>
          <Route path="/" element={<Accueil />}/>
          <Route path="/Competition" element={<Competition state={[users, setUsers]} />}/>
          <Route path="/Compte" element={<Compte state={[users, setUsers]}/>}/>
          <Route path="/Connexion" element={<Connexion/>}/>
          <Route path="/Contact" element={<Contact />}/>
          <Route path="/Inscription" element={<Inscription />} />
          <Route path="/Competition/Live" element={<Live />} />
          <Route path="/Circuit" element={<Circuit state={[users, setUsers]}/>} />
        </Routes>
      
      
      
      </BrowserRouter>
      

    </div>
  );
}

export default App;
