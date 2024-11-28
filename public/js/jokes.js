const slider = document.getElementById("slider")
const jokeCount= document.getElementById("jokeCount")
const jokesArray= [
      "Why don't skeletons fight each other? They don't have the guts.",
      "I'm reading a book on anti-gravity. It's impossible to put down!",
      "Why did the scarecrow win an award? Because he was outstanding in his field!",
      "What do you call fake spaghetti? An impasta!",
      "Why don’t scientists trust atoms? Because they make up everything!",
      "Why did the math book look sad? Because it had too many problems.",
      "I told my wife she was drawing her eyebrows too high. She looked surprised.",
      "Want to hear a joke about construction? I'm still working on it.",
      "Why was the computer cold? It left its Windows open!",
      "What do you call cheese that isn't yours? Nacho cheese."
];
// first generate card function
// when generate btn is clicked its sees tha no of cards and loop  throught the array of cards
//if  no of joke is 2 it generate 2 cards
// display the cards


// update Number of jokes
slider.addEventListener("click",()=>{
  jokeCount.innerText= slider.value;
  // document.getElementById("joke-para").innerText=jokesArray[parseInt(slider.value)]
  generateCards(parseInt(slider.value))
})

function generateCards(no){
  let cards
  for(let i=0;i<no;i++){
    const randomJoke = Math.floor(Math.random()* jokesArray.length)
    const cardNo= i+1
    cards+=`
    <div class="card-container">
    <div class="joke-card">
            <div class="numbers"><span class="number">${"0"+cardNo}</span></div>
            <div class="emonjis"> <span class="emonji">😜</span></div>
    
            <div class="card-content">
              <p id="joke-para">
                ${jokesArray[randomJoke]}
              </p>
            </div>
            <div class= "card-footer">
              <div class="img">
                <img src="https://media.giphy.com/media/f6gBO06r8PTjyctCvm/giphy.gif?cid=ecf05e47dtnsg24bl6ns3vzydc7mk2b3s1v9fxkmmh4g8nm5&ep=v1_gifs_search&rid=giphy.gif&ct=g"></img>
              </div>
            <span class="cancel">cancel</span>
            </div>
          </div>
          </div>
    
    `
    
    document.getElementById('jokesContainer').innerHTML=cards
  }
}