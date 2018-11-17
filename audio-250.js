(function(){
console.log('did the function even fire');
var audioList = [];
/* AudioObject Constructor */
function AudioObject(audio, duration) {
	this.audio = audio;
	this.id = audio.id;
	this.duration = duration;
}
/* bindAudioPlayer
 * Store audioplayer components in correct AudioObject
 * num identifes correct audioplayer
 */
AudioObject.prototype.bindAudioPlayer = function (num) {
  console.log('what am i asking for'+ "ep"+num);
	this.audioplayer = document.getElementById("ep" + num);
	this.play = this.audioplayer.querySelector('.pcast-play');
  this.pause = this.audioplayer.querySelector('.pcast-pause');
  this.rewind = this.audioplayer.querySelector('.pcast-rewind');
  this.progress = this.audioplayer.querySelector('.pcast-progress');
  this.mute = this.audioplayer.querySelector('.pcast-mute');
  this.currentTime = this.audioplayer.querySelector('.pcast-currenttime');
  this.duration = this.audioplayer.querySelector('.pcast-duration');
  this.pause.style.display = 'none';
}
/* addEventListeners() */
AudioObject.prototype.addEventListeners = function () {
	this.audio.addEventListener("timeupdate", AudioObject.prototype.timeupdate, false);
	this.audio.addEventListener("loadedmetadata", AudioObject.prototype.loadedmetadata, false);
	this.progress.addEventListener("click", AudioObject.prototype.progressClick, false);
	this.play.addEventListener("click", AudioObject.prototype.pressPlay, false);
  this.pause.addEventListener("click", AudioObject.prototype.pressPause, false);
  this.rewind.addEventListener("click", AudioObject.prototype.pressRewind, false);
  this.mute.addEventListener("click", AudioObject.prototype.pressMute, false);
}

    var toHHMMSS = function ( totalsecs ) {
        var sec_num = parseInt(totalsecs, 10); // don't forget the second param
        var hours   = Math.floor(sec_num / 3600);
        var minutes = Math.floor((sec_num - (hours * 3600)) / 60);
        var seconds = sec_num - (hours * 3600) - (minutes * 60);

        if (hours   < 10) {hours   = "0"+hours; }
        if (minutes < 10) {minutes = "0"+minutes;}
        if (seconds < 10) {seconds = "0"+seconds;}
        
        var time = hours+':'+minutes+':'+seconds;
        return time;
    }
    
    audio.addEventListener('loadedmetadata', function(){
      progress.setAttribute('max', Math.floor(audio.duration));
      duration.textContent  = toHHMMSS(audio.duration);
    });
    
  AudioObject.prototype.timeupdate = function () {
	 this.progress.setAttribute('value', this.audio.currentTime);
   this.currentTime.textContent  = toHHMMSS(this.audio.currentTime);
	};
  

 AudioObject.prototype.progressClick = function(e){
    this.audio.currentTime = Math.floor(this.audio.duration) * (e.offsetX / e.target.offsetWidth);
    };
  
AudioObject.prototype.pressPlay = function(){
  console.log('audio button clicked');
      this.style.display = 'none';
      this.pause.style.display = 'inline-block';
      this.pause.focus();
      this.audio.play();
      console.log(this.audio.getElementByID);
    };

AudioObject.prototype.pressPause = function(){
      this.style.display = 'none';
      this.play.style.display = 'inline-block';
      this.play.focus();
      this.audio.pause();
    };
 
AudioObject.prototype.pressRewind = function(){
   this.audio.currentTime -= 30;
    };

AudioObject.prototype.pressMute = function() {
      if(this.audio.muted) {
        this.audio.muted = false;
        this.querySelector('.fa').classList.remove('fa-volume-off');
        this.querySelector('.fa').classList.add('fa-volume-up');
      } else {
        this.audio.muted = true;
        this.querySelector('.fa').classList.remove('fa-volume-up');
        this.querySelector('.fa').classList.add('fa-volume-off');
      }
    };
  
  /* populateAudioList */
function populateAudioList() {
	var audioElements = document.getElementsByTagName("audio");
   console.log('how many audios '+ audioElements.length);
	for (i = 0; i < audioElements.length; i++) {
		audioList.push(
			new AudioObject(audioElements[i], 0)
		);
	//	audioList[i].bindAudioPlayer(i);
	//	audioList[i].addEventListeners();
	}
};
  
    populateAudioList();
  
});
