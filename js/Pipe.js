function Pipe(x,y,speed,width,heigth){
  this.x = x;
  this.y = y;
  this.speed = speed;
  this.width = width;
  this.height = heigth;
}
Pipe.prototype.update = function(){
  this.x -= this.speed;
}
Pipe.prototype.render = function(ctx){
  ctx.save();
  var gradient = ctx.createLinearGradient(this.x,this.y,this.x+this.width,this.y);
  gradient.addColorStop(0,"#00E800");
  gradient.addColorStop(0.7,"rgba(195, 254, 193, 1)");
  gradient.addColorStop(1,"#00E800");
  // ctx.fillStyle = "#00E800";
  ctx.fillStyle = gradient;
    ctx.fillRect(this.x, this.y, this.width, this.height);
    ctx.lineWidth = 10;
    ctx.strokeRect(this.x, this.y, this.width, this.height);
    if(this.y < 100){
        ctx.fillRect(this.x-20, this.y+this.height-70, this.width+40, 70);
        ctx.strokeRect(this.x-20, this.y+this.height-70, this.width+40, 70);
    }else{
      ctx.fillRect(this.x-20, this.y, this.width+40, 70);
      ctx.strokeRect(this.x-20, this.y, this.width+40, 70);
    }
    ctx.restore();
  }
export default Pipe;
