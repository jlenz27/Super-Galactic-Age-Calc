import GalacticAge from './../src/AgeCalc.js';


describe('GalacticAge', () => {

    test("Should return user age", () => {
      const userAge = new GalacticAge(25);
      expect(userAge.userAge).toEqual(25);

    });

})





