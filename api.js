//const url = 'https://pokeapi.co/api/v2/pokemon/${pokemonName} '
 
//const pokemonName = document.getElementById('pokemonName').value.tolowerCase()
//displayData()

async function displayData(){
    try{
        const pokemonName = document.getElementById('pokemonName').value.toLowerCase();

        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)

        if(!response.ok){
            throw new Error("sorry! there has been an error")
         }
         const data = await response.json()
         //console.log(data.sprites)
         const pokemonSprite = data.sprites.front_default;
         const imgElement = document.getElementById('pokemonSprite')
         imgElement.src = pokemonSprite;
         imgElement.style.display = "block";


    }
    catch(error){
        console.error(error)
    }
    
    }

    const btn = document.getElementById('btn')
    btn.addEventListener('click',() =>{
        displayData()    
    } )
 
    /*document.addEventListener("DOMContentLoaded", () => {
        const btn = document.getElementById('btn');
        if(btn){
            btn.addEventListener("click", displayData())
        }
    })*/



/*fetch(url)
 .then(response => {

    if(!response.ok){
        throw new  Error ('sorry could not access it')
    }
    return response.json()
 })
 .then (data => {
    console.log(data.weight)
 })
 .catch(error => {
    console.error('Error', error)
 })*/ 