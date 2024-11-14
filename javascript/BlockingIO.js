// take order for table 1 and wait...
var order1 = orderBlocking(['Coke', 'Iced Tea']);

// once order is ready, take order back to table.
serveOrder(order1);
// once order is delivered, move on to another table.

// take order for table 2 and wait...
var order2 = orderBlocking(['Coke', 'Water']);

// once order is ready, take order back to table.
serveOrder(order2);
// once order is delivered, move on to another table.

// take order for table 3 and wait...
var order3 = orderBlocking(['Iced Tea', 'Water']);

// once order is ready, take order back to table.
serveOrder(order3);
// once order is delivered, move on to another table.
