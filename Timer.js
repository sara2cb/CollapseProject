class Timer
{
  constructor(x,y,noOfSeconds, cnv)
  {
    this.x = x;
    this.y = y;
    this.noOfSeconds = noOfSeconds;
    this.cnv = cnv;
    this.started = 0;
    this.prevTime = 0;
    this.currentTime = 0;
    this.button = new Button(this.cnv, "Start timer", this.x + 200, this.y, 150, 60);
    this.clicked = false;
  }

  startTimer()
  {
    this.prevTime = millis();
    this.started = 1;
  }

  updateTimer()
  {
    this.currentTime = millis();
    //print(this.noOfSeconds);
    if(this.currentTime - this.prevTime >= 1000 && this.noOfSeconds > 0){
      this.noOfSeconds--;
      this.prevTime = this.currentTime;
    }
  }

  drawTimer()
  {
    // print(this.cnv);
    if(this.button.clicked(mouseX, mouseY)){
      this.clicked = true;
      this.startTimer();
    }
    if(this.clicked)
      this.updateTimer();
    this.button.drawButton();
    this.cnv.fill(255);
    this.cnv.noStroke();
    this.cnv.textAlign(CENTER, CENTER);
    this.cnv.textSize(32);
    this.cnv.push();
    this.cnv.translate(this.x, this.y);
    // this.cnv.rect(0, 0, 200, 200);
    this.cnv.text(this.noOfSeconds, 0, 0);
    this.cnv.pop();


  }
}
