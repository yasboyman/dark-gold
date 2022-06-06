import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { GoldPrice } from "./components/GoldPrice";

const App = () => {
  const [data, setData] = useState([]);
  const [curr, setCurr] = useState(false);

  console.log("This is the data", data);

  useEffect(() => {
    console.log("rendered");
    const fetchData = async () => {
      const url = "http://localhost:8000/gold";
      try {
        const response = await axios.get(url);
        setData(response.data);
      } catch {
        console.log("Error");
      }
    };
    fetchData();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        Live Gold Price
        <button
          style={{ backgroundColor: "darkgrey" }}
          type="button"
          className="home_btn"
          onClick={() => setCurr(!curr)}
        >
          Home
        </button>
        {curr && <p>Currency options</p>}
      </header>

      <GoldPrice currency={data.currency} price_18k={data.price_gram_18k} />
    </div>
  );
};

export default App;
