// src/App.js
import React, { useState, useEffect  } from "react";
import './App.css';
import { SearchBar } from "./components/SearchBar";
import { SearchResultsList } from "./components/SearchResultsList";

const App = () => {
    const [results , setResults ]= useState([]);
    return (
        <div className="App">
            <h1>AskMe AI</h1> 
        <div className='search-bar'>
            <SearchBar setResults={setResults}/>
            <SearchResultsList results={results} />
        </div>
        </div>
    );
};

export default App;
