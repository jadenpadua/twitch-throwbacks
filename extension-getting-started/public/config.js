
// Use verbose logging during development.  Set this to false for production.
const verboseLogging = true;
const verboseLog = verboseLogging ? console.log.bind(console) : () => { };

let token, userId;

const twitch = window.Twitch.ext;

twitch.onContext((context) => {
  twitch.rig.log(context);
});

twitch.onAuthorized((auth) => {
  token = auth.token;
  userId = auth.userId;
});

  
function myFunction() {
  var myVideo = document.getElementById("myVid");

     if (myVideo.style.display === 'none') {
       myVideo.style.display = "block";
       myVideo.play();
    }
     else {
      myVideo.style.display = "none";
      myVideo.pause();
    } 
  }
  
  function myFunction2() {
  var myVideo = document.getElementById("myVid");
       myVideo.pause();
  }
  
  
  function myFunction3() {
  var myVideo = document.getElementById("myVid");
       myVideo.play();
  }

  
function startVideo() {
  var myVideo = document.getElementById("myVid");
  var startButton = document.getElementById("startButton");
  myVideo.style.display = "block";
  startButton.style.display = "none";
  myVideo.play();
}

var video_index = 0;
function onEnd() {
  var video_list = ["video/vid1.mp4","video/vid2.mp4"];

  video_player = document.getElementById("myVid");
  video_player.setAttribute("src", video_list[video_index]);
  if (video_index < 2) {
    video_player.play();
  }
  twitch.rig.log(video_index);
 video_index++;
 twitch.rig.log(video_index);
}

function setScene() {
  circle = document.getElementById("dot");
  throwback = document.getElementById("throwback");
  circle.style.display = "block";
  throwback.style.display = "block";
}
  
  // // Verify all requests.
  // const payload = verifyAndDecode(req.headers.authorization);
  // // Get the color for the channel from the payload and return it.
  // const { toggle } = payload;

  // if {toggle} {
    
  // }
  // const currentColor = color(channelColors[channelId] || initialColor).hex();
  // verboseLog(STRINGS.sendColor, currentColor, opaqueUserId);
  // return currentColor;
  

