export default class Buyer {
    constructor(name) {
        this.name = name;
        this.participationCount = 0;
    }

    incrementParticipationCount() {
        this.participationCount++;
    }

    isPreferredBuyer() {
        return this.participationCount > 2;
    }
}
