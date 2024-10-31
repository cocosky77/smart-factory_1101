import React from "react";
import Header from "./components/Header";
import "./App.css";
import RouteChangeTracker from "./RouteChangeTracker";

function App() {
  RouteChangeTracker();
  return (
    <div className="App">
      <title>NISOFT SMART FACTORY</title>
      <Header />
    </div>
  );
}

export default App;
