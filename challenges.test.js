const challenges = require("./challenges.js")

test("sum2 must not return null", () => {
    expect(challenges.sum2).not.toBeNull()
} )

// ? ^ This one passes - This confirms that what is returned is not null

test("truthy should have a value of true", () => {
    expect(challenges.truthy).toBeTruthy()
})

// ? ^ This one Passes - This confirms that the value is truthy

test("truthy should not have a value of falsy", () => {
    expect(challenges.truthy).not.toBeFalsy()
})

// ? ^ This one passes - This confirms that the value is not falsy (Used the same function for this that was created for the previous one)

test("myObject should conatin the values of name and age", () => {
    expect(challenges.myObject()).toEqual({name:"Marelle", age: 260})
})

// ? ^ This one now passes - It confirms that the function myObject has 2 properties that are equal to a result


test("myFunction should return items in myArray with 6 or more characters", () => {
    expect(challenges.sixFunc()).toHavelength >= (6)
})

// ? ^ This one now passes - identifies strings with 6 or more characters to return

test("This should check if str converts numStr into a string", () => {
    expect(typeof challenges.numStr(65)).toBe("string")
})

// ? ^ This one now passes - identifies the data type is a string (I think)

test("This Should display the correct planet with the number order it is away from the sun", () => {
expect(challenges.myPlanets(3)).toBe("Terra")
})

// ? ^ This one now passes - Identiefies Terra (Earth) is the 3rd planet from the sun
