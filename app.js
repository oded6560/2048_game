const blocks = [];
for (let i = 0; i < 11; i++) {
    blocks[i] = document.createElement('div');
    blocks[i].classList.add(`blc${2 ** (i + 1)}`, 'innerBlock');
    blocks[i].innerText = 2 ** (i + 1);
}
const tiles = [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0]
];
let firstRandom = Math.floor(Math.random() * 16) + 1
tiles[Math.floor(firstRandom / 4)][(firstRandom - 1) % 4] = 2;
let secondRandom = firstRandom;
while (secondRandom === firstRandom) {
    secondRandom = Math.floor(Math.random() * 16) + 1
}
if (Math.floor(Math.random() * 6) + 1 === 1) {
    tiles[Math.floor(secondRandom / 4)][(secondRandom - 1) % 4] = 4;
}
else {
    tiles[Math.floor(secondRandom / 4)][(secondRandom - 1) % 4] = 2;

}

const Fblc = document.createElement('div');
Fblc.classList.add('blc2', 'innerBlock');
Fblc.innerText = '2';
const block = document.querySelector('#p-1-1')
block.appendChild(blocks[5]);
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
