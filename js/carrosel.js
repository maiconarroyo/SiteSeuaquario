const imgs = document.getElementById("img");
const img = document.querySelectorAll("#img img");

let idx =0;

function carossel(){
    idx ++;
    if(idx > img.length -1){
        idx = 0;
    }

    imgs.style.transform = `translateX(${-idx * 360}px)`;
}
setInterval(carossel, 1800)