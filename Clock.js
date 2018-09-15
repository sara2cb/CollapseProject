class Clock
{
  constructor(canvas, x, y)
  {
    this.canvas = canvas;
    this.x = x;
    this.y = y;
  }

  drawClock() {
    var hor = this.x;
    var ver = this.y;
    var now = new Date();
    c.save();
    c.translate(hor,ver);
    c.scale(0.6,0.6);
    c.rotate(-Math.PI/2);
    c.strokeStyle = "grey";
    c.fillStyle = "white";
    c.lineWidth = 8;
    c.lineCap = "round";

    var sec = now.getSeconds();
    var min = now.getMinutes();
    var hr  = now.getHours();
    hr = hr>=12 ? hr-12 : hr;

    c.fillStyle = "black";

    //write the hour
    c.save();
    c.rotate( hr*(Math.PI/6) + (Math.PI/360)*min + (Math.PI/21600)*sec )
    c.lineWidth = 14;
    c.beginPath();
    c.moveTo(-20,0);
    c.lineTo(80,0);
    c.stroke();
    c.restore();

    //write the minutes
    c.save();
    c.rotate( (Math.PI/30)*min + (Math.PI/1800)*sec )
    c.lineWidth = 10;
    c.beginPath();
    c.moveTo(-28,0);
    c.lineTo(112,0);
    c.stroke();
    c.restore();

    //write the seconds
    c.save();
    c.rotate(sec * Math.PI/30);
    c.strokeStyle = "#D90000";
    c.fillStyle = "#D90000";
    c.lineWidth = 6;
    c.beginPath();
    c.moveTo(-30,0);
    c.lineTo(83,0);
    c.stroke();
    c.beginPath();
    c.arc(0,0,10,0,Math.PI*2,true);
    //c.fill();
    c.beginPath();
    c.arc(95,0,10,0,Math.PI*2,true);
    c.stroke();
    c.fillStyle = "rgba(0,0,0,4)";
    c.arc(0,0,3,0,Math.PI*2,true);
    //c.fill();
    c.restore();

    c.beginPath();
    c.lineWidth = 14;
    c.strokeStyle = '#90000';
    c.arc(0,0,142,0,Math.PI*2,true);
    c.stroke();

    c.restore();
  }

}
