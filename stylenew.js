*{
    box-sizing:border-box;
}

body{
    margin:0;
    min-height:100vh;
    overflow-x:hidden;
    font-family:'Poppins',Arial,sans-serif;
    text-align:center;
    color:white;
    background:
    linear-gradient(135deg,#ff758c,#ff7eb3,#8e2de2);
}


/* CONTAINER */

.container{

    padding:40px 20px;
    position:relative;
    z-index:2;

}


/* JUDUL */

h1{

    font-size:45px;
    margin-top:20px;
    text-shadow:
    0 0 10px white,
    0 0 30px #ff00cc;

    animation:judul 2s infinite alternate;

}


h2 span{

    color:#ffe066;

}


/* FOTO */

.photo img{

    width:220px;
    height:220px;
    object-fit:cover;

    border-radius:50%;

    border:8px solid white;

    box-shadow:
    0 0 20px #fff,
    0 0 50px #ff00cc;

    animation:foto 3s infinite alternate;

}



.text{

    font-size:20px;
    line-height:1.6;
    margin:30px auto;
    max-width:500px;

}




/* KUE */

.cake{

    margin:40px auto;
    width:200px;

}


.cake-bottom,
.cake-mid,
.cake-top{

    margin:auto;

    border-radius:15px;

    box-shadow:
    0 10px 20px rgba(0,0,0,.3);

}


.cake-bottom{

    width:200px;
    height:60px;
    background:#ff4d88;

}


.cake-mid{

    width:160px;
    height:50px;
    background:#ff85a1;

}


.cake-top{

    width:120px;
    height:45px;
    background:#ffc2d1;

}


.candle{

    width:15px;
    height:60px;
    background:white;
    margin:auto;

}


.flame{

    width:25px;
    height:25px;

    background:orange;

    border-radius:50%;

    margin:auto;

    animation:api .5s infinite alternate;

}




/* COUNTDOWN */

.countdown{

    background:rgba(255,255,255,.15);

    padding:20px;

    border-radius:20px;

    backdrop-filter:blur(10px);

    margin:30px auto;

    max-width:400px;

}



#timer{

    font-size:25px;

    font-weight:bold;

}



/* BUTTON */

button,
.wa{

    display:inline-block;

    margin:15px;

    padding:15px 30px;

    border-radius:50px;

    border:none;

    background:#ff006e;

    color:white;

    font-size:18px;

    text-decoration:none;

    cursor:pointer;

    box-shadow:
    0 0 20px #ff006e;

    transition:.3s;

}


button:hover,
.wa:hover{

    transform:scale(1.1);

}




/* HADIAH */

#gift{

    display:none;

    margin:20px;

    font-size:22px;

    animation:muncul 1s;

}




/* HATI */

.heart{

    position:fixed;

    bottom:-30px;

    font-size:25px;

    animation:naik linear forwards;

    z-index:1;

}



/* ANIMASI */


@keyframes judul{

    from{
        transform:scale(1);
    }

    to{
        transform:scale(1.1);
    }

}


@keyframes foto{

    from{
        transform:rotate(-5deg);
    }

    to{
        transform:rotate(5deg);
    }

}


@keyframes api{

    from{
        transform:scale(1);
    }

    to{
        transform:scale(1.5);
    }

}



@keyframes naik{

    from{

        transform:translateY(0);
        opacity:1;

    }


    to{

        transform:translateY(-100vh);
        opacity:0;

    }

}



@keyframes muncul{

    from{
        transform:scale(0);
    }

    to{
        transform:scale(1);
    }

}



/* HP */

@media(max-width:600px){

h1{

    font-size:35px;

}


.photo img{

    width:170px;
    height:170px;

}


.text{

    font-size:17px;

}

}
/* ======================
   KADO ULANG TAHUN
====================== */


.gift-box{

    width:120px;
    height:100px;
    margin:40px auto;
    position:relative;
    cursor:pointer;

}


.box{

    width:120px;
    height:80px;
    background:#ff006e;

    position:absolute;
    bottom:0;

    border-radius:10px;

    box-shadow:
    0 0 30px #ff006e;

}


.lid{

    width:130px;
    height:25px;

    background:#ffd166;

    position:absolute;

    top:0;
    left:-5px;

    border-radius:10px;

    transition:1s;

    z-index:2;

}


.gift-box.open .lid{

    transform:
    translateY(-70px)
    rotate(-20deg);

}



.gift-box:before{

    content:"";

    position:absolute;

    width:20px;
    height:100%;

    background:#ffd166;

    left:50%;

    transform:translateX(-50%);

    z-index:1;

}



.sparkle{

    position:absolute;

    font-size:30px;

    animation:spark 1s infinite;

}


@keyframes spark{

    0%{

        transform:scale(1);

        opacity:1;

    }

    100%{

        transform:scale(2);

        opacity:0;

    }

}
