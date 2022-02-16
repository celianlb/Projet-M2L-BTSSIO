import logo from './logo.svg';
import './App.css';

import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';



import Accueil from './Pages/Accueil/Accueil'
import Competition from './Pages/Competition';
import Compte from './Pages/Compte';
import Connexion from './Pages/Connexion';
import Contact from './Pages/Contact';
import Inscription from './Pages/Inscription';
import Live from './Pages/Live';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        
        <Routes>
          <Route path="/" element={<Accueil />}/>
          <Route path="/Competition" element={<Competition />}/>
          <Route path="/Compte" element={<Compte />}/>
          <Route path="/Connexion" element={<Connexion/>}/>
          <Route path="/Contact" element={<Contact />}/>
          <Route path="/Inscription" element={<Inscription />} />
          <Route path="/Competition/Live" element={<Live />} />
        </Routes>
      
      
      
      </BrowserRouter>
      

    </div>
  );
}

export default App;
