/*
Project: Create a NFT Collection
Submitted by: Maria Evangelicalyn D. Ong

Assessment Requirements
1. Create a variable that can hold a number of NFT's. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFT's you have created
*/
console.log("\n==================================================");
console.log("\t\t\t\t\t Welcome to Pokédex !!! :) \n \t\t\t\t\t  (Pokémon Encyclopedia)");
console.log("==================================================");

// create a variable to hold your NFT's
const NFTs = []

// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT (_name, _specieType, _color, _height, _weight, _abilities, _hp, _attack, _defense, _speed) {
    const NFT = {
        "name": _name,
        "specieType": _specieType,
        "color": _color,
        "height": _height,
        "weight": _weight,
        "abilities": _abilities,
        "hp": _hp,
        "attack": _attack,
        "defense": _defense,
        "speed": _speed
    }
    NFTs.push(NFT);
}

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs () {
    for(let i = 0; i < NFTs.length; i++) {
        console.log("\nPokémon ID No. \t" + (i +1));
        console.log("Minted Pokémon: " +  NFTs[i].name);
        console.log("Specie Type: \t\t" + NFTs[i].specieType) + " Pokémon";
        console.log("Pokémon Color: \t" + NFTs[i].color);
        console.log("\nAttributes: \n");
        console.log("\t\tHeight: \t\t" +NFTs[i].height + " meters");
        console.log("\t\tWeight: \t\t" +NFTs[i].weight + " kilograms");
        console.log("\t\tAbilities: \t" +NFTs[i].abilities);
        console.log("\nStats: \n");
        console.log("\t\tHP: \t\t\t" +NFTs[i].hp);
        console.log("\t\tAttack: \t\t" +NFTs[i].attack);
        console.log("\t\tDefense: \t\t" +NFTs[i].defense);
        console.log("\t\tSpeed: \t\t\t" +NFTs[i].speed);
        console.log("___________________________________________________");
    }
}

// print the total number of NFTs we have minted to the console
function getTotalSupply() {
    console.log("\nNumber of NFTs Created: " + NFTs.length);
}

// call your functions below this line
mintNFT("Pikachu","Electric", "Yellow", "0.4", "6", "Static, Lightning Rod (Hidden)", "35", "55", "40", "90");
mintNFT("Charizard","Fire/Flying", "Orange", "1.7", "90.5", "Blaze, Solar Power (Hidden)", "78", "84", "78", "100");
mintNFT("Bulbasaur","Grass/Poison", "Green", "0.7", "6.9", "Overgrow, Chlorophyll (Hidden)", "45", "49", "49", "45");
mintNFT("Gyarados","Water/Flying", "Blue", "6.5", "235", "Intimidate, Moxie (Hidden)", "95", "125", "79", "81");
mintNFT("Jigglypuff","Normal/Fairy", "Pink", "0.5", "5.5", "Cute Charm, Friend Guard (Hidden)", "115", "45", "20", "20");
mintNFT("Snorlax","Normal", "Blue", "2.1", "460", "Immunity, Thick Fat (Hidden)", "160", "110", "65", "30");
mintNFT("Vaporeon","Water", "Blue", "0.8", "29", "Water Absorb, Hydration (Hidden)", "130", "65", "60", "65");
mintNFT("Alakazam","Psychic", "Yellow", "1.5", "48", "Synchronize, Inner Focus (Hidden)", "55", "50", "45", "120");
mintNFT("Machamp","Fighting", "Gray", "1.6", "130", "Guts, No Guard (Hidden)", "90", "130", "80", "55");
mintNFT("Gengar","Ghost/Poison", "Purple", "1.5", "40.5", "Cursed Body, Levitate (Hidden)", "60", "65", "60", "110");

listNFTs();
getTotalSupply();
