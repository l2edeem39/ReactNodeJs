// client/src/App.js

import React from "react";
// import logo from "./logo.svg";
import "./App.css";

function App() {
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    fetch("/products")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        console.log(data);
      });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        {/* <p>{!data ? "Loading..." : data}</p> */}
        {data.map((item) => (
          <div key={item.id}>
            <p>{item.id}</p>
          </div>
        ))}
      </header>
    </div>
  );
}

export default App;
