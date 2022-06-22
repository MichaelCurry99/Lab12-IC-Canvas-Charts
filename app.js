
console.log('Up and running');




let maxClicks = 0; // 5 rounds of picking words

let allClicks = []; // I need to put all of my clicks in an array for my chart data



// references to ALL my card comtainers in HTML
let cardOneContainer = document.getElementById('card-one');
let cardTwoContainer = document.getElementById('card-two');
let cardThreeContainer = document.getElementById('card-three');

let resultsButton = document.getElementById('show-results'); // for my show results button :)

let canvas = document.getElementById('canvas');


// I want to make objects for my cards to have thier own timesClicked variables. You will need to use a constructor here :0
let cardOne = {
  name: 'Card one',
  timesClicked: 0
}

let cardTwo = {
  name: 'Card two',
  timesClicked: 0,
}

let cardThree = {
  name: 'Card three',
  timesClicked: 0
}


function timesClickedHandler(card){
  // check what card it is

    // after card is checked, add one to the timesClicked property!
    if(maxClicks < 10){
  if(card.name === 'Card one'){
    cardOne.timesClicked++
    maxClicks++
  }
  else if(card.name === 'Card two'){
    cardTwo.timesClicked++
    maxClicks++
  }else if(card.name === 'Card three'){
    cardThree.timesClicked++
    maxClicks++

  }else{
    console.log('No card has been clicked...');
  }}else{
    alert('Clicks Exeeded!!');
    // console.log(`Card one was clicked ${cardOne.timesClicked} times!`);
    // console.log(`Card two was clicked ${cardTwo.timesClicked} times!`);
    // console.log(`Card three was clicked ${cardThree.timesClicked} times`);
    allClicks.push(cardOne.timesClicked, cardTwo.timesClicked, cardThree.timesClicked);
    console.log(allClicks) // all cards times clicked is now in my array :)
    getResults()

  
  }
 
}



cardOneContainer.addEventListener('click', function(){timesClickedHandler(cardOne)});
cardTwoContainer.addEventListener('click', function(){timesClickedHandler(cardTwo)});
cardThreeContainer.addEventListener('click', function(){timesClickedHandler(cardThree)});




function getResults(){
  


  // user clicks button and something happens!
resultsButton.addEventListener('click', function(){

  alert('Great Work!');
})


}













