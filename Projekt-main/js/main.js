const img1= document.querySelector("#flertal-hkp");
const txt1= document.querySelector("#info-text1");
const img2= document.querySelector("#hkp-med-besättning");
const txt2= document.querySelector("#info-text2");
const img3= document.querySelector("#img-hkp-info-bigger");
const txt3= document.querySelector("#info-text3");

img1.addEventListener("click",function(){
    txt1.classList.toggle("hidden");
});
img2.addEventListener("click",function(){
    txt2.classList.toggle("hidden");
});
img3.addEventListener("click",function(){
    txt3.classList.toggle("hidden");
});