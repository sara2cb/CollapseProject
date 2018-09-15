class Button
{
  constructor(canvas, name, x, y, w, h)
  {
    this.canvas = canvas;
    this.name = name;
    this.x = x;
    this.y = y;
    //this.action = a;
  //  this.shapeRect = shapeRect;
    this.width = w;
    this.height = h;
  //  this.radius = 200
  }

  drawButton()
  {
    this.canvas.noStroke();
    this.canvas.fill(255,40,80);
    this.canvas.rect(this.x - this.width/2, this.y - this.height/2, this.width, this.height, 20);
    this.canvas.textSize(30);
    this.canvas.fill(255);
    this.canvas.textAlign(CENTER, CENTER);
    this.canvas.text(this.name, this.x, this.y);
  }

// drawShape()
// {
  // if(!this.shapeRect)
  // {
  //   var angle = TWO_PI / 6;
  //   beginShape();
  //   for (var a = 0; a < TWO_PI; a += angle) {
  //     var sx = this.x+ sin(a) * this.radius;
  //     var sy = this.y + cos(a) * this.radius;
  //     vertex(sx, sy);
  //   }
  //   endShape(CLOSE);
  //
  // }
  // else {
  //  this.canvas.rect(this.x - this.width/2, this.y - this.height/2, this.width, this.height, 20);
  // }
// }
  // {
  //   drawButton(255,40,80);
  // }

  clicked(x, y){
    // if(this.shapeRect)
    //   {
        if(x > (this.x - this.width/2) && x < (this.x + this.width/2)
         && y > this.y && y < (this.y + this.height))
         return true;
        return false;
      // }
    // else{
    //   var radioSq = this.radius * this.radius;
    //   var halfRadioSq = (this.radius/2) *(this.radius/2);
    //   var lengthCenterSideSq = radioSq- halfRadioSq;
    //   var lengthCornerUpMiddleTwoSq = radioSq - lengthCenterSideSq;
    //   var lenghtCenterUpMiddleTwo = this.radius - sqrt(lengthCornerUpMiddleTwoSq);
    //   var thalesMag;
    //   if(x>(this.x -sqrt(lengthCenterSideSq)) && x<(this.x +sqrt(lengthCenterSideSq)))
    //   {  if(x>this.x )
    //     {
    //       thalesMag = (x-this.x)/sqrt(lengthCenterSideSq);
    //     }
    //     else{
    //       thalesMag = (this.x-x)/ sqrt(lengthCenterSideSq);
    //     }
    //
    //     if(y>(this.y - sqrt(lengthCornerUpMiddleTwoSq))&& y<(this.y + sqrt(lengthCornerUpMiddleTwoSq))
    //        || (y< this.y - (lenghtCenterUpMiddleTwo + (thalesMag * sqrt(lengthCornerUpMiddleTwoSq)))
    //        && y > this.y + (lenghtCenterUpMiddleTwo + (thalesMag * sqrt(lengthCornerUpMiddleTwoSq)))))
    //         return true;
    //   }
    //   return false;
    // }

  }
}
