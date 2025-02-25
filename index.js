const CROSS = 'X';
const ZERO = 'O';
const EMPTY = ' ';

const container = document.getElementById('fieldWrapper');

let field = makeFild(3);
let currentPlayer = CROSS;

function makeFild(size){
    let field = [];
    for (let i = 0; i < size; i ++) {
        field.push([])
        for (let j = 0; j < size; j ++) {
            field[i].push(EMPTY);
        }
    }
    return field;
}

function getWinner(field) {
    // возвращает CROSS или ZERO, если победил кто то из них
    // возвращает EMPTY, если никто не победил
    let size = field.length;

    // Проверка строк
    for (let i = 0; i < size; i++) {
        if (field[i][0] !== EMPTY && field[i].every(cell => cell === field[i][0])) {
            return field[i][0];
        }
    }

    // Проверка колонок
    for (let i = 0; i < size; i++) {
        if (column[0] !== EMPTY && field
            .map(row => row[i])
            .every(cell => cell === column[0])) {
            return column[0];
        }
    }

    // Проверка главной диагонали
    if (mainDiagonal[0] !== EMPTY && field
        .map((row, index) => row[index])
        .every(cell => cell === mainDiagonal[0])) {
        return mainDiagonal[0];
    }

    // Проверка побочной диагонали
    if (secondaryDiagonal[0] !== EMPTY && field
        .map((row, index) => row[size - 1 - index])
        .every(cell => cell === secondaryDiagonal[0])) {
        return secondaryDiagonal[0];
    }

    return EMPTY; 
}
startGame();
addResetListener();

function startGame () {
    renderGrid(3);
}

function renderGrid (dimension) {
    container.innerHTML = '';

    for (let i = 0; i < dimension; i++) {
        const row = document.createElement('tr');
        for (let j = 0; j < dimension; j++) {
            const cell = document.createElement('td');
            cell.textContent = EMPTY;
            cell.addEventListener('click', () => cellClickHandler(i, j));
            row.appendChild(cell);
        }
        container.appendChild(row);
    }
}

function cellClickHandler (row, col) {
    // Пиши код тут
    console.log(`Clicked on cell: ${row}, ${col}`);

    if ()
    /* Пользоваться методом для размещения символа в клетке так:
        renderSymbolInCell(ZERO, row, col);
     */
}

function renderSymbolInCell (symbol, row, col, color = '#333') {
    const targetCell = findCell(row, col);

    targetCell.textContent = symbol;
    targetCell.style.color = color;
}

function findCell (row, col) {
    const targetRow = container.querySelectorAll('tr')[row];
    return targetRow.querySelectorAll('td')[col];
}

function addResetListener () {
    const resetButton = document.getElementById('reset');
    resetButton.addEventListener('click', resetClickHandler);
}

function resetClickHandler () {
    console.log('reset!');
}


/* Test Function */
/* Победа первого игрока */
function testWin () {
    clickOnCell(0, 2);
    clickOnCell(0, 0);
    clickOnCell(2, 0);
    clickOnCell(1, 1);
    clickOnCell(2, 2);
    clickOnCell(1, 2);
    clickOnCell(2, 1);
}

/* Ничья */
function testDraw () {
    clickOnCell(2, 0);
    clickOnCell(1, 0);
    clickOnCell(1, 1);
    clickOnCell(0, 0);
    clickOnCell(1, 2);
    clickOnCell(1, 2);
    clickOnCell(0, 2);
    clickOnCell(0, 1);
    clickOnCell(2, 1);
    clickOnCell(2, 2);
}

function clickOnCell (row, col) {
    findCell(row, col).click();
}
