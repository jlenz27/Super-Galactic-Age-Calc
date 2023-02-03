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
        // let jupiterAge = this.userAge / 11.86;
        // this.jupiterAge = Math.round(jupiterAge);
    }
}
