class Wall {
    constructor(x, y, w, h) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
    }

    paint(){
        ctx.fillStyle = "rgb(0,0,0)";
        ctx.beginPath();
        ctx.fillRect (this.x, this.y, this.w, this.h);
    }
}