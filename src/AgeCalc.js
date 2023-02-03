export default class GalacticAge {
    constructor(userAge) {
        this.userAge = userAge;
    }
    mercuryAge() {
        let mercuryAge = this.userAge / .24;
        this.mercuryAge = Math.round(mercuryAge);
    }
    vensusAge() {
        let vensusAge = this.userAge / .62;
        this.vensusAge = Math.round(vensusAge);
    }
    marsAge() {
        let marsAge = this.userAge / 1.88;
        this.marsAge = Math.round(marsAge);
    }
    jupiterAge() {
        let jupiterAge = this.userAge / 11.86;
        this.jupiterAge = Math.round(jupiterAge);
    }

    yearsPast(pastAge) {
        let yearsPastArray = [];

        let difference = this.userAge - pastAge;
        yearsPastArray.push(Math.round(difference).toFixed(2) + " Earth years have passed.");
        yearsPastArray.push((difference / .24).toFixed(2) + " Mercury years have passed.");
        yearsPastArray.push((difference / .62).toFixed(2) + " Venus years have passed.");
        yearsPastArray.push((difference / 1.88).toFixed(2) + " Mars years have passed.");
        yearsPastArray.push((difference / 11.86).toFixed(2) + " Jupiter years have passed.");

        return yearsPastArray;

    }

    yearsTill(yearsTill) {
        let yearsTillArray = [];
        let difference = yearsTill - this.userAge;
        yearsTillArray.push(Math.round(difference).toFixed(2) + " Earth years have yet to pass.");
        yearsTillArray.push((difference / .24).toFixed(2) + " Mercury years have yet to pass.");
        yearsTillArray.push((difference / .62).toFixed(2) + " Venus years have yet to pass.");
        yearsTillArray.push((difference / 1.88).toFixed(2) + " Mars years have yet to pass.");
        yearsTillArray.push((difference / 11.86).toFixed(2) + " Jupiter years have yet to pass.");
    
        return yearsTillArray;
    }

    

}
