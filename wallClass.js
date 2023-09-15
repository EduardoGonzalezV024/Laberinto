class Node {
    constructor(x, y, w, h) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.up;
        this.down;
        this.right;
        this.left;
    }

    paint(){
        ctx.fillStyle = "rgb(255,255,255)";
        ctx.beginPath();
        ctx.fillRect (this.x, this.y, this.w, this.h);
    }



    setUp(up) {this.up = up;}
    getUp(){return this.up;}

    setDown(down) {this.down = down;}
    getDown(){return this.down;}

    setRight(right) {this.right = right;}
    getRight(){return this.right;}

    setLeft(left) {this.left = left;}
    getLeft(){return this.left;}
}