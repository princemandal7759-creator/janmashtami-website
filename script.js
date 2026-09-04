const startBtn = document.getElementById("startBtn");

startBtn.addEventListener("click", () => {

document.body.innerHTML = `

<div class="scanPage">

<h1 class="scanTitle">
Scanning Emotions...
</h1>

<div class="scanBox">

<div class="progress"></div>

</div>

<p id="percent">0%</p>

</div>

`;

let p = 0;

const bar = document.querySelector(".progress");

const txt = document.getElementById("percent");

const interval = setInterval(()=>{

p++;

bar.style.width = p+"%";

txt.innerHTML = p+"%";

if(p==100){

clearInterval(interval);

setTimeout(showQuestions,800);

}

},35);

});

function showQuestions(){

document.body.innerHTML=`

<div class="container">

<h1 class="name">
Hello madam jihh!! ❤️
</h1>

<p class="desc">
Before I show you something...

Answer one question 😊
</p>

<h2 style="margin-top:40px;">
Are you merii pyrii si chotti bachhii?🥲🥰
</h2>

<div style="margin-top:40px;">

<button id="yesBtn">
YES ❤️
</button>

<button id="noBtn">
NO 😅
</button>

</div>

</div>

`;

const no=document.getElementById("noBtn");

no.onmouseover=()=>{

no.style.position="absolute";

no.style.left=Math.random()*80+"%";

no.style.top=Math.random()*80+"%";

}

document.getElementById("yesBtn").onclick=showLetter;

}

function showLetter(){

document.body.innerHTML=`

<div class="container">

<h1 class="name">
❤️ Meri Bachhuu ❤️
</h1>

<p id="typing"></p>

</div>

`;

const text=`

Helloo merii pyrii si cutiee...😊😘
you are my jigar ka tukda..💕

 u are so so so cute gdhii bchhi ap
 bht ache ho yr hmesa mera care
  krti ho gussa sehti ho yrr you 
 are my precious gem💎.

 I never want to lose you in my life. 
 I want to be with you always.
You are my best friend, my partner,
 and my everything. 😘💕🫂
 I love you more than words can express.🥰
Tum meri favourite person ho. ❤️

Thank you hamesha mera saath dene ke liye.
Tumhari smile meri happiness hai.
Promise karo...
Hmesha smile karti rahogi 😊
Love You Forever meri pyriii bchhii ❤️

`;

let i=0;

const target=document.getElementById("typing");

const timer=setInterval(()=>{

target.innerHTML+=text.charAt(i);

i++;

if(i>=text.length){

clearInterval(timer);

setTimeout(showFinal,2500);

}

},45);

}

function showFinal(){

document.body.innerHTML = `
<div class="container">

<h1 class="name">✨ Surprise ✨</h1>

<img src="images/together.png" class="photo">

<h2>❤️ Prince & Bachhuu❤️</h2>

<p>
No matter where life takes us...
You'll always be my favourite. ❤️
</p>

</div>
`;

createHearts();

}

function createHearts(){

setInterval(()=>{

const heart=document.createElement("div");

heart.innerHTML="💖";

heart.style.position="fixed";

heart.style.left=Math.random()*100+"vw";

heart.style.top="100vh";

heart.style.fontSize=Math.random()*25+20+"px";

heart.style.animation="fly 6s linear";

document.body.appendChild(heart);

setTimeout(()=>{

heart.remove();

},6000);

},200);

}

const style=document.createElement("style");

style.innerHTML=`

.scanPage{

height:100vh;

display:flex;

justify-content:center;

align-items:center;

flex-direction:column;

background:#090313;

color:white;

}

.scanTitle{

font-size:45px;

margin-bottom:40px;

}

.scanBox{

width:350px;

height:18px;

background:#333;

border-radius:30px;

overflow:hidden;

}

.progress{

height:100%;

width:0;

background:linear-gradient(90deg,#ff4fa5,#ff8bd4);

border-radius:30px;

}

#percent{

margin-top:20px;

font-size:25px;

}

#yesBtn,#noBtn{

padding:18px 45px;

margin:15px;

border:none;

border-radius:50px;

font-size:20px;

cursor:pointer;

}

#yesBtn{

background:lightpink;

color:white;

}

#noBtn{

background:#222;

color:white;

}

#typing{

margin-top:35px;

font-size:20px;

line-height:40px;

white-space:pre-line;

}

@keyframes fly{

0%{

transform:translateY(0);

opacity:1;

}

100%{

transform:translateY(-120vh);

opacity:0;

}

}

`;

document.head.appendChild(style);