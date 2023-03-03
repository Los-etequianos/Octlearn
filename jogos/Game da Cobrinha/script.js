
    var stage = document.getElementById('stage');
    var context = stage.getContext("2d"); // criar a parte grafica do game
    document.addEventListener("keydown", keyPush);

    setInterval(game, 80); // intervalo de tempo

    const vel = 1; //velocidade
    var vx = vy = 0;
    var px = py = 10;
    var tp = 30; // tamanho da peça
    var qp = 20. //quantidade de peças
    var ax = ay = 15; //posição da maçã
    var ix = iy = 4;

    let score = 0;

    var trail = [];
    tail = 5;

    function game(){
        px += vx;
        py += vy;
        /**possibilidades de quando a cobra 'bater' na parede*/
        if(px < 0){
            px = qp - 1;
        } 
        if(px > qp - 1){
            px = 0;
        }
        if(py < 0){
            py = qp - 1;
        }
        if(py > qp - 1){
            py = 0;
        }

        context.fillStyle = "#c4c4c4";
        context.fillRect(0, 0, stage.width, stage.height); //pintar o stage

        context.fillStyle = "green";
        context.fillRect(ax*tp, ay*tp, tp,tp);

        context.fillStyle = "black";
        context.fillRect(ix*tp, iy*tp, tp,tp);

        context.fillStyle = "gray";
        for(var i=0; i < trail.length; i++){
            context.fillRect(trail[i].x*tp, trail[i].y*tp, tp-1,tp-1);
            /** quando a cobra bate nela mesma */
            if(trail[i].x == px && trail[i].y == py){
                vx = vy = 0;
                tail = 5;
                score = 0;
                var table = document.querySelector('.table')
                table.style.display = 'none';
                
            }
        }

        trail.push({x:px,y:py })
        while (trail.length > tail) {
            trail.shift();
        }

        /** Quando a cobra rela na 'maçã' */
        if(ax == px && ay == py){
            tail++;
            ax = Math.floor(Math.random()*qp);
            ay = Math.floor(Math.random()*qp);
            score++;

            var table = document.querySelector('.table')
            table.style.display = 'block';
            var el = document.querySelector('#el-' + [score]);
            el.style.display = 'flex';

        }
    

        if(ix == px && iy == py){
            tail--;
            ix = Math.floor(Math.random()*qp);
            iy = Math.floor(Math.random()*qp);

            if(score <= 0){
                window.location.reload(true);
            }
            
            var el = document.querySelector('#el-' + [score]);
            el.style.display = 'none'; 
            score--;
        }
    }

    /** movimentação do game */
    function keyPush(event){
        switch(event.keyCode){
            case 37: // left
                vx = -vel;
                vy = 0;
                break;
            case 38: // up
                vx = 0;
                vy = -vel;
                break;
            case 39: // right
                vx = vel;
                vy = 0;
                break;
            case 40: // down
                vx = 0;
                vy = vel;
                break;
            default:
                break;
        }
    }

/** Funções para os botões no celular */
function btnUp(){
    vx = 0;
    vy = -vel;
}

function btnDown(){
    vx = 0;
    vy = vel;
}

function btnLeft(){
    vx = -vel;
    vy = 0;
}

function btnRight(){
    vx = vel;
    vy = 0;
}