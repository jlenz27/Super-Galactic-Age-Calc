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



    test("Should calculate years since entered date", () => {
        const userAge = new GalacticAge(25, 15);
        userAge.yearsPast();
        expect(userAge.yearsPast(25,15)).toBe("10.00 Earth years have passed.41.67 Mercury years have passed.16.13 Venus years have passed.5.32 Mars years have passed.0.84 Jupiter years have passed.");
    });

    test("Should calculate years since entered date", () => {
        const userAge = new GalacticAge(25,30);
        userAge.yearsTill();
        expect(userAge.yearsTill(25,35)).toBe("10.00 Earth years have yet to pass.41.67 Mercury years have yet to pass.16.13 Venus years have yet to pass.5.32 Mars years have yet to pass.0.84 Jupiter years have yet to pass.");

    });
});





