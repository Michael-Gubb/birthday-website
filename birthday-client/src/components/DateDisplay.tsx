import { FunctionComponent, useState, useEffect } from "react";
import { findBirthday } from "../utils/birthdayCalculator";
import { Person } from "../types/types";
import peopleFromFile from "../data/testPersons";

interface DateDisplayElementProps {
  person: Person;
}

const DateDisplayElement: FunctionComponent<DateDisplayElementProps> = ({
  person,
}) => {
  const { birthday, daysToBirthday } = findBirthday(person, new Date());
  return (
    <li>
      <h2>{person.name}</h2>
      <p>Birthday: {birthday}</p>
      <p>Days to birthday: {daysToBirthday} </p>
    </li>
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
  //Using state only to emulate fetching data from server
  const [people, setPeople] = useState<Person[]>([]);

  useEffect(() => {
    let ignore = false;
    if (!ignore) {
      // put fetch logic here
      setPeople(peopleFromFile);
    }
    return () => {
      ignore = true;
    };
  }, []);

  if (people.length === 0) {
    return (
      <>
        <p>No people found!</p>
      </>
    );
  } else {
    return (
      <>
        <DateDisplayList people={people} />
      </>
    );
  }
};

export { DateDisplay };
