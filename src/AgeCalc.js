export default class GalacticAge {
    constructor(userAge, previousAge) {
        this.userAge = userAge;
        this.previousAge = previousAge;
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

    yearsPast(){
    //     let betweenAge = userAge -previousAge;
    //     let mercuryPast = betweenAge / .24;
    //     let vensusPast = betweenAge /.62;
    //     let marsPast = betweenAge /1.88;
    //     let jupiterPast = betweenAge /11.86;

    //     return betweenAge + " Earth years have passed" +
    //     mercuryPast + " Mercury years have passed" +
    //     vensusPast + " Mercury years have passed" +
    //     marsPast + " Mercury years have passed" +
    //    jupiterPast + " Mercury years have passed" +
    }

}
