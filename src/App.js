import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap'
import {Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import CharacterDetails from './components/CharacterDetails';
import Layout from './components/Layout';
import NarutoCharacters from './components/NarutoCharacters';


function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Layout />}>
  <Route index element={<NarutoCharacters />} />
  <Route path="characters/:id" element={<CharacterDetails />} />
  <Route path="clan" element={<p>Clanes</p>} />
  <Route path="villages" element={<p>Aldeas</p>} />
  <Route path="teams" element={<p>Equipos</p>} />

      </Route>
      </Routes>
    </Router>
  );
}

export default App;
