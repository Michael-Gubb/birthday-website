import { DateDisplay } from "./components/DateDisplay";
import people from "./data/testPersons";
import "./App.css";

function App() {
  return (
    <>
      <h1>List of birthdays</h1>
      <div className="App">
        <DateDisplay />
      </div>
    </>
  );
}

export default App;
