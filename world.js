
class world {
  
    static build(level) {

    const sprites = [];

    const columns = level[0].length;
    const rows = level.length;
    const side = canvas.width / columns;

    for (let i = 0; i < rows; i++) {
      const row = level[i];

      for (let j = 0; j < columns; j++) {
        const type = row[j];
        if (type !== 0) {
            const sprite = this.createSprite(type, i, j, side);
            sprites.push(sprite);
        }

        
        }
      }
      return sprites;
    }


  static createSprite(type, row, column, side) {
    switch (type) {
      case 1:
        return new Sprite(side * column, side * row, side, side, 0, 0, "tan");
      case 2:
        return new Sprite(side * column, side * row, side, side, 0, 0, "cornflowerBlue");
      default:
        return new Player(side * column, side * row, side, side, 0, 0); 
        }   
    }
}   


