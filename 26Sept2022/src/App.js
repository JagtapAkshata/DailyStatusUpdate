import { evaluate } from "mathjs";
import { useState } from "react";
import "./App.css";
import Button from "./components/Button";
import Input from "./components/Input";

function App() {
  const [text, setText] = useState("");
  const [result, setResult] = useState("");
  const buttonColor = "#f2a33c";

  const add = (val)=>{
    setText((text)=>[...text, val + " "]);
  };

  const calculateResult = ()=>{
    const input = text.join("")
    setResult(evaluate(input)); 
  }
  const clear =()=>{
    setText("");
    setResult("");
  }
  return (
    <div className="App mt-4">
      <div className="calc-wrapper">
        <Input text={text} result={result}/>
        <div className="row">
          <Button symbol="7" onClick={()=>alert("7")}/>
          <Button symbol="8" handleClick={add}/>
          <Button symbol="9" handleClick={add}/>
          <Button symbol="/" color={buttonColor} handleClick={add}/>
        </div>
        <div className="row">
          <Button symbol="4" handleClick={add}/>
          <Button symbol="5" handleClick={add}/>
          <Button symbol="6" handleClick={add}/>
          <Button symbol="*" color={buttonColor} handleClick={add}/>
        </div>
        <div className="row">
          <Button symbol="1" handleClick={add}/>
          <Button symbol="2" handleClick={add}/>
          <Button symbol="3" handleClick={add}/>
          <Button symbol="+" color={buttonColor} handleClick={add}/>
        </div>
        <div className="row">
          <Button symbol="0" handleClick={add}/>
          <Button symbol="." handleClick={add}/>
          <Button symbol="=" handleClick={calculateResult}/>
          <Button symbol="-" color={buttonColor} handleClick={add}/>
        </div>
        <div>
          <Button symbol="Clear" handleClick={clear}/>
        </div>
        
      </div>
    </div>
  );
}

export default App;
