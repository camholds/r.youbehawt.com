
var img1 = document.getElementById("clickButton");

var jokes = ["Don't spell part backwards. It's a trap.",
"Did you hear about the guy who got hit in the head with a can of soda? He was lucky it was a soft drink.",
"I can't believe I got fired from the calendar factory. All I did was take a day off.",
"I'm reading a book about anti-gravity. It's impossible to put down.",
"I'd tell you a chemistry joke but I know I wouldn't get a reaction.",
"How did I escape Iraq? Iran.",
"I wasn't originally going to get a brain transplant, but then I changed my mind.",
"Q: What do you call the security outside of a Samsung Store? A: Guardians of the Galaxy.",
"I'm glad I know sign language, it's pretty handy.",
"I relish the fact that you've mustard the strength to ketchup to me.",
"A friend of mine tried to annoy me with bird puns, but I soon realized that toucan play at that game.",
"eBay is so useless. I tried to look up lighters and all they had was 13,749 matches.",
"I am on a seafood diet. Every time I see food, I eat it.",
"Why did the scientist install a knocker on his door? He wanted to win the No-bell prize!",
"Why do golfers always bring an extra pair of pants? In case they get a hole in one!",
"My first job was working in an orange juice factory, but I got canned: couldn't concentrate.",
"I wanna make a joke about sodium, but Na..",
"I hate insects puns, they really bug me.",
"Did you hear about the Italian chef with a terminal illness? He pastaway.",
"I'm taking part in a stair climbing competition. Guess I better step up my game.",
"Did you hear about the guy who choked on a pretzel? He was very salty."];


img1.addEventListener("mousedown", function buttonClick() {
	img1.src = "Pics/button1.png";
	document.getElementById("camsux").innerHTML = randomLine(jokes);
});

img1.addEventListener("mouseup", function buttonClick() {
	img1.src = "Pics/button2.png";
});

function randomLine(lines) {
	var r = Math.random();
	r = r * jokes.length;
	r = Math.floor(r);
	var line = lines[r];
	return line;
}
