var softReset = function() {
	canSave = 1;
	save = function() {
		if (!canSave) return;
		canSave = 0;
		alert('Saving is disabled!') };
	oldPlayer = player;
	moveToRoute(1);
	// copied from system.js
	player = {
		oldPlayer: oldPlayer,
		resetted: true,
		clickAttack: 1,
		clickMultiplier: 1,
		attack: 0,
		attackMultiplier: 1,
		money: 0,
		dungeonTokens: 0,
		dungeonTokenMultiplier: 1,
		moneyMultiplier: 1,
		expMultiplier: 1,
		catchBonus: 5,
		route: 1,
		pokeballs: 100,
		routeVariation: 5,
		catchTime: 2000,
		caughtPokemonList: [],
		catchNumbers: Array.apply(null, Array(pokemonList.length)).map(Number.prototype.valueOf, 0),
		defeatNumbers: Array.apply(null, Array(pokemonList.length)).map(Number.prototype.valueOf, 0),
		routeKills: Array.apply(null, Array(100)).map(Number.prototype.valueOf, 0),
		starter: "none",
		upgradeList: [],
		gymBadges: [],
		version: version,
		totalCaught: 0,
		routeKillsNeeded: 10,
		oakItemSlots: 1,
		evoExplain: 0,
		mapExplain: 0,
		townExplain: 0,
		dungeonExplain: 0,
		inventoryList: [],
		typeShards: Array.apply(null, Array(18)).map(Number.prototype.valueOf, 0),
		notEffectiveTypeBonus: Array.apply(null, Array(18)).map(Number.prototype.valueOf, 0),
		normalEffectiveTypeBonus: Array.apply(null, Array(18)).map(Number.prototype.valueOf, 0),
		veryEffectiveTypeBonus: Array.apply(null, Array(18)).map(Number.prototype.valueOf, 0),
		shopPriceDeviation: Array.apply(null, Array(100)).map(Number.prototype.valueOf, 1),
		questPoints: 0,
		curQuest: firstQuest,
		questSkipToday: 0,
		questCompletedTotal: 0,
		questCompletedToday: 0,
		questCompletedDailyMax: 0,
		questDifficulty: 1,
		lastSeen: new Date().getDate(),
		eggList: [null, null, null, null],
		eggSlots: 0,
		totalBred: 0,
		shinyPoints: 0,
		mineInventory: [],
		mineCoins: 0,
		curMine: {
			itemSelected: 1,
			grid: [],
			sizeX: 25,
			sizeY: 12,
			rewardGrid: [],
			itemsFound: 0,
			itemsBuried: 0,
			rewardNumbers: [],
			maxItems: 3,
			maxDailyDeals: 3,
			layersCleared: 0,
			totalItemsFound: 0,
			energy: 50,
			energyTick: 60,
			maxEnergy: 50,
			energyRegen: 60,
			energyGain: 3,
			energyRefills: 1,
			chisselEnergy: 1,
			hammerEnergy: 3,
			maxEnergyUpgrades: 0,
			energyRegenUpgrades: 0,
			maxItemsUpgrades: 0,
			maxDailyDealUpgrades: 0,
			energyGainUpgrades: 0,
			dailyDeals: [],
		},
		oakItemsEquipped: [],
		gymsDefeated: Array.apply(null, Array(15)).map(Number.prototype.valueOf, 0),
		dungeonsDefeated: Array.apply(null, Array(15)).map(Number.prototype.valueOf, 0),
		dateStarted: new Date(),
		timePlayed: 0,
		lastSaved: new Date().getTime(),
		totalMoney: 0,
		totalDungeonTokens: 0,
		totalQuestPoints: 0,
		totalItemsFound: 0,
		totalClicks: 0,
		totalEggsHatched: 0,
		totalMineCoins: 0,
	};

	// inProgress = 1;
	// canCatch = 1;
	// attackInterval;
	// maxClicks = 15;
	// clicks = 0;

	// initTypeEffectiveness();
	// initUpgrades();
	// initOakItems();
	// updateItems();
	// loadTowns();
	// hideAllViews()
	// $("#currentEnemy").show();
	// initPossibleEggs();
	// showCurQuest();
	// showEggs();
	// generateDailyDeals();
	setTimeout(function() {
		player.caughtPokemonList = [];
		updateAll();
		//$('#pickStarter').modal({ backdrop: 'static', keyboard: false });
		afterReset();
	}, 1000);


	// function calculate




}

afterReset = function() {
	var interval = setInterval(function() {
		if (player.caughtPokemonList.length) {
			clearInterval(interval);
			player.starter = player.oldPlayer.starter;
		}
	}, 100);
	sellPurchasedItems();
	calculateResetBlessing();
	recalculateResetBlessings();
	showEggs();
	resetUpgrades();
	logCount = 0;
	$("#console").html("");
	log('You was transfered to anotrer world.');
	log('You feel lighter... Probably, it\'s that "Time Blessing" thing.');
}


resetTown = function() {
	var e = $('rect.city:first').clone().insertAfter('#route_25').attr('x', 405).attr('y', 33).attr('id', 'Time Capsule');
	var townImg = 'http://cdn.bulbagarden.net/upload/thumb/b/ba/Gold_Silver_Ethan_Time_Capsule.png/200px-Gold_Silver_Ethan_Time_Capsule.png';

	addTown("Time Capsule", null, townImg, "reset", [25]);
}
setTimeout(resetTown, 1000)

showBill = function() {
	// canSave = 0;
	var townImg = 'http://cdn.bulbagarden.net/upload/thumb/b/ba/Gold_Silver_Ethan_Time_Capsule.png/200px-Gold_Silver_Ethan_Time_Capsule.png';
	var img = 'http://vignette3.wikia.nocookie.net/pokemon/images/b/ba/Bill.png';
	var html = "<div class='row'>" +
		"<img src='" + townImg + "' style='float:left;margin: 20px;'/>" +
		"<img src='" + img + "' style='float:right;margin: 20px;'/>" +
		"<p>I can use this capsule to send you to the past time. More precisely, to the past time of an alternate world.</p>" +
		"<p>As you can see, its size is too small for a human to fit in it, so I'll have to transform you into a pokemon. Temporarily, of course. The transformation will wear of in couple of minutes after your arrival.</p>" +
		"<p>As you probably guessed already, you can't take anything with you. I can send eggs of pokemons you left here, but it will take some time.</p>" +
		"<p>After transfer you may note that everything will be easier. I call this effect \"Time Blessing\".</p>" +
		"<br>" +
		"<p>I won't request anything for transfer, consumables for the Time Capsule are quite cheap.</p>" +
		"<p>However, for transforming you into a pokemon I'll need 100 shards of each type. Bring them and we can proceed.</p>"
		// + "</div>";
	var s = '<table><style>#oakBody td{min-width: 80px;border: 2px solid lightgray;text-align: center;font-weight: bold;</style>'
	s += '<tr><td colspan=3>Insufficient</td></tr>';
	s += '<tr><td>Type</td><td>Number</td><td>Location</td></tr>';
	var a = ["Route 2, Route 16", "Cinnabar Island Gym", "Cerulean City Gym", "Vermillion City Gym", "Celadon City Gym", "Elite Lorelei", "Elite Bruno", "Fuchsia City Gym", "Digletts Cave Dungeon, Viridian City Gym", "Elite Lance", "Saffron City Gym", "Viridian Forest Dungeon", "Pewter City Gym", "Pokemon Tower Dungeon, Elite Agatha", "Elite Lance", "", "Power Plant Dungeon", "Mt. Moon Dungeon, Saffron City Gym"];
	var b = false;
	numberToType.forEach(function(e, i) {
		if (player.typeShards[i] < 100 && e != "dark") {
			s += '<tr style="background-color:#' + typeColorLocked[i] + '"><td>' + e + '</td><td>' + player.typeShards[i] + '</td><td>' + a[i] + '</td></tr>\n';
			b = 1;
		}
	});
	s += '</table></div>';
	if (!b) {
		s = '<button class="btn btn-primary" style="width: 200px;margin-left: calc(50% - 340px);" id="billProceed" onclick="showBillConfirm();">Proceed</button></div>';
	}
	html += s;
	// console.log(html)
	$('#oakBody').html(html);
	$('#oakModal .modal-header h4').html('Bill');
	$('#oakModal').modal('show');
	debug.getShards();
}

showBillConfirm = function() {
	$('#billProceed').html('Sure?').addClass('btn-danger').removeClass('btn-primary').removeAttr('onclick').click(resetAnimation);
}

resetAnimation = function() {
	$('#oakModal').modal('hide');
	$('<div id=resetFade />').appendTo('body')
	setTimeout(function() {
		$('body').addClass('shake');
	}, 1000);
	setTimeout(softReset, 6000);
	setTimeout(function() {
		$('body').removeClass('shake');
	}, 11000);
}
$('<style>').appendTo('head').html(`
body.shake{
	overflow:hidden !important;
}
body.shake>*{
	animation:shake 0.1s linear 50;
}
@keyframes shake{
	0%{transform:translateX(0px)}
	25%{transform:translateX(-5px)}
	75%{transform:translateX(5px)}
	100%{transform:translateX(0px)}
}
#resetFade{
	display:none;
	opacity:0;
	position: fixed;
	background-color:#321;
	left:-10vw;
	top: -10vh;
	height:120vh;
	width:120vw;
}
body.shake #resetFade{
	display:block;
	animation:resetFade 10s linear;
}
@keyframes resetFade{
	0%{opacity:0;background-color:#321;}
	45%{opacity:1;background-color:#321;}
	50%{opacity:1;background-color:black;}
	60%{opacity:1;background-color:white;}
	100%{opacity:0;background-color:white;}
}`);

// setTimeout(function() {
// 	$('<div>').appendTo('body')
// 		.css({ position: 'fixed', 'font-size': '200%', bottom: 0, right: 0, color: 'red', 'text-align': 'right', padding: '0 10px', 'text-shadow': '0 0 5px lightblue,0 0 5px white,0 0 5px white','z-index': 999999,animation:'none !important'})
// 		.html('By Dimava<br>In development<br>"reset" github branch<br>Dimava\'s <s>Soft</s> Reset Extension<br>Made by Dimava for Dimava.<br>I dont know will it be added to game or not.');
// }, 1000);
debug = {
	getShards: function() {
		player.typeShards.forEach((e, i) => {
			if (numberToType[i] != "dark")
				player.typeShards[i] = (e || 0) + 100;
		});
		return "Got 100 shards of each type exept dark";
	}
};

recoverResetShards = function(type, amount) {
	amount = useResetBlessing(type, amount);
	if (!amount) return;
	log('The Time Blessing has granted you access to ' + amount + ' shards!');
	player.typeShards[typeToNumber(type)] += amount;
}
recoverResetMoney = function(money, message) {
	money = useResetBlessing('money', money);
	if (!money) return;
	log('With the help of the Time Blessing you have recovered $' + money + '!');
	player.money += money;
	player.totalMoney += money;
}
recoverResetTokens = function(amount) {
	amount = useResetBlessing('dungeonTokens', amount);
	if (!amount) return;
	log('With the help of the Time Blessing you have recovered ' + amount + ' dungeon token' + (amount == 1 ? '' : 's') + '!');
	player.dungeonTokens += amount;
	player.totalDungeonTokens += amount;
}
recoverResetQP = function(amount) {
	amount = useResetBlessing('questPoints', amount);
	if (!amount) return;
	log('The Time Blessing has granted you access to ' + amount + ' Quest points!');
	player.questPoints += amount;
}
recoverResetShiny = function(egg) {
	var p = player.oldPlayer.caughtPokemonList.filter(function(p) {
		return p.name == egg.pokemon;
	})[0];
	p2 = player.caughtPokemonList.filter(function(p) {
		return p.name == egg.pokemon;
	})[0];
	if (p && p.shiny && !(p2 && p2.shiny) && !p.shinyInReset) {
		log('Time Blessing is flowing around the egg, making it shiny!');
		return 1;
	}
	return 0;
}
sellPurchasedItems = function() {
	// hatch eggs #undone
	['not', 'normal', 'very'].forEach(function(s) {
		s = player.oldPlayer[s + 'EffectiveTypeBonus'];
		s.forEach(function(e, i) {
			player.oldPlayer.typeShards[i] += 250 * e * e;
			s[i] = 0;
		});
	});
	var a = [0, 500, 1500, 3000]
	player.oldPlayer.questPoints += a[player.oldPlayer.eggSlots];
	player.oldPlayer.eggSlots = 0;
	a = [2000, 750, 5000, 2500, 500];
	["Eevee", "Porygon", "Jynx", "Mr. Mime", "Lickitung"].forEach(function(s, i) {
		var p = player.oldPlayer.caughtPokemonList.filter(function(p) {
			return p.name == s
		})[0];
		if (p && !p.soldInReset && !p.shiny) {
			p.soldInReset = 1;
			player.oldPlayer.questPoints += a[i];
		}
	});
	// sell evos for shards #undone
	// sell egged for QP #undone
}
recalculateResetBlessings = function() {
	var b = {
		money: calculateResetBlessing(player.oldPlayer.money, 1e7),
		dungeonTokens: calculateResetBlessing(player.oldPlayer.dungeonTokens, 1e6),
		questPoints: calculateResetBlessing(player.oldPlayer.questPoints, 1e3)
	};
	player.oldPlayer.money = 0;
	player.oldPlayer.dungeonTokens = 0;
	player.oldPlayer.questPoints = 0;
	numberToType.forEach(function(e, i) {
		b[e] = calculateResetBlessing(player.oldPlayer.typeShards[i]);
		player.oldPlayer.typeShards[i] = 0;
	});
	// put items too #undone
	player.resetBlessing = b;
}
calculateResetBlessing = function(amount, base) {
	if (!amount) return -1;
	var b = {
		level: 1,
		multi: 1.1,
		amount: 0,
		base: base
	}
	var m = 1;
	while (amount > m * base) {
		amount -= m * base;
		m += 0.1;
		b.level++;
	}
	b.amount = amount;
	return b;
}
useResetBlessing = function(type, amount) {
	if (!player.resetBlessing) return;
	var b = player.resetBlessing[type];
	if (!b || !b.level) return;
	var m = b.multi - Math.random() / 5;
	var a = Math.ceil(amount * m);
	if (a < b.amount) {
		b.amount -= a;
		return a;
	}
	if (b.level == 1) {
		amount = b.amount;
		delete player.resetBlessing[type];
		return amount;
	}
	b.amount += b.base;
	b.multi -= 0.1;
	b.level--;
	return useResetBlessing(type, amount);
}


//https://jsfiddle.net/j1a9xnL5/4/ - badges #undone
