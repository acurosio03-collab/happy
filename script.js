/* ==========================================
   HAPPY BIRTHDAY PREMIUM
   SCRIPT.JS
========================================== */

"use strict";

/* ==========================================
   TARGET TANGGAL
========================================== */

const targetDate = new Date("August 26, 2026 00:00:00").getTime();


/* ==========================================
   TANGGAL HARI INI
========================================== */

const nowDate = new Date();

const hari = [
"Minggu","Senin","Selasa","Rabu","Kamis","Jumat","Sabtu"
];

const bulan = [
"Januari","Februari","Maret","April","Mei","Juni",
"Juli","Agustus","September","Oktober","November","Desember"
];

document.getElementById("tanggalSekarang").innerHTML =
"📅 " +
hari[nowDate.getDay()] + ", " +
nowDate.getDate() + " " +
bulan[nowDate.getMonth()] + " " +
nowDate.getFullYear();


/* ==========================================
   COUNTDOWN
========================================== */

const countdown = setInterval(function(){

    const now = new Date().getTime();

    const distance = targetDate - now;

    if(distance <= 0){

        clearInterval(countdown);

        document.getElementById("timer").innerHTML =
        "🎉 HAPPY BIRTHDAY SAYANGKU HAHA SEMOGAA PANJANG UMUR NYA YAA SEMOGA REZEKI NYA LANCAR TERUS JAGA KESEHATAN NYA OKEI  🎉";

        document.body.classList.add("birthday");

        return;

    }

    const d = Math.floor(distance/(1000*60*60*24));
    const h = Math.floor((distance%(1000*60*60*24))/(1000*60*60));
    const m = Math.floor((distance%(1000*60*60))/(1000*60));
    const s = Math.floor((distance%(1000*60))/1000);

    document.getElementById("timer").innerHTML =
    d+" Hari "+
    h+" Jam "+
    m+" Menit "+
    s+" Detik";

},1000);


/* ==========================================
   PUTAR MUSIK
========================================== */

function playMusic(){

    let music = document.getElementById("music");

    if(music){

        music.play().catch(()=>{});

    }

}


/* ==========================================
   BUKA KADO
========================================== */

function openGift(){

    let now = new Date().getTime();

    if(now < targetDate){

        alert(
        "🎁 Kado masih terkunci!\n\n" +
        "Kado baru bisa dibuka\n" +
        "26 Agustus 2026 ❤️"
        );

        return;

    }

    let box = document.querySelector(".gift-box");

    if(box){

        box.classList.add("open");

    }

    document.getElementById("gift").style.display="block";

    playMusic();

}


/* ==========================================
   HATI TERBANG
========================================== */

function createHeart(){

    let heart = document.createElement("div");

    heart.className="heart";

    heart.innerHTML="❤️";

    heart.style.left=Math.random()*100+"%";

    heart.style.animationDuration=
    (Math.random()*3+3)+"s";

    document.body.appendChild(heart);

    setTimeout(function(){

        heart.remove();

    },5000);

}

setInterval(createHeart,500);
