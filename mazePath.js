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
        this.thisCell;
        this.visited = false;
        this.wallLeft = new Wall(this.x-2, this.y-2, 2, this.h+2);
        this.wallUp = new Wall(this.x-2, this.y-2, this.w+2, 2);
        this.floor = new Image();
    }

    paint(){
        ctx.beginPath();
        ctx.fillStyle = "rgb(200,200,200)";
        ctx.fillRect (this.x, this.y, this.w, this.h);
        
        if(this.wallLeft != null){
            ctx.fillStyle = "rgb(0,0,0)";
            ctx.fillRect (this.wallLeft.x, this.wallLeft.y, this.wallLeft.w, this.wallLeft.h);
        }else{
            ctx.fillStyle = "rgba(200,200,200,0)";
            ctx.fillRect (this.x-2, this.y-2, 2, this.h+2);
        }

        if(this.wallUp != null){
            ctx.fillStyle = "rgb(0,0,0)";
            ctx.fillRect (this.wallUp.x, this.wallUp.y, this.wallUp.w, this.wallUp.h);
        }else{
            ctx.fillStyle = "rgba(200,200,200,0)";
            ctx.fillRect (this.x, this.y-2, this.w, 2);
        }
    }

    visited(){this.visited = true;}
    getVisited(){return this.visited;}

    setUp(up) {this.up = up;}
    getUp(){return this.up;}

    setDown(down) {this.down = down;}
    getDown(){return this.down;}

    setRight(right) {this.right = right;}
    getRight(){return this.right;}

    setLeft(left) {this.left = left;}
    getLeft(){return this.left;}

    setThisCell(thisCell) {this.thisCell = thisCell;}
    getThisCell(){return this.thisCell;}
}