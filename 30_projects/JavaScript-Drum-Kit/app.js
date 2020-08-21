
function playSound(event){

    // create an audio variable and selects the corresponding data-key audio src
    let audio = document.querySelector(`audio[data-key="${event.keyCode}"]`)

    //select the .key class for corresponding data-key
    let key = document.querySelector(`.key[data-key="${event.keyCode}"]`)

    //if no corresponding audio for key pressed it just stops the function from running
    if(!audio) return;

    //constantly rewind back to start so buttons can be constantly repeated without having to wait for audio to finsih
    audio.currentTime = 0

    //play the audio if there is one
    audio.play();

    key.classList.add('playing');
  
    };
  
    function removeTransition (event) {
      
      //if its not a transform it can be skipped
      if (event.propertyName !=='transform') return;
      
      //removes the class of playing once it has played
      this.classList.remove('playing');
    };
    
    let keys = document.querySelectorAll('.key');
    keys.forEach(key => key.addEventListener('transitionend',removeTransition));
  
  //when key is pressed it runs playSound function
  window.addEventListener('keydown', playSound);
  
