
async function getData(){
    try{
        let pokemonName = document.getElementById("name").value;
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);

        if(!response.ok){
            throw new Error("Could not fetch resource");
        }

        const data = await response.json();
        //console.log(data);
        //console.log(data["abilities"])
        const numAblities = data["abilities"].length;
        const exp = data["base_experience"];
        const height = data["height"];
        const numMoves = data["moves"].length;
        const weight = data["weight"];
        const species = data["species"]["name"];
        const baseHealth = data["stats"][0]["base_stat"];
        const baseAttack = data["stats"][1]["base_stat"];
        const baseDefense = data["stats"][2]["base_stat"];
        const baseSpeed = data["stats"][5]["base_stat"];

        console.log(exp);
        console.log(height);
        console.log(numMoves);
        console.log(weight);
        console.log(species);
        console.log(baseHealth);
        console.log(baseAttack);
        console.log(baseDefense);
        console.log(baseSpeed);
    }
    catch(error){
        console.error(error);
    }
}



let pokemonNames = [];