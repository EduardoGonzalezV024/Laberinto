class Wall {
    constructor(x, y, w, h, img) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.img = img;
    }

    paint(){
        ctx.beginPath();
        if(this.img == null){
            ctx.fillRect (this.x, this.y, this.w, this.h);
        }
        else{
            window.onload = ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
        }
    }

    strokePaint(){
        ctx.beginPath();
        ctx.fillRect (this.x, this.y, this.w, this.h);
        ctx.strokeRect (this.x, this.y, this.w, this.h);
    }
}