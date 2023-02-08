export default class GalacticAge {
    constructor(userAge, pastAge, futureAge) {
        this.userAge = userAge;
        this.pastAge = pastAge;
        this.futureAge = futureAge;
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
    yearsPast( userAge, pastAge) {
        let difference = userAge - pastAge;
        let earthDiff = (Math.round(difference).toFixed(2) + " Earth years have passed.");
        let mercuryDiff = ((difference / .24).toFixed(2) + " Mercury years have passed.");
        let vensusDiff = ((difference / .62).toFixed(2) + " Venus years have passed.");
        let marsDiff = ((difference / 1.88).toFixed(2) + " Mars years have passed.");
        let jupiterDiff = ((difference / 11.86).toFixed(2) + " Jupiter years have passed.");

        return earthDiff + mercuryDiff + vensusDiff +marsDiff + jupiterDiff;

    }

    yearsTill(userAge, futureAge) {
        
        let difference = futureAge - userAge;
        let earthDiff =(Math.round(difference).toFixed(2) + " Earth years have yet to pass.");
        let mercuryDiff =((difference / .24).toFixed(2) + " Mercury years have yet to pass.");
        let vensusDiff =((difference / .62).toFixed(2) + " Venus years have yet to pass.");
        let marsDiff =((difference / 1.88).toFixed(2) + " Mars years have yet to pass.");
        let jupiterDiff =((difference / 11.86).toFixed(2) + " Jupiter years have yet to pass.");

        return earthDiff + mercuryDiff + vensusDiff +marsDiff + jupiterDiff;
    }

}
