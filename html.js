		// Console stuff
		
var specialLog = [];
var completeLog = specialLog;
var logCount = 0;

var log = function(text){
	logCount++;
	if(logCount > 250){
		logCount = 0;
		$("#console").html("");
	}
	$("#console").append(text+"<br>");
	var elem = document.getElementById('console');
	elem.scrollTop = elem.scrollHeight;
}

		// HTML functions

var vues = {};

// Update the upgradeBox

var updateUpgrades = function(){
	$(".upgradeBoxes").remove();
	for( var i = 0; i<player.upgradeList.length; i++){
		if( player.upgradeList[i].require <= boughtUpgrades() && 
		    !player.upgradeList[i].bought && 
			(alreadyUpgradeId(player.upgradeList[i].requiredUpgrade) || player.upgradeList[i].requiredUpgrade == null )){
			
			var upgrade = player.upgradeList[i];
			if(player.money > upgrade.cost){
				$("#upgradeBox").append("<button type=button id=Upgrade"+upgrade.id+" title=s class='upgradeBoxes btn btn-primary col-sm-12'>"+upgrade.name+"<br>Cost: "+ numberWithCommas(upgrade.cost) +"</button>");
			}
			else {
				$("#upgradeBox").append("<button type=button id=Upgrade"+upgrade.id+" title=s class='upgradeBoxes disabled btn btn-primary col-sm-12'>"+upgrade.name+"<br>Cost: "+ numberWithCommas(upgrade.cost) +"</button>");	
			}
			document.getElementById("Upgrade"+upgrade.id).title = upgrade.flavorText;
		}
	}
	if($('#upgradeBox').children().length){
		$('#upgradeBox').show();
	} else {
		$('#upgradeBox').hide();
	}
}


var initVueCaughtList = function() {
	if (vues.caughtList) {
		vues.caughtList.pokemonList = player.caughtPokemonList;
	} else {
		vues.caughtList = new Vue({
			el: '#pokemonBody',
			data: {
				pokemonList: player.caughtPokemonList
			}
		});
	}
}


		
// Update the list of caught pokemon
var updateCaughtList = function(){
	for (var i = 0; i<player.caughtPokemonList.length; i++){
		var p = player.caughtPokemonList[i];
		p.level = experienceToLevel(p.experience,p.levelType)
		p.attackValue = Math.ceil(p.level*p.attack/100);
	}
}

var initVueItemList = function() {
	if (vues.itemList) {
		vues.itemList.items = player.inventoryList;
	} else {
		vues.itemList = new Vue({
			el: '#itemBody',
			data: {
				items: player.inventoryList
			}
		});
	}
	setTimeout(function() {
		$(".tooltipItem:not(.tooltipstered)").tooltipster({
			position: "left"
		});
	}, 1000);
}


var updateItems = function(){
	$(".tooltipItem:not(.tooltipstered)").tooltipster({
		position: "left"
	});
}

// Update the stats
var updateStats = function(){
	$("#statBody").html("<tr><th>Money</th><th>$"+numberWithCommas(player.money)+"</th></tr>" +
		"<tr><th>Dungeon Tokens</th><th>"+numberWithCommas(player.dungeonTokens)+"</th></tr>" +
		"<tr><th>Quest points</th><th>"+numberWithCommas(player.questPoints)+"</th></tr>" +
		"<tr><th>Click attack</th><th>"+numberWithCommas(getClickAttack())+"</th></tr>" +
		"<tr><th>Pokemon attack</th><th>"+numberWithCommas(getPokemonAttack())+"</th></tr>" +
		"<tr><th>Exp multiplier</th><th>"+player.expMultiplier.toFixed(2)+"</th></tr>" +
		"<tr><th>Money multiplier</th><th>"+player.moneyMultiplier.toFixed(2)+"</th></tr>" +
		"<tr><th>Catch bonus</th><th>"+getBonusCatchrate()+"%</th></tr>" +
		"<tr><th>Catch time</th><th>"+player.catchTime/1000+" sec</th></tr>");
//	$("#statBody").html("Stats<br><br>Money<br>Click attack<br>Pokemon attack<br>Exp multiplier<br>Catch bonus<br>Catch time<br>Route<br>Pokemon Caught");
//	$("#statBoxStats").html("<br><br>$"+player.money+"<br>"+player.clickAttack*player.clickMultiplier+"<br>"+player.attack*player.attackMultiplier+"<br>"+player.expMultiplier.toFixed(2)+"x<br>"+player.catchBonus+"%<br>"+player.catchTime/1000+" sec<br>"+player.route+"<br>"+player.totalCaught);	
}

var getHeight = function(){
	return $(window).height();
}


var updateRoute = function(){

	if (player.routeKills[1] >= player.routeKillsNeeded){
		oakExplainMap();
	}

	if (player.routeKills[2] >= player.routeKillsNeeded){
		oakExplainTown();
	}

	var html = "Route "+player.route;
	if (routeCompletedShiny(player.route)){
		html += "<a title='You have caught all shiny Pokemon on this route!'><img id='alreadyCaughtImage' src='images/shinyPokeball.PNG'></a>";
	} else if(routeCompleted(player.route)){
		html += "<a title='You have caught all available Pokemon on this route!'><img id='alreadyCaughtImage' src='images/Pokeball.PNG'></a>";
	}
	html += "<br>" + Math.min(player.routeKillsNeeded, player.routeKills[player.route])+"/"+player.routeKillsNeeded;
	$("#currentRoute").html(html);
	// if(accessToRoute(player.route+1)){
	// 	$("#routeRight").show();
	// }
	// else{
	// 	$("#routeRight").hide();
	// }
	// if(player.route == 1){
	// 	$("#routeLeft").hide();
	// } 
	// else{
	// 	$("#routeLeft").show();
	// }

	for(var i = 1; i< 26; i++){
		if(player.routeKills[i] >= player.routeKillsNeeded){
			if( i == 19){
				$("#route_"+i+"a").attr('style', "fill:#FCB612" );	
			}
			$("#route_"+i).attr('style', "fill:#FCB612" );
		}
		else if (accessToRoute(i)){
			if( i == 19){
				$("#route_"+i+"a").attr('style', "fill:#D89803");
			}
			$("#route_"+i).attr('style', "fill:#D89803");
		}
		else {
			if( i == 19){
				$("#route_"+i+"a").attr('style', "fill:#BD1952");	
			}
			$("#route_"+i).attr('style', "fill:#BD1952");	
		}
		
	}

	if( inProgress == 1){
		$("#route_"+player.route).attr('style', "fill:green" );
		if( player.route == 19){
			$("#route_"+player.route+"a").attr('style', "fill:green" );	
		}
	}
}

// Update the health of the current enemy
var updateEnemy = function(){
    if (curEnemy.health <0){
        curEnemy.health = 0;
    }
    if(curEnemy.health == 0 ){
        enemyDefeated();
    }
    if (curEnemy.alive){
    	if(curEnemy.shiny){
    		$("#enemyInfo").html("<br>"+curEnemy.name+" <img class='shinyEnemyStar' src='images/shinypokemon/star.png'><br><img id=enemy class='shinyFiller' src=images/shinypokemon/"+curEnemy.id+".png>");
    	} else {

			if(alreadyCaughtShiny(curEnemy.name)){
            	$("#enemyInfo").html("<br>"+curEnemy.name+" <img id=alreadyCaughtImage src=images/shinyPokeball.PNG><br><img id=enemy src=images/pokemon/"+curEnemy.id+".png>"); 
            } else if(alreadyCaught(curEnemy.name)){
            	$("#enemyInfo").html("<br>"+curEnemy.name+" <img id=alreadyCaughtImage src=images/Pokeball.PNG><br><img id=enemy src=images/pokemon/"+curEnemy.id+".png>"); 
            } else {
            	$("#enemyInfo").html("<br>"+curEnemy.name+"<br><img id=enemy src=images/pokemon/"+curEnemy.id+".png>");
            }   		
    	}

    }
        $("#healthBar").width(100*curEnemy.health/curEnemy.maxHealth+"%"); 
        $("#healthDisplay").html(curEnemy.health+"/"+curEnemy.maxHealth);
}



var hideAllViews = function(){
	$("#currentEnemy").hide();
	$("#gymView").hide();
	$("#townView").hide();
	$("#dungeonView").hide();
	$("#shopView").hide();
}
