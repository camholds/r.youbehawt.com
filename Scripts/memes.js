
var img1 = document.getElementById("clickButton");

var memes = new Array("<img src='memes/meme1.jpg'style:height='200px'width='200px'margin:auto;>",
"<img src='memes/meme2.jpg'style:height='200px'width='200px'margin:auto;>", 
"<img src='memes/meme3.jpg'style:height='200px'width='200px'margin:auto;>", 
"<img src='memes/meme4.jpg'style:height='200px'width='200px'margin:auto;>", 
"<img src='memes/meme5.jpg'style:height='200px'width='200px'margin:auto;>",
"<img src='memes/meme6.jpg'style:height='200px'width='200px'margin:auto;>",
"<img src='memes/meme7.jpg'style:height='200px'width='200px'margin:auto;>",
"<img src='memes/meme8.jpg'style:height='200px'width='200px'margin:auto;>",
"<img src='memes/meme9.gif'style:height='200px'width='200px'margin:auto;>",
"<img src='memes/meme10.jpg'style:height='200px'width='200px'margin:auto;>",
"<img src='memes/meme11.jpg'style:height='200px'width='200px'margin:auto;>",
"<img src='memes/meme12.jpg'style:height='200px'width='200px'margin:auto;>",
"<img src='memes/meme13.jpg'style:height='200px'width='200px'margin:auto;>",
"<img src='memes/meme14.jpg'style:height='200px'width='200px'margin:auto;>",
"<img src='memes/meme15.jpg'style:height='200px'width='200px'margin:auto;>",
"<img src='memes/meme16.jpg'style:height='200px'width='200px'margin:auto;>",
"<img src='memes/meme17.jpg'style:height='200px'width='200px'margin:auto;>",
"<img src='memes/meme18.jpg'style:height='200px'width='200px'margin:auto;>",
"<img src='memes/meme19.jpg'style:height='200px'width='200px'margin:auto;>",
"<img src='memes/meme20.jpg'style:height='200px'width='200px'margin:auto;>",
"<img src='memes/meme21.jpg'style:height='200px'width='200px'margin:auto;>",
"<img src='memes/meme22.jpg'style:height='200px'width='200px'margin:auto;>",
"<img src='memes/meme23.jpg'style:height='200px'width='200px'margin:auto;>",
"<img src='memes/meme24.jpg'style:height='200px'width='200px'margin:auto;>",
"<img src='memes/meme25.jpg'style:height='200px'width='200px'margin:auto;>",
"<img src='memes/meme26.jpg'style:height='200px'width='200px'margin:auto;>",
"<img src='memes/meme27.jpg'style:height='200px'width='200px'margin:auto;>",
"<img src='memes/meme28.jpg'style:height='200px'width='200px'margin:auto;>",
"<img src='memes/meme29.jpg'style:height='200px'width='200px'margin:auto;>",
"<img src='memes/meme30.jpg'style:height='200px'width='200px'margin:auto;>");



img1.addEventListener("mousedown", function buttonClick() {
	img1.src = "Pics/button1.png";

});

img1.addEventListener("mouseup", function buttonClick() {
	img1.src = "Pics/button2.png";
			document.getElementById("camsux").innerHTML = randomLine(memes);

});

function randomLine(lines) {
	var r = Math.random();
	r = r * memes.length;
	r = Math.floor(r);
	var line = lines[r];
	return line;
}


