import { Person, BirthdayWithMessage } from "../types/types";
import monthNamesToNum from "../data/monthNamesToNum";

const daysInMonthsNotLeapYear: Array<number> = [
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
  // if birthday is before then add 364 (if not leap year in between)
  // TODO: leap year logic

  const birthdateSplit: Array<string> = person.birthdate.split(" ");
  const birthday: string = `${birthdateSplit[0]} ${birthdateSplit[1]}`;

  const birthdayMonth: number = monthNamesToNum[birthdateSplit[0]];

  let daystoBirthDay: number =
    Number(birthdateSplit[1]) -
    currentDate.getDate() +
    cumulativeDaysInMonthsNotLeapYear[birthdayMonth] -
    cumulativeDaysInMonthsNotLeapYear[currentDate.getMonth()];

  if (daystoBirthDay < 0) {
    daystoBirthDay += 364;
  }

  return {
    birthday: birthday,
    daysToBirthday: daystoBirthDay,
    message: "TODO",
  };
};

export { findBirthday };
