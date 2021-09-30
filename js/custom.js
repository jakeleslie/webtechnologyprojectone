const players = 'https://www.balldontlie.io/api/v1/season_averages?season=2018&player_ids[]=237' //this will get all players
const teamStats = 'https://www.balldontlie.io/api/v1/teams'
const seasonAverages = 'https://www.balldontlie.io/api/v1/players'

var ps = fetch('https://www.balldontlie.io/api/v1/season_averages?season=2018&player_ids[]=237')
var ts = fetch('https://www.balldontlie.io/api/v1/teams')
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
                return `<h5>Lebron James 2018 Averages</h5>
                <p>Average points per game ${user.pts}</p>`
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
            console.log(data.data)
            const html = data.data
            .map(user => {
                return `<h5>Lakers averages 2018</h5>
                <p>Team: ${user.city}</p>`
            })
            .join("") //makes it a bunch of paragraph tags instead of array
            
            console.log(html)
            document.querySelector('#contentMid').innerHTML = html
        })
        .catch(error => {
            console.log(error) //alert for error 
            alert("There was an error requesting data.\n" + error);
        })
    
    //can do event listeneter for conetent loaded to print out new stuff
    //On
    
   
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
