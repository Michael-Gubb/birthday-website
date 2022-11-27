interface Person {
  id: number;
  birthdate: string;
  name: string;
}

interface BirthdayWithMessage {
  birthday: string;
  daysToBirthday: number;
  message: string;
}

export type { Person, BirthdayWithMessage };
