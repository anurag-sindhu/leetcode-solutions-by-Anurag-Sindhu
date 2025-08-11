# Online Auction System

This is an implementation of an Online Auction System where users can participate in auctions as buyers or sellers.

## Features

- Add buyers and sellers
- Create auctions with bid limits
- Place, update, and withdraw bids
- Automatic winner selection using highest unique bid
- Preferred buyer system
- Profit/loss calculation for sellers
- Participation cost management

## Project Structure

- `AuctionSystem.js` - Main system class that manages the entire auction system
- `Buyer.js` - Buyer class implementation
- `Seller.js` - Seller class implementation
- `Auction.js` - Auction class implementation
- `driver.js` - Demo program with test cases

## How to Run

1. Make sure you have Node.js installed
2. Navigate to the project directory
3. Run the demo program:
   ```bash
   node driver.js
   ```

## Test Cases

The demo program includes three test cases:
1. Basic auction operations
2. Error handling and edge cases
3. Preferred buyer functionality

## Implementation Details

- The system uses a highest unique bid strategy for winner selection
- Sellers receive 20% of the participation cost
- Buyers become preferred after participating in more than 2 auctions
- Preferred buyers get priority in case of bid ties
- Profit/loss calculation includes participation cost share and bid limits 