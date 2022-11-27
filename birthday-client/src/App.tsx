import { FunctionComponent } from "react";
import { Person } from "./types/types";
import people from "./data/testPersons.json";
import "./App.css";

const DateDisplay: FunctionComponent<Person> = (person) => {
  return (
    <div>
      <h2>{person.name}</h2>
      <p>CURRENTLY DISPLAYING BIRTHDATE: {person.birthdate}</p>
      <p>TODO: DISPLAY BIRTHDAY AND DAYS TO BIRTHDAY</p>
    </div>
  );
};

function App() {
  return (
    <>
      <h1>List of birthdays</h1>
      <div className="App">
        <DateDisplay
          key={people[0].id}
          id={people[0].id}
          birthdate={people[0].birthdate}
          name={people[0].name}
        />
      </div>
    </>
  );
}

export default App;
