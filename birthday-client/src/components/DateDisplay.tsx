import { FunctionComponent } from "react";
import { findBirthday } from "../utils/birthdayCalculator";
import { Person } from "../types/types";

const DateDisplay: FunctionComponent<Person> = (person) => {
  const { birthday } = findBirthday(person);
  return (
    <div>
      <h2>{person.name}</h2>
      <p>CURRENTLY DISPLAYING BIRTHDATE: {birthday}</p>
      <p>TODO: DISPLAY BIRTHDAY AND DAYS TO BIRTHDAY</p>
    </div>
  );
};

export { DateDisplay };
