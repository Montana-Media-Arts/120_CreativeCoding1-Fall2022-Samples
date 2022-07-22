class Rectangle
{
    constructor(x,y,w,h,r,g,b)
    {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.r = r;
        this.g = g;
        this.b = b;
    }

    draw()
    {
        fill(this.r, this.g, this.b);
        rect(this.x, this.y, this.w, this.h);
    }
}