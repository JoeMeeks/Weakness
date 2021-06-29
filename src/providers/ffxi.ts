import { Injectable } from '@angular/core';
import { Events } from 'ionic-angular';
import * as _ from 'underscore';

let self: FFXIService;

@Injectable()
export class FFXIService {

	weapons: { id: string, name: string, }[] = [
		{ id: "AXE", name: "Axe" },
		{ id: "BOW", name: "Archery" },
		{ id: "CLB", name: "Club" },
		{ id: "DAG", name: "Dagger" },
		{ id: "GAX", name: "Great Axe" },
		{ id: "GKT", name: "Great Katana" },
		{ id: "GSD", name: "Great Sword" },
		{ id: "GUN", name: "Marksmanship" },
		{ id: "HTH", name: "Hand-to-Hand" },
		{ id: "KAT", name: "Katana" },
		{ id: "PLM", name: "Polearm" },
		{ id: "SCY", name: "Scythe" },
		{ id: "STF", name: "Staff" },
		{ id: "SWD", name: "Sword" }
	];

	abyssea: {
		red: { title: string, items: { weapon: string, weaponskill: string }[] }[],
		yellow: { title: string, items: { order: number, type: string, spell: string }[] }[],
		blue: {
			piercing: { title: string, items: { weapon: string, weaponskill: string }[] }[],
			slashing: { title: string, items: { weapon: string, weaponskill: string }[] }[],
			blunt: { title: string, items: { weapon: string, weaponskill: string }[] }[],
		}
	} = {
		red: [
			{
				title: 'darkness',
				items: [
					{ weapon: "DAG", weaponskill: "Energy Drain" },
					{ weapon: "KAT", weaponskill: "Blade: Ei" },
					{ weapon: "SCY", weaponskill: "Shadow of Death" }
				]
			},
			{
				title: "earth",
				items: [
					{ weapon: "STF", weaponskill: "Earth Crusher" }
				]
			},
			{
				title: "fire",
				items: [
					{ weapon: "SWD", weaponskill: "Red Lotus Blade" }
				]
			},
			{
				title: "ice",
				items: [
					{ weapon: "GSD", weaponskill: "Freezebite" }
				]
			},
			{
				title: 'light',
				items: [
					{ weapon: "CLB", weaponskill: "Seraph Strike" },
					{ weapon: "GKT", weaponskill: "Tachi: Koki" },
					{ weapon: "STF", weaponskill: "Sunburst" },
					{ weapon: "SWD", weaponskill: "Seraph Blade" }
				]
			},
			{
				title: "lightning",
				items: [
					{ weapon: "PLM", weaponskill: "Raiden Thrust" }
				]
			},
			{
				title: "wind",
				items: [
					{ weapon: "DAG", weaponskill: "Cyclone" },
					{ weapon: "GKT", weaponskill: "Tachi: Jinpu" }
				]
			},
		],
		yellow: [
			{
				title: "darkness",
				items: [

					{ order: 1, type: "BLM", spell: "Aspir" },
					{ order: 2, type: "BLM", spell: "Drain" },
					{ order: 3, type: "BLM", spell: "Bio II" },
					{ order: 4, type: "BLM", spell: "Dispel" },
					{ order: 5, type: "BLU", spell: "Eyes On Me" },
					{ order: 6, type: "NIN", spell: "Kurayami: Ni" },
					{ order: 7, type: "BRD", spell: "Light Threnody" }
				]
			},
			{
				title: "earth",
				items: [
					{ order: 1, type: "BLM", spell: "Stone III" },
					{ order: 2, type: "BLM", spell: "Stone IV" },
					{ order: 3, type: "BLM", spell: "Stonega III" },
					{ order: 4, type: "BLM", spell: "Quake" },
					{ order: 5, type: "BLU", spell: "Magnetite Cloud" },
					{ order: 6, type: "NIN", spell: "Doton: Ni" },
					{ order: 7, type: "BRD", spell: "Lightning Threnody" }
				]
			},
			{
				title: "fire",
				items: [
					{ order: 1, type: "BLM", spell: "Fire III" },
					{ order: 2, type: "BLM", spell: "Fire IV" },
					{ order: 3, type: "BLM", spell: "Firaga III" },
					{ order: 4, type: "BLM", spell: "Flare" },
					{ order: 5, type: "BLU", spell: "Heat Breath" },
					{ order: 6, type: "NIN", spell: "Katon: Ni" },
					{ order: 7, type: "BRD", spell: "Ice Threnody" }
				]
			},
			{
				title: "ice",
				items: [
					{ order: 1, type: "BLM", spell: "Blizzard III" },
					{ order: 2, type: "BLM", spell: "Blizzard IV" },
					{ order: 3, type: "BLM", spell: "Blizzaga III" },
					{ order: 4, type: "BLM", spell: "Freeze" },
					{ order: 5, type: "BLU", spell: "Ice Break" },
					{ order: 6, type: "NIN", spell: "Hyoton: Ni" },
					{ order: 7, type: "BRD", spell: "Wind Threnody" }
				]
			},
			{
				title: "light",
				items: [
					{ order: 1, type: "WHM", spell: "Banish II" },
					{ order: 2, type: "WHM", spell: "Banish III" },
					{ order: 3, type: "WHM", spell: "Banishga II" },
					{ order: 4, type: "WHM", spell: "Holy" },
					{ order: 5, type: "WHM", spell: "Flash" },
					{ order: 6, type: "BLU", spell: "Radiant Breath" },
					{ order: 7, type: "BRD", spell: "Dark Threnody" }
				]
			},
			{
				title: "lightning",
				items: [
					{ order: 1, type: "BLM", spell: "Thunder III" },
					{ order: 2, type: "BLM", spell: "Thunder IV" },
					{ order: 3, type: "BLM", spell: "Thundaga III" },
					{ order: 4, type: "BLM", spell: "Burst" },
					{ order: 5, type: "BLU", spell: "Mind Blast" },
					{ order: 6, type: "NIN", spell: "Raiton: Ni" },
					{ order: 7, type: "BRD", spell: "Water Threnody" }
				]
			},
			{
				title: "water",
				items: [
					{ order: 1, type: "BLM", spell: "Water III" },
					{ order: 2, type: "BLM", spell: "Water IV" },
					{ order: 3, type: "BLM", spell: "Waterga III" },
					{ order: 4, type: "BLM", spell: "Flood" },
					{ order: 5, type: "BLU", spell: "Maelstrom" },
					{ order: 6, type: "NIN", spell: "Suiton: Ni" },
					{ order: 7, type: "BRD", spell: "Fire Threnody" }
				]
			},
			{
				title: "wind",
				items: [
					{ order: 1, type: "BLM", spell: "Aero III" },
					{ order: 2, type: "BLM", spell: "Aero IV" },
					{ order: 3, type: "BLM", spell: "Aeroga III" },
					{ order: 4, type: "BLM", spell: "Tornado" },
					{ order: 5, type: "BLU", spell: "Mysterious Light" },
					{ order: 6, type: "NIN", spell: "Huton: Ni" },
					{ order: 7, type: "BRD", spell: "Earth Threnody" }
				]
			}
		],
		blue: {
			piercing: [
				{
					title: 'Archery',
					items: [
						{ weapon: "BOW", weaponskill: "Arching Arrow" },
						{ weapon: "BOW", weaponskill: "Blast Arrow" },
						{ weapon: "BOW", weaponskill: "Empyreal Arrow" },
						{ weapon: "BOW", weaponskill: "Sidewinder" }
					]
				},
				{
					title: 'Dagger',
					items: [
						{ weapon: "DAG", weaponskill: "Dancing Edge" },
						{ weapon: "DAG", weaponskill: "Evisceration" },
						{ weapon: "DAG", weaponskill: "Shadowstitch" },
						{ weapon: "DAG", weaponskill: "Shark Bite" }
					]
				},
				{
					title: 'Marksmanship',
					items: [
						{ weapon: "GUN", weaponskill: "Blash Shot" },
						{ weapon: "GUN", weaponskill: "Detonator" },
						{ weapon: "GUN", weaponskill: "Heavy Shot" },
						{ weapon: "GUN", weaponskill: "Slug Shot" }
					],
				},
				{
					title: 'Polearm',
					items: [
						{ weapon: "PLM", weaponskill: "Impulse Drive" },
						{ weapon: "PLM", weaponskill: "Skewer" },
						{ weapon: "PLM", weaponskill: "Wheeling Thrust" }
					]
				}
			],
			slashing: [
				{
					title: 'Axe',
					items: [
						{ weapon: "AXE", weaponskill: "Decimation" },
						{ weapon: "AXE", weaponskill: "Mistral Axe" }
					]
				},
				{
					title: 'Great Axe',
					items: [
						{ weapon: "GAX", weaponskill: "Full Break" },
						{ weapon: "GAX", weaponskill: "Steel Cyclone" }
					]
				},
				{
					title: 'Great Katana',
					items: [
						{ weapon: "GKT", weaponskill: "Tachi: Gekko" },
						{ weapon: "GKT", weaponskill: "Tachi: Kasha" }
					]
				},
				{
					title: 'Great Sword',
					items: [
						{ weapon: "GSD", weaponskill: "Ground Strike" },
						{ weapon: "GSD", weaponskill: "Spinning Slash" }		
					]
				},
				{
					title: 'Katana',
					items: [
						{ weapon: "KAT", weaponskill: "Blade: Ku" },
						{ weapon: "KAT", weaponskill: "Blade: Ten" }
					]
				},
				{
					title: 'Scythe',
					items: [
						{ weapon: "SCY", weaponskill: "Cross Reaper" },
						{ weapon: "SCY", weaponskill: "Spiral Hell" }
					]
				},
				{
					title: 'Sword',
					items: [
						{ weapon: "SWD", weaponskill: "Savage Blade" },
						{ weapon: "SWD", weaponskill: "Swift Blade" },
						{ weapon: "SWD", weaponskill: "Vorpal Blade" }		
					]
				}
			],
			blunt: [
				{
					title: 'Club',
					items: [
						{ weapon: "CLB", weaponskill: "Black Halo" },
						{ weapon: "CLB", weaponskill: "Hexa Strike" },
						{ weapon: "CLB", weaponskill: "Judgement" },
						{ weapon: "CLB", weaponskill: "Skullbreaker" },
						{ weapon: "CLB", weaponskill: "True Strike" }
					]
				},
				{
					title: 'Hand-to-Hand',
					items: [
						{ weapon: "HTH", weaponskill: "Asuran Fists" },
						{ weapon: "HTH", weaponskill: "Dragon Kick" },
						{ weapon: "HTH", weaponskill: "Howling Fist" },
						{ weapon: "HTH", weaponskill: "Raging Fists" },
						{ weapon: "HTH", weaponskill: "Spinning Attack" }
					]
				},
				{
					title: 'Staff',
					items: [
						{ weapon: "STF", weaponskill: "Full Swing" },
						{ weapon: "STF", weaponskill: "Heavy Swing" },
						{ weapon: "STF", weaponskill: "Retribution" },
						{ weapon: "STF", weaponskill: "Shell Crusher" },
						{ weapon: "STF", weaponskill: "Spirit Taker" }
					]
				}
			]
		}
	};

	dynamis: {
		beastmen: { title: string, items: string[] }[],
		ordelle: { time: number, title: string, items: { zone: string, mob: string }[] }[],
		tukuku: { time: number, title: string, items: { zone: string, mob: string } [] }[],
		byne: { time: number, title: string, items: { zone: string, mob: string }[] }[]
	} = {
		beastmen: [
			{
				title: "Job Ability",
				items: [
					"BST",
					"MNK",
					"NIN",
					"RNG",
					"THF"
				]
			},
			{
				title: "Magic Spell",
				items: [
					"BLM",
					"BRD",
					"RDM",
					"SMN",
					"WHM"
				]
			},
			{
				title: "Weaponskill",
				items: [
					"DRG",
					"DRK",
					"PLD",
					"SAM",
					"WAR"
				]
			}
		],
		ordelle: [
			{
				time: 0,
				title: "0:00&ndash;7:59 Magic Spell",
				items: [
					{ zone: "Buburimu", mob: "Bunny" },
					{ zone: "Buburimu", mob: "Eft"},
					{ zone: "Buburimu", mob: "Mandragora" },
					{ zone: "Valkurm", mob: "Hippogryph" },
					{ zone: "Valkurm", mob: "Sabotender" },
					{ zone: "Valkurm", mob: "Sheep" },
					{ zone: "Qufim", mob: "Snoll" },
					{ zone: "Qufim", mob: "Stirge" },
					{ zone: "Qufim", mob: "Weapon"},
					{ zone: "Tavnazia", mob: "Cluster" },
					{ zone: "Tavnazia", mob: "Makara" }
				]
			},
			{
				time: 8,
				title: "8:00&ndash;15:59 Job Ability",
				items: [
					{ zone: "Buburimu", mob: "Bunny" },
					{ zone: "Buburimu", mob: "Eft" },
					{ zone: "Buburimu", mob: "Mandragora" },
					{ zone: "Valkurm", mob: "Hippogryph" },
					{ zone: "Valkurm", mob: "Sabotender" },
					{ zone: "Valkurm", mob: "Sheep" },
					{ zone: "Qufim", mob: "Snoll" },
					{ zone: "Qufim", mob: "Stirge" },
					{ zone: "Qufim", mob: "Weapon" },
					{ zone: "Tavnazia", mob: "Cluster" },
					{ zone: "Tavnazia", mob: "Makara" }
				]
			},
			{
				time: 16,
				title: "16:00&ndash;23:59 Weaponskill",
				items: [
					{ zone: "Buburimu", mob: "Bunny" },
					{ zone: "Buburimu", mob: "Eft" },
					{ zone: "Buburimu", mob: "Mandragora" },
					{ zone: "Valkurm", mob: "Hippogryph" },
					{ zone: "Valkurm", mob: "Sabotender" },
					{ zone: "Valkurm", mob: "Sheep" },
					{ zone: "Qufim", mob: "Snoll" },
					{ zone: "Qufim", mob: "Stirge" },
					{ zone: "Qufim", mob: "Weapon" },
					{ zone: "Tavnazia", mob: "Cluster" },
					{ zone: "Tavnazia", mob: "Makara" }
				]
			}
		],
		tukuku: [
			{
				time: 0,
				title: "0:00&ndash;7:59 Weaponskill",
				items: [
					{ zone: "Buburimu", mob: "Crab" },
					{ zone: "Buburimu", mob: "Dhamel" },
					{ zone: "Buburimu", mob: "Scorpion" },
					{ zone: "Valkurm", mob: "Goobbue" },
					{ zone: "Valkurm", mob: "Manticore" },
					{ zone: "Valkurm", mob: "Treant" },
					{ zone: "Qufim", mob: "Diremite" },
					{ zone: "Qufim", mob: "Raptor" },
					{ zone: "Qufim", mob: "Tiger" },
					{ zone: "Tavnazia", mob: "Leech" },
					{ zone: "Tavnazia", mob: "Worm" }
				]
			},
			{
				time: 8,
				title: "8:00&ndash;15:59 Magic Spell",
				items: [
					{ zone: "Buburimu", mob: "Crab" },
					{ zone: "Buburimu", mob: "Dhamel" },
					{ zone: "Buburimu", mob: "Scorpion" },
					{ zone: "Valkurm", mob: "Goobbue" },
					{ zone: "Valkurm", mob: "Manticore" },
					{ zone: "Valkurm", mob: "Treant" },
					{ zone: "Qufim", mob: "Diremite" },
					{ zone: "Qufim", mob: "Raptor" },
					{ zone: "Qufim", mob: "Tiger" },
					{ zone: "Tavnazia", mob: "Leech" },
					{ zone: "Tavnazia", mob: "Worm" }
				]
			},
			{
				time: 16,
				title: "16:00&ndash;23:59 Job Ability",
				items: [
					{ zone: "Buburimu", mob: "Crab" },
					{ zone: "Buburimu", mob: "Dhamel" },
					{ zone: "Buburimu", mob: "Scorpion" },
					{ zone: "Valkurm", mob: "Goobbue" },
					{ zone: "Valkurm", mob: "Manticore" },
					{ zone: "Valkurm", mob: "Treant" },
					{ zone: "Qufim", mob: "Diremite" },
					{ zone: "Qufim", mob: "Raptor" },
					{ zone: "Qufim", mob: "Tiger" },
					{ zone: "Tavnazia", mob: "Leech" },
					{ zone: "Tavnazia", mob: "Worm" }
				]
			}
		],
		byne: [
			{
				time: 0,
				title: "0:00&ndash;7:59 Job Ability",
				items: [
					{ zone: "Buburimu", mob: "Crawler" },
					{ zone: "Buburimu", mob: "Raven" },
					{ zone: "Buburimu", mob: "Urganite" },
					{ zone: "Valkurm", mob: "Fly" },
					{ zone: "Valkurm", mob: "Flytrap" },
					{ zone: "Valkurm", mob: "Funguar" },
					{ zone: "Qufim", mob: "Gaylas" },
					{ zone: "Qufim", mob: "Kraken" },
					{ zone: "Qufim", mob: "Roc" },
					{ zone: "Tavnazia", mob: "Bugard" },
					{ zone: "Tavnazia", mob: "Hornet" }
				]
			},
			{
				time: 8,
				title: "8:00&ndash;15:59 Weaponskill",
				items: [
					{ zone: "Buburimu", mob: "Crawler" },
					{ zone: "Buburimu", mob: "Raven" },
					{ zone: "Buburimu", mob: "Urganite" },
					{ zone: "Valkurm", mob: "Fly" },
					{ zone: "Valkurm", mob: "Flytrap" },
					{ zone: "Valkurm", mob: "Funguar" },
					{ zone: "Qufim", mob: "Gaylas" },
					{ zone: "Qufim", mob: "Kraken" },
					{ zone: "Qufim", mob: "Roc" },
					{ zone: "Tavnazia", mob: "Bugard" },
					{ zone: "Tavnazia", mob: "Hornet" }
				]
			},
			{
				time: 16,
				title: "16:00&ndash;23:59 Magic Spell",
				items: [
					{ zone: "Buburimu", mob: "Crawler" },
					{ zone: "Buburimu", mob: "Raven" },
					{ zone: "Buburimu", mob: "Urganite" },
					{ zone: "Valkurm", mob: "Fly" },
					{ zone: "Valkurm", mob: "Flytrap" },
					{ zone: "Valkurm", mob: "Funguar" },
					{ zone: "Qufim", mob: "Gaylas" },
					{ zone: "Qufim", mob: "Kraken" },
					{ zone: "Qufim", mob: "Roc" },
					{ zone: "Tavnazia", mob: "Bugard" },
					{ zone: "Tavnazia", mob: "Hornet" }
				]
			}
		]
	};

	voidwatch: {
		jobAbility: { title: string, items: string[] }[],
		blackMagic: { title: string, items: string[] }[],
		whiteMagic: { title: string, items: string[] }[],
		ninjutsu: { title: string, items: string[] }[],
		bardSongs: { title: string, items: string[] }[],
		blueMagic: { title: string, items: string[] }[]
	} = {
		jobAbility: [
			{
				title: 'Black Mage',
				items: [
					"Enmity Douse"
				]
			},
			{
				title: 'Corsair',
				items: [
					"Fire Shot",
					"Ice Shot",
					"Wind Shot",
					"Earth Shot",
					"Thunder Shot",
					"Water Shot"
				]
			},
			{
				title: 'Dancer',
				items: [
					"Quickstep",
					"Stutter Step",
					"Box Step",
					"Feather Step",
					"Violent Fluorish",
					"Animated Fluorish",
					"Desperate Fluorish"
				]
			},
			{
				title: 'Dark Knight',
				items: [
					"Weapon Bash"
				]
			},
			{
				title: 'Dragoon',
				items: [
					"Jump",
					"High Jump",
					"Spirit Jump",
					"Soul Jump"
				]
			},
			{
				title: 'Monk',
				items: [
					"Chi Blast"
				]
			},
			{
				title: 'Paladin',
				items: [
					"Shield Bash"
				]
			},
			{
				title: 'Ranger',
				items: [
					"Shadowbind"
				]
			},
			{
				title: 'Scholar',
				items: [
					"Libra"
				]
			},
			{
				title: 'Summoner',
				items: [
					"Carbuncle&rsquo;s Holy Mist",
					"Fenrir&rsquo;s Lunar Bay",
					"Diabolos&rsquo;s Night Terror",
					"Ifrit&rsquo;s Fire IV",
					"Shiva&rsquo;s Blizzard IV",
					"Garuda&rsquo;s Aero IV",
					"Titan&rsquo;s Stone IV",
					"Ramuh&rsquo;s Thunder IV",
					"Leviathan&rsquo;s Water IV",
				]
			},
			{
				title: 'Thief',
				items: [
					"Bully"
				]
			},
			{
				title: 'Warrior',
				items: [
					"Provoke"
				]
			}
		],
		blackMagic: [
			{
				title: "darkness",
				items: [
					"Noctohelix",
					"Drain",
					"Drain II",
					"Aspir",
					"Aspir II",
					"Absorb-STR",
					"Absorb-DEX",
					"Absorb-AGI",
					"Absorb-VIT",
					"Absorb-INT",
					"Absorb-MND",
					"Absorb-CHR",
					"Absorb-TP",
					"Absorb-ACC",
					"Blind",
					"Dispel",
					"Bio II"
				]
			},
			{
				title: "earth",
				items: [
					"Geohelix",
					"Stone II",
					"Stone III",
					"Stone IV",
					"Stonega",
					"Stonega II",
					"Stonega III",
					"Stoneja",
					"Quake",
					"Rasp"
				]
			},
			{
				title: "fire",
				items: [
					"Pyrohelix",
					"Fire II",
					"Fire III",
					"Fire IV",
					"Firaga",
					"Firaga II",
					"Firaga III",
					"Firaja",
					"Flare",
					"Burn"
				]
			},
			{
				title: "ice",
				items: [
					"Cryohelix",
					"Blizzard II",
					"Blizzard III",
					"Blizzard IV",
					"Blizzaga",
					"Blizzaga II",
					"Blizzaga III",
					"Blizzaja",
					"Freeze",
					"Frost"
				]
			},
			{
				title: "light",
				items: [
					"Luminohelix"
				]
			},
			{
				title: "lightning",
				items: [
					"Ionohelix",
					"Thunder II",
					"Thunder III",
					"Thunder IV",
					"Thundaga",
					"Thundaga II",
					"Thundaga III",
					"Thundaja",
					"Burst",
					"Shock",
					"Stun"
				]
			},
			{
				title: "water",
				items: [
					"Hydrohelix",
					"Water II",
					"Water III",
					"Water IV",
					"Waterga",
					"Waterga II",
					"Waterga III",
					"Waterja",
					"Flood",
					"Drown",
					"Poison",
					"Poison II",
					"Poisonga"
				]
			},
			{
				title: "wind",
				items: [
					"Anemohelix",
					"Aero II",
					"Aero III",
					"Aero IV",
					"Aeroga",
					"Aeroga II",
					"Aeroga II",
					"Aeroja",
					"Tornado",
					"Choke"
				]
			}
		],
		whiteMagic: [
			{
				title: "earth",
				items: [
					"Slow"
				]
			},
			{
				title: "fire",
				items: [
					"Addle"
				]
			},
			{
				title: "ice",
				items: [
					"Paralyze"
				]
			},
			{
				title: "light",
				items: [
					"Banish II",
					"Banish III",
					"Banishga",
					"Banishga II",
					"Holy",
					"Flash",
					"Dia II",
					"Diaga"
				]
			}
		],
		ninjutsu: [
			{
				title: "darkness",
				items: [
					"Kurayami: Ichi",
					"Kurayami: Ni",
					"Yurin: Ichi"
				]
			},
			{
				title: "earth",
				items: [
					"Doton: Ichi",
					"Doton: Ni",
					"Hojo: Ichi",
					"Hojo: Ni"
				]
			},
			{
				title: "fire",
				items: [
					"Katon: Ichi",
					"Katon: Ni"
				]
			},
			{
				title: "ice",
				items: [
					"Hyoton: Ichi",
					"Hyoton: Ni",
					"Jubaku: Ichi"
				]
			},
			{
				title: "lightning",
				items: [
					"Raiton: Ichi",
					"Raiton: Ni"
				]
			},
			{
				title: "water",
				items: [
					"Suiton: Ichi",
					"Suiton: Ni",
					"Dokumori: Ichi",
					"Aisha: Ichi"
				]
			},
			{
				title: "wind",
				items: [
					"Huton: Ichi",
					"Huton: Ni"
				]
			}
		],
		bardSongs: [
			{
				title: "darkness",
				items: [
					"Light Threnody"
				]
			},
			{
				title: "earth",
				items: [
					"Lightning Threnody",
					"Battlefield Elegy",
					"Carnage Elegy"
				]
			},
			{
				title: "fire",
				items: [
					"Ice Threnody"
				]
			},
			{
				title: "ice",
				items: [
					"Wind Threnody"
				]
			},
			{
				title: "light",
				items: [
					"Dark Threnody",
					"Magic Finale"
				]
			},
			{
				title: "lightning",
				items: [
					"Water Threnody"
				]
			},
			{
				title: "water",
				items: [
					"Fire Threnody"
				]
			},
			{
				title: "wind",
				items: [
					"Earth Threnody"
				]
			}
		],
		blueMagic: [
			{
				title: "darkness",
				items: [
					"Death Ray",
					"Eyes On Me",
					"Sandspray"
				]
			},
			{
				title: "earth",
				items: [
					"Bad Breath",
					"Cimicine Discharge",
					"Magnetite Cloud",
					"Sandspin"
				]
			},
			{
				title: "fire",
				items: [
					"Blastbomb",
					"Firespit",
					"Heat Breath",
					"Thermal Pulse"
				]
			},
			{
				title: "ice",
				items: [
					"Cold Wave",
					"Frost Breath",
					"Ice Break",
					"Infrasonics"
				]
			},
			{
				title: "light",
				items: [
					"Actinic Burst",
					"Blank Gaze",
					"Light of Pennance",
					"Radiant Breath"
				]
			},
			{
				title: "lightning",
				items: [
					"Blitzstrahl",
					"Charged Whisker",
					"Mind Blast",
					"Temporal Shift"
				]
			},
			{
				title: "water",
				items: [
					"Acrid Stream",
					"Corrosive Ooze",
					"Cursed Sphere",
					"Maelstrom",
					"Awful Eye"
				]
			},
			{
				title: "wind",
				items: [
					"Hetacomb Wave",
					"Leafstorm",
					"Mysterious Light",
					"Reaving Wind"
				]
			}
		]
	};

	vanatime: string;
	timer: any;

	constructor(public events: Events) {
		self = this;
		// Create an FFXI object and put VanaDate class in the global scope
		//window.FFXI = new FFXI(window);
		//window.VanaDate = VanaDate;
		self.reset();
	}

	private publish = _.debounce((time: string): void => {
		self.events.publish('time', time);
	}, 5000, true);

	update(): void {
		try {
			let now = new VanaDate(),
				hour = now.hour,
				minute = now.minute < 10 ? '0' + now.minute : now.minute,
				vt = `${hour}:${minute}`;
			//console.log(`update: ${vt}`);
			//var dateTimeString = `${now.year}/${now.month}/${now.day} ${now.hour}:${now.minute}.${now.second}`;
			self.vanatime = vt;
			//filter dynamis triggers
			if (vt == '0:00' || vt == '8:00' || vt == '16:00') {
				self.publish('time', vt);
			}
		} catch (ex) {
			console.log(ex.message);
		}
	}
	clear(): void {
		try {
			clearInterval(self.timer);
		} catch (ex) {
			console.log(ex.mesage);
		}
	}
	reset(): void {
		try {
			if (self.timer) self.clear();
			//self.vanadate = new VanaDate();
			//self.vanadate.start();
			//self.vanadate = new VanaDate();
			//console.log(self.vanadate);
			self.timer = setInterval(self.update, 500, true);
		} catch (ex) {
			console.log(ex.mesage);
			self.clear();
		}
	}

	hour(): number {
		return new VanaDate().hour;
	}
}

/////////////////////////////////////////////////////////////////////
// VanaDate class
// Represents a fixed point in time.
// Constructor takes either a JavaScript Date representing Earth time,
// or a number of Vana'diel seconds since Year 0.
export class VanaDate {

	////////////////
	// Constants
	// Earth time : 2002/06/23 16:00 GMT
	// Vana'diel time : 0898/02/01 00:00
	private VANA_BIRTH = new Date(Date.UTC(2002, 5, 23, 15, 0, 0));
	private VANA_SECS_SINCE_YEAR_0 = (((898 * 360) + 30) * 24 * 60 * 60);
	private EARTH_TIME_YEAR_0 = new Date(this.VANA_BIRTH.getTime() - ((this.VANA_SECS_SINCE_YEAR_0 * 1000) / 25));

	private VANA_SECS_PER_YEAR = 360 * 24 * 60 * 60; // 360 days per year
	private VANA_SECS_PER_MONTH = 30 * 24 * 60 * 60; // 30 days per month
	private VANA_SECS_PER_WEEK = 8 * 24 * 60 * 60; // Eight Days a Week
	private VANA_SECS_PER_DAY = 24 * 60 * 60; // 24 hours per day
	private VANA_SECS_PER_HOUR = 60 * 60; // 60 minutes per hour

	////////////////////
	// Utility functions
	getSecs(hours, minutes) {
		return (hours * this.VANA_SECS_PER_HOUR) + (minutes * 60);
	}

	public earthDate;
	public time; // number of vana'diel seconds since midnight 0000/01/01
	public year;
	public month;
	public day;
	public weekDay;
	public hour;
	public minute;
	public second;
	public weekDayName;

	private moonPhase: number;
	private moonPhaseName: string;
	private moonPercent: number;

	private dayStart;
	private dayEnd;

	public dayNames = ['Firesday', 'Earthsday', 'Watersday', 'Windsday','Iceday', 'Lightningday', 'Lightsday', 'Darksday'];

	public moonPhases = ['New Moon', 'Waxing Crescent', 'First Quarter Moon', 'Waxing Gibbous','Full Moon', 'Waning Gibbous', 'Last Quarter Moon', 'Waning Crescent'];

	constructor(date?) {
		// vTime is the number of Vana'diel seconds since 0000/01/01
		//console.debug('date:');
		//console.log(date);
		let eTime, vTime;
		if (date && typeof date == 'number') {
			//console.log(`date number: ${date}`);
			vTime = Math.round(date);
			eTime = new Date(this.EARTH_TIME_YEAR_0.getTime() + Math.round(vTime * 1000 / 25));
		} else {
			if (date && date instanceof Date) {
				//console.log(`date object: ${date}`);
				eTime = date;
			} else {
				//console.log(`date null`);
				eTime = new Date();
			}
			let eMilliSinceVanaEpoch = eTime.getTime() - this.EARTH_TIME_YEAR_0.getTime();
			vTime = Math.round(eMilliSinceVanaEpoch / 1000 * 25);
		}
		//console.log(vTime, eTime);
		// Calculate the individual parts of the date
		this.earthDate = eTime;
		this.time = vTime; // number of vana'diel seconds since midnight 0000/01/01
		this.year = Math.floor(vTime / this.VANA_SECS_PER_YEAR);
		this.month = Math.floor((vTime % this.VANA_SECS_PER_YEAR) / this.VANA_SECS_PER_MONTH);
		this.day = Math.floor((vTime % this.VANA_SECS_PER_MONTH) / this.VANA_SECS_PER_DAY);
		this.weekDay = Math.floor((vTime % this.VANA_SECS_PER_WEEK) / this.VANA_SECS_PER_DAY);
		this.hour = Math.floor((vTime % this.VANA_SECS_PER_DAY) / this.VANA_SECS_PER_HOUR);
		this.minute = Math.floor((vTime % this.VANA_SECS_PER_HOUR) / 60);
		this.second = Math.floor(vTime % 60);
		this.weekDayName = this.dayNames[this.weekDay];

		// Calculate phase of the moon.
		var daysPerCycle = 84;
		// This formula was borrowed from the MithraPride clock. I have no fucking clue what is going on here.
		// The value ranges from -100 (full) to 0 (new) to 100 (full again).
		var moonPercent = ((((Math.floor(vTime / this.VANA_SECS_PER_DAY) + 26) % daysPerCycle) - (daysPerCycle / 2)) / (daysPerCycle / 2)) * 100;
		var moonPhase;

		// There are gaps in the ranges here, but it still works because the moon phase only changes
		// at the beginning of a new day rather than continuously over time.
		if (moonPercent >= 7 && moonPercent <= 38) {
			moonPhase = 1; // Waxing Crescent
		} else if (moonPercent >= 40 && moonPercent <= 55) {
			moonPhase = 2; // First Quarter Moon
		} else if (moonPercent >= 57 && moonPercent <= 88) {
			moonPhase = 3; // Waxing Gibbous
		} else if (moonPercent >= 90 || moonPercent <= -95) {
			moonPhase = 4; // Full Moon
		} else if (moonPercent >= -93 && moonPercent <= -62) {
			moonPhase = 5; // Waning Gibbous
		} else if (moonPercent >= -60 && moonPercent <= -45) {
			moonPhase = 6; // Last Quarter Moon
		} else if (moonPercent >= -43 && moonPercent <= -12) {
			moonPhase = 7; // Waning Crescent
		} else {
			moonPhase = 0; // New Moon
		}
		this.moonPhase = moonPhase;
		this.moonPhaseName = this.moonPhases[moonPhase];
		this.moonPercent = Math.round(Math.abs(moonPercent));

		// Calculate when this day starts and ends in earth time
		var vSecSinceDayStart = (vTime % this.VANA_SECS_PER_DAY);
		var eMilliSinceDayStart = Math.floor(vSecSinceDayStart * 1000 / 25);
		this.dayStart = new Date(eTime.getTime() - eMilliSinceDayStart);

		var vSecUntilDayEnd = this.VANA_SECS_PER_DAY - (vTime % this.VANA_SECS_PER_DAY);
		var eMilliUntilDayEnd = Math.floor(vSecUntilDayEnd * 1000 / 25);
		this.dayEnd = new Date(eTime.getTime() + eMilliUntilDayEnd);
	}

	start() {
		var newVTime = this.time - (this.time % this.VANA_SECS_PER_DAY);
		return new VanaDate(newVTime);
	}

	next(days) {
		var numDays = days;
		if (typeof (numDays) != 'number') {
			numDays = 1;
		}
		var newVTime = this.time + (this.VANA_SECS_PER_DAY * numDays);
		return new VanaDate(newVTime);
	}

	prev(days) {
		var numDays = days;
		if (typeof (numDays) != 'number') {
			numDays = 1;
		}

		var newVTime = this.time - (this.VANA_SECS_PER_DAY * numDays);
		return new VanaDate(newVTime);
	}
}