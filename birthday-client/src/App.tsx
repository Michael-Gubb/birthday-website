import { DateDisplay } from "./components/DateDisplay";
import people from "./data/testPersons.json";
import "./App.css";

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
