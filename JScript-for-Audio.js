/**/
/* JScript for Audio Blind Test app */
/**/
// Initialize Tooltip
$(document).ready(function() {
	$('[data-toggle="tooltip"]').tooltip({ trigger: "hover" });
});
// Play/Pause tracks with single play click
window.onload = init;
function init() {
	document.addEventListener(
		"play",
		function(e) {
			var allTracks = document.getElementsByTagName("audio");
			for (var i = 0, len = allTracks.length; i < len; i++) {
				if (allTracks[i] != e.target) {
					allTracks[i].pause(); // stop All Sounds except play one
				}
			}
		},
		true
	);
}
