const exercise = require("../exercise1");

describe("fizzBuzz ", () => {
  it("Throw if input is  not a number  ", () => {
    //  const result = exercise.fizzBuzz('1');
    expect(() => {
      exercise.fizzBuzz("a");
    }).toThrow();
    expect(() => {
      exercise.fizzBuzz(null);
    }).toThrow();
    expect(() => {
      exercise.fizzBuzz(undefined);
    }).toThrow();
  });

  it("should return FizzBuzz if input is divisible by 3 and 5 ", () => {
    const result = exercise.fizzBuzz(15);
    expect(result).toBe("FizzBuzz");
  });

  it("should return Fizz if input is divisible by 3  ", () => {
    const result = exercise.fizzBuzz(3);
    expect(result).toBe("Fizz");
  });

  it("should return Buzz if input is divisible by  5 ", () => {
    const result = exercise.fizzBuzz(5);
    expect(result).toBe("Buzz");
  });

  it("should return number if input is not divisible by 3 and   5 ", () => {
    const result = exercise.fizzBuzz(1);
    expect(result).toBe(1);
  });
});
