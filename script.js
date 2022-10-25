let pokemonName = document.querySelector("#pokemonName");
let pokeImg = document.querySelector(".pokeImg");
let search = document.querySelector("#search");
let pokeId = document.querySelector(".pokeId");
let hp = document.querySelector(".hp");
let attack = document.querySelector(".attack");
let defense = document.querySelector(".defense");
let speed = document.querySelector(".speed");

const fetchPokemon = async (pokemon) => {
  const APIResponse = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${pokemon}`
  );
  const data = await APIResponse.json();
  return data;
};

search.addEventListener(
  "click",
  (handlePokemon = async () => {
    let pokemon = pokemonName.value;

    const data = await fetchPokemon(pokemon);

    pokeId.innerHTML = data["name"];
    hp.innerHTML = data["stats"]["0"]["base_stat"];
    attack.innerHTML = data["stats"]["1"]["base_stat"];
    defense.innerHTML = data["stats"]["2"]["base_stat"];
    speed.innerHTML = data["stats"]["5"]["base_stat"];
    pokeImg.src =
      data["sprites"]["versions"]["generation-v"]["black-white"]["animated"][
        "front_default"
      ];
  })
);
