import React from "react";
import { Collection } from "./components/Collection";
import { Search } from "./components/Search";
import { LoadMore } from "./components/LoadMore";
import "./styles/home.css";
function App() {
  return (
    <div className="App">
      <h1>Image Search Engine</h1>
      <Search />
      <Collection />
      <LoadMore />
    </div>
  );
}

export default App;
