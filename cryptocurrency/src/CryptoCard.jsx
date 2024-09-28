import React from "react";

const CryptoCard = ({ name, image, price, marketCap }) => {
  return (
    <div className="crypto-card">
      <img src={image} alt={name} className="crypto-image" />
      <h2>{name}</h2>
      <p>Price: ${Number(price).toFixed(2)}</p> {/* Formatting price */}
      <p>Market Cap: ${marketCap}</p>
    </div>
  );
};

export default CryptoCard;
