import { useState } from "react";
import "./styles.css";

export default function App() {
  const [inputText, setInputText] = useState("");
  function changeHandler(event) {
    const newValue = event.target.value;
    setInputText(newValue);
  }
  const [names, setNames] = useState([]);
  function addName() {
    setNames((prevValue) => {
      return [...prevValue, inputText];
    });
    setInputText("");
  }
  const [person, setPerson] = useState("");
  function whoIsPaying() {
    const numberOfPeople = names.length;
    const randomPersonIndex = Math.floor(Math.random() * numberOfPeople);
    const randomPerson = names[randomPersonIndex];

    if (randomPerson === undefined) {
      setPerson("Enter names");
    } else {
      setPerson(
        "Hurray! " + randomPerson.toUpperCase() + " is going to pay bill!"
      );
    }
  }
  function refreshPage() {
    window.location.reload(false);
  }
  return (
    <div className="App">
      <h1>Who is paying for Coffee</h1>
      <p>Enter list of names to find, who is going to pay todays bill. </p>

      <div className="input">
        <input
          placeholder="Enter the names..."
          onChange={changeHandler}
          type="text"
          value={inputText}
        />
        <button onClick={addName}>Add name</button>
      </div>

      <div className="output">
        <ul>
          {names.map((name, index) => {
            return (
              <div>
                <li key={index}>{name}</li>
              </div>
            );
          })}
        </ul>
      </div>
      <div className="buttons">
        <button onClick={whoIsPaying}>Find</button>
        <button onClick={refreshPage}>Reload!</button>
      </div>
      <hr />
      <h2>{person}</h2>
    </div>
  );
}
