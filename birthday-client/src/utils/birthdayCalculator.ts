import { Person, BirthdayWithMessage } from "../types/types";

const findBirthday = (
  person: Person,
  referenceDate: Date
): BirthdayWithMessage => {
  return { birthday: person.birthdate, message: "a" };
};

export { findBirthday };
