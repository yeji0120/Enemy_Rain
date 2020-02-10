const enemy = document.getElementsByClassName("enemy")[0];
const bg = document.getElementById("bg");

class Enemy{
    constructor(){
        this.top = -50;
        this.left = Math.floor((Math.random()*1100)+25);
        this.enemy = document.createElement("div");
        this.enemy.setAttribute("class", "enemy");
        bg.appendChild(this.enemy);
        this.enemy.style.left = `${this.left}px`;
        this.move();
    }
    // enemy move
    move(){
        setInterval(()=>{
            this.top = this.top +1;
            this.enemy.style.top = `${this.top}px`;
            // hero랑 만나는 조건
            if(this.left < heroLeft+50 && this.left > heroLeft-50 && this.top > 700){
                this.die();
            }
            // enemy가 화면을 넘어가고 요소 제거
            if(this.top > 800){
                setTimeout(()=>{this.enemy.remove();}, 10);
            }
        },16)
    }
    // enemy die
    die(){
        if(this.top > 580){
            this.enemy.style.backgroundPosition = "45px 1px";
            setTimeout(()=>{this.enemy.remove();},100);
        }
    }
}

// enemy 생성
setInterval(()=>{
    const enemy = new Enemy();  
}, 3000)