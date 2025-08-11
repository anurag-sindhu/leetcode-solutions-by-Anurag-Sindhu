export default class Auction {
    constructor(id, lowestBidLimit, highestBidLimit, participationCost, seller) {
        this.id = id;
        this.lowestBidLimit = Number(lowestBidLimit);
        this.highestBidLimit = Number(highestBidLimit);
        this.participationCost = Number(participationCost);
        this.seller = seller;
        this.bids = new Map(); // Map of buyer to bid amount
        this.isClosed = false;
        this.winner = null;
        this.winningBid = null;
    }

    createBid(buyer, amount) {
        if (this.isClosed) {
            throw new Error(`Auction ${this.id} is already closed`);
        }
        if (amount < this.lowestBidLimit || amount > this.highestBidLimit) {
            throw new Error(
                `Bid amount must be between ${this.lowestBidLimit} and ${this.highestBidLimit}`,
            );
        }

        this.bids.set(buyer, amount);
        return `Bid created successfully for buyer ${buyer.name} in auction ${this.id}`;
    }

    updateBid(buyer, amount) {
        if (this.isClosed) {
            throw new Error(`Auction ${this.id} is already closed`);
        }
        if (!this.bids.has(buyer)) {
            throw new Error(`Buyer ${buyer.name} has no existing bid in auction ${this.id}`);
        }
        if (amount < this.lowestBidLimit || amount > this.highestBidLimit) {
            throw new Error(
                `Bid amount must be between ${this.lowestBidLimit} and ${this.highestBidLimit}`,
            );
        }

        this.bids.set(buyer, amount);
        return `Bid updated successfully for buyer ${buyer.name} in auction ${this.id}`;
    }

    withdrawBid(buyer) {
        if (this.isClosed) {
            throw new Error(`Auction ${this.id} is already closed`);
        }
        if (!this.bids.has(buyer)) {
            throw new Error(`Buyer ${buyer.name} has no existing bid in auction ${this.id}`);
        }

        this.bids.delete(buyer);
        return `Bid withdrawn successfully for buyer ${buyer.name} in auction ${this.id}`;
    }

    close() {
        if (this.isClosed) {
            throw new Error(`Auction ${this.id} is already closed`);
        }

        this.isClosed = true;

        if (this.bids.size === 0) {
            return `Auction ${this.id} closed with no winner`;
        }

        // Group bids by amount
        const bidGroups = new Map();
        for (const [buyer, amount] of this.bids) {
            if (!bidGroups.has(amount)) {
                bidGroups.set(amount, []);
            }
            bidGroups.get(amount).push(buyer);
        }

        // Find highest bid amount
        let highestBidAmount = Math.max(...bidGroups.keys());
        let buyersAtHighestBid = bidGroups.get(`${highestBidAmount}`);

        // If there's only one buyer at the highest bid, they win
        if (buyersAtHighestBid.length === 1) {
            this.winner = buyersAtHighestBid[0];
            this.winningBid = highestBidAmount;
            return `Auction ${this.id} closed. Winner: ${this.winner.name} with bid: ${this.winningBid}`;
        }

        // If there are multiple buyers at the highest bid, check for preferred buyers
        let preferredBuyers = buyersAtHighestBid.filter((buyer) => buyer.isPreferredBuyer());

        if (preferredBuyers.length === 1) {
            // If there's exactly one preferred buyer, they win
            this.winner = preferredBuyers[0];
            this.winningBid = highestBidAmount;
            return `Auction ${this.id} closed. Winner: ${this.winner.name} with bid: ${this.winningBid}`;
        } else if (preferredBuyers.length > 1) {
            // If there are multiple preferred buyers, no winner
            return `Auction ${this.id} closed with no winner (multiple preferred buyers at highest bid)`;
        } else {
            // If there are no preferred buyers, no winner
            return `Auction ${this.id} closed with no winner (multiple buyers at highest bid)`;
        }
    }

    calculateProfit() {
        const participationCostShare = this.bids.size * 0.2 * this.participationCost;
        const averageBidLimit = (this.lowestBidLimit + this.highestBidLimit) / 2;

        if (!this.winner) {
            return participationCostShare;
        }

        return this.winningBid + participationCostShare - averageBidLimit;
    }
}
