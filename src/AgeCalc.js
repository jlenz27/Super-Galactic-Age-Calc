export default class GalacticAge {
    constructor(userAge) {
        this.userAge = userAge;
    }

    mercuryAge() {
        let mercuryAge = this.userAge / .24;
        this.mercuryAge = Math.round(mercuryAge);
    }


}
