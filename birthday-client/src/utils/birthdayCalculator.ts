import { Person, BirthdayWithMessage } from "../types/types";

const findBirthday = (person: Person): BirthdayWithMessage => {
  return { birthday: person.birthdate, message: "a" };
};

export { findBirthday };
