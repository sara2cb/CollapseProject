let logoImage;
let s;
let s2;
let s3;
let nextBtn;
let startBtn;
let currentQS;
let prevQS;
let nextQS;
let clock;
let logo;
let disclaimerMessage;
let shownDisclaimer;
let countWhichSlide = 0;
let nickname;
let gender;
let birthDate;
let dayBirth;
let monthBirth;
let yearBirth
let age;
let occupation;
let packCigarette;
let drinkWeek;
let minutesEx;
let hoursSleep;
let weight;
let height;
let bmi;
let solution;
let heartrate;
let waiting;
let isSecond
let smokeI;
let drinkI;
let exerciseI;
let sleepI;

let shareBtn;

function preload()
{

  //logoImage = loadImage("./img/logo.png");

}

function setup() {
	createCanvas(window.innerWidth, window.innerHeight);
  waiting = false;
  disclaimerMessage = "DISCLAIMER \nThis web application does not intend to make any offense. We do not guarantee the veracity of the results.";
  shownDisclaimer = false;
  logo = new Logo(this.height, this.width);
  nextBtn = new Button(this, "Next", this.width / 2, this.height - this.height/6, 200, 80);
  startBtn = new Button(this, "Start", this.width / 2, this.height/2 - 200, 400, 400);
  clock = new Clock(this, this.width / 2, this.height - this.height/8);
  s = new QuestionScreen(window.innerWidth, window.innerHeight, 20, 60, 80, false, false);
  s2 = new QuestionScreen(window.innerWidth, window.innerHeight, 60, 20, 80, true, false);
  s3 = new QuestionScreen(window.innerWidth, window.innerHeight, 106, 165, 242, false, true);
  solution = new Solutions();
  addQuestions(s, ["NickName"] );
  s.addDateQuestion("Date of birth");
  /*$.get('../Backend/occupations.php', function(data1) {
      listOcccupations = data1.split(',');
      //listOcccupations = sort(listOcccupations, listOcccupations.length + 1);
      addMultipleChoiceQuestions(s, ["Gender", "Occupation"], [["Female", "Male", "Other"], listOcccupations]);
  });*/

  //================================================================================================
  s2.addMultipleChoiceQuestion("How many packs do you smoke in a day?", ["I do not smoke", "1 pack", "More than 1 pack"]);
  s2.addMultipleChoiceQuestion("How often do you drink in a week?", ["0 or 1", "Between 3 to 4", "5 or more"]);
  s2.addQuestion("How many minutes do you exercise in a week?");
  s2.addQuestion("How many hours of sleep do you get in a day?");
  s2.addQuestion("Weight in kilograms");
  s2.addQuestion("Height in centimetres");
  //================================================================================================
  s3.lastSlide();

  //s2.addTimer(this.width / 2, this.height - this.height/6, 10);
  s.nextQS = s2;
  s2.nextQS = s3;
  s3.nextQS = s;

  isSecond = false;
}

var alphaCounter = 0;
function draw() {
  background(140, 180, 180);


  /*push();
  translate(window.innerWidth/2 - logoImage.width/2, window.innerHeight/2 - logoImage.height/2);

  if(shownDisclaimer){
    fill(255,255,255);
    stroke(52,92,119);
    rect(0,0,400,400,5);

    fill(30,30,30);
    textSize(20);
    textAlign(CENTER, CENTER);
    text(disclaimerMessage, 0,0,400,400);
  }*/

  /*if(alphaCounter < 255)
    tint(255, alphaCounter += 20);
  image(logoImage, 0, 0);
  pop();*/

  //logo.drawLogo();

  //tint(255, 255);

  // clock.drawClock();
  //Clock

  // //Text

  // fill(0,0,0);
  // stroke(255,0,0);
  // strokeWeight(2);
  // textSize(32);
  // textAlign(CENTER, CENTER);
  // text("Are you ready to know how much time you have left?",width / 2, height/5, width, height);

  if(waiting){
    /*if(solution.getAge()>age){
      s3.addInfo(solution.getAge(), solution.getRank());
      */countWhichSlide++;
      /*goToQS(currentQS.nextQS);
      isSecond = false;
      smokeI = null;
      drinkI = null;
      exerciseI = null;
      sleepI = null;
      waiting = false;*/

  }

  // if(isSecond){
  //   if(smokeI.isOnInfo(mouseX, mouseY)){
  //     s2.addInfo(0);
  //   }
  //   else if(drinkI.isOnInfo(mouseX, mouseY)){
  //     s2.addInfo(1);
  //   }
  //   else if(exerciseI.isOnInfo(mouseX, mouseY)){
  //     s2.addInfo(2);
  //   }
  //   else if(sleepI.isOnInfo(mouseX, mouseY)){
  //     s2.addInfo(3);
  //   }
  //   else{
  //     s2.addInfo(4);
  //   }
  // }

  //Draw all screens
  if(nextQS){
    if(nextQS.startAt === 0){
      nextQS.startAt = nextQS.width;

      nextQS = null
    }else {
      nextQS.slideFromRight();
    }
  }else if(prevQS){
    prevQS.drawScreen();
  }
}

function addQuestions(qs, ql)
{
  for(var q of ql)
    qs.addQuestion(q);
}

function addMultipleChoiceQuestions(qs, ql, al)
{
  var qno = 0;
  for(var q of ql)
  {
    qs.addMultipleChoiceQuestion(q, al[qno]);
    qno++;
  }
}

function goToQS(qs)
{
  if(currentQS)
    for(var qListItem of currentQS.questionList)
      qListItem[1].hide();
  nextQS = qs;
  prevQS = currentQS;
  currentQS = qs;
}

function calculateAge()
{
  if((month() == Number(monthBirth) && day()<= Number(dayBirth))
      ||(month()<Number(monthBirth)))
    return year()-Number(yearBirth)-1;
  else
    return year()-Number(yearBirth);
}

function getExpectancy()
{
  /*$.ajax({
    url: '../Backend/expectancy.php',
    data: { 'nickname' : nickname, 'dayBirth' : dayBirth, 'monthBirth' : monthBirth,
            'yearBirth' : yearBirth, 'gender' : gender,
            'occupation' : occupation, 'packCigarette' : packCigarette,
            'drinkWeek' : drinkWeek, 'minutesEx' : minutesEx,
            'hoursSleep' : hoursSleep, 'bmi' : bmi, 'heartrate' : heartrate
            },
    type: 'POST'
  }).done(function (v) {
    solution.addYear(v);
  });*/

}

function actionInFirstSlide(){
  nickname = "" + nextQS.getAnswer(0);
  birthDate = "" + nextQS.getAnswer(1);
  birthDate = birthDate.split("-");
  dayBirth = "" + birthDate[2];
  monthBirth = "" + birthDate[1];
  yearBirth = "" + birthDate[0];
  /*gender = "" + nextQS.getAnswer(2);
  if(gender == "Female")
    gender= "female";
  else {
    gender = "male";
  }*/
  //occupation = "" + nextQS.getAnswer(3);

  age = calculateAge();

  if(age >= 50){
    s2.addQuestion(["Include your heartrate in 10 seconds"]);
    s2.addTimer(this.width / 2, this.height - this.height/4, 10);
  }
}

function actionInSecondSlide(){
  packCigarette = "" + nextQS.getAnswer(0);
  if(packCigarette == "More than 1 pack")
    packCigarette = "2";
  else
    packCigarette = "0;"

  drinkWeek = "" + nextQS.getAnswer(1);
  if(drinkWeek == "5 or more")
    drinkWeek = "5";
  else if(drinkWeek == "0 or 1")
    drinkWeek = "0";
  else {
    drinkWeek = "3"
  }

  minutesEx = "" + nextQS.getAnswer(2);
  hoursSleep = "" + nextQS.getAnswer(3);
  weight = Number(nextQS.getAnswer(4));
  height = Number(nextQS.getAnswer(5));

  bmi = weight / (height*0.01);
  bmi = bmi  / (0.01*height);

  if(age>50)
    heartrate = "" + (Number(nextQS.getAnswer(6)) * 6);
  else {
    heartrate = "0";
  }
}

function checkSecondValid(){
  var validList = [true, true, true, true, true, true];
  if(minutesEx > 10080 || minutesEx < 0 || isNaN(minutesEx))
    validList[2] = false;
  if(hoursSleep>24||hoursSleep<0 || isNaN(hoursSleep))
    validList[3] = false;
  if(weight>300||weight<10|| isNaN(weight)){
    validList[4] = false;
  }
  if(height>250||height<30 || isNaN(height)){
    validList[5] = false;
  }
  return validList;
}

function reset()
{
  s = new QuestionScreen(window.innerWidth, window.innerHeight, 20, 60, 80, false, false);
  s2 = new QuestionScreen(window.innerWidth, window.innerHeight, 60, 20, 80, true, false);
  s3 = new QuestionScreen(window.innerWidth, window.innerHeight, 106, 165, 242,false, true);
  solution = new Solutions();
  addQuestions(s, ["NickName"] );
  s.addDateQuestion("Date of birth");
  $.get('../Backend/occupations.php', function(data1) {
      listOcccupations = data1.split(',');
      //listOcccupations = sort(listOcccupations, listOcccupations.length + 1);
      addMultipleChoiceQuestions(s, ["Gender", "Occupation"], [["Female", "Male", "Other"], listOcccupations]);
  });

  //================================================================================================
  s2.addMultipleChoiceQuestion("How many packs do you smoke in a day?", ["I do not smoke", "1 pack", "More than 1 pack"]);
  s2.addMultipleChoiceQuestion("How often do you drink in a week?", ["0 or 1", "Between 3 to 4", "5 or more"]);
  s2.addQuestion("How many minutes do you exercise in a week?");
  s2.addQuestion("How many hours of sleep do you get in a day?");
  s2.addQuestion("Weight in kilograms");
  s2.addQuestion("Height in centimetres");
  //================================================================================================
  s3.lastSlide();

  //s2.addTimer(this.width / 2, this.height - this.height/6, 10);
  s.nextQS = s2;
  s2.nextQS = s3;
  s3.nextQS = s;
}

function mouseClicked(){
  if(currentQS == null)
  {
    if(startBtn.clicked(mouseX, mouseY))
    {
      shownDisclaimer = true;
    }
    else{
      shownDisclaimer = false;
      goToQS(s);
    }
  }

  else if(nextBtn.clicked(mouseX, mouseY)) {
    if(!currentQS.isThereEmptyAnswer()){
      //var newSara;

      if(countWhichSlide == 0)
      {

        actionInFirstSlide();
        if(age>0){
          countWhichSlide++;
          goToQS(currentQS.nextQS);
          isSecond = true;
          smokeI = new InfoButton(this, this.width/4, 0*90+60, this.width, this.length, "shoudld not mattter");
          drinkI = new InfoButton(this, this.width/4, 1*90+60, this.width, this.length, "shoudld not mattter");
          exerciseI = new InfoButton(this, this.width/4, 2*90+60, this.width, this.length, "shoudld not mattter");
          sleepI = new InfoButton(this, this.width/4, 3*90+60, this.width, this.length, "shoudld not mattter");}
        else{
          s.valid([true, false, true, true]);
        }
      }
      else if(countWhichSlide == 1)
      {

        actionInSecondSlide();
        var invalidList = checkSecondValid();
        var isValid= true;
        // var lengthFinalInvalid = 0;
        // var finalInvalid = [];
        for(var i = 2; i<invalidList.length;i++){
          if(!invalidList[i]){
            // finalInvalid[lengthFinalInvalid] = i;
            isValid= false;
            // lengthFinalInvalid++;
          }
        }
        if(isValid){
          countWhichSlide++;
          getExpectancy();
          s2.loadingMessage();

          if(solution.getAge() >age){
            goToQS(currentQS.nextQS);
            isSecond = false;
            smokeI = null;
            drinkI = null;
            exerciseI = null;
            sleepI = null;}
          else {
            waiting = true;
          }
        }
        else{
          s2.valid(invalidList);
        }
      }
      else if(countWhichSlide == 3){
        reset();
        countWhichSlide = 0;
        goToQS(s);
      }
    }
  }
  else if (s3.shareBtn.clicked(mouseX, mouseY)) {
    var ageExpectancy = s3.finalAge;
    var textToTweet = "My age expectancy is " + ageExpectancy + "! Follow this link to find your age expectancy: https://web.cs.manchester.ac.uk/v91797sc/Collapse/Collapse/";
    textToTweet = textToTweet.split(" ").join("%20");  // Format text.
    var url = "https://twitter.com/intent/tweet?text=" + textToTweet;
    window.open(url, '_blank',
                'location=yes,height=570,width=520,scrollbars=yes,status=yes');
  }

  else if(isSecond){
    s2.addInfo(0);
    if(s2.smokeI.isOnInfo(mouseX, mouseY)){
      s2.smokeI.addMessage();
    }
    else if(s2.drinkI.isOnInfo(mouseX, mouseY)){
      s2.drinkI.addMessage();
    }
    else if(s2.exerciseI.isOnInfo(mouseX, mouseY)){
      s2.drinkI.addMessage();
    }
    else if(s2.sleepI.isOnInfo(mouseX, mouseY)){
      s2.smokeI.addMessage();
    }
    else{
      s2.smokeI.noMessage();
      s2.drinkI.noMessage();
      s2.drinkI.noMessage();
      s2.smokeI.noMessage();
    }
  }
}
