import logo from './logo.svg';
import './App.css';
import axios from "axios";
import {useEffect, useState} from "react";

const App = () => {
  
  const [data, setData] = useState([])
  
  console.log('This is the data',data)
  
  
  useEffect( () => {
    
    const fetchData = async () => {
      const url = "http://localhost:8000/gold";
      try {
        const response =  await axios.get(url)
       setData(response.data)
      } catch {
        console.log('Error')
      }
    }
    fetchData()
  },[])
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
