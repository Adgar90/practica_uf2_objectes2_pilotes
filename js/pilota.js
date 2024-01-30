const canvas = document.querySelector('canvas');
/* Classe Pilota */
export class Pilota{
    constructor(x, y, velX, velY, color, mida) {
        this.x = x;
        this.y = y;
        this.velX = velX;
        this.velY = velY;
        this.color = color;
        this.mida = mida;
    }
    //Mètode que dibuixa la pilota
    dibuixa(ctx) {
        ctx.beginPath(); // Per començar a dibuixar formes al canvas
        ctx.fillStyle = this.color; //Color amb el que ho dibuixarem
        ctx.arc(this.x, this.y, this.mida, 0, 2 * Math.PI); //Dibuix d'un arc
        ctx.fill(); //Finalitza el dibuix i l'omple amb el color definit
    }
    //Mètode que determina el moviment de la pilota
    mou() {
        //Si la posició x mes la mida de la Pilota és major que l'ample del canvas, ha de rebotar
        if ((this.x+this.mida) > canvas.width) { this.velX *= -1; }
        //Si la posició x menys la mida de la Pilota és menor que 0, ha de rebotar
        if ((this.x-this.mida) < 0) { this.velX *= -1; }
        //Si la posició y mes la mida de la Pilota és major que l'alçada del canvas, ha de rebotar
        if ((this.y+this.mida) > canvas.height) { this.velY *= -1; }
        //Si la posicio y menys la mida de la Pilota és menor que 0 ha de rebotar
        if ((this.y-this.mida) < 0) { this.velY *= -1; }

        this.x += this.velX;
        this.y += this.velY;
    }
    //Funció que rep una pilota per paràmetre i comprova la distància entre ambdues
    collision(pilota) {
     let difX = Math.abs(this.x - pilota.x);
     let difY = Math.abs(this.y - pilota.y);
     let distancia = Math.sqrt(difX**2 + difY**2);
     // Sí colisiona retorna TRUE, si no, FALSE
     return this.mida+pilota.mida >= distancia;
    } 
}