// shell
// npm init -y
// npm install --save-dev browserify
// npm install --save-dev watchify babelify
// npm install --save-dev babel-preset-es2015

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext("2d");
import scene from "./Scene.js";
import Bird from "./bird.js";
import Pipe from "./Pipe.js";
import PipeGenerator from "./PipeGenerator.js";
const pipes = [];


window.onload = function() {
    const bird = new Bird(150, 50);
    new PipeGenerator(pipes);
    function initGameLoop() {
        bird.detectCollisions(pipes);
        if (!bird.dead) {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            scene.update();
            scene.render(ctx);
            bird.update();
            bird.render(ctx);
            pipes.forEach(function(pipe, i) {
                if (pipe.x < -pipe.width) {
                    delete pipes[i];
                } else {
                    pipe.update();
                    pipe.render(ctx);
                }
            });
        }else{
          ctx.font="50px Georgia";
          ctx.fillStyle = "#00E800";
          ctx.lineWidth = 5;
          ctx.strokeText("Game Over",400,350);
          ctx.fillRect(400, 370, 250, 70);
          ctx.strokeRect(400, 370, 250, 70);
          ctx.strokeText("Replay", 450, 420);
          // document.getElementById('canvas').doMouseOver = (e)=>{
          //   if(e.x>400&&e.x<650&&e.y>370&&e.y<440){
          //     ctx.fillStyle = 'red';
          //     ctx.fill();
          //   }
          // }
          document.getElementById('canvas').onclick = (e)=> {
            if(e.x>400&&e.x<650&&e.y>370&&e.y<440){
              window.location.reload();
            }
          };
          return;
        }
        window.requestAnimationFrame(initGameLoop);
    }
    initGameLoop();
}
