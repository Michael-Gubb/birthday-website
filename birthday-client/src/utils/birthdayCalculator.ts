import { Person, BirthdayWithMessage } from "../types/types";
import monthNamesToNum from "../data/monthNamesToNum";

const daysInMonthsNotLeapYear = [
  31, 28, 31, 30, 31, 30, 31, 30, 31, 30, 31, 30,
];
let cumulativeDaysInMonthsNotLeapYear: Array<number> = [];
for (const key of daysInMonthsNotLeapYear.keys()) {
  if (key === 0) {
    cumulativeDaysInMonthsNotLeapYear.push(daysInMonthsNotLeapYear[key]);
  } else {
    cumulativeDaysInMonthsNotLeapYear.push(
      cumulativeDaysInMonthsNotLeapYear[key - 1] + daysInMonthsNotLeapYear[key]
    );
  }
}

const findBirthday = (
  person: Person,
  currentDate: Date
): BirthdayWithMessage => {
  // if birthday is after current date this year
  // days to birthday is (birthday - current day) in days,
  // plus(total days in months upto including birthday) - (total days in months upto including current day)

  const birthdateSplit = person.birthdate.split(" ");
  const birthday = `${birthdateSplit[0]} ${birthdateSplit[1]}`;

  const birthdayMonth = monthNamesToNum[birthdateSplit[0]];

  const daystoBirthDay =
    Number(birthdateSplit[1]) -
    currentDate.getDate() +
    cumulativeDaysInMonthsNotLeapYear[birthdayMonth] -
    cumulativeDaysInMonthsNotLeapYear[currentDate.getMonth()];

  console.log(
    Number(birthdateSplit[1]),
    currentDate.getDate(),
    +cumulativeDaysInMonthsNotLeapYear[birthdayMonth],
    cumulativeDaysInMonthsNotLeapYear[currentDate.getMonth()]
  );

  return {
    birthday: birthday,
    daysToBirthday: daystoBirthDay,
    message: "TODO",
  };
};

export { findBirthday };
