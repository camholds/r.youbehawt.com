
var img1 = document.getElementById("clickButton");

var pickuplines = new Array("Hi, do you speak English? (yes.) Oh, me too.",
"Excuse me, I seem to have lost my phonenumber, can I get yours?",
"The owner has asked me to take you out of here. It seems he is very environmentally conscious and you are forcing him to turn up the AC",
"[panting] Alright, I'm here! Now what were your other two wishes?", 
"You may fall from the sky, you may fall from the tree, but the best way to fall....is in love with me.", 
"If I had a nickle for every time I saw someone as beautiful as you I would have five cents!", 
"I wish the alphabet would rearrange itself so that I could be next to U",
"Do you believe in love at first sight? Or do I need to walk by you again?", 
"Are you from Tennessee? Because you're the only ten I see!", 
"There is something wrong with my cell phone. It doesn't have your number in it.", 
"I bet you $20 you're gonna turn me down.", 
"Do you have the time? [Tells you the time] No, the time to write down my number?", 
"On a scale of 1-10, your a nine… and I’m the 1 you need:)", 
"Is your name Gillette? Cause you look like the best a man can get.", 
"If I could rearrange the alphabet, I'd put U and I together.", 
"What's wrong? You're looking a little sad and gloomy. What you need is some vitamin ME", 
"I didn't know that angels could fly so low!", 
"What time do you have to be back in heaven?", 
"Would you touch me so I can tell my friends I've been touched by an angel?", 
"Are you lost? 'Cause it's so strange to see an angel so far from heaven", 
"My mom told me that life is like a deck of cards, so you must the be queen of hearts",
"Im no photographer, but I could picture us together.");



img1.addEventListener("mousedown", function buttonClick() {
	img1.src = "Pics/button1.png";
	document.getElementById("camsux").innerHTML = randomLine(pickuplines);
});

img1.addEventListener("mouseup", function buttonClick() {
	img1.src = "Pics/button2.png";
});

function randomLine(lines) {
	var r = Math.random();
	r = r * pickuplines.length;
	r = Math.floor(r);
	var line = lines[r];
	return line;
}
