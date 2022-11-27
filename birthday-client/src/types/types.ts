interface Person {
  id: number;
  birthdate: string;
  name: string;
}

interface BirthdayWithMessage {
  birthday: string;
  message: string;
}

export type { Person, BirthdayWithMessage };
