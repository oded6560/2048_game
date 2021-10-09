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

//////////////////////////////////////
// blcs.push({ pos: 2, value: 4 })
// blcs.push({ pos: 6, value: 4 })
// blcs.push({ pos: 10, value: 4 })
// blcs.push({ pos: 14, value: 4 })
//////////////////////////////////////

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
    removeZero();
    const tilesCopy = [[...tiles[0]], [...tiles[1]], [...tiles[2]], [...tiles[3]]];
    if (key === 'ArrowUp') {
        up();
    }
    else if (key === 'ArrowDown') {
        down();
    }
    else if (key === 'ArrowLeft') {
        left();
    }
    else if (key === 'ArrowRight') {
        right();
    }
    addTile();
}


function down() {
    for (let col = 0; col < 4; col++) {
        let mergeCounter = 0;
        const newRow = [];
        console.log('blcs' + JSON.stringify(blcs));

        for (let i = 3; i >= 0; i--) {

            if (blcs.some(element => element.pos === (i * 4 + col) && element.value !== 0)) {
                newRow.push(...blcs.filter(element => element.pos === (i * 4 + col)));
            }
        }
        console.log('newRow' + JSON.stringify(newRow));

        for (let i = 0; i < newRow.length - 1; i++) {
            if (newRow[i].value === newRow[i + 1].value && newRow[i].value !== 0) {
                newRow[i].value = newRow[i].value * 2;
                newRow[i + 1].value = 0;
                console.log(JSON.stringify(newRow[i + 1].pos) + '  ' + newRow[i].pos);
                mergeCounter++;

            }

        }
        console.log('newRow' + JSON.stringify(newRow));

        for (let i = 0; i < newRow.length; i++) {
            if (newRow[i].value !== 0) {
                newRow[i].pos = (3 - i) * 4 + col;
            }
            else if (i !== 0) {
                newRow[i].pos = newRow[i - 1].pos;

            }
        }
        if (mergeCounter === 2) {

            newRow[2].pos = 8 + col;
            newRow[3].pos = 8 + col;

        }
    }
}
function right() {
    for (let row = 0; row < 4; row++) {
        let mergeCounter = 0;
        const newRow = [];
        for (let i = 3; i >= 0; i--) {
            if (blcs.some(element => element.pos === (row * 4 + i) && element.value !== 0)) {
                newRow.push(...blcs.filter(element => element.pos === (row * 4 + i)));
            }
        }
        for (let i = 0; i < newRow.length - 1; i++) {
            if (newRow[i].value === newRow[i + 1].value && newRow[i].value !== 0) {
                newRow[i].value = newRow[i].value * 2;
                newRow[i + 1].value = 0;
                mergeCounter++;
            }
        }
        for (let i = 0; i < newRow.length; i++) {
            if (newRow[i].value !== 0) {
                newRow[i].pos = row * 4 + 3 - i;
            }
            else if (i !== 0) {
                newRow[i].pos = newRow[i - 1].pos;
            }
        }
        if (mergeCounter === 2) {
            newRow[2].pos = 2 + 4 * row;
            newRow[3].pos = 2 + 4 * row;
        }
    }
}
function up() {
    for (let col = 0; col < 4; col++) {
        let mergeCounter = 0;
        const newRow = [];
        for (let i = 0; i < 4; i++) {
            if (blcs.some(element => element.pos === (i * 4 + col) && element.value !== 0)) {
                newRow.push(...blcs.filter(element => element.pos === (i * 4 + col)));
            }
        }
        for (let i = 0; i < newRow.length - 1; i++) {
            if (newRow[i].value === newRow[i + 1].value && newRow[i].value !== 0) {
                newRow[i].value = newRow[i].value * 2;
                newRow[i + 1].value = 0;
                mergeCounter++;
            }
        }
        for (let i = 0; i < newRow.length; i++) {
            if (newRow[i].value !== 0) {
                newRow[i].pos = (i) * 4 + col;
            }
            else if (i !== 0) {
                newRow[i].pos = newRow[i - 1].pos;
            }
        }
        if (mergeCounter === 2) {
            newRow[2].pos = 4 + col;
            newRow[3].pos = 4 + col;
        }
    }
}

function left() {
    for (let row = 0; row < 4; row++) {
        let mergeCounter = 0;
        const newRow = [];
        for (let i = 0; i < 4; i++) {
            if (blcs.some(element => element.pos === (row * 4 + i) && element.value !== 0)) {
                newRow.push(...blcs.filter(element => element.pos === (row * 4 + i)));
            }
        }
        for (let i = 0; i < newRow.length - 1; i++) {
            if (newRow[i].value === newRow[i + 1].value && newRow[i].value !== 0) {
                newRow[i].value = newRow[i].value * 2;
                newRow[i + 1].value = 0;
                mergeCounter++;
            }
        }
        for (let i = 0; i < newRow.length; i++) {
            if (newRow[i].value !== 0) {
                newRow[i].pos = row * 4 + i;
            }
            else if (i !== 0) {
                newRow[i].pos = newRow[i - 1].pos;
            }
        }
        if (mergeCounter === 2) {
            newRow[2].pos = 1 + 4 * row;
            newRow[3].pos = 1 + 4 * row;
        }
    }
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
            blcs[i].block.classList.add(numToXY(blcs[i].pos), 'new-tile', `blc${blcs[i].value}`, 'innerBlock')

        }


    }
}

function addTile() {

    for (let i = 0; i < blcs.length; i++) {
        blcs[i].block.className = '';
        blcs[i].block.innerText = blcs[i].value;
        blcs[i].block.classList.add(numToXY(blcs[i].pos), `blc${blcs[i].value}`, 'innerBlock')
        if (blcs[i].value === 0 && !blcs[i].block.classList.contains('merge')) {
            blcs[i].block.classList.add('merge')
        }
    }
}
function removeZero() {
    for (let i = 0; i < blcs.length; i++) {
        if (blcs[i].value === 0 && blcs[i].block.classList.contains('merge')) {
            blcs[i].block.remove();
            blcs.splice(i, 1);
            i = i - 1;
        }
    }
}