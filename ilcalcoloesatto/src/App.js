import './App.css';
import { useState } from 'react';

function App() {
  const numeri = Array.from({ length: 90 }, (_, i) => i + 1); // Array di numeri da 1 a 90
  const [selezionati, setSelezionati] = useState([]); // Stato per numeri selezionati
  const [tipoSviluppo, setTipoSviluppo] = useState('Cinquine'); // Stato per Tipo Sviluppo
  const [schedina, setSchedina] = useState('Semplice'); // Stato per Schedina

  // Funzione per gestire il click su un numero
  const toggleNumero = (numero) => {
    if (selezionati.includes(numero)) {
      setSelezionati(selezionati.filter((n) => n !== numero)); // Rimuove il numero
    } else {
      setSelezionati([...selezionati, numero]); // Aggiunge il numero
    }
  };

  const ruote = [
    'Bari',
    'Cagliari',
    'Firenze',
    'Genova',
    'Milano',
    'Napoli',
    'Palermo',
    'Roma',
    'Torino',
    'Venezia',
    'Ruota Nazionale'
  ];

  const [selezionate, setSelezionate] = useState([]); // Stato per le ruote selezionate
  const [tutteSelezionate, setTutteSelezionate] = useState(false); // Stato per "Tutte le ruote"

  // Funzione per gestire la selezione/deselezione di una ruota
  const toggleRuota = (ruota) => {
    if (selezionate.includes(ruota)) {
      setSelezionate(selezionate.filter((r) => r !== ruota)); // Rimuove la ruota
    } else {
      setSelezionate([...selezionate, ruota]); // Aggiunge la ruota
    }
  };

  // Funzione per gestire "Tutte le ruote"
  const toggleTutteLeRuote = () => {
    if (tutteSelezionate) {
      setSelezionate([]); // Deseleziona tutte le ruote
    } else {
      setSelezionate(ruote); // Seleziona tutte le ruote
    }
    setTutteSelezionate(!tutteSelezionate);
  };











  return (
    <div className="App">
      {/* Div 1: Pulsanti di controllo */}
      <div className="header-buttons">
        <button className="nav-button">Sviluppo Integrale</button>
        <button className="nav-button">Sviluppo Condizionato</button>
        <button className="nav-button">Stampa Schede</button>
        <button className="nav-button">Stampa Combinazioni</button>
        <button className="nav-button">Inverti selezione pronostico iniziale</button>
      </div>

      {/* Div 2: Griglia dei numeri */}
      <div className="griglia-container">
        <h2>Selezioni</h2>
        <div className="griglia-numeri">
          {numeri.map((numero) => (
            <div
              className={`numero ${selezionati.includes(numero) ? 'selezionato' : ''}`}
              key={numero}
              onClick={() => toggleNumero(numero)}
            >
              {numero}
            </div>
          ))}
        </div>
      </div>

      {/* Div 3: Tipo Sviluppo e Schedina */}
      <div className="tipo-sviluppo-schedina">
        <div className="campo-selezione">
          <label htmlFor="tipo-sviluppo">Tipo Sviluppo:</label>
          <select
            id="tipo-sviluppo"
            value={tipoSviluppo}
            onChange={(e) => setTipoSviluppo(e.target.value)}
          >
            <option value="Cinquine">Cinquine</option>
            <option value="Quartine">Quartine</option>
            <option value="Ternine">Ternine</option>
            <option value="Ambo">Ambo</option>
          </select>
        </div>
        <div className="campo-selezione">
          <label htmlFor="schedina">Schedina:</label>
          <select
            id="schedina"
            value={schedina}
            onChange={(e) => setSchedina(e.target.value)}
          >
            <option value="Semplice">Semplice</option>
            <option value="Multipla">Multipla</option>
          </select>
        </div>
      </div>

      <div className="condizioni-info">
  {/* Div Condizioni */}
  <div className="condizioni">
    <h3>Condizioni</h3>
    <div className="campo-condizione">
      <label>Segni pari:</label>
      <input type="number" min="0" />
    </div>
    <div className="campo-condizione">
      <label>Segni dispari:</label>
      <input type="number" min="0" />
    </div>
    <div className="campo-condizione">
      <label>Segni da 1 a 15:</label>
      <input type="number" min="0" />
    </div>
    <div className="campo-condizione">
      <label>Segni da 16 a 30:</label>
      <input type="number" min="0" />
    </div>
    <div className="campo-condizione">
      <label>Segni da 31 a 45:</label>
      <input type="number" min="0" />
    </div>
    <div className="campo-condizione">
      <label>Segni da 46 a 60:</label>
      <input type="number" min="0" />
    </div>
    <div className="campo-condizione">
      <label>Segni da 61 a 75:</label>
      <input type="number" min="0" />
    </div>
    <div className="campo-condizione">
      <label>Segni da 76 a 90:</label>
      <input type="number" min="0" />
    </div>
    <div className="campo-condizione">
      <label>Somma:</label>
      <input type="number" min="0" placeholder="da" />
      <input type="number" min="0" placeholder="a" />
    </div>
  </div>

 {/* Div Ruote e Informazioni */}
 <div className="ruote-info">
        <h3>Ruote</h3>
        <div className="campo-ruota">
          <input
            type="checkbox"
            id="tutte"
            checked={tutteSelezionate}
            onChange={toggleTutteLeRuote}
          />
          <label htmlFor="tutte">Tutte le ruote</label>
        </div>
        {ruote.map((ruota) => (
          <div className="campo-ruota" key={ruota}>
            <input
              type="checkbox"
              id={ruota}
              checked={selezionate.includes(ruota)}
              onChange={() => toggleRuota(ruota)}
            />
            <label htmlFor={ruota}>{ruota}</label>
          </div>
        ))}
        <h3>Informazioni</h3>
        <div className="informazioni">
          <p>Pronostico: 0</p>
          <p>Sviluppo integrale:</p>
          <p>Colonne: 0</p>
          <p>Costo: €0,00</p>
          <p>Sviluppo condizionato:</p>
          <p>Colonne: 0</p>
          <p>Costo: €0,00</p>
        </div>
      </div>
    </div>
      

      {/* Div 5: Colonne finali */}
      <div className="colonne-finali">
        <h2>Colonne Finali</h2>
        {/* Aggiungi contenuto della tabella */}
      </div>
    </div>
  );
}

export default App;
