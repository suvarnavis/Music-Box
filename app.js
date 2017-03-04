
var url= 'http://bcw.blob.core.windows.net/public/img/sounds/scale-00'

var boombox = document.getElementById('boombox')

function playTune(num){
  
  var tuneUrl = url 
  if (num < 10)
{
  tuneurl+='0'
   }
   tuneurl+=num+'.mp3'
  
  
  console.log(tuneUrl)
  
  boombox.src = tuneUrl
  boombox.play()
  
}
