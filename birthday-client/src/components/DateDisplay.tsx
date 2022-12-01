import { FunctionComponent, useState, useEffect } from "react";
import { findBirthday } from "../utils/birthdayCalculator";
import { Person } from "../types/types";
import { createClient } from "@supabase/supabase-js";
import peopleFromFile from "../data/testPersons";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_KEY;
const supabase = createClient(supabaseUrl ?? "", supabaseKey ?? "");
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
    const getPeople = async () => {
      let { data: people } = await supabase
        .from("people")
        .select("id,birth_date,name");

      const convertedPeople: Person[] =
        people?.map((person) => {
          return {
            id: person.id,
            birthdate: person.birth_date,
            name: person.name,
          };
        }) ?? peopleFromFile;

      setPeople(convertedPeople);
    };
    let ignore = false;
    if (!ignore) {
      // put fetch logic here
      getPeople();
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
