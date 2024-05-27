export default class MoreDataImage extends Image {
    constructor(image, x, y ,direction,width=50,height=100){
        super(image);
        this.x=x;
        this.y=y;
        this.direction=direction;
        this.width=50;
        this.height=100;
    }
}