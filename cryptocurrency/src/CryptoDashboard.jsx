import React from "react";
import CryptoCard from "./CryptoCard";

const CryptoDashboard = ({ cryptos }) => {
  return (
    <div className="crypto-dashboard">
      {cryptos.map((crypto) => (
        <CryptoCard
          key={crypto.uuid} // Use unique uuid from the API
          name={crypto.name}
          image={crypto.iconUrl}
          price={crypto.price}
          marketCap={crypto.marketCap}
        />
      ))}
    </div>
  );
};

export default CryptoDashboard;
