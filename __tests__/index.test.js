/* eslint-disable no-undef */
import GalacticAge from './../src/AgeCalc.js';


describe('GalacticAge', () => {

    test("Should return user age", () => {
        const userAge = new GalacticAge(25);
        expect(userAge.userAge).toEqual(25);

    });

    test("Should return the age of a person on mercury", () => {
        const userAge = new GalacticAge(25);
        userAge.mercuryAge();
        expect(userAge.mercuryAge).toEqual(104);
    });

    test("Should return the age of a person on vensus", () => {
        const userAge = new GalacticAge(25);
        userAge.vensusAge();
        expect(userAge.vensusAge).toEqual(40);
    });

    test("Should return the age of a person on mars", () => {
        const userAge = new GalacticAge(25);
        userAge.marsAge();
        expect(userAge.marsAge).toEqual(13);
    });

    test("Should return the age of a person on Jupiter", () => {
        const userAge = new GalacticAge(25);
        userAge.jupiterAge();
        expect(userAge.jupiterAge).toEqual(2);
    });


    test("Should return the years passed since entered age", () => {
        const userAge = new GalacticAge(25);
        let results = userAge.yearsPast(15);
        console.debug(results);
     
    });



});





