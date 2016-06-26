var pokemonList = [
{id: 1, name: "Bulbasaur", catchRate: 45, evolution: "Ivysaur", evoLevel: 16, evolved: 0, type: "grass", attack: 49, route: 100, health:100, levelType: "medium slow", experience: 50,  }, 
{id: 2, name: "Ivysaur", catchRate: 45, evolution: "Venusaur", evoLevel: 32, evolved: 0, type: "grass", attack: 62, route:null, health:100, levelType: "medium slow", experience: 50,  }, 
{id: 3, name: "Venusaur", catchRate: 45, evolution: null, evoLevel: null, evolved: 0, type: "grass", attack: 82, route:null, health:100, levelType: "medium slow", experience: 50  }, 
{id: 4, name: "Charmander", catchRate: 45, evolution: "Charmeleon", evoLevel: 16, evolved: 0, type: "fire", attack: 52, route:100, health:100, levelType: "medium slow", experience: 50  }, 
{id: 5, name: "Charmeleon", catchRate: 45, evolution: "Charizard", evoLevel: 32, evolved: 0, type: "fire", attack: 64, route:null, health:100, levelType: "medium slow", experience: 50  }, 
{id: 6, name: "Charizard", catchRate: 45, evolution: null, evoLevel: null, evolved: 0, type: "fire", attack: 84, route:null, health:100, levelType: "medium slow", experience: 50  }, 
{id: 7, name: "Squirtle", catchRate: 45, evolution: "Wartortle", evoLevel: 16, evolved: 0, type: "water", attack: 48, route:100, health:100, levelType: "medium slow", experience: 50  }, 
{id: 8, name: "Wartortle", catchRate: 45, evolution: "Blastoise", evoLevel: 32, evolved: 0, type: "water", attack: 63, route:null, health:100, levelType: "medium slow", experience: 50  }, 
{id: 9, name: "Blastoise", catchRate: 45, evolution: null, evoLevel: null, evolved: 0, type: "water", attack: 83, route:null, health:100, levelType: "medium slow", experience: 50  }, 
{id: 10, name: "Caterpie", catchRate: 255, evolution: "Metapod", evoLevel: 7, evolved: 0, type: "bug", attack: 30, route:2, health:100, levelType: "medium fast", experience: 50  }, 
{id: 11, name: "Metapod", catchRate: 120, evolution: "Butterfree", evoLevel: 10, evolved: 0, type: "bug", attack: 20, route:24, health:100, levelType: "medium fast", experience: 50  }, 
{id: 12, name: "Butterfree", catchRate: 45, evolution: null, evoLevel: null, evolved: 0, type: "bug", attack: 45, route:null, health:100, levelType: "medium fast", experience: 50  },
{id: 13, name: "Weedle", catchRate: 255, evolution: "Kakuna", evoLevel: 7, evolved: 0, type: "bug", attack: 35, route:2, health:100, levelType: "medium fast", experience: 50  },
{id: 14, name: "Kakuna", catchRate: 120, evolution: "Beedrill", evoLevel: 10, evolved: 0, type: "bug", attack: 25, route:24, health:100, levelType: "medium fast", experience: 50  },
{id: 15, name: "Beedrill", catchRate: 45, evolution: null, evoLevel: null, evolved: 0, type: "bug", attack: 80, route:null, health:100, levelType: "medium fast", experience: 50  },
{id: 16, name: "Pidgey", catchRate: 255, evolution: "Pidgeotto", evoLevel: 18, evolved: 0, type: "flying", attack: 45, route:1, health:100, levelType: "medium slow", experience: 50 },
{id: 17, name: "Pidgeotto", catchRate: 120, evolution: "Pidgeot", evoLevel: 36, evolved: 0, type: "flying", attack: 60, route:24, health:100, levelType: "medium slow", experience: 50  },
{id: 18, name: "Pidgeot", catchRate: 45, evolution: null, evoLevel: null, evolved: 0, type: "flying", attack: 80, route:null, health:100, levelType: "medium slow", experience: 50  },
{id: 19, name: "Rattata", catchRate: 255, evolution: "Raticate", evoLevel: 20, evolved: 0, type: "normal", attack: 56, route:1, health:100, levelType: "medium fast", experience: 50  },
{id: 20, name: "Raticate", catchRate: 127, evolution: null, evoLevel: null, evolved: 0, type: "normal", attack: 81, route:16, health:100, levelType: "medium fast", experience: 50  },
{id: 21, name: "Spearow", catchRate: 255, evolution: "Fearow", evoLevel: 20, evolved: 0, type: "flying", attack: 60, route:3, health:100, levelType: "medium fast", experience: 50  },
{id: 22, name: "Fearow", catchRate: 90, evolution: null, evoLevel: null, evolved: 0, type: "flying", attack: 90, route:9, health:100, levelType: "medium fast", experience: 50  },
{id: 23, name: "Ekans", catchRate: 255, evolution: "Arbok", evoLevel: 22, evolved: 0, type: "poison", attack: 60, route:4, health:100, levelType: "medium fast", experience: 50  },
{id: 24, name: "Arbok", catchRate: 90, evolution: null, evoLevel: null, evolved: 0, type: "poison", attack: 85, route:23, health:100, levelType: "medium fast", experience: 50  },
{id: 25, name: "Pikachu", catchRate: 190, evolution: "Raichu", evoLevel: "Thunder Stone", evolved: 0, type: "electric", attack: 55, route:25, health:100, levelType: "medium fast", experience: 50  },
{id: 26, name: "Raichu", catchRate: 75, evolution: null, evoLevel: null, evolved: 0, type: "electric", attack: 90, route:null, health:100, levelType: "medium fast", experience: 50  },
{id: 27, name: "Sandshrew", catchRate: 255, evolution: "Sandslash", evoLevel: 22, evolved: 0, type: "ground", attack: 75, route:3, health:100, levelType: "medium fast", experience: 50  },
{id: 28, name: "Sandslash", catchRate: 90, evolution: null, evoLevel: null, evolved: 0, type: "ground", attack: 100, route:23, health:100, levelType: "medium fast", experience: 50  },
{id: 29, name: "Nidoran(F)", catchRate: 235, evolution: "Nidorina", evoLevel: 16, evolved: 0, type: "poison", attack: 47, route:2, health:100, levelType: "medium slow", experience: 50  },
{id: 30, name: "Nidorina", catchRate: 120, evolution: "Nidoqueen", evoLevel: "Moon Stone", evolved: 0, type: "poison", attack: 62, route:9, health:100, levelType: "medium slow", experience: 50  },
{id: 31, name: "Nidoqueen", catchRate: 45, evolution: null, evoLevel: null, evolved: 0, type: "poison", attack: 82, route:null, health:100, levelType: "medium slow", experience: 50  },
{id: 32, name: "Nidoran(M)", catchRate: 235, evolution: "Nidorino", evoLevel: 16, evolved: 0, type: "poison", attack: 57, route:2, health:100, levelType: "medium slow", experience: 50  },
{id: 33, name: "Nidorino", catchRate: 120, evolution: "Nidoking", evoLevel: "Moon Stone", evolved: 0, type: "poison", attack: 72, route:9, health:100, levelType: "medium slow", experience: 50  },
{id: 34, name: "Nidoking", catchRate: 45, evolution: null, evoLevel: null, evolved: 0, type: "poison", attack: 92, route:null, health:100, levelType: "medium slow", experience: 50  },
{id: 35, name: "Clefairy", catchRate: 150, evolution: "Clefable", evoLevel: "Moon Stone", evolved: 0, type: "normal", attack: 45, route:25, health:100, levelType: "fast", experience: 50  },
{id: 36, name: "Clefable", catchRate: 25, evolution: null, evoLevel: null, evolved: 0, type: "normal", attack: 70, route:null, health:100, levelType: "fast", experience: 50  },
{id: 37, name: "Vulpix", catchRate: 190, evolution: "Ninetales", evoLevel: "Fire Stone", evolved: 0, type: "fire", attack: 41, route:7, health:100, levelType: "medium fast", experience: 50  },
{id: 38, name: "Ninetales", catchRate: 75, evolution: null, evoLevel: null, evolved: 0, type: "fire", attack: 76, route:null, health:100, levelType: "medium fast", experience: 50  },
{id: 39, name: "Jigglypuff", catchRate: 170, evolution: "Wigglytuff", evoLevel: "Moon Stone", evolved: 0, type: "normal", attack: 45, route:3, health:100, levelType: "fast", experience: 50  },
{id: 40, name: "Wigglytuff", catchRate: 50, evolution: null, evoLevel: null, evolved: 0, type: "normal", attack: 70, route:null, health:100, levelType: "fast", experience: 50  },
{id: 41, name: "Zubat", catchRate: 2550, evolution: "Golbat", evoLevel: 22, evolved: 0, type: "poison", attack: 45, route:26, health:100, levelType: "medium fast", experience: 50  },
{id: 42, name: "Golbat", catchRate: 90, evolution: null, evoLevel: null, evolved: 0, type: "poison", attack: 80, route:null, health:100, levelType: "medium fast", experience: 50  },
{id: 43, name: "Oddish", catchRate: 255, evolution: "Gloom", evoLevel: 21, evolved: 0, type: "grass", attack: 50, route:5, health:100, levelType: "medium slow", experience: 50  },
{id: 44, name: "Gloom", catchRate: 120, evolution: "Vileplume", evoLevel: "Leaf Stone", evolved: 0, type: "grass", attack: 65, route:12, health:100, levelType: "medium slow", experience: 50  },
{id: 45, name: "Vileplume", catchRate: 45, evolution: null, evoLevel: null, evolved: 0, type: "grass", attack: 80, route:null, health:100, levelType: "medium slow", experience: 50  },
{id: 46, name: "Paras", catchRate: 190, evolution: "Parasect", evoLevel: 24, evolved: 0, type: "grass", attack: 70, route:27, health:100, levelType: "medium fast", experience: 50  },
{id: 47, name: "Parasect", catchRate: 75, evolution: null, evoLevel: null, evolved: 0, type: "grass", attack: 95, route:null, health:100, levelType: "medium fast", experience: 50  },
{id: 48, name: "Venonat", catchRate: 190, evolution: "Venomoth", evoLevel: 31, evolved: 0, type: "grass", attack: 55, route:12, health:100, levelType: "medium fast", experience: 50  },
{id: 49, name: "Venomoth", catchRate: 75, evolution: null, evoLevel: null, evolved: 0, type: "grass", attack: 65, route:14, health:100, levelType: "medium fast", experience: 50  },
{id: 50, name: "Diglett", catchRate: 255, evolution: "Dugtrio", evoLevel: 26, evolved: 0, type: "ground", attack: 55, route:28, health:100, levelType: "medium fast", experience: 50  },
{id: 51, name: "Dugtrio", catchRate: 50, evolution: null, evoLevel: null, evolved: 0, type: "ground", attack: 80, route:null, health:100, levelType: "medium fast", experience: 50  },
{id: 52, name: "Meowth", catchRate: 255, evolution: "Persian", evoLevel: 28, evolved: 0, type: "normal", attack: 45, route:5, health:100, levelType: "medium fast", experience: 50  },
{id: 53, name: "Persian", catchRate: 90, evolution: null, evoLevel: null, evolved: 0, type: "normal", attack: 70, route:null, health:100, levelType: "medium fast", experience: 50  },
{id: 54, name: "Psyduck", catchRate: 190, evolution: "Golduck", evoLevel: 33, evolved: 0, type: "water", attack: 52, route:4, health:100, levelType: "medium fast", experience: 50  },
{id: 55, name: "Golduck", catchRate: 75, evolution: null, evoLevel: null, evolved: 0, type: "water", attack: 82, route:6, health:100, levelType: "medium fast", experience: 50  },
{id: 56, name: "Mankey", catchRate: 190, evolution: "Primeape", evoLevel: 28, evolved: 0, type: "fighting", attack: 80, route:3, health:100, levelType: "medium fast", experience: 50  },
{id: 57, name: "Primeape", catchRate: 75, evolution: null, evoLevel: null, evolved: 0, type: "fighting", attack: 105, route:23, health:100, levelType: "medium fast", experience: 50  },
{id: 58, name: "Growlithe", catchRate: 190, evolution: "Arcanine", evoLevel: "Fire Stone", evolved: 0, type: "fire", attack: 70, route:7, health:100, levelType: "slow", experience: 50  },
{id: 59, name: "Arcanine", catchRate: 75, evolution: null, evoLevel: null, evolved: 0, type: "fire", attack: 110, route:null, health:100, levelType: "slow", experience: 50  },
{id: 60, name: "Poliwag", catchRate: 255, evolution: "Poliwhirl", evoLevel: 25, evolved: 0, type: "water", attack: 50, route:4, health:100, levelType: "medium slow", experience: 50  },
{id: 61, name: "Poliwhirl", catchRate: 120, evolution: "Poliwrath", evoLevel: "Water Stone", evolved: 0, type: "water", attack: 65, route:10, health:100, levelType: "medium slow", experience: 50  },
{id: 62, name: "Poliwrath", catchRate: 45, evolution: null, evoLevel: null, evolved: 0, type: "water", attack: 85, route:null, health:100, levelType: "medium slow", experience: 50  },
{id: 63, name: "Abra", catchRate: 200, evolution: "Kadabra", evoLevel: 16, evolved: 0, type: "psychic", attack: 20, route:5, health:100, levelType: "medium slow", experience: 50  },
{id: 64, name: "Kadabra", catchRate: 100, evolution: "Alakazam", evoLevel: "Trade", evolved: 0, type: "psychic", attack: 35, route:8, health:100, levelType: "medium slow", experience: 50  },
{id: 65, name: "Alakazam", catchRate: 50, evolution: null, evoLevel: null, evolved: 0, type: "psychic", attack: 50, route:null, health:100, levelType: "medium slow", experience: 50  },
{id: 66, name: "Machop", catchRate: 180, evolution: "Machoke", evoLevel: 28, evolved: 0, type: "fighting", attack: 80, route:10, health:100, levelType: "medium slow", experience: 50  },
{id: 67, name: "Machoke", catchRate: 90, evolution: "Machamp", evoLevel: "Trade", evolved: 0, type: "fighting", attack: 100, route:null, health:100, levelType: "medium slow", experience: 50  },
{id: 68, name: "Machamp", catchRate: 45, evolution: null, evoLevel: null, evolved: 0, type: "fighting", attack: 130, route:null, health:100, levelType: "medium slow", experience: 50  },
{id: 69, name: "Bellsprout", catchRate: 255, evolution: "Weepinbell", evoLevel: 21, evolved: 0, type: "grass", attack: 75, route:5, health:100, levelType: "medium slow", experience: 50  },
{id: 70, name: "Weepinbell", catchRate: 120, evolution: "Victreebel", evoLevel: "Leaf Stone", evolved: 0, type: "grass", attack: 90, route:12, health:100, levelType: "medium slow", experience: 50  },
{id: 71, name: "Victreebel", catchRate: 45, evolution: null, evoLevel: null, evolved: 0, type: "grass", attack: 105, route:null, health:100, levelType: "medium slow", experience: 50  },
{id: 72, name: "Tentacool", catchRate: 190, evolution: "Tentacruel", evoLevel: 30, evolved: 0, type: "water", attack: 40, route:11, health:100, levelType: "slow", experience: 50  },
{id: 73, name: "Tentacruel", catchRate: 60, evolution: null, evoLevel: null, evolved: 0, type: "water", attack: 70, route:19, health:100, levelType: "slow", experience: 50  },
{id: 74, name: "Geodude", catchRate: 255, evolution: "Graveler", evoLevel: 25, evolved: 0, type: "rock", attack: 80, route:18, health:100, levelType: "medium slow", experience: 50  },
{id: 75, name: "Graveler", catchRate: 120, evolution: "Golem", evoLevel: "Trade", evolved: 0, type: "rock", attack: 95, route:null, health:100, levelType: "medium slow", experience: 50  },
{id: 76, name: "Golem", catchRate: 45, evolution: null, evoLevel: null, evolved: 0, type: "rock", attack: 110, route:null, health:100, levelType: "medium slow", experience: 50  },
{id: 77, name: "Ponyta", catchRate: 190, evolution: "Rapidash", evoLevel: 40, evolved: 0, type: "fire", attack: 85, route:17, health:100, levelType: "medium fast", experience: 50  },
{id: 78, name: "Rapidash", catchRate: 60, evolution: null, evoLevel: null, evolved: 0, type: "fire", attack: 100, route:null, health:100, levelType: "medium fast", experience: 50  },
{id: 79, name: "Slowpoke", catchRate: 190, evolution: "Slowbro", evoLevel: 37, evolved: 0, type: "water", attack: 65, route:10, health:100, levelType: "medium fast", experience: 50  },
{id: 80, name: "Slowbro", catchRate: 75, evolution: null, evoLevel: null, evolved: 0, type: "water", attack: 75, route:12, health:100, levelType: "medium fast", experience: 50  },
{id: 81, name: "Magnemite", catchRate: 190, evolution: "Magneton", evoLevel: 30, evolved: 0, type: "electric", attack: 35, route:10, health:100, levelType: "medium fast", experience: 50  },
{id: 82, name: "Magneton", catchRate: 60, evolution: null, evoLevel: null, evolved: 0, type: "electric", attack: 60, route:null, health:100, levelType: "medium fast", experience: 50  },
{id: 83, name: "Farfetch'd", catchRate: 45, evolution: null, evoLevel: null, evolved: 0, type: "normal", attack: 65, route:12, health:100, levelType: "medium fast", experience: 50  },
{id: 84, name: "Doduo", catchRate: 190, evolution: "Dodrio", evoLevel: 31, evolved: 0, type: "normal", attack: 85, route:16, health:100, levelType: "medium fast", experience: 50  },
{id: 85, name: "Dodrio", catchRate: 45, evolution: null, evoLevel: null, evolved: 0, type: "normal", attack: 110, route:17, health:100, levelType: "medium fast", experience: 50  },
{id: 86, name: "Seel", catchRate: 190, evolution: "Dewgong", evoLevel: 34, evolved: 0, type: "water", attack: 45, route:30, health:100, levelType: "medium fast", experience: 50  },
{id: 87, name: "Dewgong", catchRate: 75, evolution: null, evoLevel: null, evolved: 0, type: "water", attack: 70, route:null, health:100, levelType: "medium fast", experience: 50  },
{id: 88, name: "Grimer", catchRate: 190, evolution: "Muk", evoLevel: 38, evolved: 0, type: "poison", attack: 80, route:31, health:100, levelType: "medium fast", experience: 50  },
{id: 89, name: "Muk", catchRate: 75, evolution: null, evoLevel: null, evolved: 0, type: "poison", attack: 105, route:null, health:100, levelType: "medium fast", experience: 50  },
{id: 90, name: "Shellder", catchRate: 190, evolution: "Cloyster", evoLevel: "Water Stone", evolved: 0, type: "water", attack: 65, route:6, health:100, levelType: "slow", experience: 50  },
{id: 91, name: "Cloyster", catchRate: 60, evolution: null, evoLevel: null, evolved: 0, type: "water", attack: 95, route:null, health:100, levelType: "slow", experience: 50  },
{id: 92, name: "Gastly", catchRate: 190, evolution: "Haunter", evoLevel: 25, evolved: 0, type: "ghost", attack: 35, route:32, health:100, levelType: "medium slow", experience: 50  },
{id: 93, name: "Haunter", catchRate: 90, evolution: "Gengar", evoLevel: "Trade", evolved: 0, type: "ghost", attack: 50, route:null, health:100, levelType: "medium slow", experience: 50  },
{id: 94, name: "Gengar", catchRate: 45, evolution: null, evoLevel: null, evolved: 0, type: "ghost", attack: 65, route:null, health:100, levelType: "medium slow", experience: 50  },
{id: 95, name: "Onix", catchRate: 45, evolution: null, evoLevel: null, evolved: 0, type: "rock", attack: 45, route:32, health:100, levelType: "medium fast", experience: 50  },
{id: 96, name: "Drowzee", catchRate: 190, evolution: "Hypno", evoLevel: 26, evolved: 0, type: "psychic", attack: 48, route:11, health:100, levelType: "medium fast", experience: 50  },
{id: 97, name: "Hypno", catchRate: 75, evolution: null, evoLevel: null, evolved: 0, type: "psychic", attack: 73, route:null, health:100, levelType: "medium fast", experience: 50  },
{id: 98, name: "Krabby", catchRate: 225, evolution: "Kingler", evoLevel: 28, evolved: 0, type: "water", attack: 105, route:4, health:100, levelType: "medium fast", experience: 50  },
{id: 99, name: "Kingler", catchRate: 60, evolution: null, evoLevel: null, evolved: 0, type: "water", attack: 130, route:10, health:100, levelType: "medium fast", experience: 50  },
{id: 100, name: "Voltorb", catchRate: 190, evolution: "Electrode", evoLevel: 30, evolved: 0, type: "electric", attack: 30, route:10, health:100, levelType: "medium fast", experience: 50  },
{id: 101, name: "Electrode", catchRate: 60, evolution: null, evoLevel: null, evolved: 0, type: "electric", attack: 50, route:null, health:100, levelType: "medium fast", experience: 50  },
{id: 102, name: "Exeggcute", catchRate: 90, evolution: "Exeggutor", evoLevel: "Leaf Stone", evolved: 0, type: "grass", attack: 40, route:32, health:100, levelType: "slow", experience: 50  },
{id: 103, name: "Exeggutor", catchRate: 45, evolution: null, evoLevel: null, evolved: 0, type: "grass", attack: 95, route:null, health:100, levelType: "slow", experience: 50  },
{id: 104, name: "Cubone", catchRate: 190, evolution: "Marowak", evoLevel: 28, evolved: 0, type: "ground", attack: 50, route:33, health:100, levelType: "medium fast", experience: 50  },
{id: 105, name: "Marowak", catchRate: 75, evolution: null, evoLevel: null, evolved: 0, type: "ground", attack: 80, route:null, health:100, levelType: "medium fast", experience: 50  },
{id: 106, name: "Hitmonlee", catchRate: 45, evolution: null, evoLevel: null, evolved: 0, type: "fighting", attack: 120, route:34, health:100, levelType: "medium fast", experience: 50  },
{id: 107, name: "Hitmonchan", catchRate: 45, evolution: null, evoLevel: null, evolved: 0, type: "fighting", attack: 105, route:34, health:100, levelType: "medium fast", experience: 50  },
{id: 108, name: "Lickitung", catchRate: 45, evolution: null, evoLevel: null, evolved: 0, type: "normal", attack: 55, route:33, health:100, levelType: "medium fast", experience: 50  },
{id: 109, name: "Koffing", catchRate: 190, evolution: "Weezing", evoLevel: 35, evolved: 0, type: "poison", attack: 65, route:31, health:100, levelType: "medium fast", experience: 50  },
{id: 110, name: "Weezing", catchRate: 60, evolution: null, evoLevel: null, evolved: 0, type: "poison", attack: 90, route:null, health:100, levelType: "medium fast", experience: 50  },
{id: 111, name: "Rhyhorn", catchRate: 120, evolution: "Rhydon", evoLevel: 42, evolved: 0, type: "ground", attack: 85, route:35, health:100, levelType: "slow", experience: 50  },
{id: 112, name: "Rhydon", catchRate: 60, evolution: null, evoLevel: null, evolved: 0, type: "ground",  attack: 130, route:null, health:100, levelType: "slow", experience: 50  },
{id: 113, name: "Chansey", catchRate: 30, evolution: null, evoLevel: null, evolved: 0, type: "normal", attack: 5, route:30, health:100, levelType: "fast", experience: 50  },
{id: 114, name: "Tangela", catchRate: 45, evolution: null, evoLevel: null, evolved: 0, type: "grass", attack: 55, route:21, health:100, levelType: "medium fast", experience: 50  },
{id: 115, name: "Kangaskhan", catchRate: 45, evolution: null, evoLevel: null, evolved: 0, type: "normal", attack: 95, route:35, health:100, levelType: "medium fast", experience: 50  },
{id: 116, name: "Horsea", catchRate: 225, evolution: "Seadra", evoLevel: 32, evolved: 0, type: "water", attack: 40, route:10, health:100, levelType: "medium fast", experience: 50  },
{id: 117, name: "Seadra", catchRate: 75, evolution: null, evoLevel: null, evolved: 0, type: "water", attack: 65, route:12, health:100, levelType: "medium fast", experience: 50  },
{id: 118, name: "Goldeen", catchRate: 225, evolution: "Seaking", evoLevel: 33, evolved: 0, type: "water", attack: 67, route:4, health:100, levelType: "medium fast", experience: 50  },
{id: 119, name: "Seaking", catchRate: 60, evolution: null, evoLevel: null, evolved: 0, type: "water", attack: 92, route:4, health:100, levelType: "medium fast", experience: 50  },
{id: 120, name: "Staryu", catchRate: 225, evolution: "Starmie", evoLevel: "Water Stone", evolved: 0, type: "water", attack: 45, route:19, health:100, levelType: "slow", experience: 50  },
{id: 121, name: "Starmie", catchRate: 60, evolution: null, evoLevel: null, evolved: 0, type: "water", attack: 75, route:null, health:100, levelType: "slow", experience: 50  },
{id: 122, name: "Mr. Mime", catchRate: 45, evolution: null, evoLevel: null, evolved: 0, type: "psychic", attack: 45, route:36, health:100, levelType: "medium fast", experience: 50  },
{id: 123, name: "Scyther", catchRate: 45, evolution: null, evoLevel: null, evolved: 0, type: "grass", attack: 110, route:35, health:100, levelType: "medium fast", experience: 50  },
{id: 124, name: "Jynx", catchRate: 45, evolution: null, evoLevel: null, evolved: 0, type: "psychic", attack: 50, route:36, health:100, levelType: "medium fast", experience: 50  },
{id: 125, name: "Electabuzz", catchRate: 45, evolution: null, evoLevel: null, evolved: 0, type: "electric", attack: 83, route:36, health:100, levelType: "medium fast", experience: 50  },
{id: 126, name: "Magmar", catchRate: 45, evolution: null, evoLevel: null, evolved: 0, type: "fire", attack: 95, route:37, health:100, levelType: "medium fast", experience: 50  },
{id: 127, name: "Pinsir", catchRate: 45, evolution: null, evoLevel: null, evolved: 0, type: "grass", attack: 125, route:37, health:100, levelType: "slow", experience: 50  },
{id: 128, name: "Tauros", catchRate: 45, evolution: null, evoLevel: null, evolved: 0, type: "normal", attack: 100, route:38, health:100, levelType: "slow", experience: 50  },
{id: 129, name: "Magikarp", catchRate: 255, evolution: "Gyarados", evoLevel: 20, evolved: 0, type: "water", attack: 10, route:4, health:100, levelType: "slow", experience: 50  },
{id: 130, name: "Gyarados", catchRate: 45, evolution: null, evoLevel: null, evolved: 0, type: "water", attack: 125, route:null, health:100, levelType: "slow", experience: 50  },
{id: 131, name: "Lapras", catchRate: 45, evolution: null, evoLevel: null, evolved: 0, type: "water", attack: 85, route:37, health:100, levelType: "slow", experience: 50  },
{id: 132, name: "Ditto", catchRate: 35, evolution: null, evoLevel: null, evolved: 0, type: "normal", attack: 48, route:13, health:100, levelType: "medium fast", experience: 50  },
{id: 133, name: "Eevee", catchRate: 45, evolution: "Vaporeon,Jolteon,Flareon", evoLevel: "Water Stone, Thunder Stone, Fire Stone", evolved: 0, type: "normal", attack: 55, route:36, health:100, levelType: "medium fast", experience: 50  },
{id: 134, name: "Vaporeon", catchRate: 45, evolution: null, evoLevel: null, evolved: 0, type: "water", attack: 65, route:null, health:100, levelType: "medium fast", experience: 50  },
{id: 135, name: "Jolteon", catchRate: 45, evolution: null, evoLevel: null, evolved: 0, type: "electric", attack: 65, route:null, health:100, levelType: "medium fast", experience: 50  },
{id: 136, name: "Flareon", catchRate: 45, evolution: null, evoLevel: null, evolved: 0, type: "fire", attack: 130, route:null, health:100, levelType: "medium fast", experience: 50  },
{id: 137, name: "Porygon", catchRate: 45, evolution: null, evoLevel: null, evolved: 0, type: "normal", attack: 60, route:38, health:100, levelType: "medium fast", experience: 50  },
{id: 138, name: "Omanyte", catchRate: 45, evolution: "Omastar", evoLevel: 40, evolved: 0, type: "rock", attack: 40, route:39, health:100, levelType: "medium fast", experience: 50  },
{id: 139, name: "Omastar", catchRate: 45, evolution: null, evoLevel: null, evolved: 0, type: "rock", attack: 60, route:null, health:100, levelType: "medium fast", experience: 50  },
{id: 140, name: "Kabuto", catchRate: 45, evolution: "Kabutops", evoLevel: 40, evolved: 0, type: "rock", attack: 80, route:39, health:100, levelType: "medium fast", experience: 50  },
{id: 141, name: "Kabutops", catchRate: 45, evolution: null, evoLevel: null, evolved: 0, type: "rock", attack: 115, route:null, health:100, levelType: "medium fast", experience: 50  },
{id: 142, name: "Aerodactyl", catchRate: 45, evolution: null, evoLevel: null, evolved: 0, type: "rock", attack: 105, route:39, health:100, levelType: "slow", experience: 50  },
{id: 143, name: "Snorlax", catchRate: 25, evolution: null, evoLevel: null, evolved: 0, type: "normal", attack: 110, route:16, health:100, levelType: "slow", experience: 50  },
{id: 144, name: "Articuno", catchRate: 3, evolution: null, evoLevel: null, evolved: 0, type: "ice", attack: 85, route:100, health:100, levelType: "slow", experience: 50  },
{id: 145, name: "Zapdos", catchRate: 3, evolution: null, evoLevel: null, evolved: 0, type: "electric", attack: 90, route:100, health:100, levelType: "slow", experience: 50  },
{id: 146, name: "Moltres", catchRate: 3, evolution: null, evoLevel: null, evolved: 0, type: "fire", attack: 100, route:100, health:100, levelType: "slow", experience: 50  },
{id: 147, name: "Dratini", catchRate: 45, evolution: "Dragonair", evoLevel: 30, evolved: 0, type: "dragon", attack: 64, route:36, health:100, levelType: "slow", experience: 50  },
{id: 148, name: "Dragonair", catchRate: 45, evolution: "Dragonite", evoLevel: 55, evolved: 0, type: "dragon", attack: 84, route:null, health:100, levelType: "slow", experience: 50  },
{id: 149, name: "Dragonite", catchRate: 45, evolution: null, evoLevel: null, evolved: 0, type: "dragon", attack: 134, route:null, health:100, levelType: "slow", experience: 50  },
{id: 150, name: "Mewtwo", catchRate: 3, evolution: null, evoLevel: null, evolved: 0, type: "psychic", attack: 110, route:100, health:100, levelType: "slow", experience: 50  },
{id: 151, name: "Mew", catchRate: 45, evolution: null, evoLevel: null, evolved: 0, type: "psychic", attack: 100, route:100, health:100, levelType: "medium slow", experience: 50  },
];