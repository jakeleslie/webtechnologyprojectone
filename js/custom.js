var ps = fetch('https://www.balldontlie.io/api/v1/season_averages?season=2020&player_ids[]=237')//This gets an array of data for lebron james, he is id 237
//We fetch this way so we can have a promise, this is so we can satisfy the requirements of having domcontentloaded first
let randomGame = Math.random() * (5000 - 1) + 1 //creating a random variable which goes through the first 5000 games so we have random game endpoint parameter.
let t = randomGame.toString() //making it a string so we can concatenate it to our url.
let ts = fetch('https://www.balldontlie.io/api/v1/games/' + t) //This will retrieve a random games data

let s = randomPlayer = Math.random() * (25 - 1) + 1 //Creating another random variable, this shows us 25 players, but we can do more if we want
let playerS = s.toString()
var sa = fetch('https://www.balldontlie.io/api/v1/players/' + playerS) //The same as above, a random players information.
document.addEventListener("DOMContentLoaded", function(){ //We do it this way so when the doms content is loaded we run our fetch request. We do it like this so we have fresh data everytime
    //and so that we have the page render before api response 
    ps
        .then(response => { //With our response, if it is not okay we throw an error but if its fine we return our json response
            if (!response.ok){
               throw Error("ERROR")
            }
            return response.json()
        })
        .then(data => { //Then with our data we log it so we can look at it, and set html to our data
            console.log(data.data)  
            const html = data.data
            
            .map(user => { //We create a map so everything is easier to work with
                return `<h3 class="text-center" id="innerdivheader">Lebron James 2020 Averages</h3>
                <p id="leftStyle">Average points per game: ${user.pts}</p>
                <p id="leftStyle">Average assists per game: ${user.ast}</p>
                <p id="leftStyle">Total games played: ${user.games_played}</p>
                <p id="leftStyle">Per-minute point rating in 36 minutes: ${36 * user.pts / 24}</p>` //Computing our data
                //Per the NBA to compute the per minute rating in 36 mins we take 36 * the user points and divide it by the average time played
            })
            .join("") //Joining with an empty string
            document.querySelector('#contentLeft').innerHTML = html //Setting our left divs innerHTML to html so the content we manipulated displays on screen
        })
        .catch(error => {
            console.log(error) //Catches our error. Prints it out for us in the console, and displays for user with an alert.
            alert("There was an error requesting data.\n" + error);
        })
})

document.addEventListener("DOMContentLoaded", function(){
   ts
        .then(response => {
            if (!response.ok){
               throw Error("ERROR")
            }
            return response.json()
        }) //Same as above
        .then(data => { //No map for this since we have a specific endpoint
            console.log(data)
            const html = data //This is also the same as above, we just skip the map portion
            document.querySelector('#contentMid').innerHTML = `
            <h3 class="text-center">Game Stats</h3>
            <p id="midStyle"> Home team: ${data.home_team.abbreviation} | Away team: ${data.visitor_team.abbreviation}
            <p id="midStyle">${data.home_team.abbreviation} score: ${data.home_team_score}</p>
            <p id="midStyle">${data.visitor_team.abbreviation} score: ${data.visitor_team_score}</p>
            <p id="midStyle"> Point difference for home team: ${data.home_team_score - data.visitor_team_score}</p> 
            <p id="midStyle"> ${(data.home_team_score > data.visitor_team_score) ? data.home_team.abbreviation : data.visitor_team.abbreviation} are the winners!</p>`
            //We compute the difference for the home team by subtracing two of the responses
            //We then have a ternary operator that displays the home team abbreviation or the visitors team abbr and tells us who wins based on the statement being true or not.
        })
        .catch(error => {
            console.log(error) //alert for error 
            alert("There was an error requesting data.\n" + error);
        })
})

document.addEventListener("DOMContentLoaded", function(){
    sa
        .then(response => {
            if (!response.ok){
               throw Error("ERROR")
            }
            return response.json()
        })
        .then(data => {
            console.log(data)
            const html = data
            document.querySelector('#contentRight').innerHTML = `
            <h3 class="text-center">Player Info</h3>
            <p id="leftStyle">Name: ${data.first_name + " " + data.last_name}</p>
            <p id="leftStyle">Position: ${data.position} 
            <p id="leftStyle">Team: ${data.team.city + " " + data.team.name} 
            <p id="leftStyle"> Conference: ${data.team.conference}</p>
            <p id="leftStyle"> ${(data.weight_pounds != null) ? 'Weight: ' + data.weight_pounds : 'Weight: Unavailable' }</p>`
            //Everything is the same as the previous comments, but instead for this we have a ternary operator
            //If their is a weight response, we display the weight and if there is not we show that it is unavailable.
        })
        .catch(error => {
            console.log(error) //alert for error 
            alert("There was an error requesting data.\n" + error);
        })
})

