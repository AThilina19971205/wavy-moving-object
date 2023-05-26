class Object{
    dx=40;
    dy=0;
    x=20;
    y=200;
    elm;

    constructor(){
        this.elm=document.createElement('div');
        this.elm.style.width="50px"
        this.elm.style.height="50px"
        this.elm.style.borderRadius="100%";
        this.elm.style.left=`${this.x}px`;
        this.elm.style.top=`${this.y}px`;
        this.elm.style.position="absolute";
        this.elm.style.backgroundColor="blue";
        document.body.append(this.elm);
        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);

        this.elm.style.backgroundColor = `rgb(${r},${g},${b})`;

        
    }
    move(){
        this.x+=this.dx;
        this.y+=100*Math.sin(Math.PI/180*this.dy);
        if(this.dy>=360){
            this.dy=0;
        }
        this.dy+=30;

        this.elm.style.left=this.x+"px";
        this.elm.style.top=this.y+"px";
        if(this.x>=window.innerWidth-50){
            this.x=20;
        }

    };
}
const objList=[];

for (let index = 0; index < 6; index++) {
    objList.push(new Object());
    
}
let elm2=false;
let elm3=false;
let elm4=false;
let elm5=false;
let elm6=false;
setTimeout(() => {
    elm2=true
}, 200);
setTimeout(() => {
    elm3=true
}, 400);
setTimeout(() => {
    elm4=true
}, 600);
setTimeout(() => {
    elm5=true
}, 800);
setTimeout(() => {
    elm6=true
}, 1000);

setInterval(() => {
    objList[0].move();
    if(elm2){
        objList[1].move();
    };
    if(elm3){
        objList[2].move();
    };
    if(elm4){
        objList[3].move();
    };
    if(elm5){
        objList[4].move();
    };
    if(elm6){
        objList[5].move();
    };
}, 150);     