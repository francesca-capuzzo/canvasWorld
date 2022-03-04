//CLASSE RETTANGOLO/QUADRATO
class Sprite{
    constructor(x, y, w, h, speedX, speedY, color){          //prende x, y, width, height DI BASE  e aggiungo in seguito SPEED e COLOR per renderla più generica
        this.x = x; 
        this.y = y;
        this.w = w;
        this.h = h;
        this.speedX = speedX;
        this.speedY = speedY;
        this.color = color;
    }

    draw(context){                                          //senza il context non può disegnare --> funzione che disegna
        context.fillStyle = this.color;         
        context.fillRect(this.x, this.y, this.w, this.h);
    }

    update(canvas){                                          //userà la logica del setInterval che muoverà l'oggetto
        this.x = this.x + this.speedX;
        this.y = this.y + this.speedY;
        if (this.x > canvas.width - this.w || this.x < 0 ) {                                              
            this.speedX = this.speedX * -1;                                                                  
        }
        if (this.y > canvas.height - this.h || this.y < 0) {
            this.speedY = this.speedY * -1;
        }
    }
}


class Player extends Sprite {
  constructor(x, y, w, h, speedX, speedY) {
    super(x, y, w, h, speedX, speedY, "magenta");
    this.isPlayer = true;
  }

  update(canvas, controller) {
    if (controller.isUpClicked) {
      this.speedY += -0.1;
    }
    if (controller.isDownClicked) {
      this.speedY += 0.1;
    }
    if (controller.isLeftClicked) {
      this.speedX += -0.1;
    }
    if (controller.isRightClicked) {
      this.speedX += 0.1;
    }

    super.update(canvas); //chiamo l'update del padre
  }
}