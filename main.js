var SpeechRecognition = window.webkitSpeechRecognition;
var Recognition = new SpeechRecognition();

function start()
{
       document.getElementById("textbox").innerHTML = "";
       Recognition.start();
}
  Recognition.onresult = function(event)
  {
     console.log(event);
     var content = event.result[0][0].transcript;
     document.getElementById("textbox").innerHTML = content;
     console.log(content);
     if (content == 'take my selfie')
     {
       console.log('taking selfie');
     }
  }
  function speak()
  {
    var synth = window.speechSynthesis;
    speak_data = "taking your selfie in 5s";
    var utterthis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterthis);
    webcam.attach(camera);   
    setTimeout(function(){
      take_snapshot();
      save();
    },5000);
  }
  camera = document.getElementById("camera");
  webcam.set({
      width: 360,
      height: 250,
      image_format: "jpeg",
      jpeg_quality: 90,
  });