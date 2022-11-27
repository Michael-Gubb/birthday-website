import { Person, BirthdayWithMessage } from "../types/types";

const findBirthday = (
  person: Person,
  currentDate: Date
): BirthdayWithMessage => {
  return { birthday: person.birthdate, daysToBirthday: 4, message: "a" };
};

export { findBirthday };
