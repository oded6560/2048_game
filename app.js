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
const blc2 = document.createElement('div');
blc2.classList.add('blc2', 'innerBlock');
blc2.innerText = '2';
const block = document.querySelector('#p-1-1')
block.appendChild(blocks[5]);
document.addEventListener('keydown', (e) => { if (!e.repeat) { keyMap(e.key) } })
// let gameOn = false;
// while (gameOn) {


// }
function keyMap(key) {
    const tilesCopy = [[...tiles[0]], [...tiles[1]], [...tiles[2]], [...tiles[3]]];
    if (key === 'ArrowUp') {
        tiles = up(tilesCopy);
    }
    else if (key === 'ArrowDown') {
        tiles = down(tilesCopy);
    }
    else if (key === 'ArrowLeft') {

    }
    else if (key === 'ArrowRight') {

    }
}

function down(tilesCopy) {
    for (let row = 0; row < 4; row++) {
        const newRow = [];
        for (let i = 3; i >= 0; i--) {
            if (tilesCopy[i][row] !== 0) {
                newRow.push(tilesCopy[i][row]);
            }
        }
        for (let i = newRow.length; i < 4; i++) {
            newRow.push(0);
        }
        for (let i = 3; i >= 0; i--) {

            tilesCopy[i][row] = newRow[3 - i];

        }
    }
    return tilesCopy;

}


function right(tilesCopy) {
    for (let row = 0; row < 4; row++) {
        const newRow = [];
        for (let i = 3; i >= 0; i--) {
            if (tilesCopy[row][i] !== 0) {
                newRow.push(tilesCopy[row][i]);
            }
        }
        for (let i = newRow.length; i < 4; i++) {
            newRow.push(0);
        }
        for (let i = 3; i >= 0; i--) {

            tilesCopy[row][i] = newRow[3 - i];

        }
    }
    return tilesCopy;

}


function up(tilesCopy) {
    for (let row = 0; row < 4; row++) {
        const newRow = [];
        for (let i = 0; i < 4; i++) {
            if (tilesCopy[i][row] !== 0) {
                newRow.push(tilesCopy[i][row]);
            }
        }
        for (let i = newRow.length; i < 4; i++) {
            newRow.push(0);
        }
        for (let i = 3; i >= 0; i--) {

            tilesCopy[i][row] = newRow[i];

        }
    }
    return tilesCopy;

}


function left(tilesCopy) {
    for (let row = 0; row < 4; row++) {
        const newRow = [];
        for (let i = 0; i < 4; i++) {
            if (tilesCopy[row][i] !== 0) {
                newRow.push(tilesCopy[row][i]);
            }
        }
        for (let i = newRow.length; i < 4; i++) {
            newRow.push(0);
        }
        for (let i = 3; i >= 0; i--) {

            tilesCopy[row][i] = newRow[i];

        }
    }
    return tilesCopy;

}
