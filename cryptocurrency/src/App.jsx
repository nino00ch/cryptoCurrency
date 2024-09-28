import React, { useEffect, useState } from "react";
import CryptoDashboard from "./CryptoDashboard";
import axios from "axios";

function App() {
  const [cryptos, setCryptos] = useState([]);

  useEffect(() => {
    const options = {
      method: "GET",
      url: "https://api.coinranking.com/v2",
      headers: {
        "X-RapidAPI-Key":
          "coinrankingd53f97deaa60d593f0356505670f8d729d48ec2658da283c", // Replace with your RapidAPI key
        "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
      },
      params: {
        limit: "12", // Limiting to 12 coins
      },
    };

    axios
      .request(options)
      .then((response) => {
        setCryptos(response.data.data.coins); // Access the coin data
      })
      .catch((error) => {
        console.error("Error fetching cryptocurrency data: ", error);
      });
  }, []);

  return (
    <div className="App">
      <h1>Crypto Dashboard</h1>
      <CryptoDashboard cryptos={cryptos} />
    </div>
  );
}

export default App;
