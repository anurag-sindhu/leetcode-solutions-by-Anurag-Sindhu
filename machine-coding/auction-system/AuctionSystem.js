import Buyer from './Buyer.js';
import Seller from './Seller.js';
import Auction from './Auction.js';

export default class AuctionSystem {
    constructor() {
        this.buyers = new Map();
        this.sellers = new Map();
        this.auctions = new Map();
    }

    addBuyer(name) {
        if (this.buyers.has(name)) {
            throw new Error(`Buyer ${name} already exists`);
        }
        this.buyers.set(name, new Buyer(name));
        return `Buyer ${name} added successfully`;
    }

    addSeller(name) {
        if (this.sellers.has(name)) {
            throw new Error(`Seller ${name} already exists`);
        }
        this.sellers.set(name, new Seller(name));
        return `Seller ${name} added successfully`;
    }

    createAuction(id, lowestBidLimit, highestBidLimit, participationCost, sellerName) {
        if (this.auctions.has(id)) {
            throw new Error(`Auction ${id} already exists`);
        }
        if (!this.sellers.has(sellerName)) {
            throw new Error(`Seller ${sellerName} does not exist`);
        }

        const seller = this.sellers.get(sellerName);
        const auction = new Auction(id, lowestBidLimit, highestBidLimit, participationCost, seller);
        this.auctions.set(id, auction);
        return `Auction ${id} created successfully`;
    }

    createBid(buyerName, auctionId, amount) {
        if (!this.buyers.has(buyerName)) {
            throw new Error(`Buyer ${buyerName} does not exist`);
        }
        if (!this.auctions.has(auctionId)) {
            throw new Error(`Auction ${auctionId} does not exist`);
        }

        const buyer = this.buyers.get(buyerName);
        const auction = this.auctions.get(auctionId);
        return auction.createBid(buyer, amount);
    }

    updateBid(buyerName, auctionId, amount) {
        if (!this.buyers.has(buyerName)) {
            throw new Error(`Buyer ${buyerName} does not exist`);
        }
        if (!this.auctions.has(auctionId)) {
            throw new Error(`Auction ${auctionId} does not exist`);
        }

        const buyer = this.buyers.get(buyerName);
        const auction = this.auctions.get(auctionId);
        return auction.updateBid(buyer, amount);
    }

    withdrawBid(buyerName, auctionId) {
        if (!this.buyers.has(buyerName)) {
            throw new Error(`Buyer ${buyerName} does not exist`);
        }
        if (!this.auctions.has(auctionId)) {
            throw new Error(`Auction ${auctionId} does not exist`);
        }

        const buyer = this.buyers.get(buyerName);
        const auction = this.auctions.get(auctionId);
        return auction.withdrawBid(buyer);
    }

    closeAuction(auctionId) {
        if (!this.auctions.has(auctionId)) {
            throw new Error(`Auction ${auctionId} does not exist`);
        }

        const auction = this.auctions.get(auctionId);
        const result = auction.close();

        // Update buyer participation count
        auction.bids.forEach((bid) => {
            if (bid.buyer) {
                bid.buyer.incrementParticipationCount();
            }
        });

        return result;
    }

    getProfit(sellerName, auctionId) {
        if (!this.sellers.has(sellerName)) {
            throw new Error(`Seller ${sellerName} does not exist`);
        }
        if (!this.auctions.has(auctionId)) {
            throw new Error(`Auction ${auctionId} does not exist`);
        }

        const auction = this.auctions.get(auctionId);
        if (auction.seller.name !== sellerName) {
            throw new Error(`Auction ${auctionId} does not belong to seller ${sellerName}`);
        }

        return auction.calculateProfit();
    }
}
