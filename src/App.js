import './App.css';

/* import axios from 'axios'; */

import { useEffect, useState } from 'react';

function App() {

  const [receitas, setReceitas] = useState([]);

  useEffect(() => {
    async function fetchPosts() {
      const res = await fetch('http://localhost:1337/api/receitas/')
      const data = await res.json()
      setReceitas(data.data)
    }
    fetchPosts()
  },[]);

  
  console.log(receitas)
  
  return (
    <div className="App">
      <h1>Receitas</h1>
  
    </div>
  );
}

export default App;
