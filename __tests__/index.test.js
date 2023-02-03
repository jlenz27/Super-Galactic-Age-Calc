import GalacticAge from './../src/AgeCalc.js';


describe('GalacticAge', () => {

    test("Should return user age", () => {
      const userAge = new GalacticAge(25);
      expect(userAge.userAge).toEqual(25);

    });

    test("Should return the age of a person on mercury",() => {
        const userAge = new GalacticAge(25);
        userAge.mercuryAge();
        expect(userAge.mercuryAge).toEqual(104);
      })

})





