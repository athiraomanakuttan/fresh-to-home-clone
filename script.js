// ---------------- Code for timer------------------- 

var dateToStop= new Date('Apr 1,2024 00:00:00').getTime();
var x=setInterval(()=>{
    var now=new Date().getTime()
    var distance=dateToStop-now ;
    
var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
var seconds = Math.floor((distance % (1000 * 60)) / 1000);

document.getElementById('hrs').innerText=hours+"h";
document.getElementById('mnts').innerText=minutes+"m";
document.getElementById('seconds').innerText=seconds+"s";



},10)