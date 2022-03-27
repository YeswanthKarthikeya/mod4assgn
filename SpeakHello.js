
(function (window){
  var helloSpeaker={};
  //var name = ["Yaakov", "Paul", "Frank", "Larry", "Paula", "Laura"];
  speakWord="hello";
  helloSpeaker.speak = function(name){
    console.log(speakWord+ " "+ name)
  }
  window.helloSpeaker=helloSpeaker;
})(window);

