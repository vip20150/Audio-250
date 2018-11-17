new jPlayerPlaylist(
  {
    jPlayer: "#jquery_jplayer_1",
    cssSelectorAncestor: "#jp_container_1"
  },
  [
    {
      title: "Cro Magnon Man",
      mp3: "http://www.jplayer.org/audio/mp3/TSP-01-Cro_magnon_man.mp3",
      oga: "http://www.jplayer.org/audio/ogg/TSP-01-Cro_magnon_man.ogg"
    },
    {
      title: "Your Face",
      mp3: "http://www.jplayer.org/audio/mp3/TSP-05-Your_face.mp3",
      oga: "http://www.jplayer.org/audio/ogg/TSP-05-Your_face.ogg"
    },
    {
      title: "Cyber Sonnet",
      mp3: "http://www.jplayer.org/audio/mp3/TSP-07-Cybersonnet.mp3",
      oga: "http://www.jplayer.org/audio/ogg/TSP-07-Cybersonnet.ogg"
    },
    {
      title: "Tempered Song",
      mp3: "http://www.jplayer.org/audio/mp3/Miaow-01-Tempered-song.mp3",
      oga: "http://www.jplayer.org/audio/ogg/Miaow-01-Tempered-song.ogg"
    },
    {
      title: "Hidden",
      mp3: "http://www.jplayer.org/audio/mp3/Miaow-02-Hidden.mp3",
      oga: "http://www.jplayer.org/audio/ogg/Miaow-02-Hidden.ogg"
    },
    {
      title: "Lentement",

      mp3: "http://www.jplayer.org/audio/mp3/Miaow-03-Lentement.mp3",
      oga: "http://www.jplayer.org/audio/ogg/Miaow-03-Lentement.ogg"
    },
    {
      title: "Lismore",
      mp3: "http://www.jplayer.org/audio/mp3/Miaow-04-Lismore.mp3",
      oga: "http://www.jplayer.org/audio/ogg/Miaow-04-Lismore.ogg"
    },
    {
      title: "The Separation",
      mp3: "http://www.jplayer.org/audio/mp3/Miaow-05-The-separation.mp3",
      oga: "http://www.jplayer.org/audio/ogg/Miaow-05-The-separation.ogg"
    },
    {
      title: "Beside Me",
      mp3: "http://www.jplayer.org/audio/mp3/Miaow-06-Beside-me.mp3",
      oga: "http://www.jplayer.org/audio/ogg/Miaow-06-Beside-me.ogg"
    },
    {
      title: "Bubble",

      mp3: "http://www.jplayer.org/audio/mp3/Miaow-07-Bubble.mp3",
      oga: "http://www.jplayer.org/audio/ogg/Miaow-07-Bubble.ogg"
    },
    {
      title: "Stirring of a Fool",
      mp3: "http://www.jplayer.org/audio/mp3/Miaow-08-Stirring-of-a-fool.mp3",
      oga: "http://www.jplayer.org/audio/ogg/Miaow-08-Stirring-of-a-fool.ogg"
    },
    {
      title: "Partir",

      mp3: "http://www.jplayer.org/audio/mp3/Miaow-09-Partir.mp3",
      oga: "http://www.jplayer.org/audio/ogg/Miaow-09-Partir.ogg"
    },
    {
      title: "Thin Ice",
      mp3: "http://www.jplayer.org/audio/mp3/Miaow-10-Thin-ice.mp3",
      oga: "http://www.jplayer.org/audio/ogg/Miaow-10-Thin-ice.ogg"
    }
  ],
  {
    swfPath: "src/swf/",
    solution: "html, flash",
    supplied: "mp3",
    preload: "auto",
    wmode: "window",
    useStateClassSkin: true,
    autoBlur: false,
    smoothPlayBar: true,
    keyEnabled: true,
    stop: function(e) {
      $(".toggle-play").removeClass("active");
      $(".waves").fadeOut();
    },
    pause: function(e) {
      $(".toggle-play").removeClass("active");
      $(".waves").fadeOut();
    },
    play: function(e) {
      $(".toggle-play").addClass("active");
      $(".waves").fadeIn();
    },
    ready: function(e) {}
  }
);
$(".toggle-list").bind("click", function() {
  if (!$("body").hasClass("active")) {
    $("body").addClass("active");
  } else {
    $("body").removeClass("active");
  }
});
$(window).on("load", function() {
  $("#jquery_jplayer_1").jPlayer("play");
});

$(".toggle-play").on("click", function() {
  if (!$(".jp-audio").hasClass("jp-state-playing")) {
    $("#jquery_jplayer_1").jPlayer("play");
  } else {
    $("#jquery_jplayer_1").jPlayer("stop");
  }
});
