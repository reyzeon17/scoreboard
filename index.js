let homeScoreboard = document.getElementById("homeScoreboard");
let homeScore = 0;
let guestScoreboard = document.getElementById("guestScoreboard");
let guestScore = 0;
let oneHome = document.getElementById("oneHome");
let twoHome = document.getElementById("twoHome");
let threeHome = document.getElementById("threeHome");
let oneGuest = document.getElementById("oneGuest");
let twoGuest = document.getElementById("twoGuest");
let threeGuest = document.getElementById("threeGuest");

function oneHomeBtn() {
	homeScore += 1;
	homeScoreboard.innerText = homeScore;
}

function twoHomeBtn() {
	homeScore += 2;
	homeScoreboard.innerText = homeScore;
}

function threeHomeBtn() {
	homeScore += 3;
	homeScoreboard.innerText = homeScore;
}

function oneGuestBtn() {
	guestScore += 1;
	guestScoreboard.innerText = guestScore;
}

function twoGuestBtn() {
	guestScore += 2;
	guestScoreboard.innerText = guestScore;
}

function threeGuestBtn() {
	guestScore += 3;
	guestScoreboard.innerText = guestScore;
}

function resetBtn() {
	homeScore = 0;
	guestScore = 0;
	homeScoreboard.innerText = homeScore;
	guestScoreboard.innerText = guestScore;
}
