//selectors
const playerContainerLeft = document.getElementById('contentLeft')
const playerContainerMid = document.getElementById('contentMid')
const playerContainerRight = document.getElementById('contentRight')

const url = 'https://www.balldontlie.io/api/v1/players' //this will get all players

// fetch(url).then(function(response){ //accurately lets know if theres an error in console
//     console.log('sucess!', response)
// }).catch(function(err){
//     console.warn('something went wrong', err)
// })
function fetchData() {
fetch(url).then(function (response){
    console.log("sucessfully called the api", response)
    return response.json()
}).then(function (data) { //returns our data
    console.log(data) //array of 25 players in the console
}).catch(function(err){
    console.warn("something is amuck", err)
})
}
fetchData() //this function call gets the api data


//i think this is what i need
//function has to happen
//let p = document.createElement('p')
//p.classList.add('p') this is the name of the stylign inside the quotes
//p.innerText = the response i think
//if we pass in a numer at the end of players in the url, we get a specific players
//information