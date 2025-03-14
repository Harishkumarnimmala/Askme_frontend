import React, {useState} from "react";
import { FaSearch } from 'react-icons/fa';
import "./SearchBar.css"

export const SearchBar  = ({setResults}) =>{
    const [input, setInput] = useState("");
    const [isButtonActive, setIsButtonActive] = useState(false);
    const [loading, setLoading] = useState(false);  // Add loading state 
    const [error, setError] = useState(null);
    

    const sendMessage   = async () => {
        if (!input.trim()) return;

        setLoading(true); // Start loading
        setError(null);  // Clear previous error messag
        
        const baseUrl = window.backend_url;
        //const baseUrl  = window.backend_url || "http://localhost:8000";
        console.log("Using backend URL:", baseUrl);

         // Ensure base URL and endpoint are defined
         if (!baseUrl) {
          console.error("Backend URL is not defined!");
          setError("Backend URL is not defined!");
          setLoading(false);
          return;
        }
        try {
            const encodedInput = encodeURIComponent(input.trim());
            const fullUrl = `${baseUrl}/search?query=${encodedInput}`;
            //const fullUrl = `${baseUrl}${endpoint}?query=${input}`;
            console.log("Making request to:", fullUrl);
            const response = await fetch(fullUrl,{
               method: 'GET',
               //mode: "cors",
               headers: {
                'Content-Type': 'application/json',
                 'Accept': 'application/json'
               },
               mode: 'cors' 
            });
            console.log("Response:", response);
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
        
        const data = await response.json();
        setResults([{ type: "bot", text: data.result }]);
        setInput(""); 

    } catch (error){
        console.error("Error fetching data", error);
        setError("An error occurred. Please try again later.");;

    } finally {
    setLoading(false);  // Set loading to false when the request finishes
  }
    
};

    const handleKeyPress  = (e) => {
        if (e.key === "Enter") {
            setIsButtonActive(true);
            sendMessage();
            setTimeout(() => setIsButtonActive(false), 100);
        }
    };
    return (
        <div className="input-wrapper">
        <FaSearch id="search-icon" />
        <input 
        placeholder="Type to Search..." 
        value= {input} 
        onChange= {(e) => setInput(e.target.value)}
        onKeyDown ={handleKeyPress}
        />
        <button onClick= {sendMessage}
         className={isButtonActive ? "active" : ""}
         disabled={loading}  // Disable button while loading
         >
         {loading ? (
           <span className="loading-spinner"></span>  // Add loading spinner
         ) : (
           "Send"
         )}
       </button>
     </div>
   );
 };

 // Helper function to check if a string is a valid URL
function isValidUrl(url) {
  try {
    // Try to create a URL object to validate the URL format
    new URL(url);
    return true;
  } catch (e) {
    return false; // If the URL creation fails, it's not valid
  }
}