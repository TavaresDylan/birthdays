import { BirthdayNotebook } from "./birthdays";

describe("birthdays", function () {
  it("should return empty array when no birthday is set", () => {
    const notebook = new BirthdayNotebook();
    expect(notebook.getBirthdays(new Date())).toHaveLength(0);
  });

  it("should return added birthday", () => {
    const notebook = new BirthdayNotebook();
    const name = "John";
    const date = new Date();
    notebook.addBirthday(name, date);
    expect(notebook.getBirthdays(date)).toEqual([name]);
  });

  it("should return multiple added birthdays", () => {
    const notebook = new BirthdayNotebook();
    const name1 = "John";
    const name2 = "Alice";
    const date = new Date();
    notebook.addBirthday(name1, date);
    notebook.addBirthday(name2, date);
    expect(notebook.getBirthdays(date)).toEqual([name1, name2]);
  });

  it("should return added birthday for different dates", () => {
    const notebook = new BirthdayNotebook();
    const name = "John";
    const date1 = new Date();
    const date2 = new Date(date1.getTime() + 1000 * 60 * 60 * 24);
    notebook.addBirthday(name, date1);
    expect(notebook.getBirthdays(date2)).toHaveLength(0);
  });
});
