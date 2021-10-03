var n1 = Math.random();
n1 = Math.floor((Math.random() * 6)+1);
var random_img1 = "images/dice"+n1+".png";
document.querySelectorAll("img")[0].setAttribute("src",random_img1);
// second number
var n2 = Math.random();
n2 = Math.floor((Math.random() * 6)+1);
var random_img2 = "images/dice"+n2+".png";
document.querySelectorAll("img")[1].setAttribute("src",random_img2);
if (n1 > n2){
  document.querySelector("h1").innerHTML=("🎉 PLayer 1 Wins!");
}
else if (n2>n1){
  document.querySelector("h1").innerHTML=("⛳ Player 2 Wins!");
}
else{
  document.querySelector("h1").innerHTML=(" 😐 Draw !");
}
