import { Person, BirthdayWithMessage } from "../types/types";

const findBirthday = (
  person: Person,
  currentDate: Date
): BirthdayWithMessage => {
  const birthdateSplit = person.birthdate.split(" ");
  const birthday = `${birthdateSplit[0]} ${birthdateSplit[1]}`;

  const daystoBirthDay = Number(birthdateSplit[1]) - currentDate.getDate();

  return {
    birthday: birthday,
    daysToBirthday: daystoBirthDay,
    message: "TODO",
  };
};

export { findBirthday };
