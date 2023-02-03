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


}
