const players = 'https://www.balldontlie.io/api/v1/season_averages?season=2018&player_ids[]=1&player_ids[]=2' //this will get all players
const teamStats = 'https://www.balldontlie.io/api/v1/teams'
const seasonAverages = 'https://www.balldontlie.io/api/v1/season_averages'

function fetchLeftData() {
    fetch(players)
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
                return `<p>Assists: ${user.ast}</p>`
            })
            .join("") //makes it a bunch of paragraph tags instead of array
            
            console.log(html)
            document.querySelector('#contentLeft').innerHTML = html
        })
        .catch(error => {
            console.log(error) //alert for error 
            alert("There was an error requesting data.\n" + error);
            
        })
}

function fetchMiddleData() {
    fetch(teamStats)
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
                return `<p>Team: ${user.city}</p>`
            })
            .join("") //makes it a bunch of paragraph tags instead of array
            
            console.log(html)
            document.querySelector('#contentMid').innerHTML = html
        })
        .catch(error => {
            console.log(error) //alert for error 
            alert("There was an error requesting data.\n" + error);
        })
}

function fetchRightData() {
    fetch(seasonAverages)
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
                return `<p>Games played: ${user.season}</p>`
            })
            .join("") //makes it a bunch of paragraph tags instead of array
            
            console.log(html)
            document.querySelector('#contentRight').innerHTML = html
        })
        .catch(error => {
            console.log(error) //alert for error 
            alert("There was an error requesting data.\n" + error);
        })
}
window.addEventListener('load', (event) => { //new calls on each load 
fetchLeftData()
fetchMiddleData()
fetchRightData() 
}) //Everytime page loads api data is loaded from api 
