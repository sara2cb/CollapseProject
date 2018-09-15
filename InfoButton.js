class InfoButton
{
  constructor(canvas, x, y, w, h, info)
  {
    this.canvas = canvas;
    this.x = x;
    this.y = y;
    this.width = w;
    this.heigh = h;
    this.info = info;
    this.click = false;
  }

  drawButton()
  {
    this.canvas.noStroke();
    this.canvas.fill(255,40,80);
    this.canvas.ellipse(this.x, this.y, 20,20);
    this.canvas.textSize(5);
    this.canvas.fill(0,0,0);
    this.canvas.textAlign(CENTER, CENTER);
    this.canvas.text("i", this.x, this.y);

    if(this.click)
    {
      print("draw Button");
      this.canvas.stroke(255,255,255);
      this.canvas.fill(0,0,0);
      this.canvas.rect(this.width/4, this.y, this.width/4,this.height/8);
      this.canvas.textSize(25);
      this.canvas.fill(255,255,255);
      this.canvas.textAlign(CENTER, CENTER);
      this.canvas.text(this.info, this.x-this.width/4, this.y-5, this.width/4-5,this.height/8);
    }

  }

  isOnInfo(x, y){

        if(x > (this.x - 10) && x < (this.x + 10)
         && y > (this.y -10) && y < (this.y + 10)){
           //print("isOnInfo");
           return true;}
        else{
          //print("can'get here");
          return false;}

  }

  addMessage(){
    this.click = true;
  }

  noMessage(){
    this.click = false;
  }

  getInfo(){
    return this.info;
  }

}
