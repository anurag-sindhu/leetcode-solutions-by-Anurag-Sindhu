import AuctionSystem from './AuctionSystem.js';

// Create auction system instance
const auctionSystem = new AuctionSystem();

// Test Case 1
console.log('\n=== Test Case 1 ===');
try {
    console.log(auctionSystem.addBuyer('buyer1'));
    console.log(auctionSystem.addBuyer('buyer2'));
    console.log(auctionSystem.addBuyer('buyer3'));
    console.log(auctionSystem.addSeller('seller1'));
    console.log(auctionSystem.createAuction('A1', '10', '50', '1', 'seller1'));
    console.log(auctionSystem.createBid('buyer1', 'A1', '17'));
    console.log(auctionSystem.createBid('buyer2', 'A1', '15'));
    console.log(auctionSystem.updateBid('buyer2', 'A1', '19'));
    console.log(auctionSystem.createBid('buyer3', 'A1', '19'));
    console.log(auctionSystem.closeAuction('A1'));
    console.log('Profit/Loss:', auctionSystem.getProfit('seller1', 'A1'));
} catch (error) {
    console.error('Error in Test Case 1:', error.message);
}

// Test Case 2
console.log('\n=== Test Case 2 ===');
try {
    console.log(auctionSystem.addSeller('seller2'));
    console.log(auctionSystem.createAuction('A2', '5', '20', '2', 'seller2'));
    try {
        console.log(auctionSystem.createBid('buyer3', 'A2', '25')); // Should fail
    } catch (error) {
        console.log('Expected error:', error.message);
    }
    console.log(auctionSystem.createBid('buyer2', 'A2', '5'));
    console.log(auctionSystem.withdrawBid('buyer2', 'A2'));
    console.log(auctionSystem.closeAuction('A2'));
    console.log('Profit/Loss:', auctionSystem.getProfit('seller2', 'A2'));
} catch (error) {
    console.error('Error in Test Case 2:', error.message);
}

// Test Case 3 - Testing Preferred Buyer functionality
console.log('\n=== Test Case 3 - Preferred Buyer ===');
try {
    console.log(auctionSystem.addBuyer('buyer4'));
    console.log(auctionSystem.addSeller('seller3'));
    console.log(auctionSystem.createAuction('A3', '10', '100', '1', 'seller3'));

    // Make buyer4 participate in 3 auctions to become preferred
    console.log(auctionSystem.createBid('buyer4', 'A3', '50'));
    console.log(auctionSystem.createBid('buyer1', 'A3', '50')); // Same bid as buyer4
    console.log(auctionSystem.closeAuction('A3'));

    // Create another auction
    console.log(auctionSystem.createAuction('A4', '10', '100', '1', 'seller3'));
    console.log(auctionSystem.createBid('buyer4', 'A4', '50'));
    console.log(auctionSystem.createBid('buyer1', 'A4', '50'));
    console.log(auctionSystem.closeAuction('A4'));

    // Create third auction
    console.log(auctionSystem.createAuction('A5', '10', '100', '1', 'seller3'));
    console.log(auctionSystem.createBid('buyer4', 'A5', '50'));
    console.log(auctionSystem.createBid('buyer1', 'A5', '50'));
    console.log(auctionSystem.closeAuction('A5'));

    // Now buyer4 should be preferred and win in case of tie
    console.log(auctionSystem.createAuction('A6', '10', '100', '1', 'seller3'));
    console.log(auctionSystem.createBid('buyer4', 'A6', '50'));
    console.log(auctionSystem.createBid('buyer1', 'A6', '50'));
    console.log(auctionSystem.closeAuction('A6'));
} catch (error) {
    console.error('Error in Test Case 3:', error.message);
}

// Test Case 4 - Testing equal bids with preferred buyer
console.log('\n=== Test Case 4 - Equal Bids with Preferred Buyer ===');
try {
    // Add new buyers and seller
    console.log(auctionSystem.addBuyer('buyer5'));
    console.log(auctionSystem.addBuyer('buyer6'));
    console.log(auctionSystem.addBuyer('buyer7'));
    console.log(auctionSystem.addSeller('seller4'));

    // Make buyer5 participate in 3 auctions to become preferred
    console.log(auctionSystem.createAuction('A7', '10', '100', '1', 'seller4'));
    console.log(auctionSystem.createBid('buyer5', 'A7', '50'));
    console.log(auctionSystem.closeAuction('A7'));

    console.log(auctionSystem.createAuction('A8', '10', '100', '1', 'seller4'));
    console.log(auctionSystem.createBid('buyer5', 'A8', '50'));
    console.log(auctionSystem.closeAuction('A8'));

    console.log(auctionSystem.createAuction('A9', '10', '100', '1', 'seller4'));
    console.log(auctionSystem.createBid('buyer5', 'A9', '50'));
    console.log(auctionSystem.closeAuction('A9'));

    // Now buyer5 is preferred (participated in 3 auctions)

    // Test Case 4.1: Single highest bid
    console.log('\nTest Case 4.1: Single highest bid');
    console.log(auctionSystem.createAuction('A10', '10', '100', '1', 'seller4'));
    console.log(auctionSystem.createBid('buyer5', 'A10', '50')); // Preferred buyer
    console.log(auctionSystem.createBid('buyer6', 'A10', '40')); // Lower bid
    console.log(auctionSystem.closeAuction('A10')); // Should show buyer5 as winner

    // Test Case 4.2: Multiple equal highest bids with one preferred buyer
    console.log('\nTest Case 4.2: Multiple equal highest bids with one preferred buyer');
    console.log(auctionSystem.createAuction('A11', '10', '100', '1', 'seller4'));
    console.log(auctionSystem.createBid('buyer5', 'A11', '50')); // Preferred buyer
    console.log(auctionSystem.createBid('buyer6', 'A11', '50')); // Non-preferred buyer
    console.log(auctionSystem.createBid('buyer7', 'A11', '40')); // Lower bid
    console.log(auctionSystem.closeAuction('A11')); // Should show buyer5 as winner

    // Test Case 4.3: Multiple equal highest bids with no preferred buyers
    console.log('\nTest Case 4.3: Multiple equal highest bids with no preferred buyers');
    console.log(auctionSystem.createAuction('A12', '10', '100', '1', 'seller4'));
    console.log(auctionSystem.createBid('buyer6', 'A12', '50')); // Non-preferred buyer
    console.log(auctionSystem.createBid('buyer7', 'A12', '50')); // Non-preferred buyer
    console.log(auctionSystem.closeAuction('A12')); // Should show no winner
} catch (error) {
    console.error('Error in Test Case 4:', error.message);
}
