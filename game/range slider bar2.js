var slider2 = document.getElementById("myRange2");
var output2 = document.getElementById("demo2");
var outputimg2 = document.getElementById("clockimg");



output2.innerHTML = slider2.value;

slider2.oninput = function() {
output2.innerHTML = this.value;
clockimg.src = 'pic/clock'+this.value+'.svg';
}



