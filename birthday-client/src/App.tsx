import { FunctionComponent } from "react";
import "./App.css";

const event = new Date("August 19 1995");

interface DateDisplayProps {
  name: string;
  date: Date;
}

const DateDisplay: FunctionComponent<DateDisplayProps> = (person) => {
  return (
    <div>
      <h2>{person.name}</h2>
      <p>{person.date.toLocaleString()}</p>
    </div>
  );
};

function App() {
  return (
    <>
      <h1>List of birthdays</h1>
      <div className="App">
        <DateDisplay date={event} name={"Person 1"} />
      </div>
    </>
  );
}

export default App;
