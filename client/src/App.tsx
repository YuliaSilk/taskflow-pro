import React from "react";
import logo from "./logo.svg";
import "./App.css";
// import api from "./api";

function App() {
 //  const [data, setData] = React.useState([]);
 //  React.useEffect(() => {
 //   api.get("/").then((response) => {
 //    setData(response.data);
 //   });
 //  }, []);
 return (
  <div className="App">
   <header className="App-header">
    <img
     src={logo}
     className="App-logo"
     alt="logo"
    />
    {/* <p>{data}</p> */}
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
