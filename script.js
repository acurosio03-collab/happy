// ===============================
// COUNTDOWN ULANG TAHUN
// ===============================

// Atur tanggal ulang tahun disini
let targetDate = new Date("August 26, 2026 00:00:00").getTime();


let countdown = setInterval(function(){

    let now = new Date().getTime();

    let distance = targetDate - now;


    let hari = Math.floor(
        distance / (1000 * 60 * 60 * 24)
    );


    let jam = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) /
        (1000 * 60 * 60)
    );


    let menit = Math.floor(
        (distance % (1000 * 60 * 60)) /
        (1000 * 60)
    );


    let detik = Math.floor(
        (distance % (1000 * 60)) /
        1000
    );


    document.getElementById("timer").innerHTML =
    hari + " Hari " +
    jam + " Jam " +
    menit + " Menit " +
    detik + " Detik";


    // Jika waktu habis
    if(distance < 0){

        clearInterval(countdown);

        document.getElementById("timer").innerHTML =
        "?? HAPPY BIRTHDAY ??";

    }


},1000);





// ===============================
// TOMBOL HADIAH
// ===============================

function openGift(){

    let box=document.querySelector(".gift-box");

    box.classList.add("open");


    document.getElementById("gift").style.display="block";


    for(let i=0;i<15;i++){

        let star=document.createElement("div");

        star.innerHTML="?";

        star.className="sparkle";


        star.style.left=Math.random()*100+"%";

        star.style.top="40%";


        document.body.appendChild(star);


        setTimeout(()=>{

            star.remove();

        },2000);

    }

}




// ===============================
// ANIMASI HATI TERBANG
// ===============================

function createHeart(){

    let heart=document.createElement("div");

    heart.innerHTML="??";

    heart.className="heart";


    heart.style.left =
    Math.random()*100+"%";


    heart.style.animationDuration =
    (Math.random()*3+3)+"s";


    document.body.appendChild(heart);


    setTimeout(()=>{

        heart.remove();

    },5000);

}


setInterval(createHeart,500);
// ===============================
// MUSIK ULANG TAHUN
// ===============================

function playMusic(){

    let music = document.getElementById("music");

    music.play();

}
