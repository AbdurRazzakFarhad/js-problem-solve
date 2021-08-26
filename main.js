// PROBLEM 1

function seerToMon(seer) {
    if (seer >= 0) {
        let Mon = seer / 40;
        return Mon;
    } else {
        return "Enter a valid input."
    }
}

// PROBLEM 2

function totalSales(shirtQuantity, pantQuantity, shoeQuantity) {
    if (shirtQuantity >= 0 && pantQuantity >= 0 && shoeQuantity >= 0) {
        let shirtPrice = 100 * shirtQuantity;
        let pantPrice = 200 * pantQuantity;
        let shoePrice = 500 * shoeQuantity;
        let totalPrice = shirtPrice + pantPrice + shoePrice;
        return totalPrice;
    } else {
        return "Enter a valid input."
    }
}

// PROBLEM 3

function deliveryCost(tShirtQuantity) {
    if (tShirtQuantity >= 1) {
        if (tShirtQuantity >= 1 && tShirtQuantity <= 100) {
            let cost = tShirtQuantity * 100;
            return cost;
        }
        else if (tShirtQuantity > 100 && tShirtQuantity <= 200) {
            let cost = ((tShirtQuantity - 100) * 80) + 10000;
            return cost;
        }
        else {
            let cost = ((tShirtQuantity - 200) * 50) + 18000;
            return cost;
        }
    } else {
        return "Enter a valid input."
    }
}

// PROBLEM 4

function perfectFriend(friends) {
    if (Array.isArray(friends) === true) {
        let myFriend = friends[0];
        for (const friend of friends) {
            if (friend.length == 5) {
                myFriend = friend;
                break;
            }
        }
        if (myFriend.length != 5) {
            return "No element is found of 5 length!"
        }
        return myFriend;
    } else {
        return "Please enter an array as an input."
    }
}