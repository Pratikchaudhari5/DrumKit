

//detecting button press
var numberOfDrumButtons = document.querySelectorAll(".drum").length;

//loops : it's continue work for all 7 button
for(var i = 0; i<numberOfDrumButtons;i++){//target class
    document.querySelectorAll(".drum")[i].addEventListener("click",function () {
      
var buttonInnerHTML = this.innerHTML;

        makeSound(buttonInnerHTML);
        //press w by mouse it make sound 

        buttonAnimation(buttonInnerHTML);

    });
}


//detecting : keyboard pressed then it works
document.addEventListener("keydown",function (event) {
    makeSound(event.key);
    //press key also make sound w
    buttonAnimation(event.key);
});


function makeSound(key){
    switch (key) {
        case "w":
            var tom1 = new Audio('sounds/tom-1.mp3');
            tom1.play();
            break;
    
            case "a":
            var tom2 = new Audio('sounds/tom-2.mp3');
            tom2.play();
            break;
    
            case "s":
            var tom3 = new Audio('sounds/tom-3.mp3');
            tom3.play();
            break;
    
            case "d":
            var tom4 = new Audio('sounds/tom-4.mp3');
            tom4.play();
            break;
    
            case "j":
            var snare = new Audio('sounds/snare.mp3');
              snare.play();
             break;
    
             case "k":
              var crash = new Audio('sounds/crash.mp3');
            crash.play();
            break;
    
            case "l":
             var kick = new Audio('sounds/kick-bass.mp3');
             kick.play();
              break;
            
              default:
             console.log(buttonInnerHTML);
    }
}


function buttonAnimation(currentKey){
    var activeButton = document.querySelector("."+currentKey);
    activeButton.classList.add("pressed");

    // after delay .1 sec get original buttons
    setTimeout(function() {
        activeButton.classList.remove("pressed");
    },100);
}

 //adding sound here
 var audio = new Audio('sounds/tom-1.mp3');
 audio.play();

//identity of button to trigger eventlistner
this.style.color = "white"
      

  // alert("I got clicked!");
        //what to do when click detected.

// //it find's 1st w drum button and add eventlistner to that button so 
// //when click is pressed it runs the code inside handleClick
// document.querySelectorAll("button").addEventListener("click",handleClick);
// //Their are two parameter in above line
// //1.click = event type for what to listen
// //2.handleClick = JS function called when click event detected

// //you want a button to trigger this function
// function handleClick() {
//     alert("I got clicked!");
// }








//Anonymous function
// document.querySelector("button").addEventListener("click",function handleClick() {
//     alert("I got clicked!");
//     //what to do when click detected.
// });
