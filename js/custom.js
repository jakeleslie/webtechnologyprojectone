var ps = fetch('https://www.balldontlie.io/api/v1/season_averages?season=2020&player_ids[]=237')
let randomGame = Math.random() * (5000 - 1) + 1
let t = randomGame.toString()
let ts = fetch('https://www.balldontlie.io/api/v1/games/' + t)

let s = randomPlayer = Math.random() * (25 - 1) + 1
let playerS = s.toString()
var sa = fetch('https://www.balldontlie.io/api/v1/players/' + playerS) //random player spotlight 
document.addEventListener("DOMContentLoaded", function(){
    ps
        .then(response => {
            if (!response.ok){
               throw Error("ERROR")
            }
            return response.json()
        })
        .then(data => {
            console.log(data.data) //have to change this so that i can just get a statistic 
            const html = data.data
            
            .map(user => { //gets a map of all of the queried players first names. 
                return `<h3 class="text-center" id="innerdivheader">Lebron James 2020 Averages</h3>
                <p id="leftStyle">Average points per game: ${user.pts}</p>
                <p id="leftStyle">Average assists per game: ${user.ast}</p>
                <p id="leftStyle">Total games played: ${user.games_played}</p>
                <p id="leftStyle">Per-minute point rating in 36 minutes: ${36 * user.pts / 24}</p>`
                //wanted to be able to implement it by diving by user.min and having only two decminal places
            })
            .join("") //makes it a bunch of paragraph tags instead of array
            
            console.log(html)
            document.querySelector('#contentLeft').innerHTML = html
        })
        .catch(error => {
            console.log(error) //alert for error 
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
        })
        .then(data => {
            console.log(data)
            const html = data
            document.querySelector('#contentMid').innerHTML = `
            <h3 class="text-center">Game Stats</h3>
            <p id="midStyle"> Home team: ${data.home_team.abbreviation} | Away team: ${data.visitor_team.abbreviation}
            <p id="midStyle">${data.home_team.abbreviation} score: ${data.home_team_score}</p>
            <p id="midStyle">${data.visitor_team.abbreviation} score: ${data.visitor_team_score}</p>
            <p id="midStyle"> Point difference for home team: ${data.home_team_score - data.visitor_team_score}</p>
            <p id="midStyle"> ${(data.home_team_score > data.visitor_team_score) ? data.home_team.abbreviation : data.visitor_team.abbreviation} are the winners!</p>`
            
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
            
        })
        .catch(error => {
            console.log(error) //alert for error 
            alert("There was an error requesting data.\n" + error);
        })
})
// fetch middle data waits for the dom content to be load
// can add this to all three and have that done
// but then have to figure out a day 
// fetchRightData() 
