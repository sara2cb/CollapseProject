class QuestionScreen
{
  constructor(width, height, backR, backG, backB, isSecond, isLast) {
    this.questionList = [];
    this.canvas = createGraphics(width, height);
    this.backR = backR;
    this.backG = backG;
    this.backB = backB;
    this.width = width;
    this.height = height;
    this.nextQS = null;
    this.startAt = this.width;
    this.timer = null;
    this.isSecond = isSecond;
    this.isLast = isLast;
    this.shareBtn = null;
    if(!isLast) {
      this.nextBtn = new Button(this.canvas, "Next", this.width / 2, this.height - this.height/8, 200, 80);
    }
    else {
      this.nextBtn = new Button(this.canvas, "Start again", this.width / 2, this.height - this.height/8, 200, 80);
      this.shareBtn = new Button(this.canvas, "Share", this.width / 2, this.height - 2*(this.height/8), 200, 80);
    }

    if(isSecond){
      this.listInfoMess = ["For every pack you smoke you make your life expectancy 2 months shorter",
                    "Depedinng on if you drink moderately or massively you will increase or decrease your life expectancy by one year",
                   "If you do more than 150 minutes of exercise per week, you can increase up to 5 years (depending on you body mass index)",
                   "Sleeping less than 6 hours decreases your life expectancy by 3 years"];
      // this.countInfo = 0;
      this.smokeI = new InfoButton(this.canvas, this.width*3/8-20, 0*90+60, this.width, this.length, this.listInfoMess[0]);
      this.drinkI = new InfoButton(this.canvas, this.width*3/8-20, 1*90+60, this.width, this.length, this.listInfoMess[1]);
      this.exerciseI = new InfoButton(this.canvas, this.width*3/8-20, 2*90+60, this.width, this.length, this.listInfoMess[2]);
      this.sleepI = new InfoButton(this.canvas, this.width*3/8-20, 3*90+60, this.width, this.length, this.listInfoMess[3]);
      this.listInfo = [this.smokeI, this.drinkI, this.exerciseI, this.sleepI]

      // for(var i = 0; i<this.listInfo.length; i++){
      //   this.listInfo[i] = new InfoButton(this.canvas, this.width/4, i*90+20, this.width, this.length, this.listInfoMess[i]);
      // }
    }


    this.loading = false;
    this.blank = false;
    this.finalAge = "0";
    this.ranking = "0";
    this.validList = [];


  }

  drawScreen() {

    this.canvas.fill(this.backR, this.backG, this.backB);
    this.canvas.rect(0, 0, this.width, this.height);

    this.canvas.noStroke();
    this.canvas.fill(255);

    this.canvas.push();
    this.canvas.translate(this.width/2, 0);
    for(var i = 0; i < this.questionList.length; i++){
      this.canvas.translate(0, 30);
      this.canvas.textAlign(CENTER);
      this.canvas.textSize(30);
      this.canvas.text(this.questionList[i][0], 0, 0);
      this.canvas.translate(0, 60);
    }
    this.canvas.pop();

    if(this.isSecond){
      this.smokeI.drawButton();
      this.drinkI.drawButton();
      this.exerciseI.drawButton();
      this.sleepI.drawButton();
    }


    this.nextBtn.drawButton();
    // Add share Button
    if (this.isLast)
      this.shareBtn.drawButton();
    if(this.timer != null)
      this.timer.drawTimer();
    image(this.canvas, 0, 0);

    for(var i = 0; i < this.questionList.length; i++){
      if(!this.validList[i] )
      {
        fill(255, 68, 68);
        noStroke();
        textAlign(LEFT);
        textSize(13);
        text("Please, fill with valid information", this.canvas.width / 2 + this.canvas.width/8.5, i*90 + 55);
      }
    }

    if(this.blank)
    {
      noStroke();
      fill(255,255,255);
      textSize(27);
      textAlign(CENTER, CENTER);
      text("Please, fill everything",this.width / 2, this.height - this.height/5);
      for(var i = 0; i < this.questionList.length; i++){
        if(this.questionList[i][1].value() == "" )
        {
          noFill();
          strokeWeight(4);
          stroke(255,0,0);
          rect(this.canvas.width / 2 - this.canvas.width/8 - 5, i*90 + 49, this.canvas.width / 4, 42);
        }
      }

      if(this.loading)
      {
        fill(0,0,0);
        stroke(255, 0, 0);
        textSize(40);
        textAlign(CENTER, CENTER);
        text("Loading",this.width / 2, this.height - this.height/5);
      }
    }

    if(this.isLast){
      // var shareTwitter = new Button(this.canvas, "Share on Twitter", this.width / 2, this.height/8, 200, 80);
      // shareTwitter.drawButton();



      noStroke();
      fill(97, 37, 51);
      textSize(32);
      textAlign(CENTER, CENTER);
      text("Your expected age is :", this.width / 2, this.height/5);
      textSize(100);
      textAlign(CENTER, CENTER);
      text(this.finalAge, this.width / 2, this.height/3);
      textSize(32);
      textAlign(CENTER, CENTER);
      text("Your ranking :", this.width / 2, this.height/2 + this.height/18);
      textSize(50);
      textAlign(CENTER, CENTER);
      text(this.ranking, this.width / 2, this.height/2 + this.height/8);

      // // Add share Button
      // this.shareBtn.drawButton();
    }
  }


  slideFromRight() {
    push();
    if(this.startAt > 0){
      translate(this.startAt, 0);
      this.startAt -= 10;
    }
    this.drawScreen();
    for(var i = 0; i < this.questionList.length; i++){
      this.questionList[i][1].position(this.canvas.width / 2 + this.startAt - this.canvas.width / 8, i*90 + 50);
      this.questionList[i][1].show();
    }
    pop();

    if(this.timer && this.timer.started == 0)
      this.timer.started = 1;

  }

  addInfo(noInfo){
    print("addIngo");
    if(noInfo>this.listInfo.length){
      for(var i=0; i<this.listInfo.length; i++){
        print("addInfoNo");
        this.listInfo[i].noMessage();
      }
    }
    else{
      print("addInfo");
      this.listInfo[noInfo].addMessage();}
  }

  addQuestion(q) {
    let input = createInput();
    input.size(this.canvas.width / 4.1, 35);
    input.hide();
    this.questionList.push([q, input]);
    this.validList.push([true]);
  }

  addMultipleChoiceQuestion(q, a){
    let input = createSelect();
    input.size(this.canvas.width / 4.05, 40);
    input.option("");
    for(var i = 0; i<a.length; i++)
    {
      input.option(a[i]);
    }
    this.questionList.push([q, input]);
    this.validList.push([true]);
  }

  addDateQuestion(q) {
    let inputDate = createInput(null, "date");
    inputDate.size(this.canvas.width / 4.1, 37);

    inputDate.hide();
    this.questionList.push([q, inputDate]);
    this.validList.push([true]);
  }

  isThereEmptyAnswer()
  {
    var isIt = false;
    for(var i = 0; i < this.questionList.length; i++){
      if(this.questionList[i][1].value() == "" )
      {
        isIt = true;
        this.blank = true;
        noFill();
        strokeWeight(4);
        stroke(255,0,0);
        rect(this.canvas.width / 2, i*90 + 50, this.canvas.width / 4, 40)
      }
    }
    return isIt;
  }

  valid(qs)
  {
    this.validList = qs;
  }

  addTimer(x, y, seconds){
    this.timer = new Timer(x, y, seconds, this.canvas);
  }

  loadingMessage()
  {
    this.loading = true;
    this.blank = false;
    for(var i = 0; i<this.questionList.length; i++){
      this.validList[i] = true;
    }
  }

  lastSlide()
  {
    this.isLast = true;
  }

  addInfo(age, ranking)
  {
    this.finalAge = age;
    this.ranking = ranking;
  }

  getQuestionLength()
  {
    return this.questionList.length;
  }

  getAnswer(qId)
  {
    var whichQ = qId;
    return this.questionList[whichQ][1].value();
  }

}
