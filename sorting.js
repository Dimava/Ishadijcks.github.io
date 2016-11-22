var sortChange = function(list) {
	if (!list || list == "pokemons") {
		// var selectBox = $("#sortBox")[0];
		// var selectedValue = selectBox.options[selectBox.selectedIndex].value;
		player.caughtPokemonList.sort(generateSort($('#pokemons .sortBox').val()));
		updateCaughtList();
		return;
	}
	if(list=="items") {
		player.inventoryList.sort(generateSort($('#items .sortBox').val()));
		updateItems();
		return;
	}
};

/* POKEMON LIST OPTIONS
+id
>name,+id
~calcAttack,+id
~calcLevel,+id
+timeStamp,+id
-timeStamp,+id
+catchRate,+id
-shiny,-timeStamp,+id
*/
/* ITEM LIST OPTIONS
+id
>name,+id
-quantity,+id
>type,+id
-timeLeft,id
*/
/* HOW TO USE
1. How to sort.
	1.1. Not pre-generated:
		>>	array.sort( generateSort( <conv> [, direct:boolean] ) );
	1.2. Pre-generated:
		>>	var fn = generateSort( <conv> [, direct:boolean] );
		>>	array.sort( fn );
2. Direct sort.
	To sort array of non-object items (numbers, strings), use
		>>	generateSort(<convC>, 1)
	Where 1 means 'use direct sort type'.
	<convC> may be one of following:
		'+': convert to number, ascending  sort,
		'-': convert to number, descending sort,
		'-': convert to string, ascending  sort,
		'-': convert to string, descending sort,
		'':  do not convert,    ascending  sort,
		'~': do not convert,    descending sort;
	Example:
	>>	[1,3,2].sort( generateSort('+', 1) ) // [1,2,3]
3. Property sort.
	To sort array of objects, use
		>> generateSort(<conv>)
	Where <conv> = <convC> + <prop>
	Where <prop> is used property name
4. Calculated sort.
	To sort using a calculated value, add function to convertors object and use
		>>	generateSort(<calc>)
	Where <calc> is name of newly-added function
	You may also use
		>>	generateSort('~' + <calc>)
	to sort in reversed order.
5. Multiple sorts.
	To sort array of objects by multiple properties, use
		>>	generateSort(<convM>)
	Where <convM> = <conv> | <calc> | <convM> [+ ',' + <conv>] | <convM> [+ ',' + <calc>]
	Example: sort by .name(string) then by .id(number):
		>>	array.sort( generateSort( '>name,+id' ) )
*/
function generateSort(s, direct) {
	var comparators = {
			default: function(a, b) {
				// console.log({ a, b })
				if (a > b)
					return 1;
				if (a < b)
					return -1;
				return 0;
			},
			reverse: function(a, b) {
				// console.log({ b, a })
				if (b > a)
					return 1;
				if (b < a)
					return -1;
				return 0;
			}
		},
		convertors = direct ? {
			direct: function(v) {
				return v;
			},
			string: function(v) {
				return (v || '') + '';
			},
			number: function(v) {
				return +v || 0;
			}
		} : {
			direct: function(o, v) {
				return o[v];
			},
			string: function(o, v) {
				return (o[v] || '') + '';
			},
			number: function(o, v) {
				return +o[v] || 0;
			},
			calcLevel: function(o) {
				return experienceToLevel(o.experience, o.levelType);
			},
			calcAttack: function(o) {
				return Math.floor(experienceToLevel(o.experience, o.levelType) * o.attack / 100);
			}
		};

	function generateSortStep(c, prop, next) {
		var comp = comparators.default,
			conv = convertors.direct;
		switch (c) {
			case '+':
				conv = convertors.number;
				break;
			case '-':
				conv = convertors.number;
				comp = comparators.reverse;
				break;
			case '>':
				conv = convertors.string;
				break;
			case '<':
				conv = convertors.string;
				comp = comparators.reverse;
				break;
			case '~':
				comp = comparators.reverse;
				break;
			default:
				prop = c + prop;
		}
		if (convertors[prop])
			conv = convertors[prop];
		return function(a, b) {
			// console.log({ a, b, prop, convertor: conv.name, conv })
			return comp(conv(a, prop), conv(b, prop)) || next(a,b);
		};
	}
	var step = function() {
		return 0;
	};
	s.replace(/\s*,\s*/g, ',').split(',').reverse().forEach(function(s) {
		step = generateSortStep(s.charAt(0), s.substr(1), step);
	});
	return step;
}
