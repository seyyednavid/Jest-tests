const woof = require("./woof");

test("Should return the number of woofs", function () {
  const result = woof("oh herro");
  expect(result).toBe("8woofs!");
  expect(result).not.toBe("8wofs!");
  // expect({a: "one", b: "two"}).toEqual({a: "one", b: "to"}) // for array and objects
  // expect(result).toMatch(/\dwoof/i)  // regular expresion
  //   expect(["a", "b", "c"]).toContain("b");
  //   expect(["a", "b", "c"]).toContain("b");
});

test("Should return null when not given a string", function () {
  //   const result = woof();
  //   expect(result).toBeNull()
  expect(() => woof()).toThrow("MUST"); // for handling throw
});

test.todo("Should not allowed to be passed");
