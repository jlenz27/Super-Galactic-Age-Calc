import GalacticAge from './../src/AgeCalc.js';


describe('GalacticAge', () => {

    test("Should return user age which will then be used to calculate everything else.", () => {
      const userAge = new GalacticAge();
      expect(userAge.userAge).toEqual(25);

    });

})





