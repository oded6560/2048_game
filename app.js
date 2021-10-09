const currentBlock = document.querySelector('div.tile-container');
const blocks = {};
for (let i = 2; i <= 2048; i = i * 2) {
    blocks[i] = document.createElement('div');
    blocks[i].classList.add(`blc${i}`, 'innerBlock');
    blocks[i].innerText = i;
}
const blcs = [];
//`p-${math.floor(i/4)+1}-${(i%4)+1}`
// for (let i = 0; i < 16; i++) {
//      blcs[i]  = {pos:null,value:0};
//  }
const tiles = [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0]
];
let firstRandom = Math.floor(Math.random() * 16)
blcs.push({ pos: firstRandom, value: 2 })
let secondRandom = firstRandom;
while (secondRandom === firstRandom) {
    secondRandom = Math.floor(Math.random() * 16)
}
if (Math.floor(Math.random() * 6) + 1 === 1) {
    blcs.push({ pos: secondRandom, value: 4 })
}
else {
    blcs.push({ pos: secondRandom, value: 2 })

}

printTiles(blcs);
document.addEventListener('keydown', (e) => { if (!e.repeat) { keyMap(e.key) } })
function keyMap(key) {
    const tilesCopy = [[...tiles[0]], [...tiles[1]], [...tiles[2]], [...tiles[3]]];
    if (key === 'ArrowUp') {
        tiles = up(tilesCopy);
    }
    else if (key === 'ArrowDown') {
        tiles = down(tilesCopy);
    }
    else if (key === 'ArrowLeft') {
        tiles = left(tilesCopy);

    }
    else if (key === 'ArrowRight') {
        tiles = right(tilesCopy);

    }
}


function down(tilesCopy) {
    for (let row = 0; row < 4; row++) {
        let mergeFlag = false;
        const newRow = [];
        for (let i = 3; i >= 0; i--) {
            if (tilesCopy[i][row] !== 0) {
                newRow.push(tilesCopy[i][row]);
            }
        }
        for (let i = 0; i < newRow.length - 1; i++) {
            if (newRow[i] === newRow[i + 1] && newRow[i] !== 0) {
                newRow[i] = newRow[i] * 2;
                newRow[i + 1] = 0;
                mergeFlag = true;
            }

        }
        for (let i = newRow.length; i < 4; i++) {
            newRow.push(0);
        }
        for (let i = 3; i >= 0; i--) {

            tilesCopy[i][row] = newRow[3 - i];

        }
        if (mergeFlag) {
            tilesCopy = down(tilesCopy);
        }
    }
    return tilesCopy;

}

function right(tilesCopy) {
    for (let row = 0; row < 4; row++) {
        let mergeFlag = false;
        const newRow = [];
        for (let i = 3; i >= 0; i--) {
            if (tilesCopy[row][i] !== 0) {
                newRow.push(tilesCopy[row][i]);
            }
        }
        for (let i = 0; i < newRow.length - 1; i++) {
            if (newRow[i] === newRow[i + 1]) {
                newRow[i] = newRow[i] * 2;
                newRow[i + 1] = 0;
                mergeFlag = true;
            }

        }
        for (let i = newRow.length; i < 4; i++) {
            newRow.push(0);
        }
        for (let i = 3; i >= 0; i--) {

            tilesCopy[row][i] = newRow[3 - i];

        }
        if (mergeFlag) {
            tilesCopy = down(tilesCopy);
        }
    }
    return tilesCopy;

}


function up(tilesCopy) {
    for (let row = 0; row < 4; row++) {
        let mergeFlag = false;
        const newRow = [];
        for (let i = 0; i < 4; i++) {
            if (tilesCopy[i][row] !== 0) {
                newRow.push(tilesCopy[i][row]);
            }
        }
        for (let i = 0; i < newRow.length - 1; i++) {
            if (newRow[i] === newRow[i + 1]) {
                newRow[i] = newRow[i] * 2;
                newRow[i + 1] = 0;
                mergeFlag = true;
            }

        }
        for (let i = newRow.length; i < 4; i++) {
            newRow.push(0);
        }
        for (let i = 3; i >= 0; i--) {

            tilesCopy[i][row] = newRow[i];

        }
        if (mergeFlag) {
            tilesCopy = down(tilesCopy);
        }
    }
    return tilesCopy;

}


function left(tilesCopy) {
    for (let row = 0; row < 4; row++) {
        let mergeFlag = false;
        const newRow = [];
        for (let i = 0; i < 4; i++) {
            if (tilesCopy[row][i] !== 0) {
                newRow.push(tilesCopy[row][i]);
            }
        }
        for (let i = 0; i < newRow.length - 1; i++) {
            if (newRow[i] === newRow[i + 1]) {
                newRow[i] = newRow[i] * 2;
                newRow[i + 1] = 0;
                mergeFlag = true;
            }

        }
        for (let i = newRow.length; i < 4; i++) {
            newRow.push(0);
        }
        for (let i = 3; i >= 0; i--) {

            tilesCopy[row][i] = newRow[i];

        }
        if (mergeFlag) {
            tilesCopy = down(tilesCopy);
        }
    }
    return tilesCopy;

}
function numToXY(num) {
    console.log(`p-${Math.floor(num / 4) + 1}-${(num % 4) + 1}`);
    return `p-${Math.floor(num / 4) + 1}-${(num % 4) + 1}`;

}
function printTiles(blcs) {
    for (let i = 0; i < blcs.length; i++) {
        if (blcs[i].block === undefined) {
            blcs[i].block = blocks[blcs[i].value].cloneNode(true);
            currentBlock.appendChild(blcs[i].block);
            blcs[i].block.classList.add(numToXY(blcs[i].pos), 'new-tile', 'innerBlock')

        }


    }
}