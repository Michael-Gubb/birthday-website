import { FunctionComponent } from "react";
import { Person } from "../types/types";

const DateDisplay: FunctionComponent<Person> = (person) => {
  return (
    <div>
      <h2>{person.name}</h2>
      <p>CURRENTLY DISPLAYING BIRTHDATE: {person.birthdate}</p>
      <p>TODO: DISPLAY BIRTHDAY AND DAYS TO BIRTHDAY</p>
    </div>
  );
};

export { DateDisplay };
