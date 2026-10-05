//Activity: Building a Promise-Based Data Fetcher
//Time: 45 minutes
//Instructions:

//Create a file called dataFetcher.ts.
//Implement a series of functions using Promises that simulate fetching:
//fetchUserData (user information)
//fetchOrderHistory (order history for a user)
//fetchOrderDetails (detailed information for a specific order)
//Chain these Promises together to simulate a user logging in, viewing order history, and clicking an order to see details.
//Implement error handling for each step to handle potential issues (e.g., user data not found).
interface User {
    name: string;
    email: string;
}

function fetchUserData(): Promise<User> {
    // create a promise to simulate a request for user data
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let user: User = { name: 'John Doe', email: 'john.doe@example.com' };
            if (user) {
                resolve(user);
            } else {
                reject(new Error('User not found'));
            }
        }, 2000)
    });
}

interface OrderHistory {
    orders: string[];
}

function fetchOrderHistory(): Promise<OrderHistory[]> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let orderHistory: OrderHistory[] = [{ orders: ['Order 1', 'Order 2'] }, { orders: ['Order 3', 'Order 4'] }, { orders: ['Order 5'] }];
            if (orderHistory) {
                resolve(orderHistory);
            } else {
                reject(new Error('Order history not found'));
            }
        }, 250)
    });
}

interface OrderDetails{
    details: string[];
}

function fetchOrderDetails(): Promise<OrderDetails[]> { 
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let orderDetails: OrderDetails[] = [{ details: ['Detail 1', 'Detail 2'] }, { details: ['Detail 3', 'Detail 4'] }];
            if (orderDetails) {
                resolve(orderDetails);
            } else {
                reject(new Error('Order details not found'));
            }
        }, 250)
    });
}


// handle the first promise (coming from fetchUserData)
fetchUserData() 
    // what happens when the promise state goes from pending to fulfilled (resolved)
    .then((user) => { // the paramater "user" is the value that was promised (passed through resolve)
        // we'll return the next promise
        console.log(user)
        return fetchOrderHistory(); // creates a new promise that is returned back to us
    })
    .then((orderHistory) => {
        console.log(orderHistory)
        return fetchOrderDetails();
    })
    .then((orderDetails) => {
        console.log(orderDetails);
    })


// it could be seperate like this...

// getProductDetails()
//     .then()
//     .catch()

// getProductReviews()
//     .then()
//     .catch()

// getRelatedProducts()
//     .then()
//     .catch()

// or you could use one of the "Composition Tools"

// Promise.all([getProductDetails(), getProductReviews(), getRelatedProducts()])
//     .then()