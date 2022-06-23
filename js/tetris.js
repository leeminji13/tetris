//dom
const play = document.querySelector(".play > ul");

//setting
const GAME_ROWS = 20;
const GAME_COLS = 10;
//variables
let score = 0;
let duration = 500;
let downinternal;
let tempMovingitem;

const BLOCKS = {
    tree: [
        [[0,0],[0,1],[1,0],[1,1]],
        [],
        [],
        [],
    ]
}

const movingitem={
    type : "",
    direction : 0,
    top: 0,
    left: 0,
};

init()

// functions
function init(){
    for(let i=0; i<GAME_ROWS; i++){
        prependNewLine()
    }
}


function prependNewLine(){
    const li = document.createElement("li");
    const ul = document.createElement("ul");
    for(let j=0; j<10; j++){
        const matrix = document.createElement("li");
        ul.prepend(matrix)
    }
    li.prepend(ul)
    play.prepend(li)
    // console.log(i)
}
