


class pingpong
  {
   
          constructor()
    {
      //asignasion de las variables
      this.y=height;
      this.dirY=-1;
      this.x=width/2;
      this.dirX=1;
      this.pos2=height/2;
      this.p1=0;
      this.p2=0;
    }
    
  
  }
class jugador extends pingpong
{
      jugador1()
    {
      rect(20, mouseY,10,40);//Jugador 1, Izq
    }
    jugador2()
    {
      rect(width-30, this.pos2,10,40);//Jugador 2, Der
  //Movimiento con flechas del teclado
  if(keyIsDown(UP_ARROW))
     {
      this.pos2 = this.pos2 - 4;
     }
  if(keyIsDown(DOWN_ARROW))
     {
      this.pos2 = this.pos2 + 4;
     }
    }
}
class pelota extends pingpong
  {
      jugador1()
    {
      rect(20, mouseY,10,40);//Jugador 1, Izq
    }
    jugador2()
    {
      rect(width-30, this.pos2,10,40);//Jugador 2, Der
  //Movimiento con flechas del teclado
  if(keyIsDown(UP_ARROW))
     {
      this.pos2 = this.pos2 - 4;
     }
  if(keyIsDown(DOWN_ARROW))
     {
      this.pos2 = this.pos2 + 4;
     }
    }
     bolita()
    {
   square(this.x,this.y, 10,10); //Bolita
  //Movimiento de la bolita
  this.x = this.x+(2 * this.dirX); //Velocidad de la bolita mod numero 
  this.y = this.y+(2 * this.dirY);
    }
        rebote()
    {
      if(this.y > height)
    {
     this.dirY = -1;
    }
   if(this.y < 0)
    {
     this.dirY = 1;
    }
  //Rebote bolita contra el jugador 1 Izq Mouse y puntaje
  
  if(this.x < 30)
    {
      if(this.y > mouseY &&  this.y < mouseY +40)
      {
       this.dirX = 1;
      }
      if(this.x < 20)
      {
       this.x = width/2; this.y= height/2; 
        this.p2++
      }
    }
  
  //Rebote botita contra el jugador 2 Der Flechas y puntaje
   if(this.x > width-30)
    {
      if(this.y > this.pos2 && this.y < this.pos2 +40)
      {
       this.dirX = -1;
      }
      if(this.x > width -20)
      {
       this.x = width/2; this.y= height/2;
        this.p1++
      }
    }
    }
     estadio()
    {
       textSize(30);
  fill(255);
  text(this.p1,150,30);
  text(this.p2, 450,30);
    }
  }
class area extends pingpong
  {
    //metodo para mostrar mi linea del medio
      barra()
    {
     background(0);//0-255 (R,G,B)
     stroke(255); //Color Linea del medio
     line(width/2,0,width/2,height)//Linea del medio
    }
   

   
    estadio()
    {
       textSize(30);
  fill(255);
  text(this.p1,150,30);
  text(this.p2, 450,30);
    }
  }


let pingpang;
let ball;
let play;
let arena;


function setup() {
  createCanvas(600, 400);

ball=new pelota();
  play= new jugador();
  arena= new area();
}


function draw() {
  background(0);//0-255 (R,G,B)
 arena.barra();//modo barra del medio
  ball.jugador1();//jugador uno del lado derecho
  ball.jugador2();//jugador dos del lado izquierdo
  ball.bolita();//lado de la bolita
  ball.rebote();//modo del rebote de la bolo en los lados
  ball.estadio();//marcador de los jugadores
}