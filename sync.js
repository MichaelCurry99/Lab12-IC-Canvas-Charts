
console.log('Up and running');




let maxClicks = 0; // 5 rounds of picking words

let allClicks = []; // I need to put all of my clicks in an array for my chart data

let cardNames = [];



// references to ALL my card comtainers in HTML
let cardOneContainer = document.getElementById('card-one');
let cardTwoContainer = document.getElementById('card-two');
let cardThreeContainer = document.getElementById('card-three');

let resultsButton = document.getElementById('show-results'); // for my show results button :)

function makeRandom(){
  return Math.floor(Math.random()* cardNames.length)// return a random whole number between 0 and the length of the cardNames array
}
// return a number
// console.log(makeRandom())



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
     console.log(`Card one was clicked ${cardOne.timesClicked} times!`);
    maxClicks++
  }
  else if(card.name === 'Card two'){
    console.log(`Card two was clicked ${cardTwo.timesClicked} times!`);
    cardTwo.timesClicked++
    maxClicks++
  }else if(card.name === 'Card three'){
    console.log(`Card three was clicked ${cardThree.timesClicked} times`);
    cardThree.timesClicked++
    maxClicks++

  }else{
    console.log('No card has been clicked...');
  }}else{
    alert('Clicks Exeeded!!');
   
    allClicks.push(cardOne.timesClicked, cardTwo.timesClicked, cardThree.timesClicked);
    cardNames.push(cardOne.name,cardTwo.name,cardThree.name);

    console.log(allClicks) // all cards times clicked is now in my array :)
    

  console.log(allClicks)
  
  
 
  let randomNumberOne = makeRandom();
  let randomNumberTwo = makeRandom();
  let randomNumberThree = makeRandomm();

  while(randomNumberOne === randomNumberTwo ||randomNumberOne === randomNumberThree || randomNumberTwo === randomNumberThree){

       if(randomNumberOne === randomNumberThree){
        randomNumberOne = makeRandom()
       }

  randomNumberTwo = makeRandom()
  }

  // console.log('r1:',randomNumberOne, 'r2' ,randomNumberTwo, 'r3', randomNumberThree)
  console.log(randomNumberOne)

for(let i = 0;i< cardNames.length;i++){
    let rando = makeRandom();
    let cardName = cardNames[i]
    
    if(cardName[rando]===cardName)(
        cardName = makeRandom()
    
    )

    console.log(cardName)

}

// cardOneContainer
// cardTwoContainer
// cardThreeContainer




  getResults()
  }
cardOneContainer.addEventListener('click', function(){timesClickedHandler(cardOne)});
cardTwoContainer.addEventListener('click', function(){timesClickedHandler(cardTwo)});
cardThreeContainer.addEventListener('click', function(){timesClickedHandler(cardThree)});




function getResults(){
  


  // user clicks button and something happens!
resultsButton.addEventListener('click', function(){

  alert('Great Work!');
  // pull in my canvas
  let canvas = getElementById('canvas');

  const ctx = canvas.getContext('2d');

  const myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: cardNames,
        datasets: [{
            label: '# of Votes',
            data: allClicks,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});


  
})}}












