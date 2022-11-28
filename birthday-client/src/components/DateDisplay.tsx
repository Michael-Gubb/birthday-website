import { FunctionComponent } from "react";
import { findBirthday } from "../utils/birthdayCalculator";
import { Person } from "../types/types";
import peopleFromFile from "../data/testPersons";

interface DateDisplayElementProps {
  person: Person;
}

const DateDisplayElement: FunctionComponent<DateDisplayElementProps> = ({
  person,
}) => {
  const { birthday } = findBirthday(person, new Date());
  return (
    <div>
      <h2>{person.name}</h2>
      <p>CURRENTLY DISPLAYING BIRTHDATE: {birthday}</p>
      <p>TODO: DISPLAY BIRTHDAY AND DAYS TO BIRTHDAY</p>
    </div>
  );
};

interface DateDisplayListProps {
  people: Person[];
}

const DateDisplayList: FunctionComponent<DateDisplayListProps> = ({
  people,
}) => {
  return (
    <ul>
      {people.map((person) => {
        return <DateDisplayElement key={person.id} person={person} />;
      })}
    </ul>
  );
};

const DateDisplay: FunctionComponent = () => {
  if (!peopleFromFile) {
    return <></>;
  } else {
    return (
      <>
        <DateDisplayList people={peopleFromFile} />
      </>
    );
  }
};

export { DateDisplay };
