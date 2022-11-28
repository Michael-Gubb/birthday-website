import { findBirthday } from "./birthdayCalculator";
import { test, expect } from "vitest";

test("Jan 20 is 10 days from Jan 10", () => {
  expect(
    findBirthday(
      { id: 1, birthdate: "Jan 20 1980", name: "Bill Smith" },
      new Date("2000-01-10")
    )
  ).toMatchObject({ birthday: "Jan 20", daysToBirthday: 10, message: "TODO" });
});

test("Dec 20 is 10 days from Dec 10", () => {
  expect(
    findBirthday(
      { id: 1, birthdate: "Dec 20 1980", name: "Bill Smith" },
      new Date("2000-12-10")
    )
  ).toMatchObject({ birthday: "Dec 20", daysToBirthday: 10, message: "TODO" });
});

test("Dec 20 is 0 days from Dec 20", () => {
  expect(
    findBirthday(
      { id: 1, birthdate: "Dec 20 1980", name: "Bill Smith" },
      new Date("2000-12-20")
    )
  ).toMatchObject({ birthday: "Dec 20", daysToBirthday: 0, message: "TODO" });
});

test("Dec 1 is 1 day from Nov 30", () => {
  expect(
    findBirthday(
      { id: 1, birthdate: "Dec 1 1980", name: "Bill Smith" },
      new Date("2000-11-30")
    )
  ).toMatchObject({ birthday: "Dec 1", daysToBirthday: 1, message: "TODO" });
});

test("Jan 1 is 1 day from Dec 31", () => {
  expect(
    findBirthday(
      { id: 1, birthdate: "Jan 1 1980", name: "Bill Smith" },
      new Date("2000-12-31")
    )
  ).toMatchObject({ birthday: "Jan 1", daysToBirthday: 1, message: "TODO" });
});

test("In non leap year (2022) Mar 1 is 59 days from Jan 1", () => {
  expect(
    findBirthday(
      { id: 1, birthdate: "Mar 1 1980", name: "Bill Smith" },
      new Date("2022-01-01")
    )
  ).toMatchObject({ birthday: "Mar 1", daysToBirthday: 59, message: "TODO" });
});

test.todo("Leap year tests");
