import React from "react";
import "./Coin.css";

const Coin = ({
  image,
  name,
  price,
  symbol,
  volume,
  priceChange,
  marketcap,
}) => {
  return (
    <div className="coin-container">
      <div className="coin-row">
        <div className="coin">
          <img src={image} />
          <h1>{name}</h1>
          <p className="coin-symbol">{symbol}</p>
        </div>
        <div className="coin-data">
          <p className="coin-price">${price}</p>
          <p className="coin-volume">${volume}</p>

          <p
            className={
              priceChange < 0 ? "coin-percent red" : "coin-percent green"
            }
          >
            {priceChange.toFixed(2)}%
          </p>

          <p className="coin-marketcap">Mkt Cap:${marketcap}</p>
        </div>
      </div>
    </div>
  );
};

export default Coin;
