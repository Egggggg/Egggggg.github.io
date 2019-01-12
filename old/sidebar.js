var active = "sbHome";

function setActive(nowActive) {
	if (active != nowActive) {
		document.getElementById(active).className = "";
		document.getElementById(nowActive).className = "active";
		active = nowActive;
	}
}