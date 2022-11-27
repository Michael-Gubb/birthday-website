import { findBirthday } from "./birthdayCalculator";
import { test, expect } from "vitest";

test("findBirthday", () => {
  expect(
    findBirthday({ id: 1, birthdate: "Jan 1 1980", name: "Bill Smith" })
  ).toMatchObject({ birthday: "Jan 1 1980", message: "a" });
});
