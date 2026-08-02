/* =================================
   HAPPY BIRTHDAY 26 AGUSTUS
================================= */


// TARGET TANGGAL
let targetDate = new Date(
    "August 26, 2026 00:00:00"
).getTime();



// ================================
// COUNTDOWN
// ================================

let timer = setInterval(function(){

    let now = new Date().getTime();

    let distance = targetDate - now;


    let hari = Math.floor(
        distance / (1000*60*60*24)
    );


    let jam = Math.floor(
        (distance % (1000*60*60*24)) /
        (1000*60*60)
    );


    let menit = Math.floor(
        (distance % (1000*60*60)) /
        (1000*60)
    );


    let detik = Math.floor(
        (distance % (1000*60)) /
        1000
    );


    document.getElementById("timer").innerHTML =
    hari+" Hari "+
    jam+" Jam "+
    menit+" Menit "+
    detik+" Detik";



    // SAAT HARI H

    if(distance < 0){

        clearInterval(timer);

        document.getElementById("timer").innerHTML =
        "🎉 HAPPY BIRTHDAY 🎉";


        document.body.classList.add("birthday");

    }


},1000);





// ================================
// LOVE TERBANG
// ================================


function createLove(){

    let love = document.createElement("div");

    love.className = "love";

    love.innerHTML = "❤️";


    love.style.left =
    Math.random()*100 + "vw";


    love.style.animationDuration =
    (Math.random()*3+3)+"s";


    love.style.fontSize =
    (Math.random()*20+20)+"px";


    document.body.appendChild(love);



    setTimeout(()=>{

        love.remove();

    },6000);

}


setInterval(createLove,300);





// ================================
// BUKA KADO
// ================================


function openGift(){

    let now =
    new Date().getTime();


    if(now < targetDate){

        alert(
        "🎁 Kado masih terkunci ❤️\n\n" +
        "Tunggu sampai 26 Agustus ya 🎂"
        );

        return;

    }



    let box =
    document.querySelector(".gift-box");


    if(box){

        box.classList.add("open");

    }


    document.getElementById("gift")
    .style.display="block";


}
