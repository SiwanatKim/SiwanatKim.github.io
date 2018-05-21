var slider1 = document.getElementById("myRange1");
var output1 = document.getElementById("demo1");
var outputimg1 = document.getElementById("moneyimg");



output1.innerHTML = slider1.value;

slider1.oninput = function() {
output1.innerHTML = this.value;
moneyimg.src = 'pic/money'+this.value+'.svg';
}



