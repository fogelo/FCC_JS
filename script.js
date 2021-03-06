//§ FCC_JS

/*!1. Counting Cards*/

/*
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
*/

/*!2. Record Collection*/

/*
const recordCollection = {
    2548: {
        albumTitle: 'Slippery When Wet',
        artist: 'Bon Jovi',
        tracks: ['Let It Rock', 'You Give Love a Bad Name']
    },
    2468: {
        albumTitle: '1999',
        artist: 'Prince',
        tracks: ['1999', 'Little Red Corvette']
    },
    1245: {
        artist: 'Robert Palmer',
        tracks: []
    },
    5439: {
        albumTitle: 'ABBA Gold'
    }
};

function updateRecords(records, id, prop, value) {

    if (prop === 'artist') {
        records[id][prop] = value
    }
    if (prop === 'tracks' && value === "Take a Chance on Me") {
        records[id][prop] = []
        records[id].tracks.push(value)
    }
    if (value === '') {
        delete records[id][prop]
    }
    if (prop === 'tracks' && value === 'Addicted to Love') {
        records[id].tracks.push(value)
    }
    if (prop === 'albumTitle' && value === 'Riptide'){
        records[id][prop] = value
    }
        return records;
}
*/

/*!3.Iterate Odd Numbers With a For Loop*/

/*const myArray = [];

// Only change code below this line

for(let i = 1; i<=5;i++) {
    myArray.push(i)
}*/

/*!4.Iterate Odd Numbers With a For Loop2*/

/*const myArray = [];

// Only change code below this line

for (let i = 1;i<=9;i+=2) {
    myArray.push(i)
}

console.log(myArray)*/

/*!5. Count Backwards With a For Loop*/

/*
const myArray = [];

// Only change code below this line

for(let i = 9;i >= 1;i -= 2){
    myArray.push(i)
}*/

/*!6.Iterate Through an Array with a For Loop*/

/*
const myArr = [2, 3, 4, 5, 6];

// Only change code below this line
let total = 0

for (let i = 0; i < myArr.length; i++) {
    total = total + myArr[i]
}

console.log(total)*/

/*§7. Nesting For Loops*/

function multiplyAll(arr) {
    let product = 1;
    // Only change code below this line
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            product = product * arr[i][j]
        }
    }
    // Only change code above this line
    return product;
}

multiplyAll([[1, 2], [3, 4], [5, 6, 7]]);