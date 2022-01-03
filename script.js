//§ FCC_JS

/*!1. Counting Cards*/
let count = 0;

function cc(card) {
    // Only change code below this line
    switch (card) {
        case 2:
            count++;
            break
        case 3:
            count++;
            break
        case 4:
            count++;
            break
        case 5:
            count++;
            break
        case 6:
            count++;
            break
        case 10:
            count--;
            break
        case 'J':
            count--;
            break
        case 'Q':
            count--;
            break
        case 'K':
            count--;
            break
        case 'A':
            count--;
            break
    }

    if (count>0) {
        return count + " Bet";
    } else {
        return count + " Hold"
    }
    // Only change code above this line
}

cc(10); cc("J"); cc("K"); cc('Q'); cc('A');

console.log(count)