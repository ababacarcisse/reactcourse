import React from 'react'
import Compteur from './composants/compteur.jsx'
export default function App() {
    const nom = 'React'
  return (
    <div>
        <h1>Voici le composant dans autre fichier  </h1>
        <Compteur nom={nom} />
    </div>
  );
}
