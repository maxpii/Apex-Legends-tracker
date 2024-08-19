let pokemonData = [];
let pokemonNames = [];
let bool = true;
async function getData(){
    try{
        let pokemonName = document.getElementById("name").value;
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
        
        if(!response.ok){
            throw new Error("Could not fetch resource");
        }
        pokemonNames.push(pokemonName);

        const data = await response.json();
        console.log(data);
        //console.log(data["abilities"])
        const numAblities = data["abilities"].length;
        const exp = data["base_experience"];
        const height = data["height"];
        const numMoves = data["moves"].length.toString();
        const weight = data["weight"];
        const species = data["species"]["name"];
        const baseHealth = data["stats"][0]["base_stat"];
        const baseAttack = data["stats"][1]["base_stat"];
        const baseDefense = data["stats"][2]["base_stat"];
        const baseSpeed = data["stats"][5]["base_stat"];
        console.log("speed" + baseSpeed);
        
        let allData = {name:pokemonName,exp:exp,height:height,numMoves:numMoves,weight:weight,
            species:species,baseHealth:baseHealth, baseAttack:baseAttack,
        baseDefense:baseDefense,baseSpeed:baseSpeed}


        console.log(allData.exp);
        console.log(allData.height);
        console.log(allData.numMoves);
        console.log(allData.weigth);
        console.log(allData.species);
        console.log(allData.baseHealth);
        console.log(allData.baseAttack);
        console.log(allData.baseDefense);
        console.log(allData.baseSpeed);

        pokemonData.push(allData);
        addRow(allData);

    }
    catch(error){
        console.error(error);
    }
}

function addRow(object) {
    // Get a reference to the table
    let tableRef = document.getElementById("table");
    
    // Insert a row at the end of the table
    let newRow = tableRef.insertRow(-1);
    if (bool){
    newRow.classList.add("bg-gray-100");
    }
    for (const [key, value] of Object.entries(object)) {
        let newCell = newRow.insertCell(-1);
        let newText = document.createTextNode(value);
        //newText.classList.add("p-3 text-sm text-gray-700")
        newCell.appendChild(newText);
      }

      const cells = tableRef.querySelectorAll("td");
      


// Add a class to each cell
    cells.forEach(cell => {
         cell.classList.add("p-3");
         cell.classList.add("text-lg");
         cell.classList.add("text-center");
         cell.classList.add("border");
         cell.classList.add("border-gray-600");
        //  if (bool) {
        //     cell.classList.add("bg-gray-500");
        //  }
         //cell.classList.add("text-gray-700");
    });
    bool = !bool;

    /*let newCell = newRow.insertCell(-1);
  
    // Append a text node to the cell
    let newText = document.createTextNode(text);
    newCell.appendChild(newText);
    */


}


