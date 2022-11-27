import { findBirthday } from "./birthdayCalculator";
import { test, expect } from "vitest";

test("Jan 20 is 10 days from Jan 10 ", () => {
  expect(
    findBirthday(
      { id: 1, birthdate: "Jan 20 1980", name: "Bill Smith" },
      new Date("2000-01-10")
    )
  ).toMatchObject({ birthday: "Jan 20", daysToBirthday: 10, message: "TODO" });
});
