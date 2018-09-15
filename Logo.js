class Logo
{
  constructor(canvas, l, w)
  {
    this.canvas = canvas;
    this.length = l;
    this.width = w;
    this.noTriangles = 6;
  }

  drawLogo()
  {
    var xCenter = this.width / 2;
    var yCenter = this.length /2;
    var nearCornerDistance = 0.2;
    var farCornerDistance = 20;
    var halfSide = 10;
    var longestX = sqrt(farCornerDistance*farCornerDistance - halfSide*halfSide);
    this.canvas.push();
      this.canvas.translate(xCenter,yCenter);
      while(this.noTriangles > 0){
        this.canvas.fill(255,0,0);
        this.canvas.stroke(0,0,0);
        this.canvas.triangle(nearCornerDistance, nearCornerDistance, nearCornerDistance, farCornerDistance, longestX, halfSide);
        //rotate(Math.PI/3, createVector([0],[0],[0]));
        this.noTriangles--;
      }
    this.canvas.pop();
  }
}
