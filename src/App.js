// importing styles for the calculator
import "./App.css"; 
// importing Buttons component
import Buttons from "./Components/Buttons"; 
// importing React hook for state management
import { useState } from "react"; 
// importing Result component
import Result from "./Components/result"; 

// Main App component
function App() {
  
  // Using useState hook to maintain the state for result
  const [result, setResult] = useState("0");

  // Function to handle button click events
  const handleclicks = (value) => {
    switch (value) {
      case "0":
      case "1":
      case "2":
      case "3":
      case "4":
      case "5":
      case "6":
      case "7":
      case "8":
      case "9":
      case ".":
      case "+":
      case "-":
      case "/":
      case "*":
        // If result is "0", replace it with the clicked value, otherwise append it to the result
        if (result === "0") {
          setResult(value);
        } else {
          setResult(result + value);
        }
        break;
      case "=":
        // Evaluate the expression in the result and set the result state to the evaluated value
        setResult(eval(result));
        break;
      case "c":
        // Clear the result 
        setResult("");
        break;
      case "+/-":
        // Change the sign of the result
        setResult(parseInt(result, 10) * -1);
        break;
      case "%":
        // Convert the result to a percentage
        setResult(parseFloat(result, 10) / 100);
        break;
      default:
        break;
    }
  };

  // Render  Result, and Buttons components
  return (
    <div className="container">
      
      <div className="Calculator">
        <Result result={result} />
        <Buttons Buttonclicked={handleclicks} />
      </div>
    </div>
  );
}

// Export the App component as default
export default App;