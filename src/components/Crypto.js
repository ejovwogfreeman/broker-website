import React from "react";
import "../css/Header.css";
// import { Link } from "react-router-dom";

const Crypto = () => {
  return (
    <div className="tradingview-widget-container">
      <div className="tradingview-widget-container__widget"></div>
      <div className="tradingview-widget-copyright">
        <a
          href="https://www.tradingview.com/markets/"
          rel="noopener"
          target="_blank"
        >
          <span className="blue-text">Markets</span>
        </a>{" "}
        by TradingView
      </div>
      <script
        type="text/javascript"
        src="https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js"
        async
      >
        {{
          symbols: [
            {
              description: "",
              proName: "BINANCE:BTCUSDT",
            },
            {
              description: "",
              proName: "BINANCE:ETHUSDT",
            },
            {
              description: "",
              proName: "BINANCE:XRPUSDT",
            },
            {
              description: "",
              proName: "TRADERJOE:DODGEMIM",
            },
            {
              description: "",
              proName: "BINANCE:XRPUSDT",
            },
            {
              description: "",
              proName: "BITSTAMP:BTCUSD",
            },
            {
              description: "",
              proName: "OANDA:EURUSD",
            },
            {
              description: "",
              proName: "NASDAQ:TSLA",
            },
            {
              description: "",
              proName: "TVC:GOLD",
            },
            {
              description: "",
              proName: "FX:EURJPY",
            },
            {
              description: "",
              proName: "FOREXCOM:XAUUSD",
            },
            {
              description: "",
              proName: "ECONOMICS:LUNO",
            },
            {
              description: "",
              proName: "NSE:RELIANCE",
            },
            {
              description: "",
              proName: "MCX:CRUDEOIL1!",
            },
            {
              description: "",
              proName: "BINANCE:BTCUSDTPERP",
            },
            {
              description: "",
              proName: "BINANCE:BNBUSDT",
            },
            {
              description: "",
              proName: "OANDA:USDCAD",
            },
            {
              description: "",
              proName: "CRYPTOCAP:USDT.D",
            },
            {
              description: "",
              proName: "NSE:BANKNIFTY",
            },
          ],
          showSymbolLogo: true,
          colorTheme: "light",
          isTransparent: false,
          displayMode: "adaptive",
          locale: "en",
        }}
      </script>
    </div>
  );
};

export default Crypto;
