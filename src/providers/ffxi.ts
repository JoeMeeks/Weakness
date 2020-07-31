import { Injectable } from '@angular/core';
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
		red: { element: string, weapon: string, weaponskill: string }[],
		yellow: { element: string, order: number, type: string, spell: string }[],
		blue: {
			piercing: { weapon: string, weaponskill: string }[],
			slashing: { weapon: string, weaponskill: string }[],
			blunt: { weapon: string, weaponskill: string }[]
		}
	} = {
		red: [
			{ element: "light", weapon: "CLB", weaponskill: "Seraph Strike" },
			{ element: "light", weapon: "GKT", weaponskill: "Tachi: Koki" },
			{ element: "light", weapon: "STF", weaponskill: "Sunburst" },
			{ element: "light", weapon: "SWD", weaponskill: "Seraph Blade" },
			{ element: "darkness", weapon: "DAG", weaponskill: "Energy Drain" },
			{ element: "darkness", weapon: "KAT", weaponskill: "Blade: Ei" },
			{ element: "darkness", weapon: "SCY", weaponskill: "Shadow of Death" },
			{ element: "fire", weapon: "SWD", weaponskill: "Red Lotus Blade" },
			{ element: "ice", weapon: "GSD", weaponskill: "Freezebite" },
			{ element: "wind", weapon: "DAG", weaponskill: "Cyclone" },
			{ element: "wind", weapon: "GKT", weaponskill: "Tachi: Jinpu" },
			{ element: "earth", weapon: "STF", weaponskill: "Earth Crusher" },
			{ element: "lightning", weapon: "PLM", weaponskill: "Raiden Thrust" }
		],
		yellow: [
			{ element: "light", order: 1, type: "WHM", spell: "Banish II" },
			{ element: "light", order: 2, type: "WHM", spell: "Banish III" },
			{ element: "light", order: 3, type: "WHM", spell: "Banishga II" },
			{ element: "light", order: 4, type: "WHM", spell: "Holy" },
			{ element: "light", order: 5, type: "WHM", spell: "Flash" },
			{ element: "light", order: 6, type: "BLU", spell: "Radiant Breath" },
			{ element: "light", order: 7, type: "BRD", spell: "Dark Threnody" },
			{ element: "darkness", order: 1, type: "BLM", spell: "Aspir" },
			{ element: "darkness", order: 2, type: "BLM", spell: "Drain" },
			{ element: "darkness", order: 3, type: "BLM", spell: "Bio II" },
			{ element: "darkness", order: 4, type: "BLM", spell: "Dispel" },
			{ element: "darkness", order: 5, type: "BLU", spell: "Eyes On Me" },
			{ element: "darkness", order: 6, type: "NIN", spell: "Kurayami: Ni" },
			{ element: "darkness", order: 7, type: "BRD", spell: "Light Threnody" },
			{ element: "fire", order: 1, type: "BLM", spell: "Fire III" },
			{ element: "fire", order: 2, type: "BLM", spell: "Fire IV" },
			{ element: "fire", order: 3, type: "BLM", spell: "Firaga III" },
			{ element: "fire", order: 4, type: "BLM", spell: "Flare" },
			{ element: "fire", order: 5, type: "BLU", spell: "Heat Breath" },
			{ element: "fire", order: 6, type: "NIN", spell: "Katon: Ni" },
			{ element: "fire", order: 7, type: "BRD", spell: "Ice Threnody" },
			{ element: "ice", order: 1, type: "BLM", spell: "Blizzard III" },
			{ element: "ice", order: 2, type: "BLM", spell: "Blizzard IV" },
			{ element: "ice", order: 3, type: "BLM", spell: "Blizzaga III" },
			{ element: "ice", order: 4, type: "BLM", spell: "Freeze" },
			{ element: "ice", order: 5, type: "BLU", spell: "Ice Break" },
			{ element: "ice", order: 6, type: "NIN", spell: "Hyoton: Ni" },
			{ element: "ice", order: 7, type: "BRD", spell: "Wind Threnody" },
			{ element: "wind", order: 1, type: "BLM", spell: "Aero III" },
			{ element: "wind", order: 2, type: "BLM", spell: "Aero IV" },
			{ element: "wind", order: 3, type: "BLM", spell: "Aeroga III" },
			{ element: "wind", order: 4, type: "BLM", spell: "Tornado" },
			{ element: "wind", order: 5, type: "BLU", spell: "Mysterious Light" },
			{ element: "wind", order: 6, type: "NIN", spell: "Huton: Ni" },
			{ element: "wind", order: 7, type: "BRD", spell: "Earth Threnody" },
			{ element: "earth", order: 1, type: "BLM", spell: "Stone III" },
			{ element: "earth", order: 2, type: "BLM", spell: "Stone IV" },
			{ element: "earth", order: 3, type: "BLM", spell: "Stonega III" },
			{ element: "earth", order: 4, type: "BLM", spell: "Quake" },
			{ element: "earth", order: 5, type: "BLU", spell: "Magnetite Cloud" },
			{ element: "earth", order: 6, type: "NIN", spell: "Doton: Ni" },
			{ element: "earth", order: 7, type: "BRD", spell: "Lightning Threnody" },
			{ element: "lightning", order: 1, type: "BLM", spell: "Thunder III" },
			{ element: "lightning", order: 2, type: "BLM", spell: "Thunder IV" },
			{ element: "lightning", order: 3, type: "BLM", spell: "Thundaga III" },
			{ element: "lightning", order: 4, type: "BLM", spell: "Burst" },
			{ element: "lightning", order: 5, type: "BLU", spell: "Mind Blast" },
			{ element: "lightning", order: 6, type: "NIN", spell: "Raiton: Ni" },
			{ element: "lightning", order: 7, type: "BRD", spell: "Water Threnody" },
			{ element: "water", order: 1, type: "BLM", spell: "Water III" },
			{ element: "water", order: 2, type: "BLM", spell: "Water IV" },
			{ element: "water", order: 3, type: "BLM", spell: "Waterga III" },
			{ element: "water", order: 4, type: "BLM", spell: "Flood" },
			{ element: "water", order: 5, type: "BLU", spell: "Maelstrom" },
			{ element: "water", order: 6, type: "NIN", spell: "Suiton: Ni" },
			{ element: "water", order: 7, type: "BRD", spell: "Fire Threnody" }
		],
		blue: {
			piercing: [
				{ weapon: "BOW", weaponskill: "Arching Arrow" },
				{ weapon: "BOW", weaponskill: "Blast Arrow" },
				{ weapon: "BOW", weaponskill: "Empyreal Arrow" },
				{ weapon: "BOW", weaponskill: "Sidewinder" },
				{ weapon: "DAG", weaponskill: "Dancing Edge" },
				{ weapon: "DAG", weaponskill: "Evisceration" },
				{ weapon: "DAG", weaponskill: "Shadowstitch" },
				{ weapon: "DAG", weaponskill: "Shark Bite" },
				{ weapon: "GUN", weaponskill: "Blash Shot" },
				{ weapon: "GUN", weaponskill: "Detonator" },
				{ weapon: "GUN", weaponskill: "Heavy Shot" },
				{ weapon: "GUN", weaponskill: "Slug Shot" },
				{ weapon: "PLM", weaponskill: "Impulse Drive" },
				{ weapon: "PLM", weaponskill: "Skewer" },
				{ weapon: "PLM", weaponskill: "Wheeling Thrust" }
			],
			slashing: [
				{ weapon: "AXE", weaponskill: "Decimation" },
				{ weapon: "AXE", weaponskill: "Mistral Axe" },
				{ weapon: "GAX", weaponskill: "Full Break" },
				{ weapon: "GAX", weaponskill: "Steel Cyclone" },
				{ weapon: "GKT", weaponskill: "Tachi: Gekko" },
				{ weapon: "GKT", weaponskill: "Tachi: Kasha" },
				{ weapon: "GSD", weaponskill: "Ground Strike" },
				{ weapon: "GSD", weaponskill: "Spinning Slash" },
				{ weapon: "KAT", weaponskill: "Blade: Ku" },
				{ weapon: "KAT", weaponskill: "Blade: Ten" },
				{ weapon: "SCY", weaponskill: "Cross Reaper" },
				{ weapon: "SCY", weaponskill: "Spiral Hell" },
				{ weapon: "SWD", weaponskill: "Savage Blade" },
				{ weapon: "SWD", weaponskill: "Swift Blade" },
				{ weapon: "SWD", weaponskill: "Vorpal Blade" }
			],
			blunt: [
				{ weapon: "CLB", weaponskill: "Black Halo" },
				{ weapon: "CLB", weaponskill: "Hexa Strike" },
				{ weapon: "CLB", weaponskill: "Judgement" },
				{ weapon: "CLB", weaponskill: "Skullbreaker" },
				{ weapon: "CLB", weaponskill: "True Strike" },
				{ weapon: "HTH", weaponskill: "Asuran Fists" },
				{ weapon: "HTH", weaponskill: "Dragon Kick" },
				{ weapon: "HTH", weaponskill: "Howling Fist" },
				{ weapon: "HTH", weaponskill: "Raging Fists" },
				{ weapon: "HTH", weaponskill: "Spinning Attack" },
				{ weapon: "STF", weaponskill: "Full Swing" },
				{ weapon: "STF", weaponskill: "Heavy Swing" },
				{ weapon: "STF", weaponskill: "Retribution" },
				{ weapon: "STF", weaponskill: "Shell Crusher" },
				{ weapon: "STF", weaponskill: "Spirit Taker" }
			]
		}
	};

	voidwatch: {
		ability: { job: string, name: string, element?: string }[],
		blackMagic: { element: string, order: number, spell: string }[],
		whiteMagic: { element: string, order: number, spell: string }[],
		ninjutsu: { element: string, order: number, spell: string }[],
		bardSongs: { element: string, order: number, spell: string }[],
		blueMagic: { element: string, order: number, spell: string }[]
	} = {
		ability: [
			{ job: "Black Mage", name: "Enmity Douse" },
			{ job: "Corsair", name: "Fire Shot" },
			{ job: "Corsair", name: "Ice Shot" },
			{ job: "Corsair", name: "Wind Shot" },
			{ job: "Corsair", name: "Earth Shot" },
			{ job: "Corsair", name: "Thunder Shot" },
			{ job: "Corsair", name: "Water Shot" },
			{ job: "Dancer", name: "Quickstep" },
			{ job: "Dancer", name: "Stutter Step" },
			{ job: "Dancer", name: "Box Step" },
			{ job: "Dancer", name: "Feather Step" },
			{ job: "Dancer", name: "Violent Fluorish" },
			{ job: "Dancer", name: "Animated Fluorish" },
			{ job: "Dancer", name: "Desperate Fluorish" },
			{ job: "Dark Knight", name: "Weapon Bash" },
			{ job: "Dragoon", name: "Jump" },
			{ job: "Dragoon", name: "High Jump" },
			{ job: "Dragoon", name: "Spirit Jump" },
			{ job: "Dragoon", name: "Soul Jump" },
			{ job: "Monk", name: "Chi Blast" },
			{ job: "Paladin", name: "Shield Bash" },
			{ job: "Ranger", name: "Shadowbind" },
			{ job: "Scholar", name: "Libra" },
			{ job: "Summoner", name: "Carbuncle&rsquo;s Holy Mist", element: "light" },
			{ job: "Summoner", name: "Fenrir&rsquo;s Lunar Bay", element: "darkness" },
			{ job: "Summoner", name: "Diabolos&rsquo;s Night Terror", element: "darkness" },
			{ job: "Summoner", name: "Ifrit&rsquo;s Fire IV", element: "fire" },
			{ job: "Summoner", name: "Shiva&rsquo;s Blizzard IV", element: "ice" },
			{ job: "Summoner", name: "Garuda&rsquo;s Aero IV", element: "wind" },
			{ job: "Summoner", name: "Titan&rsquo;s Stone IV", element: "earth" },
			{ job: "Summoner", name: "Ramuh&rsquo;s Thunder IV", element: "lightning" },
			{ job: "Summoner", name: "Leviathan&rsquo;s Water IV", element: "water" },
			{ job: "Thief", name: "Bully" },
			{ job: "Warrior", name: "Provoke" }
		],
		blackMagic: [
			{ element: "light", order: 1, spell: "Luminohelix" },
			{ element: "darkness", order: 1, spell: "Noctohelix" },
			{ element: "darkness", order: 2, spell: "Drain" },
			{ element: "darkness", order: 3, spell: "Drain II" },
			{ element: "darkness", order: 4, spell: "Aspir" },
			{ element: "darkness", order: 5, spell: "Aspir II" },
			{ element: "darkness", order: 6, spell: "Absorb-STR" },
			{ element: "darkness", order: 7, spell: "Absorb-DEX" },
			{ element: "darkness", order: 8, spell: "Absorb-AGI" },
			{ element: "darkness", order: 9, spell: "Absorb-VIT" },
			{ element: "darkness", order: 10, spell: "Absorb-INT" },
			{ element: "darkness", order: 11, spell: "Absorb-MND" },
			{ element: "darkness", order: 12, spell: "Absorb-CHR" },
			{ element: "darkness", order: 13, spell: "Absorb-TP" },
			{ element: "darkness", order: 14, spell: "Absorb-ACC" },
			{ element: "darkness", order: 15, spell: "Blind" },
			{ element: "darkness", order: 16, spell: "Dispel" },
			{ element: "darkness", order: 17, spell: "Bio II" },
			{ element: "fire", order: 1, spell: "Pyrohelix" },
			{ element: "fire", order: 2, spell: "Fire II" },
			{ element: "fire", order: 3, spell: "Fire III" },
			{ element: "fire", order: 4, spell: "Fire IV" },
			{ element: "fire", order: 5, spell: "Firaga" },
			{ element: "fire", order: 6, spell: "Firaga II" },
			{ element: "fire", order: 7, spell: "Firaga III" },
			{ element: "fire", order: 8, spell: "Firaja" },
			{ element: "fire", order: 9, spell: "Flare" },
			{ element: "fire", order: 10, spell: "Burn" },
			{ element: "ice", order: 1, spell: "Cryohelix" },
			{ element: "ice", order: 2, spell: "Blizzard II" },
			{ element: "ice", order: 3, spell: "Blizzard III" },
			{ element: "ice", order: 4, spell: "Blizzard IV" },
			{ element: "ice", order: 5, spell: "Blizzaga" },
			{ element: "ice", order: 6, spell: "Blizzaga II" },
			{ element: "ice", order: 7, spell: "Blizzaga III" },
			{ element: "ice", order: 8, spell: "Blizzaja" },
			{ element: "ice", order: 9, spell: "Freeze" },
			{ element: "ice", order: 10, spell: "Frost" },
			{ element: "wind", order: 1, spell: "Anemohelix" },
			{ element: "wind", order: 2, spell: "Aero II" },
			{ element: "wind", order: 3, spell: "Aero III" },
			{ element: "wind", order: 4, spell: "Aero IV" },
			{ element: "wind", order: 5, spell: "Aeroga" },
			{ element: "wind", order: 6, spell: "Aeroga II" },
			{ element: "wind", order: 7, spell: "Aeroga II" },
			{ element: "wind", order: 8, spell: "Aeroja" },
			{ element: "wind", order: 9, spell: "Tornado" },
			{ element: "wind", order: 10, spell: "Choke" },
			{ element: "earth", order: 1, spell: "Geohelix" },
			{ element: "earth", order: 2, spell: "Stone II" },
			{ element: "earth", order: 3, spell: "Stone III" },
			{ element: "earth", order: 4, spell: "Stone IV" },
			{ element: "earth", order: 5, spell: "Stonega" },
			{ element: "earth", order: 6, spell: "Stonega II" },
			{ element: "earth", order: 7, spell: "Stonega III" },
			{ element: "earth", order: 8, spell: "Stoneja" },
			{ element: "earth", order: 9, spell: "Quake" },
			{ element: "earth", order: 10, spell: "Rasp" },
			{ element: "lightning", order: 1, spell: "Ionohelix" },
			{ element: "lightning", order: 2, spell: "Thunder II" },
			{ element: "lightning", order: 3, spell: "Thunder III" },
			{ element: "lightning", order: 4, spell: "Thunder IV" },
			{ element: "lightning", order: 5, spell: "Thundaga" },
			{ element: "lightning", order: 6, spell: "Thundaga II" },
			{ element: "lightning", order: 7, spell: "Thundaga III" },
			{ element: "lightning", order: 8, spell: "Thundaja" },
			{ element: "lightning", order: 9, spell: "Burst" },
			{ element: "lightning", order: 10, spell: "Shock" },
			{ element: "lightning", order: 11, spell: "Stun" },
			{ element: "water", order: 1, spell: "Hydrohelix" },
			{ element: "water", order: 2, spell: "Water II" },
			{ element: "water", order: 3, spell: "Water III" },
			{ element: "water", order: 4, spell: "Water IV" },
			{ element: "water", order: 5, spell: "Waterga" },
			{ element: "water", order: 6, spell: "Waterga II" },
			{ element: "water", order: 7, spell: "Waterga III" },
			{ element: "water", order: 8, spell: "Waterja" },
			{ element: "water", order: 9, spell: "Flood" },
			{ element: "water", order: 10, spell: "Drown" },
			{ element: "water", order: 11, spell: "Poison" },
			{ element: "water", order: 12, spell: "Poison II" },
			{ element: "water", order: 13, spell: "Poisonga" }
		],
		whiteMagic: [
			{ element: "light", order: 1, spell: "Banish II" },
			{ element: "light", order: 2, spell: "Banish III" },
			{ element: "light", order: 3, spell: "Banishga" },
			{ element: "light", order: 4, spell: "Banishga II" },
			{ element: "light", order: 5, spell: "Holy" },
			{ element: "light", order: 6, spell: "Flash" },
			{ element: "light", order: 7, spell: "Dia II" },
			{ element: "light", order: 8, spell: "Diaga" },
			{ element: "fire", order: 1, spell: "Addle" },
			{ element: "ice", order: 1, spell: "Paralyze" },
			{ element: "earth", order: 1, spell: "Slow" }
		],
		ninjutsu: [
			{ element: "darkness", order: 1, spell: "Kurayami: Ichi" },
			{ element: "darkness", order: 2, spell: "Kurayami: Ni" },
			{ element: "darkness", order: 3, spell: "Yurin: Ichi" },
			{ element: "fire", order: 1, spell: "Katon: Ichi" },
			{ element: "fire", order: 2, spell: "Katon: Ni" },
			{ element: "ice", order: 1, spell: "Hyoton: Ichi" },
			{ element: "ice", order: 2, spell: "Hyoton: Ni" },
			{ element: "ice", order: 3, spell: "Jubaku: Ichi" },
			{ element: "wind", order: 1, spell: "Huton: Ichi" },
			{ element: "wind", order: 2, spell: "Huton: Ichi" },
			{ element: "earth", order: 1, spell: "Doton: Ichi" },
			{ element: "earth", order: 2, spell: "Doton: Ni" },
			{ element: "earth", order: 3, spell: "Hojo: Ichi" },
			{ element: "earth", order: 4, spell: "Hojo: Ni" },
			{ element: "lightning", order: 1, spell: "Raiton: Ichi" },
			{ element: "lightning", order: 2, spell: "Raiton: Ni" },
			{ element: "water", order: 1, spell: "Suiton: Ichi" },
			{ element: "water", order: 2, spell: "Suiton: Ni" },
			{ element: "water", order: 3, spell: "Dokumori: Ichi" },
			{ element: "water", order: 4, spell: "Aisha: Ichi" }
		],
		bardSongs: [
			{ element: "light", order: 1, spell: "Dark Threnody" },
			{ element: "light", order: 2, spell: "Magic Finale" },
			{ element: "darkness", order: 1, spell: "Light Threnody" },
			{ element: "fire", order: 1, spell: "Ice Threnody" },
			{ element: "ice", order: 1, spell: "Wind Threnody" },
			{ element: "wind", order: 1, spell: "Earth Threnody" },
			{ element: "earth", order: 1, spell: "Lightning Threnody" },
			{ element: "earth", order: 2, spell: "Battlefield Elegy" },
			{ element: "earth", order: 3, spell: "Carnage Elegy" },
			{ element: "lightning", order: 1, spell: "Water Threnody" },
			{ element: "water", order: 1, spell: "Fire Threnody" }
		],
		blueMagic: [
			{ element: "light", order: 1, spell: "Actinic Burst" },
			{ element: "light", order: 2, spell: "Blank Gaze" },
			{ element: "light", order: 3, spell: "Light of Pennance" },
			{ element: "light", order: 4, spell: "Radiant Breath" },
			{ element: "darkness", order: 1, spell: "Death Ray" },
			{ element: "darkness", order: 2, spell: "Eyes On Me" },
			{ element: "darkness", order: 3, spell: "Sandspray" },
			{ element: "fire", order: 1, spell: "Blastbomb" },
			{ element: "fire", order: 2, spell: "Firespit" },
			{ element: "fire", order: 3, spell: "Heat Breath" },
			{ element: "fire", order: 4, spell: "Thermal Pulse" },
			{ element: "ice", order: 1, spell: "Cold Wave" },
			{ element: "ice", order: 2, spell: "Frost Breath" },
			{ element: "ice", order: 3, spell: "Ice Break" },
			{ element: "ice", order: 4, spell: "Infrasonics" },
			{ element: "wind", order: 1, spell: "Hetacomb Wave" },
			{ element: "wind", order: 2, spell: "Leafstorm" },
			{ element: "wind", order: 3, spell: "Mysterious Light" },
			{ element: "wind", order: 4, spell: "Reaving Wind" },
			{ element: "earth", order: 1, spell: "Bad Breath" },
			{ element: "earth", order: 2, spell: "Cimicine Discharge" },
			{ element: "earth", order: 3, spell: "Magnetite Cloud" },
			{ element: "earth", order: 4, spell: "Sandspin" },
			{ element: "lightning", order: 1, spell: "Blitzstrahl" },
			{ element: "lightning", order: 2, spell: "Charged Whisker" },
			{ element: "lightning", order: 3, spell: "Mind Blast" },
			{ element: "lightning", order: 4, spell: "Temporal Shift" },
			{ element: "water", order: 1, spell: "Acrid Stream" },
			{ element: "water", order: 2, spell: "Corrosive Ooze" },
			{ element: "water", order: 3, spell: "Cursed Sphere" },
			{ element: "water", order: 4, spell: "Maelstrom" },
			{ element: "water", order: 5, spell: "Awful Eye" }
		]
	};

	dynamis: {
		beastmen: {}[],
		nightmare: {
			ordelle: { zone: string, mob: string, type: string, time: number, sort: number }[],
			tukuku: { zone: string, mob: string, type: string, time: number, sort: number }[],
			byne: { zone: string, mob: string, type: string, time: number, sort: number }[]
		}
	} = {
		beastmen: [
			{ type: "Weaponskill", job: "DRG" },
			{ type: "Weaponskill", job: "DRK" },
			{ type: "Weaponskill", job: "PLD" },
			{ type: "Weaponskill", job: "SAM" },
			{ type: "Weaponskill", job: "WAR" },
			{ type: "Job Ability", job: "BST" },
			{ type: "Job Ability", job: "MNK" },
			{ type: "Job Ability", job: "NIN" },
			{ type: "Job Ability", job: "RNG" },
			{ type: "Job Ability", job: "THF" },
			{ type: "Magic Spell", job: "BLM" },
			{ type: "Magic Spell", job: "BRD" },
			{ type: "Magic Spell", job: "RDM" },
			{ type: "Magic Spell", job: "SMN" },
			{ type: "Magic Spell", job: "WHM" }
		],
		nightmare: {
			ordelle: [
				{ zone: "Buburimu", mob: "Bunny", type: "Magic Spell", time: 0, sort: 1 },
				{ zone: "Buburimu", mob: "Eft", type: "Magic Spell", time: 0, sort: 2 },
				{ zone: "Buburimu", mob: "Mandragora", type: "Magic Spell", time: 0, sort: 3 },
				{ zone: "Valkurm", mob: "Hippogryph", type: "Magic Spell", time: 0, sort: 4 },
				{ zone: "Valkurm", mob: "Sabotender", type: "Magic Spell", time: 0, sort: 5 },
				{ zone: "Valkurm", mob: "Sheep", type: "Magic Spell", time: 0, sort: 6 },
				{ zone: "Qufim", mob: "Snoll", type: "Magic Spell", time: 0, sort: 7 },
				{ zone: "Qufim", mob: "Stirge", type: "Magic Spell", time: 0, sort: 8 },
				{ zone: "Qufim", mob: "Weapon", type: "Magic Spell", time: 0, sort: 9 },
				{ zone: "Tavnazia", mob: "Cluster", type: "Magic Spell", time: 0, sort: 10 },
				{ zone: "Tavnazia", mob: "Makara", type: "Magic Spell", time: 0, sort: 11 },
				{ zone: "Buburimu", mob: "Bunny", type: "Job Ability", time: 8, sort: 12 },
				{ zone: "Buburimu", mob: "Eft", type: "Job Ability", time: 8, sort: 13 },
				{ zone: "Buburimu", mob: "Mandragora", type: "Job Ability", time: 8, sort: 14 },
				{ zone: "Valkurm", mob: "Hippogryph", type: "Job Ability", time: 8, sort: 15 },
				{ zone: "Valkurm", mob: "Sabotender", type: "Job Ability", time: 8, sort: 16 },
				{ zone: "Valkurm", mob: "Sheep", type: "Job Ability", time: 8, sort: 17 },
				{ zone: "Qufim", mob: "Snoll", type: "Job Ability", time: 8, sort: 18 },
				{ zone: "Qufim", mob: "Stirge", type: "Job Ability", time: 8, sort: 19 },
				{ zone: "Qufim", mob: "Weapon", type: "Job Ability", time: 8, sort: 20 },
				{ zone: "Tavnazia", mob: "Cluster", type: "Job Ability", time: 8, sort: 21 },
				{ zone: "Tavnazia", mob: "Makara", type: "Job Ability", time: 8, sort: 22 },
				{ zone: "Buburimu", mob: "Bunny", type: "Weaponskill", time: 16, sort: 23 },
				{ zone: "Buburimu", mob: "Eft", type: "Weaponskill", time: 16, sort: 24 },
				{ zone: "Buburimu", mob: "Mandragora", type: "Weaponskill", time: 16, sort: 25 },
				{ zone: "Valkurm", mob: "Hippogryph", type: "Weaponskill", time: 16, sort: 26 },
				{ zone: "Valkurm", mob: "Sabotender", type: "Weaponskill", time: 16, sort: 27 },
				{ zone: "Valkurm", mob: "Sheep", type: "Weaponskill", time: 16, sort: 28 },
				{ zone: "Qufim", mob: "Snoll", type: "Weaponskill", time: 16, sort: 29 },
				{ zone: "Qufim", mob: "Stirge", type: "Weaponskill", time: 16, sort: 30 },
				{ zone: "Qufim", mob: "Weapon", type: "Weaponskill", time: 16, sort: 31 },
				{ zone: "Tavnazia", mob: "Cluster", type: "Weaponskill", time: 16, sort: 32 },
				{ zone: "Tavnazia", mob: "Makara", type: "Weaponskill", time: 16, sort: 33 }
			],
			tukuku: [
				{ zone: "Buburimu", mob: "Crab", type: "Weaponskill", time: 0, sort: 1 },
				{ zone: "Buburimu", mob: "Dhamel", type: "Weaponskill", time: 0, sort: 2 },
				{ zone: "Buburimu", mob: "Scorpion", type: "Weaponskill", time: 0, sort: 3 },
				{ zone: "Valkurm", mob: "Goobbue", type: "Weaponskill", time: 0, sort: 4 },
				{ zone: "Valkurm", mob: "Manticore", type: "Weaponskill", time: 0, sort: 5 },
				{ zone: "Valkurm", mob: "Treant", type: "Weaponskill", time: 0, sort: 6 },
				{ zone: "Qufim", mob: "Diremite", type: "Weaponskill", time: 0, sort: 7 },
				{ zone: "Qufim", mob: "Raptor", type: "Weaponskill", time: 0, sort: 8 },
				{ zone: "Qufim", mob: "Tiger", type: "Weaponskill", time: 0, sort: 9 },
				{ zone: "Tavnazia", mob: "Leech", type: "Weaponskill", time: 0, sort: 10 },
				{ zone: "Tavnazia", mob: "Worm", type: "Weaponskill", time: 0, sort: 11 },
				{ zone: "Buburimu", mob: "Crab", type: "Magic Spell", time: 8, sort: 12 },
				{ zone: "Buburimu", mob: "Dhamel", type: "Magic Spell", time: 8, sort: 13 },
				{ zone: "Buburimu", mob: "Scorpion", type: "Magic Spell", time: 8, sort: 14 },
				{ zone: "Valkurm", mob: "Goobbue", type: "Magic Spell", time: 8, sort: 15 },
				{ zone: "Valkurm", mob: "Manticore", type: "Magic Spell", time: 8, sort: 16 },
				{ zone: "Valkurm", mob: "Treant", type: "Magic Spell", time: 8, sort: 17 },
				{ zone: "Qufim", mob: "Diremite", type: "Magic Spell", time: 8, sort: 18 },
				{ zone: "Qufim", mob: "Raptor", type: "Magic Spell", time: 8, sort: 19 },
				{ zone: "Qufim", mob: "Tiger", type: "Magic Spell", time: 8, sort: 20 },
				{ zone: "Tavnazia", mob: "Leech", type: "Magic Spell", time: 8, sort: 21 },
				{ zone: "Tavnazia", mob: "Worm", type: "Magic Spell", time: 8, sort: 22 },
				{ zone: "Buburimu", mob: "Crab", type: "Job Ability", time: 16, sort: 23 },
				{ zone: "Buburimu", mob: "Dhamel", type: "Job Ability", time: 16, sort: 24 },
				{ zone: "Buburimu", mob: "Scorpion", type: "Job Ability", time: 16, sort: 25 },
				{ zone: "Valkurm", mob: "Goobbue", type: "Job Ability", time: 16, sort: 26 },
				{ zone: "Valkurm", mob: "Manticore", type: "Job Ability", time: 16, sort: 27 },
				{ zone: "Valkurm", mob: "Treant", type: "Job Ability", time: 16, sort: 28 },
				{ zone: "Qufim", mob: "Diremite", type: "Job Ability", time: 16, sort: 29 },
				{ zone: "Qufim", mob: "Raptor", type: "Job Ability", time: 16, sort: 30 },
				{ zone: "Qufim", mob: "Tiger", type: "Job Ability", time: 16, sort: 31 },
				{ zone: "Tavnazia", mob: "Leech", type: "Job Ability", time: 16, sort: 32 },
				{ zone: "Tavnazia", mob: "Worm", type: "Job Ability", time: 16, sort: 33 }
			],
			byne: [
				{ zone: "Buburimu", mob: "Crawler", type: "Job Ability", time: 0, sort: 1 },
				{ zone: "Buburimu", mob: "Raven", type: "Job Ability", time: 0, sort: 2 },
				{ zone: "Buburimu", mob: "Urganite", type: "Job Ability", time: 0, sort: 3 },
				{ zone: "Valkurm", mob: "Fly", type: "Job Ability", time: 0, sort: 4 },
				{ zone: "Valkurm", mob: "Flytrap", type: "Job Ability", time: 0, sort: 5 },
				{ zone: "Valkurm", mob: "Funguar", type: "Job Ability", time: 0, sort: 6 },
				{ zone: "Qufim", mob: "Gaylas", type: "Job Ability", time: 0, sort: 7 },
				{ zone: "Qufim", mob: "Kraken", type: "Job Ability", time: 0, sort: 8 },
				{ zone: "Qufim", mob: "Roc", type: "Job Ability", time: 0, sort: 9 },
				{ zone: "Tavnazia", mob: "Bugard", type: "Job Ability", time: 0, sort: 10 },
				{ zone: "Tavnazia", mob: "Hornet", type: "Job Ability", time: 0, sort: 11 },
				{ zone: "Buburimu", mob: "Crawler", type: "Weaponskill", time: 8, sort: 12 },
				{ zone: "Buburimu", mob: "Raven", type: "Weaponskill", time: 8, sort: 13 },
				{ zone: "Buburimu", mob: "Urganite", type: "Weaponskill", time: 8, sort: 14 },
				{ zone: "Valkurm", mob: "Fly", type: "Weaponskill", time: 8, sort: 15 },
				{ zone: "Valkurm", mob: "Flytrap", type: "Weaponskill", time: 8, sort: 16 },
				{ zone: "Valkurm", mob: "Funguar", type: "Weaponskill", time: 8, sort: 17 },
				{ zone: "Qufim", mob: "Gaylas", type: "Weaponskill", time: 8, sort: 18 },
				{ zone: "Qufim", mob: "Kraken", type: "Weaponskill", time: 8, sort: 19 },
				{ zone: "Qufim", mob: "Roc", type: "Weaponskill", time: 8, sort: 20 },
				{ zone: "Tavnazia", mob: "Bugard", type: "Weaponskill", time: 8, sort: 21 },
				{ zone: "Tavnazia", mob: "Hornet", type: "Weaponskill", time: 8, sort: 22 },
				{ zone: "Buburimu", mob: "Crawler", type: "Magic Spell", time: 16, sort: 23 },
				{ zone: "Buburimu", mob: "Raven", type: "Magic Spell", time: 16, sort: 24 },
				{ zone: "Buburimu", mob: "Urganite", type: "Magic Spell", time: 16, sort: 25 },
				{ zone: "Valkurm", mob: "Fly", type: "Magic Spell", time: 16, sort: 26 },
				{ zone: "Valkurm", mob: "Flytrap", type: "Magic Spell", time: 16, sort: 27 },
				{ zone: "Valkurm", mob: "Funguar", type: "Magic Spell", time: 16, sort: 28 },
				{ zone: "Qufim", mob: "Gaylas", type: "Magic Spell", time: 16, sort: 29 },
				{ zone: "Qufim", mob: "Kraken", type: "Magic Spell", time: 16, sort: 30 },
				{ zone: "Qufim", mob: "Roc", type: "Magic Spell", time: 16, sort: 31 },
				{ zone: "Tavnazia", mob: "Bugard", type: "Magic Spell", time: 16, sort: 32 },
				{ zone: "Tavnazia", mob: "Hornet", type: "Magic Spell", time: 16, sort: 33 }
			]
		}
	};

	constructor() {
		self = this;
		// Create an FFXI object and put VanaDate class in the global scope
		//window.FFXI = new FFXI(window);
		//window.VanaDate = VanaDate;
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
	private VANA_BIRTH = new Date();
	private VANA_SECS_SINCE_YEAR_0 = (((898 * 360) + 30) * 24 * 60 * 60);
	private EARTH_TIME_YEAR_0 = new Date(this.VANA_BIRTH.getTime() - (this.VANA_SECS_SINCE_YEAR_0 * 1000) / 25);

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
		var vTime, eTime;

		if (typeof (date) == 'number') {
			vTime = Math.round(date);
			eTime = new Date(this.EARTH_TIME_YEAR_0.getTime() + Math.round(vTime * 1000 / 25));
		} else {
			if (date instanceof Date) {
				eTime = date;
			} else {
				eTime = new Date();
			}

			var eMilliSinceVanaEpoch = eTime.getTime() - this.EARTH_TIME_YEAR_0.getTime();
			vTime = Math.round(eMilliSinceVanaEpoch / 1000 * 25);
		}

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

	previous(days) {
		var numDays = days;
		if (typeof (numDays) != 'number') {
			numDays = 1;
		}

		var newVTime = this.time - (this.VANA_SECS_PER_DAY * numDays);
		return new VanaDate(newVTime);
	}
}