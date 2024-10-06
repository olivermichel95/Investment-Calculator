import Header from "./Components/Header";
import UserInput from "./Components/UserInput";
import { useState } from "react";
import Results from "./Components/Results";
function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 12000,
    expectedReturn: 15000,
    duration: 10,
  });

  function handleInputChange(inputIdentifier, newvalue) {
    const parsedValue = parseFloat(newvalue);

    if (!isNaN(parsedValue)) {
      setUserInput(prevInput => {
        return { ...prevInput, [inputIdentifier]: parsedValue };
      });
    }
  }
  return (
    <>
      <Header />
      <UserInput userInput={userInput} onChangeInput={handleInputChange} />
      <Results input={userInput} />
    </>
  );
}

export default App;
