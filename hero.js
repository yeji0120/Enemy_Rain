const hero = document.getElementsByClassName("hero")[0];

// hero 중앙
let heroLeft = 600;
hero.style.left = `${heroLeft}px`;

const heroMove=(e)=>{
    if(e.keyCode === 37 && heroLeft > 25){
        heroLeft = heroLeft -16;
        hero.style.left = `${heroLeft}px`;
        hero.style.backgroundPosition = "-91px 0px";
    }
    if(e.keyCode === 39 && heroLeft < 1125){
        heroLeft = heroLeft +16;
        hero.style.left = `${heroLeft}px`;
        hero.style.backgroundPosition = "47px 0px";
    }
}
document.addEventListener("keydown", heroMove);

// class Hero {}