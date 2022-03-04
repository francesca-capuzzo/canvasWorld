
const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');                


// const sprites = [];

//QUESTO è FATTO CON COSTANTI FISSE 
// const world = [
//     [1, 1, 1, 1, 1],
//     [1, 0, 0, 0, 1],
//     [1, 0, 1, 0, 1],
//     [1, 0, 0, 0, 1],
//     [1, 1, 1, 1, 1]
// ];

// const columns = 5;
// const rows = 5;
// const side = 100;


//QUESTO è FATTO CON COSTANTI A RUNTIME:
// const world = [
//     [0, 0, 0, 2, 2, 0, 0, 0, 2, 2],
//     [0, 0, 0, 0, 2, 2, 0, 0, 0, 0],  
//     [1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//     [1, 1, 0, 0, 0, 0, 1, 1, 1, 1],
//     [0, 1, 1, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//     [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
// ];


// const columns = world[0].length;
// const rows = world.length;
// const side = canvas.width / columns;



// //CICLO SULLA MATRICE PER TRASFORMARLA IN VALORI LEGGIBILI --> DOPPIO CICLO PERCHE' E' UNA MATRICE DOPPIA:
// for (let i = 0; i < rows; i++) {
//     const row = world[i];                                                                //prendo ogni row (e la ciclo)
//     console.log(row);
//     for (let j = 0; j < columns; j++) {
//         const value = row[j];                                                            //prendo ogni colonna e ogni valore della riga per quella colonna
//         if (value === 1) {

//             // const sprite = new Sprite(0, 0, side, side, 0, 0, 'tomato');               //--> usate entrambi con le costanti fisse di row, column e side (linea 8)
//             // const sprite = new Sprite(100*j, 100*i, side, side, 0, 0, 'tomato');       //--> usate entrambi con le costanti fisse di row, column e side (linea 8)

//             const sprite = new Sprite(side*j, side*i, side, side, 0, 0, 'tan');        //--> usata con le costanti generate a runtime (linea 22)
//             sprites.push(sprite);

//         }else if (value === 2) {
//             const sprite = new Sprite(side*j, side*i, side, side, 0, 0, 'CornflowerBlue');
//             sprites.push(sprite);
//         } 
//     }
// }



////////////////////////////////////TUTTO IL CODICE COMMENTATO PRIMA DI QUESTA LINEA è STATO DIVISO TRA LEVELS.JS E WORLD.JS/////////////////////////////////////////////////////////



const sprites = world.build(Levels.getLevel(0));    //--> genera il livello 1
//const sprites = world.build(Levels.getLevel(1));  //--> genera il livello 2


const controller = new Controller();

setInterval(() => {

    context.clearRect(0, 0, canvas.width, canvas.height);

    for (const sprite of sprites) {
        if (sprite.isPlayer) {
            let player = sprite;

            for (const wall of sprites) {
                if (!wall.isPlayer) {
                    checkCollision(player, wall);
                }
            }
        }
     
        sprite.draw(context);
        sprite.update(canvas, controller);
    }
}, 20);


function checkCollision(player, wall) {

    let collidingX = player.x < (wall.x + wall.w) && (player.x + player.w) > wall.x;
    let collidingY = player.y < (wall.y + wall.h) && (player.y + player.h) > wall.y;
    if (collidingX && collidingY) {
        
       }
    
}


