// const players = 'https://www.balldontlie.io/api/v1/season_averages?season=2018&player_ids[]=237' //this will get all players
// const teamStats = 'https://www.balldontlie.io/api/v1/teams'
// const seasonAverages = 'https://www.balldontlie.io/api/v1/players'

var ps = fetch('https://www.balldontlie.io/api/v1/season_averages?season=2020&player_ids[]=237')
var ts = fetch('https://www.balldontlie.io/api/v1/games/1')
var sa = fetch('https://www.balldontlie.io/api/v1/players')
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
                <p id="leftStyle">Per-minute point rating in 36 minutes: ${36 * user.pts / 35.13}</p>`
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
            document.querySelector('#contentMid').innerHTML = `<h3>${data.date}<h3>
            <h3>${data.home_team_score}</h3>`
            
           
            
            // .map(user => {
            //     return `<h5>Lakers averages 2018</h5>
            //     <p>Team: ${user.abbreviation}</p>`
            // })
            // .join("") //makes it a bunch of paragraph tags instead of array
            
            // console.log(html)
            
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
            console.log(data.data)
            const html = data.data
            .map(user => {
                return `<p>fname: ${user.first_name}
                            lname: ${user.last_name}
                </p>`
            })
            .join("") //makes it a bunch of paragraph tags instead of array
            
            console.log(html)
            document.querySelector('#contentRight').innerHTML = html

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
