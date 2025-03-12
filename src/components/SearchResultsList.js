import React from 'react';
import "./SearchResultsList.css";

export const SearchResultsList = ({results}) => {
    return (
            <div className="results-list">

           {results.length > 0 ? (
            results
            .filter(result => result.type === "bot") 
            .map((result, index) => 
                (
                <div key={index} className={`result-item ${result.type}`}>
                    {result.text}
                </div>

                ))

            ):( 
            <div>No results found.</div> // Fallback if no results
        
    )}

    </div>
);
};