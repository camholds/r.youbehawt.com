
var img1 = document.getElementById("clickButton");

var pickuplines = new Array("I have those exact same shoes!",
	"You're like Pringles once I pop you, I can't stop you.",
	"You're like my little toe, because I'm going to bang you on every piece of furniture in my home.",
	"Your place or mine? Tell you what? I'll flip a coin. Head at my place, tail at yours.",
	"You're on my list of things to do tonight.",
	"Your shirt has to go, but you can stay.",
	"Your ass is so nice that it is a shame that you have to sit on it.",
	"You should join the circus.(Why?) So you can learn to juggle my balls all day.",
	"You have pretty eyeballs. Of course they'd be better if they were eyeing my pretty balls.",
	"You make me wish I weren't gay!",
	"You make me want to calibrate my joystick without the latest drivers.",
	"You look like trash, may I take you out?",
	"You can call me The Fireman....mainly because I turn the hoes on!",
	"Girl, you should sell hotdogs, because you already know how to make a weiner stand",
	"Are you a racehorse? Cause when I ride you'll always finish first.",
	"Are u a flight attendant? Coz u gonna be plane wth this dick soon.",
	"I heard you like Magic, well bend over and watch my dick disappear",
	"Your so hot I'd jack your dad off just to see where you came from.",
	"I blame your perfect breasts for my inability to focus during our conversations.",
	"Can I park my car in your garage? It's pretty big, but it doesn't leak.",
	"Do you like Adele? Cause I can tell you wanna be rolling in the D.",
	"Do you like to draw? (yeah why?) Cause I put the D in Raw",
	"Has any one ever told you your ass looks like a phone cause I want to hit the pound button all day long.",
	"I have a tongue like an anteater; want to go to the zoo?",
	"What do you call a penguin with a large penis? An icebreaker.",
	"Baby your bone structure is giving my bone structure",
	"I'm like Domino's Pizza. If I don't cum in 30 minutes, the next one is free.",
	"Are you a raisin? cuz your a raisin my dick.",
	"I would tell you a joke about my penis....buts its too long ;)",
	"I forgot my blow job at your house, can i come over and get it?",
	"My magical watch says you're not wearing any panties...oh, you are? Damn, it must be an hour fast... ",
	"I may not have gotten your virginity, but can I at least have the box it came in?",
	"“If you were an elevator, what button would I have to push to get you to go down?",
	"Do you like Imagine Dragons? Well Imagine Dragon my balls across your face.",
	"What if I start this relationship with you as a frien. Will you allow me to give you the 'D' later?",
	"This Dick a rental car company.....It Hertz",
	"We should play strip poker. You can strip, and I'll poke you.",
	"They call me the cat whisperer, cause I know exactly what the pussy needs.",
	"Are you a termite? Cause you're about to have a mouth full of wood.",
	"How about later tonight, you let me slip into something a little more comfortable... Like your vagina.",
	"You know what cums after C....The D!",
	"I'm going to make you breakfast...Omellete you suck this dick.",
	"I've got a big one, you wanna see how hard it works?",
	"Hey, have you met my friend Dick? He is real tall.",
	"I like my women, like I like my ice cream, fat free and dripping down my fingers",
	"You can touch mine if I can touch yours with mine.",
	"I lost my pants, do you mind if I wrap your legs around me instead?",
	"Do you like Alphabet soup...Cause you gonna be choking on the D",
	"Hey baby, what's your sign? Caution, Slippery When Wet, Dangerous Curves ahead, Yield?",
	"I'm no rooster, but watch what this cock-a-do-to-you",
	"Do you have pet insurance? No?.... Cause I'm going destroy your pussy.");



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