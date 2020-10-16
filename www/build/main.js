webpackJsonp([0],{

/***/ 144:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 144;

/***/ }),

/***/ 171:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 171;

/***/ }),

/***/ 194:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./node_modules/@angular/platform-browser/esm5/platform-browser.js
var platform_browser = __webpack_require__(42);

// EXTERNAL MODULE: ./node_modules/@angular/core/esm5/core.js
var core = __webpack_require__(0);

// EXTERNAL MODULE: ./node_modules/tslib/tslib.es6.js
var tslib_es6 = __webpack_require__(3);

// EXTERNAL MODULE: ./node_modules/ionic-angular/index.js + 4 modules
var ionic_angular = __webpack_require__(33);

// EXTERNAL MODULE: ./node_modules/@ionic/storage/dist/index.js
var dist = __webpack_require__(131);

// EXTERNAL MODULE: ./node_modules/@ionic-native/media/index.js
var _ionic_native_media = __webpack_require__(132);

// EXTERNAL MODULE: ./node_modules/@ionic-native/native-page-transitions/index.js
var native_page_transitions = __webpack_require__(133);

// EXTERNAL MODULE: ./node_modules/@ionic-native/splash-screen/index.js
var splash_screen = __webpack_require__(88);

// EXTERNAL MODULE: ./node_modules/@ionic-native/status-bar/index.js
var status_bar = __webpack_require__(89);

// EXTERNAL MODULE: ./node_modules/underscore/underscore.js
var underscore = __webpack_require__(134);
var underscore_default = /*#__PURE__*/__webpack_require__.n(underscore);

// CONCATENATED MODULE: ./src/providers/ffxi.ts





var ffxi_self;
var ffxi_FFXIService = /*@__PURE__*/ (function () {
    function FFXIService(events) {
        this.events = events;
        this.weapons = [
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
        this.abyssea = {
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
        this.dynamis = {
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
        this.voidwatch = {
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
                        "Ice Threnody",
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
        this.publish = underscore["debounce"](function (time) {
            ffxi_self.events.publish('time', time);
        }, 5000, true);
        ffxi_self = this;
        // Create an FFXI object and put VanaDate class in the global scope
        //window.FFXI = new FFXI(window);
        //window.VanaDate = VanaDate;
        ffxi_self.reset();
    }
    FFXIService.prototype.update = function () {
        try {
            var now = new VanaDate(), hour = now.hour, minute = now.minute < 10 ? '0' + now.minute : now.minute, vt = hour + ":" + minute;
            //console.log(`update: ${vt}`);
            //var dateTimeString = `${now.year}/${now.month}/${now.day} ${now.hour}:${now.minute}.${now.second}`;
            ffxi_self.vanatime = vt;
            //filter dynamis triggers
            if (vt == '0:00' || vt == '8:00' || vt == '16:00') {
                ffxi_self.publish('time', vt);
            }
        }
        catch (ex) {
            console.log(ex.message);
        }
    };
    FFXIService.prototype.clear = function () {
        try {
            clearInterval(ffxi_self.timer);
        }
        catch (ex) {
            console.log(ex.mesage);
        }
    };
    FFXIService.prototype.reset = function () {
        try {
            if (ffxi_self.timer)
                ffxi_self.clear();
            //self.vanadate = new VanaDate();
            //self.vanadate.start();
            //self.vanadate = new VanaDate();
            //console.log(self.vanadate);
            ffxi_self.timer = setInterval(ffxi_self.update, 500, true);
        }
        catch (ex) {
            console.log(ex.mesage);
            ffxi_self.clear();
        }
    };
    FFXIService.prototype.hour = function () {
        return new VanaDate().hour;
    };
    return FFXIService;
}());

/////////////////////////////////////////////////////////////////////
// VanaDate class
// Represents a fixed point in time.
// Constructor takes either a JavaScript Date representing Earth time,
// or a number of Vana'diel seconds since Year 0.
var VanaDate = /*@__PURE__*/ (function () {
    function VanaDate(date) {
        ////////////////
        // Constants
        // Earth time : 2002/06/23 16:00 GMT
        // Vana'diel time : 0898/02/01 00:00
        this.VANA_BIRTH = new Date(Date.UTC(2002, 5, 23, 15, 0, 0));
        this.VANA_SECS_SINCE_YEAR_0 = (((898 * 360) + 30) * 24 * 60 * 60);
        this.EARTH_TIME_YEAR_0 = new Date(this.VANA_BIRTH.getTime() - ((this.VANA_SECS_SINCE_YEAR_0 * 1000) / 25));
        this.VANA_SECS_PER_YEAR = 360 * 24 * 60 * 60; // 360 days per year
        this.VANA_SECS_PER_MONTH = 30 * 24 * 60 * 60; // 30 days per month
        this.VANA_SECS_PER_WEEK = 8 * 24 * 60 * 60; // Eight Days a Week
        this.VANA_SECS_PER_DAY = 24 * 60 * 60; // 24 hours per day
        this.VANA_SECS_PER_HOUR = 60 * 60; // 60 minutes per hour
        this.dayNames = ['Firesday', 'Earthsday', 'Watersday', 'Windsday', 'Iceday', 'Lightningday', 'Lightsday', 'Darksday'];
        this.moonPhases = ['New Moon', 'Waxing Crescent', 'First Quarter Moon', 'Waxing Gibbous', 'Full Moon', 'Waning Gibbous', 'Last Quarter Moon', 'Waning Crescent'];
        // vTime is the number of Vana'diel seconds since 0000/01/01
        //console.debug('date:');
        //console.log(date);
        var eTime, vTime;
        if (date && typeof date == 'number') {
            //console.log(`date number: ${date}`);
            vTime = Math.round(date);
            eTime = new Date(this.EARTH_TIME_YEAR_0.getTime() + Math.round(vTime * 1000 / 25));
        }
        else {
            if (date && date instanceof Date) {
                //console.log(`date object: ${date}`);
                eTime = date;
            }
            else {
                //console.log(`date null`);
                eTime = new Date();
            }
            var eMilliSinceVanaEpoch = eTime.getTime() - this.EARTH_TIME_YEAR_0.getTime();
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
        }
        else if (moonPercent >= 40 && moonPercent <= 55) {
            moonPhase = 2; // First Quarter Moon
        }
        else if (moonPercent >= 57 && moonPercent <= 88) {
            moonPhase = 3; // Waxing Gibbous
        }
        else if (moonPercent >= 90 || moonPercent <= -95) {
            moonPhase = 4; // Full Moon
        }
        else if (moonPercent >= -93 && moonPercent <= -62) {
            moonPhase = 5; // Waning Gibbous
        }
        else if (moonPercent >= -60 && moonPercent <= -45) {
            moonPhase = 6; // Last Quarter Moon
        }
        else if (moonPercent >= -43 && moonPercent <= -12) {
            moonPhase = 7; // Waning Crescent
        }
        else {
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
    ////////////////////
    // Utility functions
    VanaDate.prototype.getSecs = function (hours, minutes) {
        return (hours * this.VANA_SECS_PER_HOUR) + (minutes * 60);
    };
    VanaDate.prototype.start = function () {
        var newVTime = this.time - (this.time % this.VANA_SECS_PER_DAY);
        return new VanaDate(newVTime);
    };
    VanaDate.prototype.next = function (days) {
        var numDays = days;
        if (typeof (numDays) != 'number') {
            numDays = 1;
        }
        var newVTime = this.time + (this.VANA_SECS_PER_DAY * numDays);
        return new VanaDate(newVTime);
    };
    VanaDate.prototype.prev = function (days) {
        var numDays = days;
        if (typeof (numDays) != 'number') {
            numDays = 1;
        }
        var newVTime = this.time - (this.VANA_SECS_PER_DAY * numDays);
        return new VanaDate(newVTime);
    };
    return VanaDate;
}());





// EXTERNAL MODULE: ./node_modules/@ionic/pro/dist/ionic-pro.module.min.js
var ionic_pro_module_min = __webpack_require__(230);
var ionic_pro_module_min_default = /*#__PURE__*/__webpack_require__.n(ionic_pro_module_min);

// CONCATENATED MODULE: ./src/providers/ui.ts



var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try {
            step(generator.next(value));
        }
        catch (e) {
            reject(e);
        } }
        function rejected(value) { try {
            step(generator["throw"](value));
        }
        catch (e) {
            reject(e);
        } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function () { if (t[0] & 1)
            throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f)
            throw new TypeError("Generator is already executing.");
        while (_)
            try {
                if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done)
                    return t;
                if (y = 0, t)
                    op = [0, t.value];
                switch (op[0]) {
                    case 0:
                    case 1:
                        t = op;
                        break;
                    case 4:
                        _.label++;
                        return { value: op[1], done: false };
                    case 5:
                        _.label++;
                        y = op[1];
                        op = [0];
                        continue;
                    case 7:
                        op = _.ops.pop();
                        _.trys.pop();
                        continue;
                    default:
                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                            _ = 0;
                            continue;
                        }
                        if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                            _.label = op[1];
                            break;
                        }
                        if (op[0] === 6 && _.label < t[1]) {
                            _.label = t[1];
                            t = op;
                            break;
                        }
                        if (t && _.label < t[2]) {
                            _.label = t[2];
                            _.ops.push(op);
                            break;
                        }
                        if (t[2])
                            _.ops.pop();
                        _.trys.pop();
                        continue;
                }
                op = body.call(thisArg, _);
            }
            catch (e) {
                op = [6, e];
                y = 0;
            }
            finally {
                f = t = 0;
            }
        if (op[0] & 5)
            throw op[1];
        return { value: op[0] ? op[1] : void 0, done: true };
    }
};







var ui_self;
var ui_UIService = /*@__PURE__*/ (function () {
    function UIService(app, platform, events, loadingCtrl, alertCtrl, media, menuCtrl, modalCtrl, toastCtrl, transitions, storage) {
        this.app = app;
        this.platform = platform;
        this.events = events;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.media = media;
        this.menuCtrl = menuCtrl;
        this.modalCtrl = modalCtrl;
        this.toastCtrl = toastCtrl;
        this.transitions = transitions;
        this.storage = storage;
        this.json = __webpack_require__(231);
        this.version = null;
        this.loading = {
            visible: false,
            element: null,
            content: null,
            ctrl: null,
            show: function (options) {
                if (ui_self.loading.visible) {
                    if (!ui_self.loading.element) {
                        var loading = document.getElementsByTagName('ion-loading');
                        underscore["each"](loading, function (el) {
                            //console.log(el.attributes);
                            if (el.hasAttribute('role') && el.attributes['role'].value === 'dialog') {
                                //console.log('loading element:');
                                //console.log(el);
                                ui_self.loading.element = el;
                                var content = el.getElementsByClassName('loading-content');
                                if (content.length) {
                                    ui_self.loading.content = content[0];
                                }
                                //console.log('loading content:');
                                //console.log(self.loading.content);
                            }
                        });
                        //self.loading.setSpinner('hide');
                        //console.log(self.loading);
                    }
                    if (options && options.text && ui_self.loading.content) {
                        requestAnimationFrame(function () {
                            ui_self.loading.content.innerHTML = options.text;
                        });
                    }
                    if (options && options.css) {
                        console.log('set css: ' + options.css);
                        ui_self.loading.ctrl.setCssClass(options.css); //this fails to actually update the UI
                        ui_self.loading.element.className += ' ' + options.css;
                    }
                    return Promise.resolve();
                }
                else {
                    ui_self.loading.ctrl = ui_self.loadingCtrl.create({
                        //spinner: 'custom',
                        spinner: 'dots',
                        content: options && options.text ? options.text : 'Loading&hellip;',
                        cssClass: options && options.css ? 'loading-container ' + options.css : 'loading-container'
                        //dismissOnPageChange: true //causes Uncaught (in promise): removeView was not found
                    });
                    ui_self.loading.visible = true;
                    return ui_self.loading.ctrl.present();
                }
            },
            hide: function () {
                ui_self.loading.visible = false;
                ui_self.loading.content = null;
                ui_self.loading.element = null;
                return ui_self.loading.ctrl.dismiss();
            }
        };
        this.options = {
            direction: 'left',
            duration: 400,
            slowdownfactor: 1,
            //slidePixels: 20,
            iosdelay: 0,
            androiddelay: 0,
            winphonedelay: 250,
            fixedPixelsTop: 0,
            fixedPixelsBottom: 0
        };
        this.confirm = {
            ctrl: null,
            show: function (options) {
                return new Promise(function (resolve, reject) {
                    ui_self.confirm.ctrl = ui_self.alertCtrl.create(options);
                    ui_self.confirm.ctrl.onDidDismiss(resolve);
                    ui_self.confirm.ctrl.present();
                });
            },
            hide: function () {
                ui_self.confirm.ctrl.dismiss();
            }
        };
        this.modal = {
            ctrl: null,
            show: function (page, data, opts) {
                return new Promise(function (resolve, reject) {
                    ui_self.modal.ctrl = ui_self.modalCtrl.create(page, data, underscore["extend"]({
                        enableBackdropDismiss: false
                    }, opts));
                    ui_self.modal.ctrl.onDidDismiss(resolve);
                    ui_self.modal.ctrl.present();
                });
            },
            hide: function () {
                ui_self.modal.ctrl.dismiss();
            }
        };
        this.toast = {
            ctrl: null,
            show: function (opts) {
                opts.duration = 0;
                opts.showCloseButton = true;
                ui_self.toast.ctrl = ui_self.toastCtrl.create(opts);
                ui_self.toast.ctrl.present();
            },
            hide: function () {
                ui_self.toast.ctrl.dismiss();
            }
        };
        this.alert = {
            ctrl: null,
            show: function (options) {
                //console.log('AlertController:');
                //console.log(self.alertCtrl);
                if (!options.enableBackdropDismiss) {
                    options.enableBackdropDismiss = false;
                }
                ui_self.alert.ctrl = ui_self.alertCtrl.create(options);
                return ui_self.alert.ctrl.present();
            },
            hide: function () {
                ui_self.alert.ctrl.dismiss();
            }
        };
        this.menu = null;
        this.sound = {
            audio: null,
            enabled: true,
            load: function () {
                ui_self.sound.audio = new Audio();
                ui_self.sound.audio.src = '../../assets/audio/alert.mp3';
                ui_self.storage.get('sound').then(function (sound) {
                    ui_self.sound.enabled = sound;
                });
            },
            play: function () {
                try {
                    if (!ui_self.sound.audio) {
                        console.info('init sound');
                        ui_self.sound.load();
                    }
                    ui_self.sound.audio.play();
                }
                catch (ex) {
                    console.error(ex.message);
                    console.log(ex);
                    alert(ex.message);
                }
            },
            save: function () {
                ui_self.storage.set('sound', ui_self.sound.enabled);
            }
        };
        this.flip = underscore["debounce"](function (page, params, opts) {
            ui_self.options = underscore["extend"](ui_self.options, opts);
            ui_self.options.direction = opts && opts.direction ? opts.direction : 'left'; //default
            ui_self.animation = 'flip';
            //self.options.animate = false;
            //if (self.page == page) {
            //	return Promise.resolve({ message: 'same page' });
            //} else {
            ui_self.page = page;
            var nav = ui_self.app.getRootNavs()[0];
            //console.log('flip', nav);
            if (ui_self.options.direction === 'left') {
                //console.info('nav.push');
                return nav.push(page, params, ui_self.options);
            }
            else if (nav.canGoBack()) {
                //console.info('nav.pop');
                //return nav.pop(self.options)
                return nav.push(page, params, ui_self.options).then(function () {
                    var views = nav.getViews();
                    nav.remove(views.length - 3, 2);
                    console.log(views);
                });
            }
            else {
                console.info('nav.setRoot');
                return nav.setRoot(page, params, ui_self.options);
            }
            //}
        }, 400, true);
        this.swap = underscore["debounce"](function (page, params, opts) {
            ui_self.options = underscore["extend"](ui_self.options, opts);
            ui_self.options.direction = opts && opts.direction ? opts.direction : 'left'; //default
            opts.animate = false;
            //self.animation = 'flip';
            //self.options.animate = false;
            //if (self.page == page) {
            //	return Promise.resolve({ message: 'same page' });
            //} else {
            ui_self.page = page;
            var nav = ui_self.app.getRootNavs()[0];
            //console.log('swap', nav);
            if (ui_self.options.direction === 'left') {
                //console.info('nav.push');
                return nav.push(page, params, ui_self.options);
            }
            else if (nav.canGoBack()) {
                //console.info('nav.pop');
                //return nav.pop(self.options)
                return nav.push(page, params, ui_self.options).then(function () {
                    var views = nav.getViews();
                    nav.remove(views.length - 3, 2);
                    console.log(views);
                });
            }
            else {
                console.info('nav.setRoot');
                return nav.setRoot(page, params, ui_self.options);
            }
            //}
        }, 400, true);
        ui_self = this;
        ui_self.app.viewWillEnter.subscribe(function () {
            //if (!!window['cordova']) {
            //    //console.info('viewWillEnter with ' + self.animation + ' transition');
            //} else {
            //console.info('viewWillEnter with ' + self.animation + ' transition');
            switch (ui_self.animation) {
                case 'flip':
                    ui_self.transitions.flip(ui_self.options);
                    break;
                case 'slide':
                    ui_self.transitions.slide(ui_self.options);
                    break;
            }
            //}
            ui_self.animation = null;
        });
        ui_self.menu = menuCtrl;
        ui_self.storage.ready().then(function () {
            ui_self.sound.load();
        });
        ui_self.events.subscribe('time', function (val) {
            //console.info('time event');
            if (ui_self.sound.enabled) {
                ui_self.sound.play();
            }
        });
        console.info("Version " + ui_self.json.version);
        ui_self.version = ui_self.json.version;
        //Pro.deploy.getCurrentVersion().then(ver => {
        //    console.debug('Pro Deploy version:');
        //    console.log(ver);
        //    //self.version = version;
        //});
    }
    UIService.prototype.link = function (type) {
        ui_self.events.publish('link', type);
    };
    UIService.prototype.settings = function () {
        ui_self.modal.show('settings');
    };
    /**
     * Ionic Pro Deploy Update
     * return {Promise}
     */
    UIService.prototype.update = function () {
        return __awaiter(this, void 0, void 0, function () {
            var next, opts, loading_1, ex_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 6, , 7]);
                        return [4 /*yield*/, ionic_pro_module_min["Pro"].deploy.checkForUpdate()];
                    case 1:
                        next = _a.sent();
                        console.info('Pro.deploy.checkForUpdate:');
                        console.info(JSON.stringify(next));
                        if (!(next && next.available))
                            return [3 /*break*/, 5];
                        opts = {
                            content: 'Loading update',
                            enableBackdropDismiss: false
                        }, loading_1 = ui_self.loadingCtrl.create(opts);
                        loading_1.present();
                        return [4 /*yield*/, ionic_pro_module_min["Pro"].deploy.downloadUpdate(function (progress) {
                                //console.log(progress);
                                loading_1.setContent("Downloading update&hellip;" + progress + "%");
                            })];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, ionic_pro_module_min["Pro"].deploy.extractUpdate(function (progress) {
                                //console.log(progress);
                                loading_1.setContent("Installing update&hellip;" + progress + "%");
                            })];
                    case 3:
                        _a.sent();
                        loading_1.dismiss();
                        return [4 /*yield*/, ionic_pro_module_min["Pro"].deploy.reloadApp()];
                    case 4:
                        _a.sent();
                        _a.label = 5;
                    case 5: return [3 /*break*/, 7];
                    case 6:
                        ex_1 = _a.sent();
                        if (typeof ex_1 === 'object' && ex_1.message) {
                            console.error(ex_1.message);
                            console.info(JSON.stringify(ex_1));
                            ui_self.toast.show({ message: ex_1.message, cssClass: 'error' });
                        }
                        else {
                            console.error(ex_1);
                            console.info(JSON.stringify(ex_1));
                            ui_self.toast.show({ message: ex_1, cssClass: 'error' });
                        }
                        console.log(ex_1);
                        return [3 /*break*/, 7];
                    case 7: return [2 /*return*/];
                }
            });
        });
    };
    return UIService;
}());

var ui_PageFlip = /*@__PURE__*/ (function (_super) {
    Object(tslib_es6["__extends"])(PageFlip, _super);
    function PageFlip() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PageFlip.prototype.init = function () {
        _super.prototype.init.call(this);
        //let since = new Date().getTime();
        //console.log('pagefade start: ' + since);
        var plt = this.plt, leavingView = this.leavingView, enteringView = this.enteringView, opts = this.opts, backDirection = (opts.direction === 'back');
        if (enteringView) {
            var enteringPage = new ionic_angular["a" /* Animation */](plt, enteringView.pageRef());
            if (backDirection) {
                //console.log('enteringView has backDirection');
                //this.duration(opts.duration || 400).easing('cubic-bezier(0.47,0,0.745,0.715)');
                this.duration(opts.duration || 400);
                this.add(enteringPage);
                enteringPage
                    .beforeAddClass('flip-enter-prev')
                    .afterRemoveClass('flip-enter-prev');
            }
            else {
                //console.log('enteringView not backDirection');
                //this.duration(opts.duration || 400).easing('cubic-bezier(0.36,0.66,0.04,1)');
                this.duration(opts.duration || 400);
                this.add(enteringPage);
                enteringPage
                    .beforeAddClass('flip-enter-next')
                    .afterRemoveClass('flip-enter-next');
            }
            enteringPage.beforeClearStyles(['opacity']);
        }
        // setup leaving view
        if (leavingView) {
            var leavingPage = new ionic_angular["a" /* Animation */](plt, leavingView.pageRef());
            if (backDirection) {
                //console.log('leavingView has backDirection');
                this.duration(opts.duration || 400);
                this.add(leavingPage);
                leavingPage
                    .beforeAddClass('flip-leave-prev')
                    .afterRemoveClass('flip-leave-prev');
            }
            else {
                //console.log('leavingView not backDirection');
                this.duration(opts.duration || 400);
                this.add(leavingPage);
                leavingPage
                    .beforeAddClass('flip-leave-next')
                    .afterRemoveClass('flip-leave-next');
            }
            ;
            leavingPage.afterStyles({ 'opacity': 0 });
        }
    };
    return PageFlip;
}(ionic_angular["b" /* PageTransition */]));





// CONCATENATED MODULE: ./src/pages/home/home.ts





var vm;
var HomePage = /*@__PURE__*/ (function () {
    function HomePage(ffxi, ui) {
        this.ffxi = ffxi;
        this.ui = ui;
        this.debug = false;
        this.orientation = 0;
        vm = this;
    }
    HomePage.prototype.load = function () {
    };
    //tips = _.debounce(() => {
    //	//let mv = vm.mo
    //	vm.modal = vm.mod.create(TipsPage, { seen: vm.seen }, { cssClass: 'tips', enableBackdropDismiss: false });
    //	vm.modal.onDidDismiss(() => {
    //		if (!vm.overlay) {
    //			vm.load();
    //		}
    //		if (!vm.seen) {
    //			vm.seen = true;
    //			vm.storage.create('settings').then((sso: SecureStorageObject) => {
    //				sso.set('seentips', 'true');
    //			});
    //		}
    //	});
    //	vm.modal.present();
    //}, 400, true);
    HomePage.prototype.ionViewWillEnter = function () {
        //load
    };
    HomePage.prototype.ionViewDidEnter = function () {
        //if ('proximity' in navigator) {
        //	//alert('ProximitySensor');
        //	let proximity: any = navigator['proximity'],
        //		onSuccess = (state) => {
        //			//alert('Proximity state: ' + (state ? 'near' : 'far'));
        //			console.info(state);
        //		};
        //	proximity.enableSensor();
        //	setInterval(function () {
        //		proximity.getProximityState(onSuccess);
        //	}, 1000);
        //}
    };
    HomePage.prototype.ionViewWillLeave = function () {
        //if (window['DeviceOrientationEvent']) {
        //	window.removeEventListener('deviceorientation', vm.tilt);
        //}
    };
    return HomePage;
}());





// CONCATENATED MODULE: ./src/app/app.component.ts









var app_component_MyApp = /*@__PURE__*/ (function () {
    function MyApp(events, platform, status, splash, ffxi, ui, mc) {
        var _this = this;
        this.events = events;
        this.platform = platform;
        this.status = status;
        this.splash = splash;
        this.ffxi = ffxi;
        this.ui = ui;
        this.mc = mc;
        this.rootPage = HomePage;
        this.menu = [
            {
                title: "Abyssea",
                items: [
                    { order: 1, title: "Weapon Skills", icon: "assets/images/proc/red16.png", name: "abyssea", type: "red" },
                    { order: 2, title: "Magic Spells", icon: "assets/images/proc/yellow16.png", name: "abyssea", type: "yellow" },
                    { order: 3, title: "6:00&ndash;13:59 Piercing", icon: "assets/images/proc/blue16.png", name: "abyssea", type: "blue-piercing" },
                    { order: 4, title: "14:00&ndash;21:59 Slashing", icon: "assets/images/proc/blue16.png", name: "abyssea", type: "blue-slashing" },
                    { order: 5, title: "22:00&ndash;5:59 Blunt", icon: "assets/images/proc/blue16.png", name: "abyssea", type: "blue-blunt" }
                ]
            }, {
                title: "Dynamis",
                items: [
                    { order: 1, title: "Beastmen", icon: "assets/images/type/beastmen.png", name: "dynamis", type: "beastmen" },
                    { order: 2, title: "O. Bronzepiece", icon: "assets/images/currency/ordelle.png", name: "dynamis", type: "ordelle" },
                    { order: 2, title: "T. Whiteshell", icon: "assets/images/currency/tukuku.png", name: "dynamis", type: "tukuku" },
                    { order: 4, title: "1 Byne Bill", icon: "assets/images/currency/byne.png", name: "dynamis", type: "byne" }
                ]
            }, {
                title: "Voidwatch",
                items: [
                    { order: 1, title: "Job Ability", icon: "assets/images/type/JA.png", name: "voidwatch", type: "job-ability" },
                    { order: 2, title: "Black Magic", icon: "assets/images/type/BLM.png", name: "voidwatch", type: "black-magic" },
                    { order: 3, title: "White Magic", icon: "assets/images/type/WHM.png", name: "voidwatch", type: "white-magic" },
                    { order: 4, title: "Ninjutsu", icon: "assets/images/type/NIN.png", name: "voidwatch", type: "ninjutsu" },
                    { order: 5, title: "Bard Songs", icon: "assets/images/type/BRD.png", name: "voidwatch", type: "bard-songs" },
                    { order: 6, title: "Blue Magic", icon: "assets/images/type/BLU.png", name: "voidwatch", type: "blue-magic" }
                ]
            },
            {
                title: "About",
                items: [
                    { order: 1, title: "FFXI PROC", icon: "assets/images/proc/white16.png", name: "home", type: "index" }
                ]
            }
        ];
        platform.ready().then(function () {
            console.log('platform ready');
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            status.overlaysWebView(true);
            status.styleLightContent();
            splash.hide();
            //0x00000000
            if (platform.is('cordova'))
                _this.ui.update();
            platform.resume.subscribe(function (e) {
                console.info('resume');
                if (platform.is('cordova'))
                    _this.ui.update();
                //this.update(lc);
            });
            platform.pause.subscribe(function (e) {
                console.info('pause');
            });
            //this.version = `Version ${this.json.version}`;
            //this.version = `Version 1.5.0`;
            //process.env.npm_package_version
            //this.copyright = `&copy; ${new Date().getFullYear()} ${process.env.npm_package_author}`;
            _this.copyright = "&copy; " + new Date().getFullYear() + " RARE BEAR SOFTWARE LTD";
            ui.page = 'home';
            _this.active = 'index';
            _this.events.subscribe('link', function (val) { return _this.active = val; });
            //this.events.subscribe('time', val => { this.ui.chime(); });
        });
    }
    MyApp.prototype.link = function (item) {
        this.active = item.type;
        this.ui.swap(item.name, { type: item.type }, { animate: false });
    };
    MyApp.prototype.blur = function () {
        var active = document.activeElement;
        if (active && active.blur)
            active.blur();
    };
    MyApp.prototype.timer = function () {
        console.debug('show timer modal');
        //this.ui.modal
    };
    return MyApp;
}());





// CONCATENATED MODULE: ./src/pages/settings/settings.ts





var settings_vm;
var SettingsPage = /*@__PURE__*/ (function () {
    function SettingsPage(platform, view, ui) {
        this.platform = platform;
        this.view = view;
        this.ui = ui;
        settings_vm = this;
    }
    SettingsPage.prototype.load = function (e) {
        console.info('banner load');
        console.info(JSON.stringify(e));
    };
    SettingsPage.prototype.fail = function (e) {
        console.error('banner fail');
        console.info(JSON.stringify(e));
    };
    SettingsPage.prototype.close = function () {
        settings_vm.view.dismiss();
    };
    SettingsPage.prototype.ionViewDidEnter = function () {
        //vm.admob.setDevMode(true);
        //document.addEventListener('admob.banner.load', vm.load);
        //document.addEventListener('admob.banner.load_fail', vm.fail);
        admob.setDevMode(true);
        if (settings_vm.platform.is('android')) {
            //vm.id = 'ca-app-pub-3940256099942544/6300978111' //prod banner
            settings_vm.id = 'ca-app-pub-3940256099942544/6300978111'; //test banner
        }
        else if (settings_vm.platform.is('ios')) {
            //vm.id = 'ca-app-pub-1450135138875904/3285023796' //prod banner
            settings_vm.id = 'ca-app-pub-3940256099942544/2934735716'; //test banner
        }
        var opt = 
        //console.info(JSON.stringify(window.cordova));
        //console.info(`${vm.platform.width()}x${vm.platform.width() * (250 / 300)}`);
        admob.banner.show({
            id: settings_vm.id,
            size: {
                width: 300,
                height: 250
            }
        }).then(function (res) {
            //console.info('banner show success');
            //console.info(JSON.stringify(res));
        }).catch(function (err) {
            console.error('banner show failure');
            //console.error(err.message);
            console.info(JSON.stringify(err));
        });
    };
    SettingsPage.prototype.ionViewWillLeave = function () {
        //document.removeEventListener('admob.banner.load', vm.load);
        //document.addEventListener('admob.banner.load_fail', vm.fail);
        //vm.admob.banner.hide({ id: 'ca-app-pub-3940256099942544/2934735716' }); //test banner
        //vm.admob.banner.hide(); //Error: adUnitID is missing 
        admob.banner.hide(settings_vm.id);
    };
    return SettingsPage;
}());





// CONCATENATED MODULE: ./src/pages/abyssea/abyssea.ts






var abyssea_vm;
var AbysseaPage = /*@__PURE__*/ (function () {
    function AbysseaPage(params, ffxi, ui) {
        this.params = params;
        this.ffxi = ffxi;
        this.ui = ui;
        this.debug = false;
        this.orientation = 0;
        this.list = [];
        abyssea_vm = this;
    }
    //tips = _.debounce(() => {
    //	//let mv = vm.mo
    //	vm.modal = vm.mod.create(TipsPage, { seen: vm.seen }, { cssClass: 'tips', enableBackdropDismiss: false });
    //	vm.modal.onDidDismiss(() => {
    //		if (!vm.overlay) {
    //			vm.load();
    //		}
    //		if (!vm.seen) {
    //			vm.seen = true;
    //			vm.storage.create('settings').then((sso: SecureStorageObject) => {
    //				sso.set('seentips', 'true');
    //			});
    //		}
    //	});
    //	vm.modal.present();
    //}, 400, true);
    AbysseaPage.prototype.ionViewWillEnter = function () {
        //load
        abyssea_vm.type = abyssea_vm.params.data.type;
        abyssea_vm.title = abyssea_vm.type.replace(/-/g, ' ');
    };
    AbysseaPage.prototype.ionViewWillLeave = function () {
        //if (window['DeviceOrientationEvent']) {
        //	window.removeEventListener('deviceorientation', vm.tilt);
        //}
    };
    return AbysseaPage;
}());





// CONCATENATED MODULE: ./src/pages/dynamis/dynamis.ts







var dynamis_vm;
var dynamis_DynamisPage = /*@__PURE__*/ (function () {
    function DynamisPage(events, params, ffxi, ui) {
        this.events = events;
        this.params = params;
        this.ffxi = ffxi;
        this.ui = ui;
        this.debug = false;
        this.orientation = 0;
        this.ordelle = [];
        this.tukuku = [];
        this.byne = [];
        dynamis_vm = this;
    }
    //tips = _.debounce(() => {
    //	//let mv = vm.mo
    //	vm.modal = vm.mod.create(TipsPage, { seen: vm.seen }, { cssClass: 'tips', enableBackdropDismiss: false });
    //	vm.modal.onDidDismiss(() => {
    //		if (!vm.overlay) {
    //			vm.load();
    //		}
    //		if (!vm.seen) {
    //			vm.seen = true;
    //			vm.storage.create('settings').then((sso: SecureStorageObject) => {
    //				sso.set('seentips', 'true');
    //			});
    //		}
    //	});
    //	vm.modal.present();
    //}, 400, true);
    DynamisPage.prototype.switch = function () {
        var hour = dynamis_vm.ffxi.hour(), time = 0;
        if (hour < 8) {
            hour = 0;
        }
        else if (hour < 16) {
            time = 8;
        }
        else {
            time = 16;
        }
        console.log(hour);
        dynamis_vm.ordelle = underscore["filter"](dynamis_vm.ffxi.dynamis.ordelle, { time: time });
        dynamis_vm.tukuku = underscore["filter"](dynamis_vm.ffxi.dynamis.tukuku, { time: time });
        dynamis_vm.byne = underscore["filter"](dynamis_vm.ffxi.dynamis.byne, { time: time });
    };
    DynamisPage.prototype.ionViewWillEnter = function () {
        //load
        dynamis_vm.type = dynamis_vm.params.data.type;
        dynamis_vm.switch();
        dynamis_vm.events.subscribe('time', dynamis_vm.switch);
    };
    DynamisPage.prototype.ionViewWillLeave = function () {
        //if (window['DeviceOrientationEvent']) {
        //	window.removeEventListener('deviceorientation', vm.tilt);
        //}
    };
    return DynamisPage;
}());





// CONCATENATED MODULE: ./src/pages/voidwatch/voidwatch.ts






var voidwatch_vm;
var VoidwatchPage = /*@__PURE__*/ (function () {
    function VoidwatchPage(params, ffxi, ui) {
        this.params = params;
        this.ffxi = ffxi;
        this.ui = ui;
        this.debug = false;
        this.orientation = 0;
        this.list = [];
        voidwatch_vm = this;
    }
    //tips = _.debounce(() => {
    //	//let mv = vm.mo
    //	vm.modal = vm.mod.create(TipsPage, { seen: vm.seen }, { cssClass: 'tips', enableBackdropDismiss: false });
    //	vm.modal.onDidDismiss(() => {
    //		if (!vm.overlay) {
    //			vm.load();
    //		}
    //		if (!vm.seen) {
    //			vm.seen = true;
    //			vm.storage.create('settings').then((sso: SecureStorageObject) => {
    //				sso.set('seentips', 'true');
    //			});
    //		}
    //	});
    //	vm.modal.present();
    //}, 400, true);
    VoidwatchPage.prototype.ionViewWillEnter = function () {
        //load
        voidwatch_vm.type = voidwatch_vm.params.data.type;
        voidwatch_vm.title = voidwatch_vm.type.replace(/-/g, ' ');
    };
    VoidwatchPage.prototype.ionViewWillLeave = function () {
        //if (window['DeviceOrientationEvent']) {
        //	window.removeEventListener('deviceorientation', vm.tilt);
        //}
    };
    return VoidwatchPage;
}());





// CONCATENATED MODULE: ./src/app/app.module.ts

















var AppModule = /*@__PURE__*/ (function () {
    function AppModule() {
    }
    return AppModule;
}());





// EXTERNAL MODULE: ./node_modules/ionic-angular/components/app/app-root.js
var app_root = __webpack_require__(59);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/action-sheet/action-sheet-component.ngfactory.js
var action_sheet_component_ngfactory = __webpack_require__(232);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/alert/alert-component.ngfactory.js
var alert_component_ngfactory = __webpack_require__(233);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/app/app-root.ngfactory.js
var app_root_ngfactory = __webpack_require__(234);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/loading/loading-component.ngfactory.js + 1 modules
var loading_component_ngfactory = __webpack_require__(235);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/modal/modal-component.ngfactory.js
var modal_component_ngfactory = __webpack_require__(236);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/picker/picker-component.ngfactory.js + 1 modules
var picker_component_ngfactory = __webpack_require__(237);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/popover/popover-component.ngfactory.js
var popover_component_ngfactory = __webpack_require__(238);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/select/select-popover-component.ngfactory.js + 1 modules
var select_popover_component_ngfactory = __webpack_require__(239);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/toast/toast-component.ngfactory.js
var toast_component_ngfactory = __webpack_require__(240);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/item/item.ngfactory.js + 1 modules
var item_ngfactory = __webpack_require__(53);

// EXTERNAL MODULE: ./node_modules/@angular/common/esm5/common.js
var common = __webpack_require__(11);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/item/item.js
var item = __webpack_require__(13);

// EXTERNAL MODULE: ./node_modules/ionic-angular/util/form.js
var util_form = __webpack_require__(12);

// EXTERNAL MODULE: ./node_modules/ionic-angular/config/config.js
var config = __webpack_require__(1);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/item/item-reorder.js + 1 modules
var item_reorder = __webpack_require__(28);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/item/item-content.js
var item_content = __webpack_require__(39);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/menu/menu-close.js
var menu_close = __webpack_require__(109);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/app/menu-controller.js
var menu_controller = __webpack_require__(21);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/list/list-header.js
var list_header = __webpack_require__(46);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/menu/menu.ngfactory.js
var menu_ngfactory = __webpack_require__(241);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/split-pane/split-pane.js
var split_pane = __webpack_require__(40);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/menu/menu.js + 1 modules
var menu = __webpack_require__(79);

// EXTERNAL MODULE: ./node_modules/ionic-angular/platform/platform.js + 1 modules
var platform_platform = __webpack_require__(4);

// EXTERNAL MODULE: ./node_modules/ionic-angular/platform/keyboard.js
var keyboard = __webpack_require__(23);

// EXTERNAL MODULE: ./node_modules/ionic-angular/gestures/gesture-controller.js
var gesture_controller = __webpack_require__(6);

// EXTERNAL MODULE: ./node_modules/ionic-angular/platform/dom-controller.js
var dom_controller = __webpack_require__(8);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/app/app.js + 3 modules
var app_app = __webpack_require__(7);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/toolbar/toolbar-header.js
var toolbar_header = __webpack_require__(41);

// EXTERNAL MODULE: ./node_modules/ionic-angular/navigation/view-controller.js
var view_controller = __webpack_require__(5);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/toolbar/toolbar.ngfactory.js
var toolbar_ngfactory = __webpack_require__(90);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/toolbar/toolbar.js
var toolbar = __webpack_require__(25);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/toolbar/toolbar-title.ngfactory.js
var toolbar_title_ngfactory = __webpack_require__(54);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/toolbar/toolbar-title.js
var toolbar_title = __webpack_require__(32);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/toolbar/navbar.js
var navbar = __webpack_require__(24);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/content/content.ngfactory.js
var content_ngfactory = __webpack_require__(55);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/content/content.js
var content = __webpack_require__(19);

// EXTERNAL MODULE: ./node_modules/ionic-angular/navigation/nav-controller.js
var nav_controller = __webpack_require__(16);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/list/list.js + 1 modules
var list = __webpack_require__(31);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/nav/nav.ngfactory.js
var nav_ngfactory = __webpack_require__(242);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/nav/nav.js
var nav_nav = __webpack_require__(63);

// EXTERNAL MODULE: ./node_modules/ionic-angular/transitions/transition-controller.js
var transition_controller = __webpack_require__(36);

// EXTERNAL MODULE: ./node_modules/ionic-angular/navigation/deep-linker.js
var deep_linker = __webpack_require__(20);

// EXTERNAL MODULE: ./node_modules/ionic-angular/util/events.js
var util_events = __webpack_require__(67);

// CONCATENATED MODULE: ./src/app/app.component.ngfactory.js
/**
* @fileoverview This file is generated by the Angular template compiler.
* Do not edit.
* @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
* tslint:disable
*/
/** PURE_IMPORTS_START _angular_core,_.._node_modules_ionic_angular_components_item_item.ngfactory,_angular_common,ionic_angular_components_item_item,ionic_angular_util_form,ionic_angular_config_config,ionic_angular_components_item_item_reorder,ionic_angular_components_item_item_content,ionic_angular_components_menu_menu_close,ionic_angular_components_app_menu_controller,ionic_angular_components_list_list_header,_.._node_modules_ionic_angular_components_menu_menu.ngfactory,ionic_angular_components_split_pane_split_pane,ionic_angular_components_menu_menu,ionic_angular_platform_platform,ionic_angular_platform_keyboard,ionic_angular_gestures_gesture_controller,ionic_angular_platform_dom_controller,ionic_angular_components_app_app,ionic_angular_components_toolbar_toolbar_header,ionic_angular_navigation_view_controller,_.._node_modules_ionic_angular_components_toolbar_toolbar.ngfactory,ionic_angular_components_toolbar_toolbar,_.._node_modules_ionic_angular_components_toolbar_toolbar_title.ngfactory,ionic_angular_components_toolbar_toolbar_title,ionic_angular_components_toolbar_navbar,_.._node_modules_ionic_angular_components_content_content.ngfactory,ionic_angular_components_content_content,ionic_angular_navigation_nav_controller,ionic_angular_components_list_list,_.._node_modules_ionic_angular_components_nav_nav.ngfactory,ionic_angular_components_nav_nav,ionic_angular_transitions_transition_controller,ionic_angular_navigation_deep_linker,_app.component,ionic_angular_util_events,_ionic_native_status_bar_index,_ionic_native_splash_screen_index,_providers_ffxi,_providers_ui PURE_IMPORTS_END */








































var styles_MyApp = [];
var RenderType_MyApp = /*@__PURE__*/ core["X" /* ɵcrt */]({ encapsulation: 2, styles: styles_MyApp, data: {} });

function View_MyApp_2(_l) {
    return core["_19" /* ɵvid */](0, [(_l()(), core["Z" /* ɵeld */](0, 0, null, null, 12, "button", [["class", "item item-block"], ["ion-item", ""], ["menuClose", ""]], null, [[null, "click"]], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (("click" === en)) {
                var pd_0 = (core["_13" /* ɵnov */](_v, 8).close() !== false);
                ad = (pd_0 && ad);
            }
            if (("click" === en)) {
                var pd_1 = (_co.link(_v.context.$implicit) !== false);
                ad = (pd_1 && ad);
            }
            return ad;
        }, item_ngfactory["b" /* View_Item_0 */], item_ngfactory["a" /* RenderType_Item */])), core["Y" /* ɵdid */](1, 278528, null, 0, common["g" /* NgClass */], [core["p" /* IterableDiffers */], core["q" /* KeyValueDiffers */], core["j" /* ElementRef */], core["A" /* Renderer2 */]], { ngClass: [0, "ngClass"] }, null), core["_14" /* ɵpod */](2, { active: 0 }), core["Y" /* ɵdid */](3, 1097728, null, 3, item["a" /* Item */], [util_form["a" /* Form */], config["a" /* Config */], core["j" /* ElementRef */], core["z" /* Renderer */], [2, item_reorder["a" /* ItemReorder */]]], null, null), core["_16" /* ɵqud */](335544320, 6, { contentLabel: 0 }), core["_16" /* ɵqud */](603979776, 7, { _buttons: 1 }), core["_16" /* ɵqud */](603979776, 8, { _icons: 1 }), core["Y" /* ɵdid */](7, 16384, null, 0, item_content["a" /* ItemContent */], [], null, null), core["Y" /* ɵdid */](8, 16384, null, 0, menu_close["a" /* MenuClose */], [menu_controller["a" /* MenuController */]], { menuClose: [0, "menuClose"] }, null), (_l()(), core["_18" /* ɵted */](-1, 2, ["\n                    "])), (_l()(), core["Z" /* ɵeld */](10, 0, null, 2, 0, "img", [], [[8, "src", 4]], null, null, null, null)), (_l()(), core["Z" /* ɵeld */](11, 0, null, 2, 0, "span", [], [[8, "innerHTML", 1]], null, null, null, null)), (_l()(), core["_18" /* ɵted */](-1, 2, ["\n                "]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = _ck(_v, 2, 0, (_co.active == _v.context.$implicit.type)); _ck(_v, 1, 0, currVal_0); var currVal_1 = ""; _ck(_v, 8, 0, currVal_1); }, function (_ck, _v) { var currVal_2 = _v.context.$implicit.icon; _ck(_v, 10, 0, currVal_2); var currVal_3 = _v.context.$implicit.title; _ck(_v, 11, 0, currVal_3); });
}
function View_MyApp_1(_l) { return core["_19" /* ɵvid */](0, [(_l()(), core["Z" /* ɵeld */](0, 0, null, null, 12, null, null, null, null, null, null, null)), (_l()(), core["_18" /* ɵted */](-1, null, ["\n                "])), (_l()(), core["Z" /* ɵeld */](2, 0, null, null, 6, "ion-list-header", [["class", "item"]], null, null, null, item_ngfactory["b" /* View_Item_0 */], item_ngfactory["a" /* RenderType_Item */])), core["Y" /* ɵdid */](3, 1097728, null, 3, item["a" /* Item */], [util_form["a" /* Form */], config["a" /* Config */], core["j" /* ElementRef */], core["z" /* Renderer */], [2, item_reorder["a" /* ItemReorder */]]], null, null), core["_16" /* ɵqud */](335544320, 3, { contentLabel: 0 }), core["_16" /* ɵqud */](603979776, 4, { _buttons: 1 }), core["_16" /* ɵqud */](603979776, 5, { _icons: 1 }), core["Y" /* ɵdid */](7, 16384, null, 0, list_header["a" /* ListHeader */], [config["a" /* Config */], core["z" /* Renderer */], core["j" /* ElementRef */], [8, null]], null, null), (_l()(), core["_18" /* ɵted */](8, 2, ["", ""])), (_l()(), core["_18" /* ɵted */](-1, null, ["\n                "])), (_l()(), core["U" /* ɵand */](16777216, null, null, 1, null, View_MyApp_2)), core["Y" /* ɵdid */](11, 802816, null, 0, common["h" /* NgForOf */], [core["I" /* ViewContainerRef */], core["F" /* TemplateRef */], core["p" /* IterableDiffers */]], { ngForOf: [0, "ngForOf"] }, null), (_l()(), core["_18" /* ɵted */](-1, null, ["\n            "]))], function (_ck, _v) { var currVal_1 = _v.context.$implicit.items; _ck(_v, 11, 0, currVal_1); }, function (_ck, _v) { var currVal_0 = _v.context.$implicit.title; _ck(_v, 8, 0, currVal_0); }); }
function View_MyApp_0(_l) {
    return core["_19" /* ɵvid */](0, [(_l()(), core["Z" /* ɵeld */](0, 0, null, null, 34, "ion-menu", [["persistent", "true"], ["role", "navigation"], ["side", "left"], ["type", "push"]], null, [[null, "ionClose"]], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (("ionClose" === en)) {
                var pd_0 = (_co.blur() !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, menu_ngfactory["b" /* View_Menu_0 */], menu_ngfactory["a" /* RenderType_Menu */])), core["_15" /* ɵprd */](6144, null, split_pane["a" /* RootNode */], null, [menu["a" /* Menu */]]), core["Y" /* ɵdid */](2, 245760, null, 2, menu["a" /* Menu */], [menu_controller["a" /* MenuController */], core["j" /* ElementRef */], config["a" /* Config */], platform_platform["a" /* Platform */], core["z" /* Renderer */], keyboard["a" /* Keyboard */], gesture_controller["l" /* GestureController */], dom_controller["a" /* DomController */], app_app["a" /* App */]], { content: [0, "content"], type: [1, "type"], side: [2, "side"], persistent: [3, "persistent"] }, { ionClose: "ionClose" }), core["_16" /* ɵqud */](335544320, 1, { menuContent: 0 }), core["_16" /* ɵqud */](335544320, 2, { menuNav: 0 }), (_l()(), core["_18" /* ɵted */](-1, 0, ["\n    "])), (_l()(), core["Z" /* ɵeld */](6, 0, null, 0, 10, "ion-header", [], null, null, null, null, null)), core["Y" /* ɵdid */](7, 16384, null, 0, toolbar_header["a" /* Header */], [config["a" /* Config */], core["j" /* ElementRef */], core["z" /* Renderer */], [2, view_controller["a" /* ViewController */]]], null, null), (_l()(), core["_18" /* ɵted */](-1, null, ["\n        "])), (_l()(), core["Z" /* ɵeld */](9, 0, null, null, 6, "ion-toolbar", [["class", "toolbar"]], [[2, "statusbar-padding", null]], null, null, toolbar_ngfactory["b" /* View_Toolbar_0 */], toolbar_ngfactory["a" /* RenderType_Toolbar */])), core["Y" /* ɵdid */](10, 49152, null, 0, toolbar["a" /* Toolbar */], [config["a" /* Config */], core["j" /* ElementRef */], core["z" /* Renderer */]], null, null), (_l()(), core["_18" /* ɵted */](-1, 3, ["\n            "])), (_l()(), core["Z" /* ɵeld */](12, 0, null, 3, 2, "ion-title", [], null, null, null, toolbar_title_ngfactory["b" /* View_ToolbarTitle_0 */], toolbar_title_ngfactory["a" /* RenderType_ToolbarTitle */])), core["Y" /* ɵdid */](13, 49152, null, 0, toolbar_title["a" /* ToolbarTitle */], [config["a" /* Config */], core["j" /* ElementRef */], core["z" /* Renderer */], [2, toolbar["a" /* Toolbar */]], [2, navbar["a" /* Navbar */]]], null, null), (_l()(), core["_18" /* ɵted */](-1, 0, ["Weakness"])), (_l()(), core["_18" /* ɵted */](-1, 3, ["\n        "])), (_l()(), core["_18" /* ɵted */](-1, null, ["\n    "])), (_l()(), core["_18" /* ɵted */](-1, 0, ["\n    "])), (_l()(), core["Z" /* ɵeld */](18, 0, null, 0, 15, "ion-content", [], [[2, "statusbar-padding", null], [2, "has-refresher", null]], null, null, content_ngfactory["b" /* View_Content_0 */], content_ngfactory["a" /* RenderType_Content */])), core["Y" /* ɵdid */](19, 4374528, [[1, 4]], 0, content["a" /* Content */], [config["a" /* Config */], platform_platform["a" /* Platform */], dom_controller["a" /* DomController */], core["j" /* ElementRef */], core["z" /* Renderer */], app_app["a" /* App */], keyboard["a" /* Keyboard */], core["u" /* NgZone */], [2, view_controller["a" /* ViewController */]], [2, nav_controller["a" /* NavController */]]], null, null), (_l()(), core["_18" /* ɵted */](-1, 1, ["\n        "])), (_l()(), core["Z" /* ɵeld */](21, 0, null, 1, 5, "ion-list", [], null, null, null, null, null)), core["Y" /* ɵdid */](22, 16384, null, 0, list["a" /* List */], [config["a" /* Config */], core["j" /* ElementRef */], core["z" /* Renderer */], platform_platform["a" /* Platform */], gesture_controller["l" /* GestureController */], dom_controller["a" /* DomController */]], null, null), (_l()(), core["_18" /* ɵted */](-1, null, ["\n            "])), (_l()(), core["U" /* ɵand */](16777216, null, null, 1, null, View_MyApp_1)), core["Y" /* ɵdid */](25, 802816, null, 0, common["h" /* NgForOf */], [core["I" /* ViewContainerRef */], core["F" /* TemplateRef */], core["p" /* IterableDiffers */]], { ngForOf: [0, "ngForOf"] }, null), (_l()(), core["_18" /* ɵted */](-1, null, ["\n        "])), (_l()(), core["_18" /* ɵted */](-1, 1, ["\n        "])), (_l()(), core["Z" /* ɵeld */](28, 0, null, 1, 2, "div", [["class", "version"]], null, null, null, null, null)), (_l()(), core["_18" /* ɵted */](-1, null, ["Version "])), (_l()(), core["Z" /* ɵeld */](30, 0, null, null, 0, "span", [], [[8, "innerHTML", 1]], null, null, null, null)), (_l()(), core["_18" /* ɵted */](-1, 1, ["\n        "])), (_l()(), core["Z" /* ɵeld */](32, 0, null, 1, 0, "div", [["class", "copyright"]], [[8, "innerHTML", 1]], null, null, null, null)), (_l()(), core["_18" /* ɵted */](-1, 1, ["\n    "])), (_l()(), core["_18" /* ɵted */](-1, 0, ["\n"])), (_l()(), core["_18" /* ɵted */](-1, null, ["\n\n"])), (_l()(), core["Z" /* ɵeld */](36, 0, null, null, 2, "ion-nav", [["swipeBackEnabled", "false"]], null, null, null, nav_ngfactory["b" /* View_Nav_0 */], nav_ngfactory["a" /* RenderType_Nav */])), core["_15" /* ɵprd */](6144, null, split_pane["a" /* RootNode */], null, [nav_nav["a" /* Nav */]]), core["Y" /* ɵdid */](38, 4374528, [["content", 4]], 0, nav_nav["a" /* Nav */], [[2, view_controller["a" /* ViewController */]], [2, nav_controller["a" /* NavController */]], app_app["a" /* App */], config["a" /* Config */], platform_platform["a" /* Platform */], core["j" /* ElementRef */], core["u" /* NgZone */], core["z" /* Renderer */], core["i" /* ComponentFactoryResolver */], gesture_controller["l" /* GestureController */], transition_controller["a" /* TransitionController */], [2, deep_linker["a" /* DeepLinker */]], dom_controller["a" /* DomController */], core["k" /* ErrorHandler */]], { swipeBackEnabled: [0, "swipeBackEnabled"], root: [1, "root"] }, null), (_l()(), core["_18" /* ɵted */](-1, null, ["\n"]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = core["_13" /* ɵnov */](_v, 38); var currVal_1 = "push"; var currVal_2 = "left"; var currVal_3 = "true"; _ck(_v, 2, 0, currVal_0, currVal_1, currVal_2, currVal_3); var currVal_7 = _co.menu; _ck(_v, 25, 0, currVal_7); var currVal_10 = "false"; var currVal_11 = _co.rootPage; _ck(_v, 38, 0, currVal_10, currVal_11); }, function (_ck, _v) { var _co = _v.component; var currVal_4 = core["_13" /* ɵnov */](_v, 10)._sbPadding; _ck(_v, 9, 0, currVal_4); var currVal_5 = core["_13" /* ɵnov */](_v, 19).statusbarPadding; var currVal_6 = core["_13" /* ɵnov */](_v, 19)._hasRefresher; _ck(_v, 18, 0, currVal_5, currVal_6); var currVal_8 = _co.ui.version; _ck(_v, 30, 0, currVal_8); var currVal_9 = _co.copyright; _ck(_v, 32, 0, currVal_9); });
}
function View_MyApp_Host_0(_l) { return core["_19" /* ɵvid */](0, [(_l()(), core["Z" /* ɵeld */](0, 0, null, null, 1, "ng-component", [], null, null, null, View_MyApp_0, RenderType_MyApp)), core["Y" /* ɵdid */](1, 49152, null, 0, app_component_MyApp, [util_events["a" /* Events */], platform_platform["a" /* Platform */], status_bar["a" /* StatusBar */], splash_screen["a" /* SplashScreen */], ffxi_FFXIService, ui_UIService, menu_controller["a" /* MenuController */]], null, null)], null, null); }
var MyAppNgFactory = /*@__PURE__*/ core["V" /* ɵccf */]("ng-component", app_component_MyApp, View_MyApp_Host_0, {}, {}, []);





// EXTERNAL MODULE: ./node_modules/ionic-angular/components/toolbar/toolbar-footer.js
var toolbar_footer = __webpack_require__(66);

// EXTERNAL MODULE: ./node_modules/@angular/forms/esm5/forms.js
var esm5_forms = __webpack_require__(15);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/segment/segment.js
var segment = __webpack_require__(65);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/segment/segment-button.ngfactory.js
var segment_button_ngfactory = __webpack_require__(135);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/segment/segment-button.js
var segment_button = __webpack_require__(47);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/toolbar/navbar.ngfactory.js
var navbar_ngfactory = __webpack_require__(68);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/toolbar/toolbar-item.js
var toolbar_item = __webpack_require__(48);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/button/button.ngfactory.js
var button_ngfactory = __webpack_require__(26);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/button/button.js
var button_button = __webpack_require__(14);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/menu/menu-toggle.js
var menu_toggle = __webpack_require__(51);

// EXTERNAL MODULE: ./node_modules/ionic-angular/navigation/nav-params.js
var nav_params = __webpack_require__(10);

// CONCATENATED MODULE: ./src/pages/abyssea/abyssea.ngfactory.js
/**
* @fileoverview This file is generated by the Angular template compiler.
* Do not edit.
* @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
* tslint:disable
*/
/** PURE_IMPORTS_START _angular_core,_.._.._node_modules_ionic_angular_components_item_item.ngfactory,ionic_angular_components_item_item,ionic_angular_util_form,ionic_angular_config_config,ionic_angular_components_item_item_reorder,ionic_angular_components_item_item_content,ionic_angular_components_list_list,ionic_angular_platform_platform,ionic_angular_gestures_gesture_controller,ionic_angular_platform_dom_controller,ionic_angular_components_list_list_header,_angular_common,ionic_angular_components_toolbar_toolbar_footer,ionic_angular_navigation_view_controller,_.._.._node_modules_ionic_angular_components_toolbar_toolbar.ngfactory,ionic_angular_components_toolbar_toolbar,_angular_forms,ionic_angular_components_segment_segment,_.._.._node_modules_ionic_angular_components_segment_segment_button.ngfactory,ionic_angular_components_segment_segment_button,ionic_angular_components_toolbar_toolbar_header,_.._.._node_modules_ionic_angular_components_toolbar_navbar.ngfactory,ionic_angular_components_toolbar_navbar,ionic_angular_components_app_app,ionic_angular_navigation_nav_controller,ionic_angular_components_toolbar_toolbar_item,_.._.._node_modules_ionic_angular_components_button_button.ngfactory,ionic_angular_components_button_button,ionic_angular_components_menu_menu_toggle,ionic_angular_components_app_menu_controller,_.._.._node_modules_ionic_angular_components_toolbar_toolbar_title.ngfactory,ionic_angular_components_toolbar_toolbar_title,_.._.._node_modules_ionic_angular_components_content_content.ngfactory,ionic_angular_components_content_content,ionic_angular_platform_keyboard,_abyssea,ionic_angular_navigation_nav_params,_.._providers_ffxi,_.._providers_ui PURE_IMPORTS_END */








































var styles_AbysseaPage = [];
var RenderType_AbysseaPage = /*@__PURE__*/ core["X" /* ɵcrt */]({ encapsulation: 2, styles: styles_AbysseaPage, data: {} });

function View_AbysseaPage_3(_l) { return core["_19" /* ɵvid */](0, [(_l()(), core["Z" /* ɵeld */](0, 0, null, null, 9, "ion-item", [["class", "item item-block"]], null, null, null, item_ngfactory["b" /* View_Item_0 */], item_ngfactory["a" /* RenderType_Item */])), core["Y" /* ɵdid */](1, 1097728, null, 3, item["a" /* Item */], [util_form["a" /* Form */], config["a" /* Config */], core["j" /* ElementRef */], core["z" /* Renderer */], [2, item_reorder["a" /* ItemReorder */]]], null, null), core["_16" /* ɵqud */](335544320, 7, { contentLabel: 0 }), core["_16" /* ɵqud */](603979776, 8, { _buttons: 1 }), core["_16" /* ɵqud */](603979776, 9, { _icons: 1 }), core["Y" /* ɵdid */](5, 16384, null, 0, item_content["a" /* ItemContent */], [], null, null), (_l()(), core["_18" /* ɵted */](-1, 2, ["\n                "])), (_l()(), core["Z" /* ɵeld */](7, 0, null, 2, 0, "img", [], [[8, "src", 4]], null, null, null, null)), (_l()(), core["Z" /* ɵeld */](8, 0, null, 2, 0, "span", [], [[8, "innerHTML", 1]], null, null, null, null)), (_l()(), core["_18" /* ɵted */](-1, 2, ["\n            "]))], null, function (_ck, _v) { var currVal_0 = (("../assets/images/weapons/" + _v.context.$implicit.weapon) + ".png"); _ck(_v, 7, 0, currVal_0); var currVal_1 = _v.context.$implicit.weaponskill; _ck(_v, 8, 0, currVal_1); }); }
function View_AbysseaPage_2(_l) { return core["_19" /* ɵvid */](0, [(_l()(), core["Z" /* ɵeld */](0, 0, null, null, 16, "ion-list", [], null, null, null, null, null)), core["Y" /* ɵdid */](1, 16384, null, 0, list["a" /* List */], [config["a" /* Config */], core["j" /* ElementRef */], core["z" /* Renderer */], platform_platform["a" /* Platform */], gesture_controller["l" /* GestureController */], dom_controller["a" /* DomController */]], null, null), (_l()(), core["_18" /* ɵted */](-1, null, ["\n            "])), (_l()(), core["Z" /* ɵeld */](3, 0, null, null, 9, "ion-list-header", [["class", "item"]], null, null, null, item_ngfactory["b" /* View_Item_0 */], item_ngfactory["a" /* RenderType_Item */])), core["Y" /* ɵdid */](4, 1097728, null, 3, item["a" /* Item */], [util_form["a" /* Form */], config["a" /* Config */], core["j" /* ElementRef */], core["z" /* Renderer */], [2, item_reorder["a" /* ItemReorder */]]], null, null), core["_16" /* ɵqud */](335544320, 4, { contentLabel: 0 }), core["_16" /* ɵqud */](603979776, 5, { _buttons: 1 }), core["_16" /* ɵqud */](603979776, 6, { _icons: 1 }), core["Y" /* ɵdid */](8, 16384, null, 0, list_header["a" /* ListHeader */], [config["a" /* Config */], core["z" /* Renderer */], core["j" /* ElementRef */], [8, null]], null, null), (_l()(), core["_18" /* ɵted */](-1, 2, ["\n                "])), (_l()(), core["Z" /* ɵeld */](10, 0, null, 2, 0, "img", [], [[8, "src", 4]], null, null, null, null)), (_l()(), core["Z" /* ɵeld */](11, 0, null, 2, 0, "span", [], [[8, "innerHTML", 1]], null, null, null, null)), (_l()(), core["_18" /* ɵted */](-1, 2, ["\n            "])), (_l()(), core["_18" /* ɵted */](-1, null, ["\n            "])), (_l()(), core["U" /* ɵand */](16777216, null, null, 1, null, View_AbysseaPage_3)), core["Y" /* ɵdid */](15, 802816, null, 0, common["h" /* NgForOf */], [core["I" /* ViewContainerRef */], core["F" /* TemplateRef */], core["p" /* IterableDiffers */]], { ngForOf: [0, "ngForOf"] }, null), (_l()(), core["_18" /* ɵted */](-1, null, ["\n        "]))], function (_ck, _v) { var currVal_2 = _v.context.$implicit.items; _ck(_v, 15, 0, currVal_2); }, function (_ck, _v) { var currVal_0 = (("../assets/images/elements/" + _v.context.$implicit.title) + ".png"); _ck(_v, 10, 0, currVal_0); var currVal_1 = _v.context.$implicit.title; _ck(_v, 11, 0, currVal_1); }); }
function View_AbysseaPage_1(_l) { return core["_19" /* ɵvid */](0, [(_l()(), core["Z" /* ɵeld */](0, 0, null, null, 4, null, null, null, null, null, null, null)), (_l()(), core["_18" /* ɵted */](-1, null, ["\n        "])), (_l()(), core["U" /* ɵand */](16777216, null, null, 1, null, View_AbysseaPage_2)), core["Y" /* ɵdid */](3, 802816, null, 0, common["h" /* NgForOf */], [core["I" /* ViewContainerRef */], core["F" /* TemplateRef */], core["p" /* IterableDiffers */]], { ngForOf: [0, "ngForOf"] }, null), (_l()(), core["_18" /* ɵted */](-1, null, ["\n    "]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.ffxi.abyssea.red; _ck(_v, 3, 0, currVal_0); }, null); }
function View_AbysseaPage_6(_l) { return core["_19" /* ɵvid */](0, [(_l()(), core["Z" /* ɵeld */](0, 0, null, null, 9, "ion-item", [["class", "item item-block"]], null, null, null, item_ngfactory["b" /* View_Item_0 */], item_ngfactory["a" /* RenderType_Item */])), core["Y" /* ɵdid */](1, 1097728, null, 3, item["a" /* Item */], [util_form["a" /* Form */], config["a" /* Config */], core["j" /* ElementRef */], core["z" /* Renderer */], [2, item_reorder["a" /* ItemReorder */]]], null, null), core["_16" /* ɵqud */](335544320, 13, { contentLabel: 0 }), core["_16" /* ɵqud */](603979776, 14, { _buttons: 1 }), core["_16" /* ɵqud */](603979776, 15, { _icons: 1 }), core["Y" /* ɵdid */](5, 16384, null, 0, item_content["a" /* ItemContent */], [], null, null), (_l()(), core["_18" /* ɵted */](-1, 2, ["\n                "])), (_l()(), core["Z" /* ɵeld */](7, 0, null, 2, 0, "img", [], [[8, "src", 4]], null, null, null, null)), (_l()(), core["Z" /* ɵeld */](8, 0, null, 2, 0, "span", [], [[8, "innerHTML", 1]], null, null, null, null)), (_l()(), core["_18" /* ɵted */](-1, 2, ["\n            "]))], null, function (_ck, _v) { var currVal_0 = (("../assets/images/type/" + _v.context.$implicit.type) + ".png"); _ck(_v, 7, 0, currVal_0); var currVal_1 = _v.context.$implicit.spell; _ck(_v, 8, 0, currVal_1); }); }
function View_AbysseaPage_5(_l) { return core["_19" /* ɵvid */](0, [(_l()(), core["Z" /* ɵeld */](0, 0, null, null, 16, "ion-list", [], null, null, null, null, null)), core["Y" /* ɵdid */](1, 16384, null, 0, list["a" /* List */], [config["a" /* Config */], core["j" /* ElementRef */], core["z" /* Renderer */], platform_platform["a" /* Platform */], gesture_controller["l" /* GestureController */], dom_controller["a" /* DomController */]], null, null), (_l()(), core["_18" /* ɵted */](-1, null, ["\n            "])), (_l()(), core["Z" /* ɵeld */](3, 0, null, null, 9, "ion-list-header", [["class", "item"]], null, null, null, item_ngfactory["b" /* View_Item_0 */], item_ngfactory["a" /* RenderType_Item */])), core["Y" /* ɵdid */](4, 1097728, null, 3, item["a" /* Item */], [util_form["a" /* Form */], config["a" /* Config */], core["j" /* ElementRef */], core["z" /* Renderer */], [2, item_reorder["a" /* ItemReorder */]]], null, null), core["_16" /* ɵqud */](335544320, 10, { contentLabel: 0 }), core["_16" /* ɵqud */](603979776, 11, { _buttons: 1 }), core["_16" /* ɵqud */](603979776, 12, { _icons: 1 }), core["Y" /* ɵdid */](8, 16384, null, 0, list_header["a" /* ListHeader */], [config["a" /* Config */], core["z" /* Renderer */], core["j" /* ElementRef */], [8, null]], null, null), (_l()(), core["_18" /* ɵted */](-1, 2, ["\n                "])), (_l()(), core["Z" /* ɵeld */](10, 0, null, 2, 0, "img", [], [[8, "src", 4]], null, null, null, null)), (_l()(), core["Z" /* ɵeld */](11, 0, null, 2, 0, "span", [], [[8, "innerHTML", 1]], null, null, null, null)), (_l()(), core["_18" /* ɵted */](-1, 2, ["\n            "])), (_l()(), core["_18" /* ɵted */](-1, null, ["\n            "])), (_l()(), core["U" /* ɵand */](16777216, null, null, 1, null, View_AbysseaPage_6)), core["Y" /* ɵdid */](15, 802816, null, 0, common["h" /* NgForOf */], [core["I" /* ViewContainerRef */], core["F" /* TemplateRef */], core["p" /* IterableDiffers */]], { ngForOf: [0, "ngForOf"] }, null), (_l()(), core["_18" /* ɵted */](-1, null, ["\n        "]))], function (_ck, _v) { var currVal_2 = _v.context.$implicit.items; _ck(_v, 15, 0, currVal_2); }, function (_ck, _v) { var currVal_0 = (("../assets/images/elements/" + _v.context.$implicit.title) + ".png"); _ck(_v, 10, 0, currVal_0); var currVal_1 = _v.context.$implicit.title; _ck(_v, 11, 0, currVal_1); }); }
function View_AbysseaPage_4(_l) { return core["_19" /* ɵvid */](0, [(_l()(), core["Z" /* ɵeld */](0, 0, null, null, 4, null, null, null, null, null, null, null)), (_l()(), core["_18" /* ɵted */](-1, null, ["\n        "])), (_l()(), core["U" /* ɵand */](16777216, null, null, 1, null, View_AbysseaPage_5)), core["Y" /* ɵdid */](3, 802816, null, 0, common["h" /* NgForOf */], [core["I" /* ViewContainerRef */], core["F" /* TemplateRef */], core["p" /* IterableDiffers */]], { ngForOf: [0, "ngForOf"] }, null), (_l()(), core["_18" /* ɵted */](-1, null, ["\n    "]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.ffxi.abyssea.yellow; _ck(_v, 3, 0, currVal_0); }, null); }
function View_AbysseaPage_9(_l) { return core["_19" /* ɵvid */](0, [(_l()(), core["Z" /* ɵeld */](0, 0, null, null, 9, "ion-item", [["class", "item item-block"]], null, null, null, item_ngfactory["b" /* View_Item_0 */], item_ngfactory["a" /* RenderType_Item */])), core["Y" /* ɵdid */](1, 1097728, null, 3, item["a" /* Item */], [util_form["a" /* Form */], config["a" /* Config */], core["j" /* ElementRef */], core["z" /* Renderer */], [2, item_reorder["a" /* ItemReorder */]]], null, null), core["_16" /* ɵqud */](335544320, 19, { contentLabel: 0 }), core["_16" /* ɵqud */](603979776, 20, { _buttons: 1 }), core["_16" /* ɵqud */](603979776, 21, { _icons: 1 }), core["Y" /* ɵdid */](5, 16384, null, 0, item_content["a" /* ItemContent */], [], null, null), (_l()(), core["_18" /* ɵted */](-1, 2, ["\n                "])), (_l()(), core["Z" /* ɵeld */](7, 0, null, 2, 0, "img", [], [[8, "src", 4]], null, null, null, null)), (_l()(), core["Z" /* ɵeld */](8, 0, null, 2, 0, "span", [], [[8, "innerHTML", 1]], null, null, null, null)), (_l()(), core["_18" /* ɵted */](-1, 2, ["\n            "]))], null, function (_ck, _v) { var currVal_0 = (("../assets/images/weapons/" + _v.context.$implicit.weapon) + ".png"); _ck(_v, 7, 0, currVal_0); var currVal_1 = _v.context.$implicit.weaponskill; _ck(_v, 8, 0, currVal_1); }); }
function View_AbysseaPage_8(_l) { return core["_19" /* ɵvid */](0, [(_l()(), core["Z" /* ɵeld */](0, 0, null, null, 15, "ion-list", [], null, null, null, null, null)), core["Y" /* ɵdid */](1, 16384, null, 0, list["a" /* List */], [config["a" /* Config */], core["j" /* ElementRef */], core["z" /* Renderer */], platform_platform["a" /* Platform */], gesture_controller["l" /* GestureController */], dom_controller["a" /* DomController */]], null, null), (_l()(), core["_18" /* ɵted */](-1, null, ["\n            "])), (_l()(), core["Z" /* ɵeld */](3, 0, null, null, 8, "ion-list-header", [["class", "item"]], null, null, null, item_ngfactory["b" /* View_Item_0 */], item_ngfactory["a" /* RenderType_Item */])), core["Y" /* ɵdid */](4, 1097728, null, 3, item["a" /* Item */], [util_form["a" /* Form */], config["a" /* Config */], core["j" /* ElementRef */], core["z" /* Renderer */], [2, item_reorder["a" /* ItemReorder */]]], null, null), core["_16" /* ɵqud */](335544320, 16, { contentLabel: 0 }), core["_16" /* ɵqud */](603979776, 17, { _buttons: 1 }), core["_16" /* ɵqud */](603979776, 18, { _icons: 1 }), core["Y" /* ɵdid */](8, 16384, null, 0, list_header["a" /* ListHeader */], [config["a" /* Config */], core["z" /* Renderer */], core["j" /* ElementRef */], [8, null]], null, null), (_l()(), core["_18" /* ɵted */](-1, 2, ["\n                "])), (_l()(), core["Z" /* ɵeld */](10, 0, null, 2, 0, "span", [], [[8, "innerHTML", 1]], null, null, null, null)), (_l()(), core["_18" /* ɵted */](-1, 2, ["\n            "])), (_l()(), core["_18" /* ɵted */](-1, null, ["\n            "])), (_l()(), core["U" /* ɵand */](16777216, null, null, 1, null, View_AbysseaPage_9)), core["Y" /* ɵdid */](14, 802816, null, 0, common["h" /* NgForOf */], [core["I" /* ViewContainerRef */], core["F" /* TemplateRef */], core["p" /* IterableDiffers */]], { ngForOf: [0, "ngForOf"] }, null), (_l()(), core["_18" /* ɵted */](-1, null, ["\n        "]))], function (_ck, _v) { var currVal_1 = _v.context.$implicit.items; _ck(_v, 14, 0, currVal_1); }, function (_ck, _v) { var currVal_0 = _v.context.$implicit.title; _ck(_v, 10, 0, currVal_0); }); }
function View_AbysseaPage_7(_l) { return core["_19" /* ɵvid */](0, [(_l()(), core["Z" /* ɵeld */](0, 0, null, null, 4, null, null, null, null, null, null, null)), (_l()(), core["_18" /* ɵted */](-1, null, ["\n        "])), (_l()(), core["U" /* ɵand */](16777216, null, null, 1, null, View_AbysseaPage_8)), core["Y" /* ɵdid */](3, 802816, null, 0, common["h" /* NgForOf */], [core["I" /* ViewContainerRef */], core["F" /* TemplateRef */], core["p" /* IterableDiffers */]], { ngForOf: [0, "ngForOf"] }, null), (_l()(), core["_18" /* ɵted */](-1, null, ["\n    "]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.ffxi.abyssea.blue.piercing; _ck(_v, 3, 0, currVal_0); }, null); }
function View_AbysseaPage_12(_l) { return core["_19" /* ɵvid */](0, [(_l()(), core["Z" /* ɵeld */](0, 0, null, null, 9, "ion-item", [["class", "item item-block"]], null, null, null, item_ngfactory["b" /* View_Item_0 */], item_ngfactory["a" /* RenderType_Item */])), core["Y" /* ɵdid */](1, 1097728, null, 3, item["a" /* Item */], [util_form["a" /* Form */], config["a" /* Config */], core["j" /* ElementRef */], core["z" /* Renderer */], [2, item_reorder["a" /* ItemReorder */]]], null, null), core["_16" /* ɵqud */](335544320, 25, { contentLabel: 0 }), core["_16" /* ɵqud */](603979776, 26, { _buttons: 1 }), core["_16" /* ɵqud */](603979776, 27, { _icons: 1 }), core["Y" /* ɵdid */](5, 16384, null, 0, item_content["a" /* ItemContent */], [], null, null), (_l()(), core["_18" /* ɵted */](-1, 2, ["\n                "])), (_l()(), core["Z" /* ɵeld */](7, 0, null, 2, 0, "img", [], [[8, "src", 4]], null, null, null, null)), (_l()(), core["Z" /* ɵeld */](8, 0, null, 2, 0, "span", [], [[8, "innerHTML", 1]], null, null, null, null)), (_l()(), core["_18" /* ɵted */](-1, 2, ["\n            "]))], null, function (_ck, _v) { var currVal_0 = (("../assets/images/weapons/" + _v.context.$implicit.weapon) + ".png"); _ck(_v, 7, 0, currVal_0); var currVal_1 = _v.context.$implicit.weaponskill; _ck(_v, 8, 0, currVal_1); }); }
function View_AbysseaPage_11(_l) { return core["_19" /* ɵvid */](0, [(_l()(), core["Z" /* ɵeld */](0, 0, null, null, 15, "ion-list", [], null, null, null, null, null)), core["Y" /* ɵdid */](1, 16384, null, 0, list["a" /* List */], [config["a" /* Config */], core["j" /* ElementRef */], core["z" /* Renderer */], platform_platform["a" /* Platform */], gesture_controller["l" /* GestureController */], dom_controller["a" /* DomController */]], null, null), (_l()(), core["_18" /* ɵted */](-1, null, ["\n            "])), (_l()(), core["Z" /* ɵeld */](3, 0, null, null, 8, "ion-list-header", [["class", "item"]], null, null, null, item_ngfactory["b" /* View_Item_0 */], item_ngfactory["a" /* RenderType_Item */])), core["Y" /* ɵdid */](4, 1097728, null, 3, item["a" /* Item */], [util_form["a" /* Form */], config["a" /* Config */], core["j" /* ElementRef */], core["z" /* Renderer */], [2, item_reorder["a" /* ItemReorder */]]], null, null), core["_16" /* ɵqud */](335544320, 22, { contentLabel: 0 }), core["_16" /* ɵqud */](603979776, 23, { _buttons: 1 }), core["_16" /* ɵqud */](603979776, 24, { _icons: 1 }), core["Y" /* ɵdid */](8, 16384, null, 0, list_header["a" /* ListHeader */], [config["a" /* Config */], core["z" /* Renderer */], core["j" /* ElementRef */], [8, null]], null, null), (_l()(), core["_18" /* ɵted */](-1, 2, ["\n                "])), (_l()(), core["Z" /* ɵeld */](10, 0, null, 2, 0, "span", [], [[8, "innerHTML", 1]], null, null, null, null)), (_l()(), core["_18" /* ɵted */](-1, 2, ["\n            "])), (_l()(), core["_18" /* ɵted */](-1, null, ["\n            "])), (_l()(), core["U" /* ɵand */](16777216, null, null, 1, null, View_AbysseaPage_12)), core["Y" /* ɵdid */](14, 802816, null, 0, common["h" /* NgForOf */], [core["I" /* ViewContainerRef */], core["F" /* TemplateRef */], core["p" /* IterableDiffers */]], { ngForOf: [0, "ngForOf"] }, null), (_l()(), core["_18" /* ɵted */](-1, null, ["\n        "]))], function (_ck, _v) { var currVal_1 = _v.context.$implicit.items; _ck(_v, 14, 0, currVal_1); }, function (_ck, _v) { var currVal_0 = _v.context.$implicit.title; _ck(_v, 10, 0, currVal_0); }); }
function View_AbysseaPage_10(_l) { return core["_19" /* ɵvid */](0, [(_l()(), core["Z" /* ɵeld */](0, 0, null, null, 4, null, null, null, null, null, null, null)), (_l()(), core["_18" /* ɵted */](-1, null, ["\n        "])), (_l()(), core["U" /* ɵand */](16777216, null, null, 1, null, View_AbysseaPage_11)), core["Y" /* ɵdid */](3, 802816, null, 0, common["h" /* NgForOf */], [core["I" /* ViewContainerRef */], core["F" /* TemplateRef */], core["p" /* IterableDiffers */]], { ngForOf: [0, "ngForOf"] }, null), (_l()(), core["_18" /* ɵted */](-1, null, ["\n    "]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.ffxi.abyssea.blue.slashing; _ck(_v, 3, 0, currVal_0); }, null); }
function View_AbysseaPage_15(_l) { return core["_19" /* ɵvid */](0, [(_l()(), core["Z" /* ɵeld */](0, 0, null, null, 9, "ion-item", [["class", "item item-block"]], null, null, null, item_ngfactory["b" /* View_Item_0 */], item_ngfactory["a" /* RenderType_Item */])), core["Y" /* ɵdid */](1, 1097728, null, 3, item["a" /* Item */], [util_form["a" /* Form */], config["a" /* Config */], core["j" /* ElementRef */], core["z" /* Renderer */], [2, item_reorder["a" /* ItemReorder */]]], null, null), core["_16" /* ɵqud */](335544320, 31, { contentLabel: 0 }), core["_16" /* ɵqud */](603979776, 32, { _buttons: 1 }), core["_16" /* ɵqud */](603979776, 33, { _icons: 1 }), core["Y" /* ɵdid */](5, 16384, null, 0, item_content["a" /* ItemContent */], [], null, null), (_l()(), core["_18" /* ɵted */](-1, 2, ["\n                "])), (_l()(), core["Z" /* ɵeld */](7, 0, null, 2, 0, "img", [], [[8, "src", 4]], null, null, null, null)), (_l()(), core["Z" /* ɵeld */](8, 0, null, 2, 0, "span", [], [[8, "innerHTML", 1]], null, null, null, null)), (_l()(), core["_18" /* ɵted */](-1, 2, ["\n            "]))], null, function (_ck, _v) { var currVal_0 = (("../assets/images/weapons/" + _v.context.$implicit.weapon) + ".png"); _ck(_v, 7, 0, currVal_0); var currVal_1 = _v.context.$implicit.weaponskill; _ck(_v, 8, 0, currVal_1); }); }
function View_AbysseaPage_14(_l) { return core["_19" /* ɵvid */](0, [(_l()(), core["Z" /* ɵeld */](0, 0, null, null, 15, "ion-list", [], null, null, null, null, null)), core["Y" /* ɵdid */](1, 16384, null, 0, list["a" /* List */], [config["a" /* Config */], core["j" /* ElementRef */], core["z" /* Renderer */], platform_platform["a" /* Platform */], gesture_controller["l" /* GestureController */], dom_controller["a" /* DomController */]], null, null), (_l()(), core["_18" /* ɵted */](-1, null, ["\n            "])), (_l()(), core["Z" /* ɵeld */](3, 0, null, null, 8, "ion-list-header", [["class", "item"]], null, null, null, item_ngfactory["b" /* View_Item_0 */], item_ngfactory["a" /* RenderType_Item */])), core["Y" /* ɵdid */](4, 1097728, null, 3, item["a" /* Item */], [util_form["a" /* Form */], config["a" /* Config */], core["j" /* ElementRef */], core["z" /* Renderer */], [2, item_reorder["a" /* ItemReorder */]]], null, null), core["_16" /* ɵqud */](335544320, 28, { contentLabel: 0 }), core["_16" /* ɵqud */](603979776, 29, { _buttons: 1 }), core["_16" /* ɵqud */](603979776, 30, { _icons: 1 }), core["Y" /* ɵdid */](8, 16384, null, 0, list_header["a" /* ListHeader */], [config["a" /* Config */], core["z" /* Renderer */], core["j" /* ElementRef */], [8, null]], null, null), (_l()(), core["_18" /* ɵted */](-1, 2, ["\n                "])), (_l()(), core["Z" /* ɵeld */](10, 0, null, 2, 0, "span", [], [[8, "innerHTML", 1]], null, null, null, null)), (_l()(), core["_18" /* ɵted */](-1, 2, ["\n            "])), (_l()(), core["_18" /* ɵted */](-1, null, ["\n            "])), (_l()(), core["U" /* ɵand */](16777216, null, null, 1, null, View_AbysseaPage_15)), core["Y" /* ɵdid */](14, 802816, null, 0, common["h" /* NgForOf */], [core["I" /* ViewContainerRef */], core["F" /* TemplateRef */], core["p" /* IterableDiffers */]], { ngForOf: [0, "ngForOf"] }, null), (_l()(), core["_18" /* ɵted */](-1, null, ["\n        "]))], function (_ck, _v) { var currVal_1 = _v.context.$implicit.items; _ck(_v, 14, 0, currVal_1); }, function (_ck, _v) { var currVal_0 = _v.context.$implicit.title; _ck(_v, 10, 0, currVal_0); }); }
function View_AbysseaPage_13(_l) { return core["_19" /* ɵvid */](0, [(_l()(), core["Z" /* ɵeld */](0, 0, null, null, 4, null, null, null, null, null, null, null)), (_l()(), core["_18" /* ɵted */](-1, null, ["\n        "])), (_l()(), core["U" /* ɵand */](16777216, null, null, 1, null, View_AbysseaPage_14)), core["Y" /* ɵdid */](3, 802816, null, 0, common["h" /* NgForOf */], [core["I" /* ViewContainerRef */], core["F" /* TemplateRef */], core["p" /* IterableDiffers */]], { ngForOf: [0, "ngForOf"] }, null), (_l()(), core["_18" /* ɵted */](-1, null, ["\n    "]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.ffxi.abyssea.blue.blunt; _ck(_v, 3, 0, currVal_0); }, null); }
function View_AbysseaPage_16(_l) {
    return core["_19" /* ɵvid */](0, [(_l()(), core["Z" /* ɵeld */](0, 0, null, null, 32, "ion-footer", [], null, null, null, null, null)), core["Y" /* ɵdid */](1, 16384, null, 0, toolbar_footer["a" /* Footer */], [config["a" /* Config */], core["j" /* ElementRef */], core["z" /* Renderer */], [2, view_controller["a" /* ViewController */]]], null, null), (_l()(), core["_18" /* ɵted */](-1, null, ["\n    "])), (_l()(), core["Z" /* ɵeld */](3, 0, null, null, 28, "ion-toolbar", [["class", "toolbar"]], [[2, "statusbar-padding", null]], null, null, toolbar_ngfactory["b" /* View_Toolbar_0 */], toolbar_ngfactory["a" /* RenderType_Toolbar */])), core["Y" /* ɵdid */](4, 49152, null, 0, toolbar["a" /* Toolbar */], [config["a" /* Config */], core["j" /* ElementRef */], core["z" /* Renderer */]], null, null), (_l()(), core["_18" /* ɵted */](-1, 3, ["\n        "])), (_l()(), core["Z" /* ɵeld */](6, 0, null, 3, 24, "ion-segment", [], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null], [2, "segment-disabled", null]], [[null, "ngModelChange"]], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (("ngModelChange" === en)) {
                var pd_0 = ((_co.type = $event) !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)), core["Y" /* ɵdid */](7, 671744, null, 0, esm5_forms["h" /* NgModel */], [[8, null], [8, null], [8, null], [8, null]], { model: [0, "model"] }, { update: "ngModelChange" }), core["_15" /* ɵprd */](2048, null, esm5_forms["f" /* NgControl */], null, [esm5_forms["h" /* NgModel */]]), core["Y" /* ɵdid */](9, 16384, null, 0, esm5_forms["g" /* NgControlStatus */], [esm5_forms["f" /* NgControl */]], null, null), core["Y" /* ɵdid */](10, 1196032, null, 1, segment["a" /* Segment */], [config["a" /* Config */], core["j" /* ElementRef */], core["z" /* Renderer */], [2, esm5_forms["f" /* NgControl */]]], null, null), core["_16" /* ɵqud */](603979776, 34, { _buttons: 1 }), (_l()(), core["_18" /* ɵted */](-1, null, ["\n            "])), (_l()(), core["Z" /* ɵeld */](13, 0, null, null, 4, "ion-segment-button", [["class", "segment-button"], ["role", "button"], ["tappable", ""], ["value", "blue-piercing"]], [[2, "segment-button-disabled", null], [2, "segment-activated", null], [1, "aria-pressed", 0]], [[null, "click"]], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (("click" === en)) {
                var pd_0 = (core["_13" /* ɵnov */](_v, 14).onClick() !== false);
                ad = (pd_0 && ad);
            }
            if (("click" === en)) {
                var pd_1 = (_co.ui.link("blue-piercing") !== false);
                ad = (pd_1 && ad);
            }
            return ad;
        }, segment_button_ngfactory["b" /* View_SegmentButton_0 */], segment_button_ngfactory["a" /* RenderType_SegmentButton */])), core["Y" /* ɵdid */](14, 114688, [[34, 4]], 0, segment_button["a" /* SegmentButton */], [], { value: [0, "value"] }, null), (_l()(), core["Z" /* ɵeld */](15, 0, null, 0, 0, "img", [["src", "../assets/images/time/piercing.png"]], null, null, null, null, null)), (_l()(), core["Z" /* ɵeld */](16, 0, null, 0, 1, "span", [], null, null, null, null, null)), (_l()(), core["_18" /* ɵted */](-1, null, ["Piercing"])), (_l()(), core["_18" /* ɵted */](-1, null, ["\n            "])), (_l()(), core["Z" /* ɵeld */](19, 0, null, null, 4, "ion-segment-button", [["class", "segment-button"], ["role", "button"], ["tappable", ""], ["value", "blue-slashing"]], [[2, "segment-button-disabled", null], [2, "segment-activated", null], [1, "aria-pressed", 0]], [[null, "click"]], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (("click" === en)) {
                var pd_0 = (core["_13" /* ɵnov */](_v, 20).onClick() !== false);
                ad = (pd_0 && ad);
            }
            if (("click" === en)) {
                var pd_1 = (_co.ui.link("blue-slashing") !== false);
                ad = (pd_1 && ad);
            }
            return ad;
        }, segment_button_ngfactory["b" /* View_SegmentButton_0 */], segment_button_ngfactory["a" /* RenderType_SegmentButton */])), core["Y" /* ɵdid */](20, 114688, [[34, 4]], 0, segment_button["a" /* SegmentButton */], [], { value: [0, "value"] }, null), (_l()(), core["Z" /* ɵeld */](21, 0, null, 0, 0, "img", [["src", "../assets/images/time/slashing.png"]], null, null, null, null, null)), (_l()(), core["Z" /* ɵeld */](22, 0, null, 0, 1, "span", [], null, null, null, null, null)), (_l()(), core["_18" /* ɵted */](-1, null, ["Slashing"])), (_l()(), core["_18" /* ɵted */](-1, null, ["\n            "])), (_l()(), core["Z" /* ɵeld */](25, 0, null, null, 4, "ion-segment-button", [["class", "segment-button"], ["role", "button"], ["tappable", ""], ["value", "blue-blunt"]], [[2, "segment-button-disabled", null], [2, "segment-activated", null], [1, "aria-pressed", 0]], [[null, "click"]], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (("click" === en)) {
                var pd_0 = (core["_13" /* ɵnov */](_v, 26).onClick() !== false);
                ad = (pd_0 && ad);
            }
            if (("click" === en)) {
                var pd_1 = (_co.ui.link("blue-blunt") !== false);
                ad = (pd_1 && ad);
            }
            return ad;
        }, segment_button_ngfactory["b" /* View_SegmentButton_0 */], segment_button_ngfactory["a" /* RenderType_SegmentButton */])), core["Y" /* ɵdid */](26, 114688, [[34, 4]], 0, segment_button["a" /* SegmentButton */], [], { value: [0, "value"] }, null), (_l()(), core["Z" /* ɵeld */](27, 0, null, 0, 0, "img", [["src", "../assets/images/time/blunt.png"]], null, null, null, null, null)), (_l()(), core["Z" /* ɵeld */](28, 0, null, 0, 1, "span", [], null, null, null, null, null)), (_l()(), core["_18" /* ɵted */](-1, null, ["Blunt"])), (_l()(), core["_18" /* ɵted */](-1, null, ["\n        "])), (_l()(), core["_18" /* ɵted */](-1, 3, ["\n    "])), (_l()(), core["_18" /* ɵted */](-1, null, ["\n"]))], function (_ck, _v) { var _co = _v.component; var currVal_9 = _co.type; _ck(_v, 7, 0, currVal_9); var currVal_13 = "blue-piercing"; _ck(_v, 14, 0, currVal_13); var currVal_17 = "blue-slashing"; _ck(_v, 20, 0, currVal_17); var currVal_21 = "blue-blunt"; _ck(_v, 26, 0, currVal_21); }, function (_ck, _v) { var currVal_0 = core["_13" /* ɵnov */](_v, 4)._sbPadding; _ck(_v, 3, 0, currVal_0); var currVal_1 = core["_13" /* ɵnov */](_v, 9).ngClassUntouched; var currVal_2 = core["_13" /* ɵnov */](_v, 9).ngClassTouched; var currVal_3 = core["_13" /* ɵnov */](_v, 9).ngClassPristine; var currVal_4 = core["_13" /* ɵnov */](_v, 9).ngClassDirty; var currVal_5 = core["_13" /* ɵnov */](_v, 9).ngClassValid; var currVal_6 = core["_13" /* ɵnov */](_v, 9).ngClassInvalid; var currVal_7 = core["_13" /* ɵnov */](_v, 9).ngClassPending; var currVal_8 = core["_13" /* ɵnov */](_v, 10)._disabled; _ck(_v, 6, 0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7, currVal_8); var currVal_10 = core["_13" /* ɵnov */](_v, 14)._disabled; var currVal_11 = core["_13" /* ɵnov */](_v, 14).isActive; var currVal_12 = core["_13" /* ɵnov */](_v, 14).isActive; _ck(_v, 13, 0, currVal_10, currVal_11, currVal_12); var currVal_14 = core["_13" /* ɵnov */](_v, 20)._disabled; var currVal_15 = core["_13" /* ɵnov */](_v, 20).isActive; var currVal_16 = core["_13" /* ɵnov */](_v, 20).isActive; _ck(_v, 19, 0, currVal_14, currVal_15, currVal_16); var currVal_18 = core["_13" /* ɵnov */](_v, 26)._disabled; var currVal_19 = core["_13" /* ɵnov */](_v, 26).isActive; var currVal_20 = core["_13" /* ɵnov */](_v, 26).isActive; _ck(_v, 25, 0, currVal_18, currVal_19, currVal_20); });
}
function View_AbysseaPage_0(_l) {
    return core["_19" /* ɵvid */](0, [(_l()(), core["Z" /* ɵeld */](0, 0, null, null, 29, "ion-header", [], null, null, null, null, null)), core["Y" /* ɵdid */](1, 16384, null, 0, toolbar_header["a" /* Header */], [config["a" /* Config */], core["j" /* ElementRef */], core["z" /* Renderer */], [2, view_controller["a" /* ViewController */]]], null, null), (_l()(), core["_18" /* ɵted */](-1, null, ["\n    "])), (_l()(), core["Z" /* ɵeld */](3, 0, null, null, 25, "ion-navbar", [["class", "toolbar"]], [[8, "hidden", 0], [2, "statusbar-padding", null]], null, null, navbar_ngfactory["b" /* View_Navbar_0 */], navbar_ngfactory["a" /* RenderType_Navbar */])), core["Y" /* ɵdid */](4, 49152, null, 0, navbar["a" /* Navbar */], [app_app["a" /* App */], [2, view_controller["a" /* ViewController */]], [2, nav_controller["a" /* NavController */]], config["a" /* Config */], core["j" /* ElementRef */], core["z" /* Renderer */]], { hideBackButton: [0, "hideBackButton"] }, null), (_l()(), core["_18" /* ɵted */](-1, 3, ["\n        "])), (_l()(), core["Z" /* ɵeld */](6, 0, null, 0, 9, "ion-buttons", [["left", ""]], null, null, null, null, null)), core["Y" /* ɵdid */](7, 16384, null, 1, toolbar_item["a" /* ToolbarItem */], [config["a" /* Config */], core["j" /* ElementRef */], core["z" /* Renderer */], [2, toolbar["a" /* Toolbar */]], [2, navbar["a" /* Navbar */]]], null, null), core["_16" /* ɵqud */](603979776, 1, { _buttons: 1 }), (_l()(), core["_18" /* ɵted */](-1, null, ["\n            "])), (_l()(), core["Z" /* ɵeld */](10, 0, null, null, 4, "button", [["icon-only", ""], ["ion-button", ""], ["menuToggle", ""]], [[8, "hidden", 0]], [[null, "click"]], function (_v, en, $event) {
            var ad = true;
            if (("click" === en)) {
                var pd_0 = (core["_13" /* ɵnov */](_v, 12).toggle() !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, button_ngfactory["b" /* View_Button_0 */], button_ngfactory["a" /* RenderType_Button */])), core["Y" /* ɵdid */](11, 1097728, [[2, 4], [1, 4]], 0, button_button["a" /* Button */], [[8, ""], config["a" /* Config */], core["j" /* ElementRef */], core["z" /* Renderer */]], null, null), core["Y" /* ɵdid */](12, 1064960, null, 0, menu_toggle["a" /* MenuToggle */], [menu_controller["a" /* MenuController */], [2, view_controller["a" /* ViewController */]], [2, button_button["a" /* Button */]], [2, navbar["a" /* Navbar */]]], { menuToggle: [0, "menuToggle"] }, null), core["Y" /* ɵdid */](13, 16384, null, 1, toolbar_item["a" /* ToolbarItem */], [config["a" /* Config */], core["j" /* ElementRef */], core["z" /* Renderer */], [2, toolbar["a" /* Toolbar */]], [2, navbar["a" /* Navbar */]]], null, null), core["_16" /* ɵqud */](603979776, 2, { _buttons: 1 }), (_l()(), core["_18" /* ɵted */](-1, null, ["\n        "])), (_l()(), core["_18" /* ɵted */](-1, 3, ["\n        "])), (_l()(), core["Z" /* ɵeld */](17, 0, null, 3, 2, "ion-title", [], null, null, null, toolbar_title_ngfactory["b" /* View_ToolbarTitle_0 */], toolbar_title_ngfactory["a" /* RenderType_ToolbarTitle */])), core["Y" /* ɵdid */](18, 49152, null, 0, toolbar_title["a" /* ToolbarTitle */], [config["a" /* Config */], core["j" /* ElementRef */], core["z" /* Renderer */], [2, toolbar["a" /* Toolbar */]], [2, navbar["a" /* Navbar */]]], null, null), (_l()(), core["_18" /* ɵted */](19, 0, ["Abyssea ", ""])), (_l()(), core["_18" /* ɵted */](-1, 3, ["\n        "])), (_l()(), core["Z" /* ɵeld */](21, 0, null, 2, 6, "ion-buttons", [["right", ""]], null, null, null, null, null)), core["Y" /* ɵdid */](22, 16384, null, 1, toolbar_item["a" /* ToolbarItem */], [config["a" /* Config */], core["j" /* ElementRef */], core["z" /* Renderer */], [2, toolbar["a" /* Toolbar */]], [2, navbar["a" /* Navbar */]]], null, null), core["_16" /* ɵqud */](603979776, 3, { _buttons: 1 }), (_l()(), core["_18" /* ɵted */](-1, null, ["\n            "])), (_l()(), core["Z" /* ɵeld */](25, 0, null, null, 1, "button", [["ion-button", ""], ["outline", ""], ["small", ""]], [[8, "innerHTML", 1]], [[null, "click"]], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (("click" === en)) {
                var pd_0 = (_co.ui.settings() !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, button_ngfactory["b" /* View_Button_0 */], button_ngfactory["a" /* RenderType_Button */])), core["Y" /* ɵdid */](26, 1097728, [[3, 4]], 0, button_button["a" /* Button */], [[8, ""], config["a" /* Config */], core["j" /* ElementRef */], core["z" /* Renderer */]], { small: [0, "small"], outline: [1, "outline"] }, null), (_l()(), core["_18" /* ɵted */](-1, null, ["\n        "])), (_l()(), core["_18" /* ɵted */](-1, 3, ["\n    "])), (_l()(), core["_18" /* ɵted */](-1, null, ["\n"])), (_l()(), core["_18" /* ɵted */](-1, null, ["\n"])), (_l()(), core["Z" /* ɵeld */](31, 0, null, null, 18, "ion-content", [], [[2, "statusbar-padding", null], [2, "has-refresher", null]], null, null, content_ngfactory["b" /* View_Content_0 */], content_ngfactory["a" /* RenderType_Content */])), core["Y" /* ɵdid */](32, 16384, null, 0, common["m" /* NgSwitch */], [], { ngSwitch: [0, "ngSwitch"] }, null), core["Y" /* ɵdid */](33, 4374528, null, 0, content["a" /* Content */], [config["a" /* Config */], platform_platform["a" /* Platform */], dom_controller["a" /* DomController */], core["j" /* ElementRef */], core["z" /* Renderer */], app_app["a" /* App */], keyboard["a" /* Keyboard */], core["u" /* NgZone */], [2, view_controller["a" /* ViewController */]], [2, nav_controller["a" /* NavController */]]], null, null), (_l()(), core["_18" /* ɵted */](-1, 1, ["\n    "])), (_l()(), core["U" /* ɵand */](16777216, null, 1, 1, null, View_AbysseaPage_1)), core["Y" /* ɵdid */](36, 278528, null, 0, common["n" /* NgSwitchCase */], [core["I" /* ViewContainerRef */], core["F" /* TemplateRef */], common["m" /* NgSwitch */]], { ngSwitchCase: [0, "ngSwitchCase"] }, null), (_l()(), core["_18" /* ɵted */](-1, 1, ["\n    "])), (_l()(), core["U" /* ɵand */](16777216, null, 1, 1, null, View_AbysseaPage_4)), core["Y" /* ɵdid */](39, 278528, null, 0, common["n" /* NgSwitchCase */], [core["I" /* ViewContainerRef */], core["F" /* TemplateRef */], common["m" /* NgSwitch */]], { ngSwitchCase: [0, "ngSwitchCase"] }, null), (_l()(), core["_18" /* ɵted */](-1, 1, ["\n    "])), (_l()(), core["U" /* ɵand */](16777216, null, 1, 1, null, View_AbysseaPage_7)), core["Y" /* ɵdid */](42, 278528, null, 0, common["n" /* NgSwitchCase */], [core["I" /* ViewContainerRef */], core["F" /* TemplateRef */], common["m" /* NgSwitch */]], { ngSwitchCase: [0, "ngSwitchCase"] }, null), (_l()(), core["_18" /* ɵted */](-1, 1, ["\n    "])), (_l()(), core["U" /* ɵand */](16777216, null, 1, 1, null, View_AbysseaPage_10)), core["Y" /* ɵdid */](45, 278528, null, 0, common["n" /* NgSwitchCase */], [core["I" /* ViewContainerRef */], core["F" /* TemplateRef */], common["m" /* NgSwitch */]], { ngSwitchCase: [0, "ngSwitchCase"] }, null), (_l()(), core["_18" /* ɵted */](-1, 1, ["\n    "])), (_l()(), core["U" /* ɵand */](16777216, null, 1, 1, null, View_AbysseaPage_13)), core["Y" /* ɵdid */](48, 278528, null, 0, common["n" /* NgSwitchCase */], [core["I" /* ViewContainerRef */], core["F" /* TemplateRef */], common["m" /* NgSwitch */]], { ngSwitchCase: [0, "ngSwitchCase"] }, null), (_l()(), core["_18" /* ɵted */](-1, 1, ["\n"])), (_l()(), core["_18" /* ɵted */](-1, null, ["\n"])), (_l()(), core["U" /* ɵand */](16777216, null, null, 1, null, View_AbysseaPage_16)), core["Y" /* ɵdid */](52, 16384, null, 0, common["i" /* NgIf */], [core["I" /* ViewContainerRef */], core["F" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_2 = true; _ck(_v, 4, 0, currVal_2); var currVal_4 = ""; _ck(_v, 12, 0, currVal_4); var currVal_7 = ""; var currVal_8 = ""; _ck(_v, 26, 0, currVal_7, currVal_8); var currVal_11 = _co.type; _ck(_v, 32, 0, currVal_11); var currVal_12 = "red"; _ck(_v, 36, 0, currVal_12); var currVal_13 = "yellow"; _ck(_v, 39, 0, currVal_13); var currVal_14 = "blue-piercing"; _ck(_v, 42, 0, currVal_14); var currVal_15 = "blue-slashing"; _ck(_v, 45, 0, currVal_15); var currVal_16 = "blue-blunt"; _ck(_v, 48, 0, currVal_16); var currVal_17 = (_co.type && _co.type.startsWith("blue")); _ck(_v, 52, 0, currVal_17); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = core["_13" /* ɵnov */](_v, 4)._hidden; var currVal_1 = core["_13" /* ɵnov */](_v, 4)._sbPadding; _ck(_v, 3, 0, currVal_0, currVal_1); var currVal_3 = core["_13" /* ɵnov */](_v, 12).isHidden; _ck(_v, 10, 0, currVal_3); var currVal_5 = _co.title; _ck(_v, 19, 0, currVal_5); var currVal_6 = _co.ffxi.vanatime; _ck(_v, 25, 0, currVal_6); var currVal_9 = core["_13" /* ɵnov */](_v, 33).statusbarPadding; var currVal_10 = core["_13" /* ɵnov */](_v, 33)._hasRefresher; _ck(_v, 31, 0, currVal_9, currVal_10); });
}
function View_AbysseaPage_Host_0(_l) { return core["_19" /* ɵvid */](0, [(_l()(), core["Z" /* ɵeld */](0, 0, null, null, 1, "page-abyssea", [], null, null, null, View_AbysseaPage_0, RenderType_AbysseaPage)), core["Y" /* ɵdid */](1, 49152, null, 0, AbysseaPage, [nav_params["a" /* NavParams */], ffxi_FFXIService, ui_UIService], null, null)], null, null); }
var AbysseaPageNgFactory = /*@__PURE__*/ core["V" /* ɵccf */]("page-abyssea", AbysseaPage, View_AbysseaPage_Host_0, {}, {}, []);





// EXTERNAL MODULE: ./node_modules/ionic-angular/components/note/note.js
var note = __webpack_require__(114);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/label/label.js
var label = __webpack_require__(38);

// CONCATENATED MODULE: ./src/pages/dynamis/dynamis.ngfactory.js
/**
* @fileoverview This file is generated by the Angular template compiler.
* Do not edit.
* @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
* tslint:disable
*/
/** PURE_IMPORTS_START _angular_core,_.._.._node_modules_ionic_angular_components_item_item.ngfactory,ionic_angular_components_item_item,ionic_angular_util_form,ionic_angular_config_config,ionic_angular_components_item_item_reorder,ionic_angular_components_item_item_content,ionic_angular_components_list_list,ionic_angular_platform_platform,ionic_angular_gestures_gesture_controller,ionic_angular_platform_dom_controller,ionic_angular_components_list_list_header,_angular_common,ionic_angular_components_note_note,ionic_angular_components_toolbar_toolbar_header,ionic_angular_navigation_view_controller,_.._.._node_modules_ionic_angular_components_toolbar_navbar.ngfactory,ionic_angular_components_toolbar_navbar,ionic_angular_components_app_app,ionic_angular_navigation_nav_controller,ionic_angular_components_toolbar_toolbar_item,ionic_angular_components_toolbar_toolbar,_.._.._node_modules_ionic_angular_components_button_button.ngfactory,ionic_angular_components_button_button,ionic_angular_components_menu_menu_toggle,ionic_angular_components_app_menu_controller,_.._.._node_modules_ionic_angular_components_toolbar_toolbar_title.ngfactory,ionic_angular_components_toolbar_toolbar_title,_.._.._node_modules_ionic_angular_components_content_content.ngfactory,ionic_angular_components_content_content,ionic_angular_platform_keyboard,ionic_angular_components_toolbar_toolbar_footer,_.._.._node_modules_ionic_angular_components_toolbar_toolbar.ngfactory,_angular_forms,ionic_angular_components_segment_segment,_.._.._node_modules_ionic_angular_components_segment_segment_button.ngfactory,ionic_angular_components_segment_segment_button,ionic_angular_components_label_label,_dynamis,ionic_angular_util_events,ionic_angular_navigation_nav_params,_.._providers_ffxi,_.._providers_ui PURE_IMPORTS_END */











































var styles_DynamisPage = [];
var RenderType_DynamisPage = /*@__PURE__*/ core["X" /* ɵcrt */]({ encapsulation: 2, styles: styles_DynamisPage, data: {} });

function View_DynamisPage_3(_l) { return core["_19" /* ɵvid */](0, [(_l()(), core["Z" /* ɵeld */](0, 0, null, null, 8, "ion-item", [["class", "item item-block"]], null, null, null, item_ngfactory["b" /* View_Item_0 */], item_ngfactory["a" /* RenderType_Item */])), core["Y" /* ɵdid */](1, 1097728, null, 3, item["a" /* Item */], [util_form["a" /* Form */], config["a" /* Config */], core["j" /* ElementRef */], core["z" /* Renderer */], [2, item_reorder["a" /* ItemReorder */]]], null, null), core["_16" /* ɵqud */](335544320, 7, { contentLabel: 0 }), core["_16" /* ɵqud */](603979776, 8, { _buttons: 1 }), core["_16" /* ɵqud */](603979776, 9, { _icons: 1 }), core["Y" /* ɵdid */](5, 16384, null, 0, item_content["a" /* ItemContent */], [], null, null), (_l()(), core["_18" /* ɵted */](-1, 2, ["\n                "])), (_l()(), core["Z" /* ɵeld */](7, 0, null, 2, 0, "span", [], [[8, "innerHTML", 1]], null, null, null, null)), (_l()(), core["_18" /* ɵted */](-1, 2, ["\n            "]))], null, function (_ck, _v) { var currVal_0 = _v.context.$implicit; _ck(_v, 7, 0, currVal_0); }); }
function View_DynamisPage_2(_l) { return core["_19" /* ɵvid */](0, [(_l()(), core["Z" /* ɵeld */](0, 0, null, null, 15, "ion-list", [], null, null, null, null, null)), core["Y" /* ɵdid */](1, 16384, null, 0, list["a" /* List */], [config["a" /* Config */], core["j" /* ElementRef */], core["z" /* Renderer */], platform_platform["a" /* Platform */], gesture_controller["l" /* GestureController */], dom_controller["a" /* DomController */]], null, null), (_l()(), core["_18" /* ɵted */](-1, null, ["\n            "])), (_l()(), core["Z" /* ɵeld */](3, 0, null, null, 8, "ion-list-header", [["class", "item"]], null, null, null, item_ngfactory["b" /* View_Item_0 */], item_ngfactory["a" /* RenderType_Item */])), core["Y" /* ɵdid */](4, 1097728, null, 3, item["a" /* Item */], [util_form["a" /* Form */], config["a" /* Config */], core["j" /* ElementRef */], core["z" /* Renderer */], [2, item_reorder["a" /* ItemReorder */]]], null, null), core["_16" /* ɵqud */](335544320, 4, { contentLabel: 0 }), core["_16" /* ɵqud */](603979776, 5, { _buttons: 1 }), core["_16" /* ɵqud */](603979776, 6, { _icons: 1 }), core["Y" /* ɵdid */](8, 16384, null, 0, list_header["a" /* ListHeader */], [config["a" /* Config */], core["z" /* Renderer */], core["j" /* ElementRef */], [8, null]], null, null), (_l()(), core["_18" /* ɵted */](-1, 2, ["\n                "])), (_l()(), core["Z" /* ɵeld */](10, 0, null, 2, 0, "span", [], [[8, "innerHTML", 1]], null, null, null, null)), (_l()(), core["_18" /* ɵted */](-1, 2, ["\n            "])), (_l()(), core["_18" /* ɵted */](-1, null, ["\n            "])), (_l()(), core["U" /* ɵand */](16777216, null, null, 1, null, View_DynamisPage_3)), core["Y" /* ɵdid */](14, 802816, null, 0, common["h" /* NgForOf */], [core["I" /* ViewContainerRef */], core["F" /* TemplateRef */], core["p" /* IterableDiffers */]], { ngForOf: [0, "ngForOf"] }, null), (_l()(), core["_18" /* ɵted */](-1, null, ["\n        "]))], function (_ck, _v) { var currVal_1 = _v.context.$implicit.items; _ck(_v, 14, 0, currVal_1); }, function (_ck, _v) { var currVal_0 = _v.context.$implicit.title; _ck(_v, 10, 0, currVal_0); }); }
function View_DynamisPage_1(_l) { return core["_19" /* ɵvid */](0, [(_l()(), core["Z" /* ɵeld */](0, 0, null, null, 4, null, null, null, null, null, null, null)), (_l()(), core["_18" /* ɵted */](-1, null, ["\n        "])), (_l()(), core["U" /* ɵand */](16777216, null, null, 1, null, View_DynamisPage_2)), core["Y" /* ɵdid */](3, 802816, null, 0, common["h" /* NgForOf */], [core["I" /* ViewContainerRef */], core["F" /* TemplateRef */], core["p" /* IterableDiffers */]], { ngForOf: [0, "ngForOf"] }, null), (_l()(), core["_18" /* ɵted */](-1, null, ["\n    "]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.ffxi.dynamis.beastmen; _ck(_v, 3, 0, currVal_0); }, null); }
function View_DynamisPage_6(_l) { return core["_19" /* ɵvid */](0, [(_l()(), core["Z" /* ɵeld */](0, 0, null, null, 11, "ion-item", [["class", "item item-block"]], null, null, null, item_ngfactory["b" /* View_Item_0 */], item_ngfactory["a" /* RenderType_Item */])), core["Y" /* ɵdid */](1, 1097728, null, 3, item["a" /* Item */], [util_form["a" /* Form */], config["a" /* Config */], core["j" /* ElementRef */], core["z" /* Renderer */], [2, item_reorder["a" /* ItemReorder */]]], null, null), core["_16" /* ɵqud */](335544320, 13, { contentLabel: 0 }), core["_16" /* ɵqud */](603979776, 14, { _buttons: 1 }), core["_16" /* ɵqud */](603979776, 15, { _icons: 1 }), core["Y" /* ɵdid */](5, 16384, null, 0, item_content["a" /* ItemContent */], [], null, null), (_l()(), core["_18" /* ɵted */](-1, 2, ["\n                "])), (_l()(), core["Z" /* ɵeld */](7, 0, null, 2, 0, "span", [], [[8, "innerHTML", 1]], null, null, null, null)), (_l()(), core["Z" /* ɵeld */](8, 0, null, 4, 2, "ion-note", [["item-end", ""]], null, null, null, null, null)), core["Y" /* ɵdid */](9, 16384, null, 0, note["a" /* Note */], [config["a" /* Config */], core["j" /* ElementRef */], core["z" /* Renderer */]], null, null), (_l()(), core["_18" /* ɵted */](10, null, ["", ""])), (_l()(), core["_18" /* ɵted */](-1, 2, ["\n            "]))], null, function (_ck, _v) { var currVal_0 = _v.context.$implicit.mob; _ck(_v, 7, 0, currVal_0); var currVal_1 = _v.context.$implicit.zone; _ck(_v, 10, 0, currVal_1); }); }
function View_DynamisPage_5(_l) { return core["_19" /* ɵvid */](0, [(_l()(), core["Z" /* ɵeld */](0, 0, null, null, 15, "ion-list", [], null, null, null, null, null)), core["Y" /* ɵdid */](1, 16384, null, 0, list["a" /* List */], [config["a" /* Config */], core["j" /* ElementRef */], core["z" /* Renderer */], platform_platform["a" /* Platform */], gesture_controller["l" /* GestureController */], dom_controller["a" /* DomController */]], null, null), (_l()(), core["_18" /* ɵted */](-1, null, ["\n            "])), (_l()(), core["Z" /* ɵeld */](3, 0, null, null, 8, "ion-list-header", [["class", "item"]], null, null, null, item_ngfactory["b" /* View_Item_0 */], item_ngfactory["a" /* RenderType_Item */])), core["Y" /* ɵdid */](4, 1097728, null, 3, item["a" /* Item */], [util_form["a" /* Form */], config["a" /* Config */], core["j" /* ElementRef */], core["z" /* Renderer */], [2, item_reorder["a" /* ItemReorder */]]], null, null), core["_16" /* ɵqud */](335544320, 10, { contentLabel: 0 }), core["_16" /* ɵqud */](603979776, 11, { _buttons: 1 }), core["_16" /* ɵqud */](603979776, 12, { _icons: 1 }), core["Y" /* ɵdid */](8, 16384, null, 0, list_header["a" /* ListHeader */], [config["a" /* Config */], core["z" /* Renderer */], core["j" /* ElementRef */], [8, null]], null, null), (_l()(), core["_18" /* ɵted */](-1, 2, ["\n                "])), (_l()(), core["Z" /* ɵeld */](10, 0, null, 2, 0, "span", [], [[8, "innerHTML", 1]], null, null, null, null)), (_l()(), core["_18" /* ɵted */](-1, 2, ["\n            "])), (_l()(), core["_18" /* ɵted */](-1, null, ["\n            "])), (_l()(), core["U" /* ɵand */](16777216, null, null, 1, null, View_DynamisPage_6)), core["Y" /* ɵdid */](14, 802816, null, 0, common["h" /* NgForOf */], [core["I" /* ViewContainerRef */], core["F" /* TemplateRef */], core["p" /* IterableDiffers */]], { ngForOf: [0, "ngForOf"] }, null), (_l()(), core["_18" /* ɵted */](-1, null, ["\n        "]))], function (_ck, _v) { var currVal_1 = _v.context.$implicit.items; _ck(_v, 14, 0, currVal_1); }, function (_ck, _v) { var currVal_0 = _v.context.$implicit.title; _ck(_v, 10, 0, currVal_0); }); }
function View_DynamisPage_4(_l) { return core["_19" /* ɵvid */](0, [(_l()(), core["Z" /* ɵeld */](0, 0, null, null, 4, null, null, null, null, null, null, null)), (_l()(), core["_18" /* ɵted */](-1, null, ["\n        "])), (_l()(), core["U" /* ɵand */](16777216, null, null, 1, null, View_DynamisPage_5)), core["Y" /* ɵdid */](3, 802816, null, 0, common["h" /* NgForOf */], [core["I" /* ViewContainerRef */], core["F" /* TemplateRef */], core["p" /* IterableDiffers */]], { ngForOf: [0, "ngForOf"] }, null), (_l()(), core["_18" /* ɵted */](-1, null, ["\n    "]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.ordelle; _ck(_v, 3, 0, currVal_0); }, null); }
function View_DynamisPage_9(_l) { return core["_19" /* ɵvid */](0, [(_l()(), core["Z" /* ɵeld */](0, 0, null, null, 11, "ion-item", [["class", "item item-block"]], null, null, null, item_ngfactory["b" /* View_Item_0 */], item_ngfactory["a" /* RenderType_Item */])), core["Y" /* ɵdid */](1, 1097728, null, 3, item["a" /* Item */], [util_form["a" /* Form */], config["a" /* Config */], core["j" /* ElementRef */], core["z" /* Renderer */], [2, item_reorder["a" /* ItemReorder */]]], null, null), core["_16" /* ɵqud */](335544320, 19, { contentLabel: 0 }), core["_16" /* ɵqud */](603979776, 20, { _buttons: 1 }), core["_16" /* ɵqud */](603979776, 21, { _icons: 1 }), core["Y" /* ɵdid */](5, 16384, null, 0, item_content["a" /* ItemContent */], [], null, null), (_l()(), core["_18" /* ɵted */](-1, 2, ["\n                "])), (_l()(), core["Z" /* ɵeld */](7, 0, null, 2, 0, "span", [], [[8, "innerHTML", 1]], null, null, null, null)), (_l()(), core["Z" /* ɵeld */](8, 0, null, 4, 2, "ion-note", [["item-end", ""]], null, null, null, null, null)), core["Y" /* ɵdid */](9, 16384, null, 0, note["a" /* Note */], [config["a" /* Config */], core["j" /* ElementRef */], core["z" /* Renderer */]], null, null), (_l()(), core["_18" /* ɵted */](10, null, ["", ""])), (_l()(), core["_18" /* ɵted */](-1, 2, ["\n            "]))], null, function (_ck, _v) { var currVal_0 = _v.context.$implicit.mob; _ck(_v, 7, 0, currVal_0); var currVal_1 = _v.context.$implicit.zone; _ck(_v, 10, 0, currVal_1); }); }
function View_DynamisPage_8(_l) { return core["_19" /* ɵvid */](0, [(_l()(), core["Z" /* ɵeld */](0, 0, null, null, 15, "ion-list", [], null, null, null, null, null)), core["Y" /* ɵdid */](1, 16384, null, 0, list["a" /* List */], [config["a" /* Config */], core["j" /* ElementRef */], core["z" /* Renderer */], platform_platform["a" /* Platform */], gesture_controller["l" /* GestureController */], dom_controller["a" /* DomController */]], null, null), (_l()(), core["_18" /* ɵted */](-1, null, ["\n            "])), (_l()(), core["Z" /* ɵeld */](3, 0, null, null, 8, "ion-list-header", [["class", "item"]], null, null, null, item_ngfactory["b" /* View_Item_0 */], item_ngfactory["a" /* RenderType_Item */])), core["Y" /* ɵdid */](4, 1097728, null, 3, item["a" /* Item */], [util_form["a" /* Form */], config["a" /* Config */], core["j" /* ElementRef */], core["z" /* Renderer */], [2, item_reorder["a" /* ItemReorder */]]], null, null), core["_16" /* ɵqud */](335544320, 16, { contentLabel: 0 }), core["_16" /* ɵqud */](603979776, 17, { _buttons: 1 }), core["_16" /* ɵqud */](603979776, 18, { _icons: 1 }), core["Y" /* ɵdid */](8, 16384, null, 0, list_header["a" /* ListHeader */], [config["a" /* Config */], core["z" /* Renderer */], core["j" /* ElementRef */], [8, null]], null, null), (_l()(), core["_18" /* ɵted */](-1, 2, ["\n                "])), (_l()(), core["Z" /* ɵeld */](10, 0, null, 2, 0, "span", [], [[8, "innerHTML", 1]], null, null, null, null)), (_l()(), core["_18" /* ɵted */](-1, 2, ["\n            "])), (_l()(), core["_18" /* ɵted */](-1, null, ["\n            "])), (_l()(), core["U" /* ɵand */](16777216, null, null, 1, null, View_DynamisPage_9)), core["Y" /* ɵdid */](14, 802816, null, 0, common["h" /* NgForOf */], [core["I" /* ViewContainerRef */], core["F" /* TemplateRef */], core["p" /* IterableDiffers */]], { ngForOf: [0, "ngForOf"] }, null), (_l()(), core["_18" /* ɵted */](-1, null, ["\n        "]))], function (_ck, _v) { var currVal_1 = _v.context.$implicit.items; _ck(_v, 14, 0, currVal_1); }, function (_ck, _v) { var currVal_0 = _v.context.$implicit.title; _ck(_v, 10, 0, currVal_0); }); }
function View_DynamisPage_7(_l) { return core["_19" /* ɵvid */](0, [(_l()(), core["Z" /* ɵeld */](0, 0, null, null, 4, null, null, null, null, null, null, null)), (_l()(), core["_18" /* ɵted */](-1, null, ["\n        "])), (_l()(), core["U" /* ɵand */](16777216, null, null, 1, null, View_DynamisPage_8)), core["Y" /* ɵdid */](3, 802816, null, 0, common["h" /* NgForOf */], [core["I" /* ViewContainerRef */], core["F" /* TemplateRef */], core["p" /* IterableDiffers */]], { ngForOf: [0, "ngForOf"] }, null), (_l()(), core["_18" /* ɵted */](-1, null, ["\n    "]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.tukuku; _ck(_v, 3, 0, currVal_0); }, null); }
function View_DynamisPage_12(_l) { return core["_19" /* ɵvid */](0, [(_l()(), core["Z" /* ɵeld */](0, 0, null, null, 11, "ion-item", [["class", "item item-block"]], null, null, null, item_ngfactory["b" /* View_Item_0 */], item_ngfactory["a" /* RenderType_Item */])), core["Y" /* ɵdid */](1, 1097728, null, 3, item["a" /* Item */], [util_form["a" /* Form */], config["a" /* Config */], core["j" /* ElementRef */], core["z" /* Renderer */], [2, item_reorder["a" /* ItemReorder */]]], null, null), core["_16" /* ɵqud */](335544320, 25, { contentLabel: 0 }), core["_16" /* ɵqud */](603979776, 26, { _buttons: 1 }), core["_16" /* ɵqud */](603979776, 27, { _icons: 1 }), core["Y" /* ɵdid */](5, 16384, null, 0, item_content["a" /* ItemContent */], [], null, null), (_l()(), core["_18" /* ɵted */](-1, 2, ["\n                "])), (_l()(), core["Z" /* ɵeld */](7, 0, null, 2, 0, "span", [], [[8, "innerHTML", 1]], null, null, null, null)), (_l()(), core["Z" /* ɵeld */](8, 0, null, 4, 2, "ion-note", [["item-end", ""]], null, null, null, null, null)), core["Y" /* ɵdid */](9, 16384, null, 0, note["a" /* Note */], [config["a" /* Config */], core["j" /* ElementRef */], core["z" /* Renderer */]], null, null), (_l()(), core["_18" /* ɵted */](10, null, ["", ""])), (_l()(), core["_18" /* ɵted */](-1, 2, ["\n            "]))], null, function (_ck, _v) { var currVal_0 = _v.context.$implicit.mob; _ck(_v, 7, 0, currVal_0); var currVal_1 = _v.context.$implicit.zone; _ck(_v, 10, 0, currVal_1); }); }
function View_DynamisPage_11(_l) { return core["_19" /* ɵvid */](0, [(_l()(), core["Z" /* ɵeld */](0, 0, null, null, 15, "ion-list", [], null, null, null, null, null)), core["Y" /* ɵdid */](1, 16384, null, 0, list["a" /* List */], [config["a" /* Config */], core["j" /* ElementRef */], core["z" /* Renderer */], platform_platform["a" /* Platform */], gesture_controller["l" /* GestureController */], dom_controller["a" /* DomController */]], null, null), (_l()(), core["_18" /* ɵted */](-1, null, ["\n            "])), (_l()(), core["Z" /* ɵeld */](3, 0, null, null, 8, "ion-list-header", [["class", "item"]], null, null, null, item_ngfactory["b" /* View_Item_0 */], item_ngfactory["a" /* RenderType_Item */])), core["Y" /* ɵdid */](4, 1097728, null, 3, item["a" /* Item */], [util_form["a" /* Form */], config["a" /* Config */], core["j" /* ElementRef */], core["z" /* Renderer */], [2, item_reorder["a" /* ItemReorder */]]], null, null), core["_16" /* ɵqud */](335544320, 22, { contentLabel: 0 }), core["_16" /* ɵqud */](603979776, 23, { _buttons: 1 }), core["_16" /* ɵqud */](603979776, 24, { _icons: 1 }), core["Y" /* ɵdid */](8, 16384, null, 0, list_header["a" /* ListHeader */], [config["a" /* Config */], core["z" /* Renderer */], core["j" /* ElementRef */], [8, null]], null, null), (_l()(), core["_18" /* ɵted */](-1, 2, ["\n                "])), (_l()(), core["Z" /* ɵeld */](10, 0, null, 2, 0, "span", [], [[8, "innerHTML", 1]], null, null, null, null)), (_l()(), core["_18" /* ɵted */](-1, 2, ["\n            "])), (_l()(), core["_18" /* ɵted */](-1, null, ["\n            "])), (_l()(), core["U" /* ɵand */](16777216, null, null, 1, null, View_DynamisPage_12)), core["Y" /* ɵdid */](14, 802816, null, 0, common["h" /* NgForOf */], [core["I" /* ViewContainerRef */], core["F" /* TemplateRef */], core["p" /* IterableDiffers */]], { ngForOf: [0, "ngForOf"] }, null), (_l()(), core["_18" /* ɵted */](-1, null, ["\n        "]))], function (_ck, _v) { var currVal_1 = _v.context.$implicit.items; _ck(_v, 14, 0, currVal_1); }, function (_ck, _v) { var currVal_0 = _v.context.$implicit.title; _ck(_v, 10, 0, currVal_0); }); }
function View_DynamisPage_10(_l) { return core["_19" /* ɵvid */](0, [(_l()(), core["Z" /* ɵeld */](0, 0, null, null, 4, null, null, null, null, null, null, null)), (_l()(), core["_18" /* ɵted */](-1, null, ["\n        "])), (_l()(), core["U" /* ɵand */](16777216, null, null, 1, null, View_DynamisPage_11)), core["Y" /* ɵdid */](3, 802816, null, 0, common["h" /* NgForOf */], [core["I" /* ViewContainerRef */], core["F" /* TemplateRef */], core["p" /* IterableDiffers */]], { ngForOf: [0, "ngForOf"] }, null), (_l()(), core["_18" /* ɵted */](-1, null, ["\n    "]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.byne; _ck(_v, 3, 0, currVal_0); }, null); }
function View_DynamisPage_0(_l) {
    return core["_19" /* ɵvid */](0, [(_l()(), core["Z" /* ɵeld */](0, 0, null, null, 29, "ion-header", [], null, null, null, null, null)), core["Y" /* ɵdid */](1, 16384, null, 0, toolbar_header["a" /* Header */], [config["a" /* Config */], core["j" /* ElementRef */], core["z" /* Renderer */], [2, view_controller["a" /* ViewController */]]], null, null), (_l()(), core["_18" /* ɵted */](-1, null, ["\n    "])), (_l()(), core["Z" /* ɵeld */](3, 0, null, null, 25, "ion-navbar", [["class", "toolbar"]], [[8, "hidden", 0], [2, "statusbar-padding", null]], null, null, navbar_ngfactory["b" /* View_Navbar_0 */], navbar_ngfactory["a" /* RenderType_Navbar */])), core["Y" /* ɵdid */](4, 49152, null, 0, navbar["a" /* Navbar */], [app_app["a" /* App */], [2, view_controller["a" /* ViewController */]], [2, nav_controller["a" /* NavController */]], config["a" /* Config */], core["j" /* ElementRef */], core["z" /* Renderer */]], { hideBackButton: [0, "hideBackButton"] }, null), (_l()(), core["_18" /* ɵted */](-1, 3, ["\n        "])), (_l()(), core["Z" /* ɵeld */](6, 0, null, 0, 9, "ion-buttons", [["left", ""]], null, null, null, null, null)), core["Y" /* ɵdid */](7, 16384, null, 1, toolbar_item["a" /* ToolbarItem */], [config["a" /* Config */], core["j" /* ElementRef */], core["z" /* Renderer */], [2, toolbar["a" /* Toolbar */]], [2, navbar["a" /* Navbar */]]], null, null), core["_16" /* ɵqud */](603979776, 1, { _buttons: 1 }), (_l()(), core["_18" /* ɵted */](-1, null, ["\n            "])), (_l()(), core["Z" /* ɵeld */](10, 0, null, null, 4, "button", [["icon-only", ""], ["ion-button", ""], ["menuToggle", ""]], [[8, "hidden", 0]], [[null, "click"]], function (_v, en, $event) {
            var ad = true;
            if (("click" === en)) {
                var pd_0 = (core["_13" /* ɵnov */](_v, 12).toggle() !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, button_ngfactory["b" /* View_Button_0 */], button_ngfactory["a" /* RenderType_Button */])), core["Y" /* ɵdid */](11, 1097728, [[2, 4], [1, 4]], 0, button_button["a" /* Button */], [[8, ""], config["a" /* Config */], core["j" /* ElementRef */], core["z" /* Renderer */]], null, null), core["Y" /* ɵdid */](12, 1064960, null, 0, menu_toggle["a" /* MenuToggle */], [menu_controller["a" /* MenuController */], [2, view_controller["a" /* ViewController */]], [2, button_button["a" /* Button */]], [2, navbar["a" /* Navbar */]]], { menuToggle: [0, "menuToggle"] }, null), core["Y" /* ɵdid */](13, 16384, null, 1, toolbar_item["a" /* ToolbarItem */], [config["a" /* Config */], core["j" /* ElementRef */], core["z" /* Renderer */], [2, toolbar["a" /* Toolbar */]], [2, navbar["a" /* Navbar */]]], null, null), core["_16" /* ɵqud */](603979776, 2, { _buttons: 1 }), (_l()(), core["_18" /* ɵted */](-1, null, ["\n        "])), (_l()(), core["_18" /* ɵted */](-1, 3, ["\n        "])), (_l()(), core["Z" /* ɵeld */](17, 0, null, 3, 2, "ion-title", [], null, null, null, toolbar_title_ngfactory["b" /* View_ToolbarTitle_0 */], toolbar_title_ngfactory["a" /* RenderType_ToolbarTitle */])), core["Y" /* ɵdid */](18, 49152, null, 0, toolbar_title["a" /* ToolbarTitle */], [config["a" /* Config */], core["j" /* ElementRef */], core["z" /* Renderer */], [2, toolbar["a" /* Toolbar */]], [2, navbar["a" /* Navbar */]]], null, null), (_l()(), core["_18" /* ɵted */](19, 0, ["Dynamis ", ""])), (_l()(), core["_18" /* ɵted */](-1, 3, ["\n        "])), (_l()(), core["Z" /* ɵeld */](21, 0, null, 2, 6, "ion-buttons", [["right", ""]], null, null, null, null, null)), core["Y" /* ɵdid */](22, 16384, null, 1, toolbar_item["a" /* ToolbarItem */], [config["a" /* Config */], core["j" /* ElementRef */], core["z" /* Renderer */], [2, toolbar["a" /* Toolbar */]], [2, navbar["a" /* Navbar */]]], null, null), core["_16" /* ɵqud */](603979776, 3, { _buttons: 1 }), (_l()(), core["_18" /* ɵted */](-1, null, ["\n            "])), (_l()(), core["Z" /* ɵeld */](25, 0, null, null, 1, "button", [["ion-button", ""], ["outline", ""], ["small", ""]], [[8, "innerHTML", 1]], [[null, "click"]], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (("click" === en)) {
                var pd_0 = (_co.ui.settings() !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, button_ngfactory["b" /* View_Button_0 */], button_ngfactory["a" /* RenderType_Button */])), core["Y" /* ɵdid */](26, 1097728, [[3, 4]], 0, button_button["a" /* Button */], [[8, ""], config["a" /* Config */], core["j" /* ElementRef */], core["z" /* Renderer */]], { small: [0, "small"], outline: [1, "outline"] }, null), (_l()(), core["_18" /* ɵted */](-1, null, ["\n        "])), (_l()(), core["_18" /* ɵted */](-1, 3, ["\n    "])), (_l()(), core["_18" /* ɵted */](-1, null, ["\n"])), (_l()(), core["_18" /* ɵted */](-1, null, ["\n"])), (_l()(), core["Z" /* ɵeld */](31, 0, null, null, 15, "ion-content", [], [[2, "statusbar-padding", null], [2, "has-refresher", null]], null, null, content_ngfactory["b" /* View_Content_0 */], content_ngfactory["a" /* RenderType_Content */])), core["Y" /* ɵdid */](32, 16384, null, 0, common["m" /* NgSwitch */], [], { ngSwitch: [0, "ngSwitch"] }, null), core["Y" /* ɵdid */](33, 4374528, null, 0, content["a" /* Content */], [config["a" /* Config */], platform_platform["a" /* Platform */], dom_controller["a" /* DomController */], core["j" /* ElementRef */], core["z" /* Renderer */], app_app["a" /* App */], keyboard["a" /* Keyboard */], core["u" /* NgZone */], [2, view_controller["a" /* ViewController */]], [2, nav_controller["a" /* NavController */]]], null, null), (_l()(), core["_18" /* ɵted */](-1, 1, ["\n    "])), (_l()(), core["U" /* ɵand */](16777216, null, 1, 1, null, View_DynamisPage_1)), core["Y" /* ɵdid */](36, 278528, null, 0, common["n" /* NgSwitchCase */], [core["I" /* ViewContainerRef */], core["F" /* TemplateRef */], common["m" /* NgSwitch */]], { ngSwitchCase: [0, "ngSwitchCase"] }, null), (_l()(), core["_18" /* ɵted */](-1, 1, ["\n    "])), (_l()(), core["U" /* ɵand */](16777216, null, 1, 1, null, View_DynamisPage_4)), core["Y" /* ɵdid */](39, 278528, null, 0, common["n" /* NgSwitchCase */], [core["I" /* ViewContainerRef */], core["F" /* TemplateRef */], common["m" /* NgSwitch */]], { ngSwitchCase: [0, "ngSwitchCase"] }, null), (_l()(), core["_18" /* ɵted */](-1, 1, ["\n    "])), (_l()(), core["U" /* ɵand */](16777216, null, 1, 1, null, View_DynamisPage_7)), core["Y" /* ɵdid */](42, 278528, null, 0, common["n" /* NgSwitchCase */], [core["I" /* ViewContainerRef */], core["F" /* TemplateRef */], common["m" /* NgSwitch */]], { ngSwitchCase: [0, "ngSwitchCase"] }, null), (_l()(), core["_18" /* ɵted */](-1, 1, ["\n    "])), (_l()(), core["U" /* ɵand */](16777216, null, 1, 1, null, View_DynamisPage_10)), core["Y" /* ɵdid */](45, 278528, null, 0, common["n" /* NgSwitchCase */], [core["I" /* ViewContainerRef */], core["F" /* TemplateRef */], common["m" /* NgSwitch */]], { ngSwitchCase: [0, "ngSwitchCase"] }, null), (_l()(), core["_18" /* ɵted */](-1, 1, ["\n"])), (_l()(), core["_18" /* ɵted */](-1, null, ["\n"])), (_l()(), core["Z" /* ɵeld */](48, 0, null, null, 54, "ion-footer", [], null, null, null, null, null)), core["Y" /* ɵdid */](49, 16384, null, 0, toolbar_footer["a" /* Footer */], [config["a" /* Config */], core["j" /* ElementRef */], core["z" /* Renderer */], [2, view_controller["a" /* ViewController */]]], null, null), (_l()(), core["_18" /* ɵted */](-1, null, ["\n    "])), (_l()(), core["Z" /* ɵeld */](51, 0, null, null, 50, "ion-toolbar", [["class", "toolbar"]], [[2, "statusbar-padding", null]], null, null, toolbar_ngfactory["b" /* View_Toolbar_0 */], toolbar_ngfactory["a" /* RenderType_Toolbar */])), core["Y" /* ɵdid */](52, 49152, null, 0, toolbar["a" /* Toolbar */], [config["a" /* Config */], core["j" /* ElementRef */], core["z" /* Renderer */]], null, null), (_l()(), core["_18" /* ɵted */](-1, 3, ["\n        "])), (_l()(), core["Z" /* ɵeld */](54, 0, null, 3, 46, "ion-segment", [], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null], [2, "segment-disabled", null]], [[null, "ngModelChange"]], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (("ngModelChange" === en)) {
                var pd_0 = ((_co.type = $event) !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)), core["Y" /* ɵdid */](55, 671744, null, 0, esm5_forms["h" /* NgModel */], [[8, null], [8, null], [8, null], [8, null]], { model: [0, "model"] }, { update: "ngModelChange" }), core["_15" /* ɵprd */](2048, null, esm5_forms["f" /* NgControl */], null, [esm5_forms["h" /* NgModel */]]), core["Y" /* ɵdid */](57, 16384, null, 0, esm5_forms["g" /* NgControlStatus */], [esm5_forms["f" /* NgControl */]], null, null), core["Y" /* ɵdid */](58, 1196032, null, 1, segment["a" /* Segment */], [config["a" /* Config */], core["j" /* ElementRef */], core["z" /* Renderer */], [2, esm5_forms["f" /* NgControl */]]], null, null), core["_16" /* ɵqud */](603979776, 28, { _buttons: 1 }), (_l()(), core["_18" /* ɵted */](-1, null, ["\n            "])), (_l()(), core["Z" /* ɵeld */](61, 0, null, null, 8, "ion-segment-button", [["class", "segment-button"], ["role", "button"], ["tappable", ""], ["value", "beastmen"]], [[2, "segment-button-disabled", null], [2, "segment-activated", null], [1, "aria-pressed", 0]], [[null, "click"]], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (("click" === en)) {
                var pd_0 = (core["_13" /* ɵnov */](_v, 62).onClick() !== false);
                ad = (pd_0 && ad);
            }
            if (("click" === en)) {
                var pd_1 = (_co.ui.link("beastmen") !== false);
                ad = (pd_1 && ad);
            }
            return ad;
        }, segment_button_ngfactory["b" /* View_SegmentButton_0 */], segment_button_ngfactory["a" /* RenderType_SegmentButton */])), core["Y" /* ɵdid */](62, 114688, [[28, 4]], 0, segment_button["a" /* SegmentButton */], [], { value: [0, "value"] }, null), (_l()(), core["_18" /* ɵted */](-1, 0, ["\n                "])), (_l()(), core["Z" /* ɵeld */](64, 0, null, 0, 0, "img", [["src", "../assets/images/type/beastmen.png"]], null, null, null, null, null)), (_l()(), core["_18" /* ɵted */](-1, 0, ["\n                "])), (_l()(), core["Z" /* ɵeld */](66, 0, null, 0, 2, "ion-label", [], null, null, null, null, null)), core["Y" /* ɵdid */](67, 16384, null, 0, label["a" /* Label */], [config["a" /* Config */], core["j" /* ElementRef */], core["z" /* Renderer */], [8, null], [8, null], [8, null], [8, null]], null, null), (_l()(), core["_18" /* ɵted */](-1, null, ["Beastmen"])), (_l()(), core["_18" /* ɵted */](-1, 0, ["\n            "])), (_l()(), core["_18" /* ɵted */](-1, null, ["\n            "])), (_l()(), core["Z" /* ɵeld */](71, 0, null, null, 8, "ion-segment-button", [["class", "segment-button"], ["role", "button"], ["tappable", ""], ["value", "ordelle"]], [[2, "segment-button-disabled", null], [2, "segment-activated", null], [1, "aria-pressed", 0]], [[null, "click"]], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (("click" === en)) {
                var pd_0 = (core["_13" /* ɵnov */](_v, 72).onClick() !== false);
                ad = (pd_0 && ad);
            }
            if (("click" === en)) {
                var pd_1 = (_co.ui.link("ordelle") !== false);
                ad = (pd_1 && ad);
            }
            return ad;
        }, segment_button_ngfactory["b" /* View_SegmentButton_0 */], segment_button_ngfactory["a" /* RenderType_SegmentButton */])), core["Y" /* ɵdid */](72, 114688, [[28, 4]], 0, segment_button["a" /* SegmentButton */], [], { value: [0, "value"] }, null), (_l()(), core["_18" /* ɵted */](-1, 0, ["\n                "])), (_l()(), core["Z" /* ɵeld */](74, 0, null, 0, 0, "img", [["src", "../assets/images/currency/ordelle.png"]], null, null, null, null, null)), (_l()(), core["_18" /* ɵted */](-1, 0, ["\n                "])), (_l()(), core["Z" /* ɵeld */](76, 0, null, 0, 2, "ion-label", [], null, null, null, null, null)), core["Y" /* ɵdid */](77, 16384, null, 0, label["a" /* Label */], [config["a" /* Config */], core["j" /* ElementRef */], core["z" /* Renderer */], [8, null], [8, null], [8, null], [8, null]], null, null), (_l()(), core["_18" /* ɵted */](-1, null, ["O. Bronzepiece"])), (_l()(), core["_18" /* ɵted */](-1, 0, ["\n            "])), (_l()(), core["_18" /* ɵted */](-1, null, ["\n            "])), (_l()(), core["Z" /* ɵeld */](81, 0, null, null, 8, "ion-segment-button", [["class", "segment-button"], ["role", "button"], ["tappable", ""], ["value", "tukuku"]], [[2, "segment-button-disabled", null], [2, "segment-activated", null], [1, "aria-pressed", 0]], [[null, "click"]], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (("click" === en)) {
                var pd_0 = (core["_13" /* ɵnov */](_v, 82).onClick() !== false);
                ad = (pd_0 && ad);
            }
            if (("click" === en)) {
                var pd_1 = (_co.ui.link("tukuku") !== false);
                ad = (pd_1 && ad);
            }
            return ad;
        }, segment_button_ngfactory["b" /* View_SegmentButton_0 */], segment_button_ngfactory["a" /* RenderType_SegmentButton */])), core["Y" /* ɵdid */](82, 114688, [[28, 4]], 0, segment_button["a" /* SegmentButton */], [], { value: [0, "value"] }, null), (_l()(), core["_18" /* ɵted */](-1, 0, ["\n                "])), (_l()(), core["Z" /* ɵeld */](84, 0, null, 0, 0, "img", [["src", "../assets/images/currency/tukuku.png"]], null, null, null, null, null)), (_l()(), core["_18" /* ɵted */](-1, 0, ["\n                "])), (_l()(), core["Z" /* ɵeld */](86, 0, null, 0, 2, "ion-label", [], null, null, null, null, null)), core["Y" /* ɵdid */](87, 16384, null, 0, label["a" /* Label */], [config["a" /* Config */], core["j" /* ElementRef */], core["z" /* Renderer */], [8, null], [8, null], [8, null], [8, null]], null, null), (_l()(), core["_18" /* ɵted */](-1, null, ["T. Whiteshell"])), (_l()(), core["_18" /* ɵted */](-1, 0, ["\n            "])), (_l()(), core["_18" /* ɵted */](-1, null, ["\n            "])), (_l()(), core["Z" /* ɵeld */](91, 0, null, null, 8, "ion-segment-button", [["class", "segment-button"], ["role", "button"], ["tappable", ""], ["value", "byne"]], [[2, "segment-button-disabled", null], [2, "segment-activated", null], [1, "aria-pressed", 0]], [[null, "click"]], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (("click" === en)) {
                var pd_0 = (core["_13" /* ɵnov */](_v, 92).onClick() !== false);
                ad = (pd_0 && ad);
            }
            if (("click" === en)) {
                var pd_1 = (_co.ui.link("byne") !== false);
                ad = (pd_1 && ad);
            }
            return ad;
        }, segment_button_ngfactory["b" /* View_SegmentButton_0 */], segment_button_ngfactory["a" /* RenderType_SegmentButton */])), core["Y" /* ɵdid */](92, 114688, [[28, 4]], 0, segment_button["a" /* SegmentButton */], [], { value: [0, "value"] }, null), (_l()(), core["_18" /* ɵted */](-1, 0, ["\n                "])), (_l()(), core["Z" /* ɵeld */](94, 0, null, 0, 0, "img", [["src", "../assets/images/currency/byne.png"]], null, null, null, null, null)), (_l()(), core["_18" /* ɵted */](-1, 0, ["\n                "])), (_l()(), core["Z" /* ɵeld */](96, 0, null, 0, 2, "ion-label", [], null, null, null, null, null)), core["Y" /* ɵdid */](97, 16384, null, 0, label["a" /* Label */], [config["a" /* Config */], core["j" /* ElementRef */], core["z" /* Renderer */], [8, null], [8, null], [8, null], [8, null]], null, null), (_l()(), core["_18" /* ɵted */](-1, null, ["1 Byne Bill"])), (_l()(), core["_18" /* ɵted */](-1, 0, ["\n            "])), (_l()(), core["_18" /* ɵted */](-1, null, ["\n        "])), (_l()(), core["_18" /* ɵted */](-1, 3, ["\n    "])), (_l()(), core["_18" /* ɵted */](-1, null, ["\n"]))], function (_ck, _v) { var _co = _v.component; var currVal_2 = true; _ck(_v, 4, 0, currVal_2); var currVal_4 = ""; _ck(_v, 12, 0, currVal_4); var currVal_7 = ""; var currVal_8 = ""; _ck(_v, 26, 0, currVal_7, currVal_8); var currVal_11 = _co.type; _ck(_v, 32, 0, currVal_11); var currVal_12 = "beastmen"; _ck(_v, 36, 0, currVal_12); var currVal_13 = "ordelle"; _ck(_v, 39, 0, currVal_13); var currVal_14 = "tukuku"; _ck(_v, 42, 0, currVal_14); var currVal_15 = "byne"; _ck(_v, 45, 0, currVal_15); var currVal_25 = _co.type; _ck(_v, 55, 0, currVal_25); var currVal_29 = "beastmen"; _ck(_v, 62, 0, currVal_29); var currVal_33 = "ordelle"; _ck(_v, 72, 0, currVal_33); var currVal_37 = "tukuku"; _ck(_v, 82, 0, currVal_37); var currVal_41 = "byne"; _ck(_v, 92, 0, currVal_41); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = core["_13" /* ɵnov */](_v, 4)._hidden; var currVal_1 = core["_13" /* ɵnov */](_v, 4)._sbPadding; _ck(_v, 3, 0, currVal_0, currVal_1); var currVal_3 = core["_13" /* ɵnov */](_v, 12).isHidden; _ck(_v, 10, 0, currVal_3); var currVal_5 = _co.title; _ck(_v, 19, 0, currVal_5); var currVal_6 = _co.ffxi.vanatime; _ck(_v, 25, 0, currVal_6); var currVal_9 = core["_13" /* ɵnov */](_v, 33).statusbarPadding; var currVal_10 = core["_13" /* ɵnov */](_v, 33)._hasRefresher; _ck(_v, 31, 0, currVal_9, currVal_10); var currVal_16 = core["_13" /* ɵnov */](_v, 52)._sbPadding; _ck(_v, 51, 0, currVal_16); var currVal_17 = core["_13" /* ɵnov */](_v, 57).ngClassUntouched; var currVal_18 = core["_13" /* ɵnov */](_v, 57).ngClassTouched; var currVal_19 = core["_13" /* ɵnov */](_v, 57).ngClassPristine; var currVal_20 = core["_13" /* ɵnov */](_v, 57).ngClassDirty; var currVal_21 = core["_13" /* ɵnov */](_v, 57).ngClassValid; var currVal_22 = core["_13" /* ɵnov */](_v, 57).ngClassInvalid; var currVal_23 = core["_13" /* ɵnov */](_v, 57).ngClassPending; var currVal_24 = core["_13" /* ɵnov */](_v, 58)._disabled; _ck(_v, 54, 0, currVal_17, currVal_18, currVal_19, currVal_20, currVal_21, currVal_22, currVal_23, currVal_24); var currVal_26 = core["_13" /* ɵnov */](_v, 62)._disabled; var currVal_27 = core["_13" /* ɵnov */](_v, 62).isActive; var currVal_28 = core["_13" /* ɵnov */](_v, 62).isActive; _ck(_v, 61, 0, currVal_26, currVal_27, currVal_28); var currVal_30 = core["_13" /* ɵnov */](_v, 72)._disabled; var currVal_31 = core["_13" /* ɵnov */](_v, 72).isActive; var currVal_32 = core["_13" /* ɵnov */](_v, 72).isActive; _ck(_v, 71, 0, currVal_30, currVal_31, currVal_32); var currVal_34 = core["_13" /* ɵnov */](_v, 82)._disabled; var currVal_35 = core["_13" /* ɵnov */](_v, 82).isActive; var currVal_36 = core["_13" /* ɵnov */](_v, 82).isActive; _ck(_v, 81, 0, currVal_34, currVal_35, currVal_36); var currVal_38 = core["_13" /* ɵnov */](_v, 92)._disabled; var currVal_39 = core["_13" /* ɵnov */](_v, 92).isActive; var currVal_40 = core["_13" /* ɵnov */](_v, 92).isActive; _ck(_v, 91, 0, currVal_38, currVal_39, currVal_40); });
}
function View_DynamisPage_Host_0(_l) { return core["_19" /* ɵvid */](0, [(_l()(), core["Z" /* ɵeld */](0, 0, null, null, 1, "page-dynamis", [], null, null, null, View_DynamisPage_0, RenderType_DynamisPage)), core["Y" /* ɵdid */](1, 49152, null, 0, dynamis_DynamisPage, [util_events["a" /* Events */], nav_params["a" /* NavParams */], ffxi_FFXIService, ui_UIService], null, null)], null, null); }
var DynamisPageNgFactory = /*@__PURE__*/ core["V" /* ɵccf */]("page-dynamis", dynamis_DynamisPage, View_DynamisPage_Host_0, {}, {}, []);





// CONCATENATED MODULE: ./src/pages/voidwatch/voidwatch.ngfactory.js
/**
* @fileoverview This file is generated by the Angular template compiler.
* Do not edit.
* @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
* tslint:disable
*/
/** PURE_IMPORTS_START _angular_core,_.._.._node_modules_ionic_angular_components_item_item.ngfactory,ionic_angular_components_item_item,ionic_angular_util_form,ionic_angular_config_config,ionic_angular_components_item_item_reorder,ionic_angular_components_item_item_content,ionic_angular_components_list_list,ionic_angular_platform_platform,ionic_angular_gestures_gesture_controller,ionic_angular_platform_dom_controller,ionic_angular_components_list_list_header,_angular_common,ionic_angular_components_toolbar_toolbar_header,ionic_angular_navigation_view_controller,_.._.._node_modules_ionic_angular_components_toolbar_navbar.ngfactory,ionic_angular_components_toolbar_navbar,ionic_angular_components_app_app,ionic_angular_navigation_nav_controller,ionic_angular_components_toolbar_toolbar_item,ionic_angular_components_toolbar_toolbar,_.._.._node_modules_ionic_angular_components_button_button.ngfactory,ionic_angular_components_button_button,ionic_angular_components_menu_menu_toggle,ionic_angular_components_app_menu_controller,_.._.._node_modules_ionic_angular_components_toolbar_toolbar_title.ngfactory,ionic_angular_components_toolbar_toolbar_title,_.._.._node_modules_ionic_angular_components_content_content.ngfactory,ionic_angular_components_content_content,ionic_angular_platform_keyboard,ionic_angular_components_toolbar_toolbar_footer,_.._.._node_modules_ionic_angular_components_toolbar_toolbar.ngfactory,_angular_forms,ionic_angular_components_segment_segment,_.._.._node_modules_ionic_angular_components_segment_segment_button.ngfactory,ionic_angular_components_segment_segment_button,ionic_angular_components_label_label,_voidwatch,ionic_angular_navigation_nav_params,_.._providers_ffxi,_.._providers_ui PURE_IMPORTS_END */









































var styles_VoidwatchPage = [];
var RenderType_VoidwatchPage = /*@__PURE__*/ core["X" /* ɵcrt */]({ encapsulation: 2, styles: styles_VoidwatchPage, data: {} });

function View_VoidwatchPage_3(_l) { return core["_19" /* ɵvid */](0, [(_l()(), core["Z" /* ɵeld */](0, 0, null, null, 8, "ion-item", [["class", "item item-block"]], null, null, null, item_ngfactory["b" /* View_Item_0 */], item_ngfactory["a" /* RenderType_Item */])), core["Y" /* ɵdid */](1, 1097728, null, 3, item["a" /* Item */], [util_form["a" /* Form */], config["a" /* Config */], core["j" /* ElementRef */], core["z" /* Renderer */], [2, item_reorder["a" /* ItemReorder */]]], null, null), core["_16" /* ɵqud */](335544320, 7, { contentLabel: 0 }), core["_16" /* ɵqud */](603979776, 8, { _buttons: 1 }), core["_16" /* ɵqud */](603979776, 9, { _icons: 1 }), core["Y" /* ɵdid */](5, 16384, null, 0, item_content["a" /* ItemContent */], [], null, null), (_l()(), core["_18" /* ɵted */](-1, 2, ["\n                "])), (_l()(), core["Z" /* ɵeld */](7, 0, null, 2, 0, "span", [], [[8, "innerHTML", 1]], null, null, null, null)), (_l()(), core["_18" /* ɵted */](-1, 2, ["\n            "]))], null, function (_ck, _v) { var currVal_0 = _v.context.$implicit; _ck(_v, 7, 0, currVal_0); }); }
function View_VoidwatchPage_2(_l) { return core["_19" /* ɵvid */](0, [(_l()(), core["Z" /* ɵeld */](0, 0, null, null, 15, "ion-list", [], null, null, null, null, null)), core["Y" /* ɵdid */](1, 16384, null, 0, list["a" /* List */], [config["a" /* Config */], core["j" /* ElementRef */], core["z" /* Renderer */], platform_platform["a" /* Platform */], gesture_controller["l" /* GestureController */], dom_controller["a" /* DomController */]], null, null), (_l()(), core["_18" /* ɵted */](-1, null, ["\n            "])), (_l()(), core["Z" /* ɵeld */](3, 0, null, null, 8, "ion-list-header", [["class", "item"]], null, null, null, item_ngfactory["b" /* View_Item_0 */], item_ngfactory["a" /* RenderType_Item */])), core["Y" /* ɵdid */](4, 1097728, null, 3, item["a" /* Item */], [util_form["a" /* Form */], config["a" /* Config */], core["j" /* ElementRef */], core["z" /* Renderer */], [2, item_reorder["a" /* ItemReorder */]]], null, null), core["_16" /* ɵqud */](335544320, 4, { contentLabel: 0 }), core["_16" /* ɵqud */](603979776, 5, { _buttons: 1 }), core["_16" /* ɵqud */](603979776, 6, { _icons: 1 }), core["Y" /* ɵdid */](8, 16384, null, 0, list_header["a" /* ListHeader */], [config["a" /* Config */], core["z" /* Renderer */], core["j" /* ElementRef */], [8, null]], null, null), (_l()(), core["_18" /* ɵted */](-1, 2, ["\n                "])), (_l()(), core["Z" /* ɵeld */](10, 0, null, 2, 0, "span", [], [[8, "innerHTML", 1]], null, null, null, null)), (_l()(), core["_18" /* ɵted */](-1, 2, ["\n            "])), (_l()(), core["_18" /* ɵted */](-1, null, ["\n            "])), (_l()(), core["U" /* ɵand */](16777216, null, null, 1, null, View_VoidwatchPage_3)), core["Y" /* ɵdid */](14, 802816, null, 0, common["h" /* NgForOf */], [core["I" /* ViewContainerRef */], core["F" /* TemplateRef */], core["p" /* IterableDiffers */]], { ngForOf: [0, "ngForOf"] }, null), (_l()(), core["_18" /* ɵted */](-1, null, ["\n        "]))], function (_ck, _v) { var currVal_1 = _v.context.$implicit.items; _ck(_v, 14, 0, currVal_1); }, function (_ck, _v) { var currVal_0 = _v.context.$implicit.title; _ck(_v, 10, 0, currVal_0); }); }
function View_VoidwatchPage_1(_l) { return core["_19" /* ɵvid */](0, [(_l()(), core["Z" /* ɵeld */](0, 0, null, null, 4, null, null, null, null, null, null, null)), (_l()(), core["_18" /* ɵted */](-1, null, ["\n        "])), (_l()(), core["U" /* ɵand */](16777216, null, null, 1, null, View_VoidwatchPage_2)), core["Y" /* ɵdid */](3, 802816, null, 0, common["h" /* NgForOf */], [core["I" /* ViewContainerRef */], core["F" /* TemplateRef */], core["p" /* IterableDiffers */]], { ngForOf: [0, "ngForOf"] }, null), (_l()(), core["_18" /* ɵted */](-1, null, ["\n    "]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.ffxi.voidwatch.jobAbility; _ck(_v, 3, 0, currVal_0); }, null); }
function View_VoidwatchPage_6(_l) { return core["_19" /* ɵvid */](0, [(_l()(), core["Z" /* ɵeld */](0, 0, null, null, 8, "ion-item", [["class", "item item-block"]], null, null, null, item_ngfactory["b" /* View_Item_0 */], item_ngfactory["a" /* RenderType_Item */])), core["Y" /* ɵdid */](1, 1097728, null, 3, item["a" /* Item */], [util_form["a" /* Form */], config["a" /* Config */], core["j" /* ElementRef */], core["z" /* Renderer */], [2, item_reorder["a" /* ItemReorder */]]], null, null), core["_16" /* ɵqud */](335544320, 13, { contentLabel: 0 }), core["_16" /* ɵqud */](603979776, 14, { _buttons: 1 }), core["_16" /* ɵqud */](603979776, 15, { _icons: 1 }), core["Y" /* ɵdid */](5, 16384, null, 0, item_content["a" /* ItemContent */], [], null, null), (_l()(), core["_18" /* ɵted */](-1, 2, ["\n                "])), (_l()(), core["Z" /* ɵeld */](7, 0, null, 2, 0, "span", [], [[8, "innerHTML", 1]], null, null, null, null)), (_l()(), core["_18" /* ɵted */](-1, 2, ["\n            "]))], null, function (_ck, _v) { var currVal_0 = _v.context.$implicit; _ck(_v, 7, 0, currVal_0); }); }
function View_VoidwatchPage_5(_l) { return core["_19" /* ɵvid */](0, [(_l()(), core["Z" /* ɵeld */](0, 0, null, null, 16, "ion-list", [], null, null, null, null, null)), core["Y" /* ɵdid */](1, 16384, null, 0, list["a" /* List */], [config["a" /* Config */], core["j" /* ElementRef */], core["z" /* Renderer */], platform_platform["a" /* Platform */], gesture_controller["l" /* GestureController */], dom_controller["a" /* DomController */]], null, null), (_l()(), core["_18" /* ɵted */](-1, null, ["\n            "])), (_l()(), core["Z" /* ɵeld */](3, 0, null, null, 9, "ion-list-header", [["class", "item"]], null, null, null, item_ngfactory["b" /* View_Item_0 */], item_ngfactory["a" /* RenderType_Item */])), core["Y" /* ɵdid */](4, 1097728, null, 3, item["a" /* Item */], [util_form["a" /* Form */], config["a" /* Config */], core["j" /* ElementRef */], core["z" /* Renderer */], [2, item_reorder["a" /* ItemReorder */]]], null, null), core["_16" /* ɵqud */](335544320, 10, { contentLabel: 0 }), core["_16" /* ɵqud */](603979776, 11, { _buttons: 1 }), core["_16" /* ɵqud */](603979776, 12, { _icons: 1 }), core["Y" /* ɵdid */](8, 16384, null, 0, list_header["a" /* ListHeader */], [config["a" /* Config */], core["z" /* Renderer */], core["j" /* ElementRef */], [8, null]], null, null), (_l()(), core["_18" /* ɵted */](-1, 2, ["\n                "])), (_l()(), core["Z" /* ɵeld */](10, 0, null, 2, 0, "img", [], [[8, "src", 4]], null, null, null, null)), (_l()(), core["Z" /* ɵeld */](11, 0, null, 2, 0, "span", [], [[8, "innerHTML", 1]], null, null, null, null)), (_l()(), core["_18" /* ɵted */](-1, 2, ["\n            "])), (_l()(), core["_18" /* ɵted */](-1, null, ["\n            "])), (_l()(), core["U" /* ɵand */](16777216, null, null, 1, null, View_VoidwatchPage_6)), core["Y" /* ɵdid */](15, 802816, null, 0, common["h" /* NgForOf */], [core["I" /* ViewContainerRef */], core["F" /* TemplateRef */], core["p" /* IterableDiffers */]], { ngForOf: [0, "ngForOf"] }, null), (_l()(), core["_18" /* ɵted */](-1, null, ["\n        "]))], function (_ck, _v) { var currVal_2 = _v.context.$implicit.items; _ck(_v, 15, 0, currVal_2); }, function (_ck, _v) { var currVal_0 = (("../assets/images/elements/" + _v.context.$implicit.title) + ".png"); _ck(_v, 10, 0, currVal_0); var currVal_1 = _v.context.$implicit.title; _ck(_v, 11, 0, currVal_1); }); }
function View_VoidwatchPage_4(_l) { return core["_19" /* ɵvid */](0, [(_l()(), core["Z" /* ɵeld */](0, 0, null, null, 4, null, null, null, null, null, null, null)), (_l()(), core["_18" /* ɵted */](-1, null, ["\n        "])), (_l()(), core["U" /* ɵand */](16777216, null, null, 1, null, View_VoidwatchPage_5)), core["Y" /* ɵdid */](3, 802816, null, 0, common["h" /* NgForOf */], [core["I" /* ViewContainerRef */], core["F" /* TemplateRef */], core["p" /* IterableDiffers */]], { ngForOf: [0, "ngForOf"] }, null), (_l()(), core["_18" /* ɵted */](-1, null, ["\n    "]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.ffxi.voidwatch.blackMagic; _ck(_v, 3, 0, currVal_0); }, null); }
function View_VoidwatchPage_9(_l) { return core["_19" /* ɵvid */](0, [(_l()(), core["Z" /* ɵeld */](0, 0, null, null, 8, "ion-item", [["class", "item item-block"]], null, null, null, item_ngfactory["b" /* View_Item_0 */], item_ngfactory["a" /* RenderType_Item */])), core["Y" /* ɵdid */](1, 1097728, null, 3, item["a" /* Item */], [util_form["a" /* Form */], config["a" /* Config */], core["j" /* ElementRef */], core["z" /* Renderer */], [2, item_reorder["a" /* ItemReorder */]]], null, null), core["_16" /* ɵqud */](335544320, 19, { contentLabel: 0 }), core["_16" /* ɵqud */](603979776, 20, { _buttons: 1 }), core["_16" /* ɵqud */](603979776, 21, { _icons: 1 }), core["Y" /* ɵdid */](5, 16384, null, 0, item_content["a" /* ItemContent */], [], null, null), (_l()(), core["_18" /* ɵted */](-1, 2, ["\n                "])), (_l()(), core["Z" /* ɵeld */](7, 0, null, 2, 0, "span", [], [[8, "innerHTML", 1]], null, null, null, null)), (_l()(), core["_18" /* ɵted */](-1, 2, ["\n            "]))], null, function (_ck, _v) { var currVal_0 = _v.context.$implicit; _ck(_v, 7, 0, currVal_0); }); }
function View_VoidwatchPage_8(_l) { return core["_19" /* ɵvid */](0, [(_l()(), core["Z" /* ɵeld */](0, 0, null, null, 16, "ion-list", [], null, null, null, null, null)), core["Y" /* ɵdid */](1, 16384, null, 0, list["a" /* List */], [config["a" /* Config */], core["j" /* ElementRef */], core["z" /* Renderer */], platform_platform["a" /* Platform */], gesture_controller["l" /* GestureController */], dom_controller["a" /* DomController */]], null, null), (_l()(), core["_18" /* ɵted */](-1, null, ["\n            "])), (_l()(), core["Z" /* ɵeld */](3, 0, null, null, 9, "ion-list-header", [["class", "item"]], null, null, null, item_ngfactory["b" /* View_Item_0 */], item_ngfactory["a" /* RenderType_Item */])), core["Y" /* ɵdid */](4, 1097728, null, 3, item["a" /* Item */], [util_form["a" /* Form */], config["a" /* Config */], core["j" /* ElementRef */], core["z" /* Renderer */], [2, item_reorder["a" /* ItemReorder */]]], null, null), core["_16" /* ɵqud */](335544320, 16, { contentLabel: 0 }), core["_16" /* ɵqud */](603979776, 17, { _buttons: 1 }), core["_16" /* ɵqud */](603979776, 18, { _icons: 1 }), core["Y" /* ɵdid */](8, 16384, null, 0, list_header["a" /* ListHeader */], [config["a" /* Config */], core["z" /* Renderer */], core["j" /* ElementRef */], [8, null]], null, null), (_l()(), core["_18" /* ɵted */](-1, 2, ["\n                "])), (_l()(), core["Z" /* ɵeld */](10, 0, null, 2, 0, "img", [], [[8, "src", 4]], null, null, null, null)), (_l()(), core["Z" /* ɵeld */](11, 0, null, 2, 0, "span", [], [[8, "innerHTML", 1]], null, null, null, null)), (_l()(), core["_18" /* ɵted */](-1, 2, ["\n            "])), (_l()(), core["_18" /* ɵted */](-1, null, ["\n            "])), (_l()(), core["U" /* ɵand */](16777216, null, null, 1, null, View_VoidwatchPage_9)), core["Y" /* ɵdid */](15, 802816, null, 0, common["h" /* NgForOf */], [core["I" /* ViewContainerRef */], core["F" /* TemplateRef */], core["p" /* IterableDiffers */]], { ngForOf: [0, "ngForOf"] }, null), (_l()(), core["_18" /* ɵted */](-1, null, ["\n        "]))], function (_ck, _v) { var currVal_2 = _v.context.$implicit.items; _ck(_v, 15, 0, currVal_2); }, function (_ck, _v) { var currVal_0 = (("../assets/images/elements/" + _v.context.$implicit.title) + ".png"); _ck(_v, 10, 0, currVal_0); var currVal_1 = _v.context.$implicit.title; _ck(_v, 11, 0, currVal_1); }); }
function View_VoidwatchPage_7(_l) { return core["_19" /* ɵvid */](0, [(_l()(), core["Z" /* ɵeld */](0, 0, null, null, 4, null, null, null, null, null, null, null)), (_l()(), core["_18" /* ɵted */](-1, null, ["\n        "])), (_l()(), core["U" /* ɵand */](16777216, null, null, 1, null, View_VoidwatchPage_8)), core["Y" /* ɵdid */](3, 802816, null, 0, common["h" /* NgForOf */], [core["I" /* ViewContainerRef */], core["F" /* TemplateRef */], core["p" /* IterableDiffers */]], { ngForOf: [0, "ngForOf"] }, null), (_l()(), core["_18" /* ɵted */](-1, null, ["\n    "]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.ffxi.voidwatch.whiteMagic; _ck(_v, 3, 0, currVal_0); }, null); }
function View_VoidwatchPage_12(_l) { return core["_19" /* ɵvid */](0, [(_l()(), core["Z" /* ɵeld */](0, 0, null, null, 8, "ion-item", [["class", "item item-block"]], null, null, null, item_ngfactory["b" /* View_Item_0 */], item_ngfactory["a" /* RenderType_Item */])), core["Y" /* ɵdid */](1, 1097728, null, 3, item["a" /* Item */], [util_form["a" /* Form */], config["a" /* Config */], core["j" /* ElementRef */], core["z" /* Renderer */], [2, item_reorder["a" /* ItemReorder */]]], null, null), core["_16" /* ɵqud */](335544320, 25, { contentLabel: 0 }), core["_16" /* ɵqud */](603979776, 26, { _buttons: 1 }), core["_16" /* ɵqud */](603979776, 27, { _icons: 1 }), core["Y" /* ɵdid */](5, 16384, null, 0, item_content["a" /* ItemContent */], [], null, null), (_l()(), core["_18" /* ɵted */](-1, 2, ["\n                "])), (_l()(), core["Z" /* ɵeld */](7, 0, null, 2, 0, "span", [], [[8, "innerHTML", 1]], null, null, null, null)), (_l()(), core["_18" /* ɵted */](-1, 2, ["\n            "]))], null, function (_ck, _v) { var currVal_0 = _v.context.$implicit; _ck(_v, 7, 0, currVal_0); }); }
function View_VoidwatchPage_11(_l) { return core["_19" /* ɵvid */](0, [(_l()(), core["Z" /* ɵeld */](0, 0, null, null, 16, "ion-list", [], null, null, null, null, null)), core["Y" /* ɵdid */](1, 16384, null, 0, list["a" /* List */], [config["a" /* Config */], core["j" /* ElementRef */], core["z" /* Renderer */], platform_platform["a" /* Platform */], gesture_controller["l" /* GestureController */], dom_controller["a" /* DomController */]], null, null), (_l()(), core["_18" /* ɵted */](-1, null, ["\n            "])), (_l()(), core["Z" /* ɵeld */](3, 0, null, null, 9, "ion-list-header", [["class", "item"]], null, null, null, item_ngfactory["b" /* View_Item_0 */], item_ngfactory["a" /* RenderType_Item */])), core["Y" /* ɵdid */](4, 1097728, null, 3, item["a" /* Item */], [util_form["a" /* Form */], config["a" /* Config */], core["j" /* ElementRef */], core["z" /* Renderer */], [2, item_reorder["a" /* ItemReorder */]]], null, null), core["_16" /* ɵqud */](335544320, 22, { contentLabel: 0 }), core["_16" /* ɵqud */](603979776, 23, { _buttons: 1 }), core["_16" /* ɵqud */](603979776, 24, { _icons: 1 }), core["Y" /* ɵdid */](8, 16384, null, 0, list_header["a" /* ListHeader */], [config["a" /* Config */], core["z" /* Renderer */], core["j" /* ElementRef */], [8, null]], null, null), (_l()(), core["_18" /* ɵted */](-1, 2, ["\n                "])), (_l()(), core["Z" /* ɵeld */](10, 0, null, 2, 0, "img", [], [[8, "src", 4]], null, null, null, null)), (_l()(), core["Z" /* ɵeld */](11, 0, null, 2, 0, "span", [], [[8, "innerHTML", 1]], null, null, null, null)), (_l()(), core["_18" /* ɵted */](-1, 2, ["\n            "])), (_l()(), core["_18" /* ɵted */](-1, null, ["\n            "])), (_l()(), core["U" /* ɵand */](16777216, null, null, 1, null, View_VoidwatchPage_12)), core["Y" /* ɵdid */](15, 802816, null, 0, common["h" /* NgForOf */], [core["I" /* ViewContainerRef */], core["F" /* TemplateRef */], core["p" /* IterableDiffers */]], { ngForOf: [0, "ngForOf"] }, null), (_l()(), core["_18" /* ɵted */](-1, null, ["\n        "]))], function (_ck, _v) { var currVal_2 = _v.context.$implicit.items; _ck(_v, 15, 0, currVal_2); }, function (_ck, _v) { var currVal_0 = (("../assets/images/elements/" + _v.context.$implicit.title) + ".png"); _ck(_v, 10, 0, currVal_0); var currVal_1 = _v.context.$implicit.title; _ck(_v, 11, 0, currVal_1); }); }
function View_VoidwatchPage_10(_l) { return core["_19" /* ɵvid */](0, [(_l()(), core["Z" /* ɵeld */](0, 0, null, null, 4, null, null, null, null, null, null, null)), (_l()(), core["_18" /* ɵted */](-1, null, ["\n        "])), (_l()(), core["U" /* ɵand */](16777216, null, null, 1, null, View_VoidwatchPage_11)), core["Y" /* ɵdid */](3, 802816, null, 0, common["h" /* NgForOf */], [core["I" /* ViewContainerRef */], core["F" /* TemplateRef */], core["p" /* IterableDiffers */]], { ngForOf: [0, "ngForOf"] }, null), (_l()(), core["_18" /* ɵted */](-1, null, ["\n    "]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.ffxi.voidwatch.ninjutsu; _ck(_v, 3, 0, currVal_0); }, null); }
function View_VoidwatchPage_15(_l) { return core["_19" /* ɵvid */](0, [(_l()(), core["Z" /* ɵeld */](0, 0, null, null, 8, "ion-item", [["class", "item item-block"]], null, null, null, item_ngfactory["b" /* View_Item_0 */], item_ngfactory["a" /* RenderType_Item */])), core["Y" /* ɵdid */](1, 1097728, null, 3, item["a" /* Item */], [util_form["a" /* Form */], config["a" /* Config */], core["j" /* ElementRef */], core["z" /* Renderer */], [2, item_reorder["a" /* ItemReorder */]]], null, null), core["_16" /* ɵqud */](335544320, 31, { contentLabel: 0 }), core["_16" /* ɵqud */](603979776, 32, { _buttons: 1 }), core["_16" /* ɵqud */](603979776, 33, { _icons: 1 }), core["Y" /* ɵdid */](5, 16384, null, 0, item_content["a" /* ItemContent */], [], null, null), (_l()(), core["_18" /* ɵted */](-1, 2, ["\n                "])), (_l()(), core["Z" /* ɵeld */](7, 0, null, 2, 0, "span", [], [[8, "innerHTML", 1]], null, null, null, null)), (_l()(), core["_18" /* ɵted */](-1, 2, ["\n            "]))], null, function (_ck, _v) { var currVal_0 = _v.context.$implicit; _ck(_v, 7, 0, currVal_0); }); }
function View_VoidwatchPage_14(_l) { return core["_19" /* ɵvid */](0, [(_l()(), core["Z" /* ɵeld */](0, 0, null, null, 16, "ion-list", [], null, null, null, null, null)), core["Y" /* ɵdid */](1, 16384, null, 0, list["a" /* List */], [config["a" /* Config */], core["j" /* ElementRef */], core["z" /* Renderer */], platform_platform["a" /* Platform */], gesture_controller["l" /* GestureController */], dom_controller["a" /* DomController */]], null, null), (_l()(), core["_18" /* ɵted */](-1, null, ["\n            "])), (_l()(), core["Z" /* ɵeld */](3, 0, null, null, 9, "ion-list-header", [["class", "item"]], null, null, null, item_ngfactory["b" /* View_Item_0 */], item_ngfactory["a" /* RenderType_Item */])), core["Y" /* ɵdid */](4, 1097728, null, 3, item["a" /* Item */], [util_form["a" /* Form */], config["a" /* Config */], core["j" /* ElementRef */], core["z" /* Renderer */], [2, item_reorder["a" /* ItemReorder */]]], null, null), core["_16" /* ɵqud */](335544320, 28, { contentLabel: 0 }), core["_16" /* ɵqud */](603979776, 29, { _buttons: 1 }), core["_16" /* ɵqud */](603979776, 30, { _icons: 1 }), core["Y" /* ɵdid */](8, 16384, null, 0, list_header["a" /* ListHeader */], [config["a" /* Config */], core["z" /* Renderer */], core["j" /* ElementRef */], [8, null]], null, null), (_l()(), core["_18" /* ɵted */](-1, 2, ["\n                "])), (_l()(), core["Z" /* ɵeld */](10, 0, null, 2, 0, "img", [], [[8, "src", 4]], null, null, null, null)), (_l()(), core["Z" /* ɵeld */](11, 0, null, 2, 0, "span", [], [[8, "innerHTML", 1]], null, null, null, null)), (_l()(), core["_18" /* ɵted */](-1, 2, ["\n            "])), (_l()(), core["_18" /* ɵted */](-1, null, ["\n            "])), (_l()(), core["U" /* ɵand */](16777216, null, null, 1, null, View_VoidwatchPage_15)), core["Y" /* ɵdid */](15, 802816, null, 0, common["h" /* NgForOf */], [core["I" /* ViewContainerRef */], core["F" /* TemplateRef */], core["p" /* IterableDiffers */]], { ngForOf: [0, "ngForOf"] }, null), (_l()(), core["_18" /* ɵted */](-1, null, ["\n        "]))], function (_ck, _v) { var currVal_2 = _v.context.$implicit.items; _ck(_v, 15, 0, currVal_2); }, function (_ck, _v) { var currVal_0 = (("../assets/images/elements/" + _v.context.$implicit.title) + ".png"); _ck(_v, 10, 0, currVal_0); var currVal_1 = _v.context.$implicit.title; _ck(_v, 11, 0, currVal_1); }); }
function View_VoidwatchPage_13(_l) { return core["_19" /* ɵvid */](0, [(_l()(), core["Z" /* ɵeld */](0, 0, null, null, 4, null, null, null, null, null, null, null)), (_l()(), core["_18" /* ɵted */](-1, null, ["\n        "])), (_l()(), core["U" /* ɵand */](16777216, null, null, 1, null, View_VoidwatchPage_14)), core["Y" /* ɵdid */](3, 802816, null, 0, common["h" /* NgForOf */], [core["I" /* ViewContainerRef */], core["F" /* TemplateRef */], core["p" /* IterableDiffers */]], { ngForOf: [0, "ngForOf"] }, null), (_l()(), core["_18" /* ɵted */](-1, null, ["\n    "]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.ffxi.voidwatch.bardSongs; _ck(_v, 3, 0, currVal_0); }, null); }
function View_VoidwatchPage_18(_l) { return core["_19" /* ɵvid */](0, [(_l()(), core["Z" /* ɵeld */](0, 0, null, null, 8, "ion-item", [["class", "item item-block"]], null, null, null, item_ngfactory["b" /* View_Item_0 */], item_ngfactory["a" /* RenderType_Item */])), core["Y" /* ɵdid */](1, 1097728, null, 3, item["a" /* Item */], [util_form["a" /* Form */], config["a" /* Config */], core["j" /* ElementRef */], core["z" /* Renderer */], [2, item_reorder["a" /* ItemReorder */]]], null, null), core["_16" /* ɵqud */](335544320, 37, { contentLabel: 0 }), core["_16" /* ɵqud */](603979776, 38, { _buttons: 1 }), core["_16" /* ɵqud */](603979776, 39, { _icons: 1 }), core["Y" /* ɵdid */](5, 16384, null, 0, item_content["a" /* ItemContent */], [], null, null), (_l()(), core["_18" /* ɵted */](-1, 2, ["\n                "])), (_l()(), core["Z" /* ɵeld */](7, 0, null, 2, 0, "span", [], [[8, "innerHTML", 1]], null, null, null, null)), (_l()(), core["_18" /* ɵted */](-1, 2, ["\n            "]))], null, function (_ck, _v) { var currVal_0 = _v.context.$implicit; _ck(_v, 7, 0, currVal_0); }); }
function View_VoidwatchPage_17(_l) { return core["_19" /* ɵvid */](0, [(_l()(), core["Z" /* ɵeld */](0, 0, null, null, 16, "ion-list", [], null, null, null, null, null)), core["Y" /* ɵdid */](1, 16384, null, 0, list["a" /* List */], [config["a" /* Config */], core["j" /* ElementRef */], core["z" /* Renderer */], platform_platform["a" /* Platform */], gesture_controller["l" /* GestureController */], dom_controller["a" /* DomController */]], null, null), (_l()(), core["_18" /* ɵted */](-1, null, ["\n            "])), (_l()(), core["Z" /* ɵeld */](3, 0, null, null, 9, "ion-list-header", [["class", "item"]], null, null, null, item_ngfactory["b" /* View_Item_0 */], item_ngfactory["a" /* RenderType_Item */])), core["Y" /* ɵdid */](4, 1097728, null, 3, item["a" /* Item */], [util_form["a" /* Form */], config["a" /* Config */], core["j" /* ElementRef */], core["z" /* Renderer */], [2, item_reorder["a" /* ItemReorder */]]], null, null), core["_16" /* ɵqud */](335544320, 34, { contentLabel: 0 }), core["_16" /* ɵqud */](603979776, 35, { _buttons: 1 }), core["_16" /* ɵqud */](603979776, 36, { _icons: 1 }), core["Y" /* ɵdid */](8, 16384, null, 0, list_header["a" /* ListHeader */], [config["a" /* Config */], core["z" /* Renderer */], core["j" /* ElementRef */], [8, null]], null, null), (_l()(), core["_18" /* ɵted */](-1, 2, ["\n                "])), (_l()(), core["Z" /* ɵeld */](10, 0, null, 2, 0, "img", [], [[8, "src", 4]], null, null, null, null)), (_l()(), core["Z" /* ɵeld */](11, 0, null, 2, 0, "span", [], [[8, "innerHTML", 1]], null, null, null, null)), (_l()(), core["_18" /* ɵted */](-1, 2, ["\n            "])), (_l()(), core["_18" /* ɵted */](-1, null, ["\n            "])), (_l()(), core["U" /* ɵand */](16777216, null, null, 1, null, View_VoidwatchPage_18)), core["Y" /* ɵdid */](15, 802816, null, 0, common["h" /* NgForOf */], [core["I" /* ViewContainerRef */], core["F" /* TemplateRef */], core["p" /* IterableDiffers */]], { ngForOf: [0, "ngForOf"] }, null), (_l()(), core["_18" /* ɵted */](-1, null, ["\n        "]))], function (_ck, _v) { var currVal_2 = _v.context.$implicit.items; _ck(_v, 15, 0, currVal_2); }, function (_ck, _v) { var currVal_0 = (("../assets/images/elements/" + _v.context.$implicit.title) + ".png"); _ck(_v, 10, 0, currVal_0); var currVal_1 = _v.context.$implicit.title; _ck(_v, 11, 0, currVal_1); }); }
function View_VoidwatchPage_16(_l) { return core["_19" /* ɵvid */](0, [(_l()(), core["Z" /* ɵeld */](0, 0, null, null, 4, null, null, null, null, null, null, null)), (_l()(), core["_18" /* ɵted */](-1, null, ["\n        "])), (_l()(), core["U" /* ɵand */](16777216, null, null, 1, null, View_VoidwatchPage_17)), core["Y" /* ɵdid */](3, 802816, null, 0, common["h" /* NgForOf */], [core["I" /* ViewContainerRef */], core["F" /* TemplateRef */], core["p" /* IterableDiffers */]], { ngForOf: [0, "ngForOf"] }, null), (_l()(), core["_18" /* ɵted */](-1, null, ["\n    "]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.ffxi.voidwatch.blueMagic; _ck(_v, 3, 0, currVal_0); }, null); }
function View_VoidwatchPage_0(_l) {
    return core["_19" /* ɵvid */](0, [(_l()(), core["Z" /* ɵeld */](0, 0, null, null, 29, "ion-header", [], null, null, null, null, null)), core["Y" /* ɵdid */](1, 16384, null, 0, toolbar_header["a" /* Header */], [config["a" /* Config */], core["j" /* ElementRef */], core["z" /* Renderer */], [2, view_controller["a" /* ViewController */]]], null, null), (_l()(), core["_18" /* ɵted */](-1, null, ["\n    "])), (_l()(), core["Z" /* ɵeld */](3, 0, null, null, 25, "ion-navbar", [["class", "toolbar"]], [[8, "hidden", 0], [2, "statusbar-padding", null]], null, null, navbar_ngfactory["b" /* View_Navbar_0 */], navbar_ngfactory["a" /* RenderType_Navbar */])), core["Y" /* ɵdid */](4, 49152, null, 0, navbar["a" /* Navbar */], [app_app["a" /* App */], [2, view_controller["a" /* ViewController */]], [2, nav_controller["a" /* NavController */]], config["a" /* Config */], core["j" /* ElementRef */], core["z" /* Renderer */]], { hideBackButton: [0, "hideBackButton"] }, null), (_l()(), core["_18" /* ɵted */](-1, 3, ["\n        "])), (_l()(), core["Z" /* ɵeld */](6, 0, null, 0, 9, "ion-buttons", [["left", ""]], null, null, null, null, null)), core["Y" /* ɵdid */](7, 16384, null, 1, toolbar_item["a" /* ToolbarItem */], [config["a" /* Config */], core["j" /* ElementRef */], core["z" /* Renderer */], [2, toolbar["a" /* Toolbar */]], [2, navbar["a" /* Navbar */]]], null, null), core["_16" /* ɵqud */](603979776, 1, { _buttons: 1 }), (_l()(), core["_18" /* ɵted */](-1, null, ["\n            "])), (_l()(), core["Z" /* ɵeld */](10, 0, null, null, 4, "button", [["icon-only", ""], ["ion-button", ""], ["menuToggle", ""]], [[8, "hidden", 0]], [[null, "click"]], function (_v, en, $event) {
            var ad = true;
            if (("click" === en)) {
                var pd_0 = (core["_13" /* ɵnov */](_v, 12).toggle() !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, button_ngfactory["b" /* View_Button_0 */], button_ngfactory["a" /* RenderType_Button */])), core["Y" /* ɵdid */](11, 1097728, [[2, 4], [1, 4]], 0, button_button["a" /* Button */], [[8, ""], config["a" /* Config */], core["j" /* ElementRef */], core["z" /* Renderer */]], null, null), core["Y" /* ɵdid */](12, 1064960, null, 0, menu_toggle["a" /* MenuToggle */], [menu_controller["a" /* MenuController */], [2, view_controller["a" /* ViewController */]], [2, button_button["a" /* Button */]], [2, navbar["a" /* Navbar */]]], { menuToggle: [0, "menuToggle"] }, null), core["Y" /* ɵdid */](13, 16384, null, 1, toolbar_item["a" /* ToolbarItem */], [config["a" /* Config */], core["j" /* ElementRef */], core["z" /* Renderer */], [2, toolbar["a" /* Toolbar */]], [2, navbar["a" /* Navbar */]]], null, null), core["_16" /* ɵqud */](603979776, 2, { _buttons: 1 }), (_l()(), core["_18" /* ɵted */](-1, null, ["\n        "])), (_l()(), core["_18" /* ɵted */](-1, 3, ["\n        "])), (_l()(), core["Z" /* ɵeld */](17, 0, null, 3, 2, "ion-title", [], null, null, null, toolbar_title_ngfactory["b" /* View_ToolbarTitle_0 */], toolbar_title_ngfactory["a" /* RenderType_ToolbarTitle */])), core["Y" /* ɵdid */](18, 49152, null, 0, toolbar_title["a" /* ToolbarTitle */], [config["a" /* Config */], core["j" /* ElementRef */], core["z" /* Renderer */], [2, toolbar["a" /* Toolbar */]], [2, navbar["a" /* Navbar */]]], null, null), (_l()(), core["_18" /* ɵted */](19, 0, ["Voidwatch ", ""])), (_l()(), core["_18" /* ɵted */](-1, 3, ["\n        "])), (_l()(), core["Z" /* ɵeld */](21, 0, null, 2, 6, "ion-buttons", [["right", ""]], null, null, null, null, null)), core["Y" /* ɵdid */](22, 16384, null, 1, toolbar_item["a" /* ToolbarItem */], [config["a" /* Config */], core["j" /* ElementRef */], core["z" /* Renderer */], [2, toolbar["a" /* Toolbar */]], [2, navbar["a" /* Navbar */]]], null, null), core["_16" /* ɵqud */](603979776, 3, { _buttons: 1 }), (_l()(), core["_18" /* ɵted */](-1, null, ["\n            "])), (_l()(), core["Z" /* ɵeld */](25, 0, null, null, 1, "button", [["ion-button", ""], ["outline", ""], ["small", ""]], [[8, "innerHTML", 1]], [[null, "click"]], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (("click" === en)) {
                var pd_0 = (_co.ui.settings() !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, button_ngfactory["b" /* View_Button_0 */], button_ngfactory["a" /* RenderType_Button */])), core["Y" /* ɵdid */](26, 1097728, [[3, 4]], 0, button_button["a" /* Button */], [[8, ""], config["a" /* Config */], core["j" /* ElementRef */], core["z" /* Renderer */]], { small: [0, "small"], outline: [1, "outline"] }, null), (_l()(), core["_18" /* ɵted */](-1, null, ["\n        "])), (_l()(), core["_18" /* ɵted */](-1, 3, ["\n    "])), (_l()(), core["_18" /* ɵted */](-1, null, ["\n"])), (_l()(), core["_18" /* ɵted */](-1, null, ["\n"])), (_l()(), core["Z" /* ɵeld */](31, 0, null, null, 21, "ion-content", [], [[2, "statusbar-padding", null], [2, "has-refresher", null]], null, null, content_ngfactory["b" /* View_Content_0 */], content_ngfactory["a" /* RenderType_Content */])), core["Y" /* ɵdid */](32, 16384, null, 0, common["m" /* NgSwitch */], [], { ngSwitch: [0, "ngSwitch"] }, null), core["Y" /* ɵdid */](33, 4374528, null, 0, content["a" /* Content */], [config["a" /* Config */], platform_platform["a" /* Platform */], dom_controller["a" /* DomController */], core["j" /* ElementRef */], core["z" /* Renderer */], app_app["a" /* App */], keyboard["a" /* Keyboard */], core["u" /* NgZone */], [2, view_controller["a" /* ViewController */]], [2, nav_controller["a" /* NavController */]]], null, null), (_l()(), core["_18" /* ɵted */](-1, 1, ["\n    "])), (_l()(), core["U" /* ɵand */](16777216, null, 1, 1, null, View_VoidwatchPage_1)), core["Y" /* ɵdid */](36, 278528, null, 0, common["n" /* NgSwitchCase */], [core["I" /* ViewContainerRef */], core["F" /* TemplateRef */], common["m" /* NgSwitch */]], { ngSwitchCase: [0, "ngSwitchCase"] }, null), (_l()(), core["_18" /* ɵted */](-1, 1, ["\n    "])), (_l()(), core["U" /* ɵand */](16777216, null, 1, 1, null, View_VoidwatchPage_4)), core["Y" /* ɵdid */](39, 278528, null, 0, common["n" /* NgSwitchCase */], [core["I" /* ViewContainerRef */], core["F" /* TemplateRef */], common["m" /* NgSwitch */]], { ngSwitchCase: [0, "ngSwitchCase"] }, null), (_l()(), core["_18" /* ɵted */](-1, 1, ["\n    "])), (_l()(), core["U" /* ɵand */](16777216, null, 1, 1, null, View_VoidwatchPage_7)), core["Y" /* ɵdid */](42, 278528, null, 0, common["n" /* NgSwitchCase */], [core["I" /* ViewContainerRef */], core["F" /* TemplateRef */], common["m" /* NgSwitch */]], { ngSwitchCase: [0, "ngSwitchCase"] }, null), (_l()(), core["_18" /* ɵted */](-1, 1, ["\n    "])), (_l()(), core["U" /* ɵand */](16777216, null, 1, 1, null, View_VoidwatchPage_10)), core["Y" /* ɵdid */](45, 278528, null, 0, common["n" /* NgSwitchCase */], [core["I" /* ViewContainerRef */], core["F" /* TemplateRef */], common["m" /* NgSwitch */]], { ngSwitchCase: [0, "ngSwitchCase"] }, null), (_l()(), core["_18" /* ɵted */](-1, 1, ["\n    "])), (_l()(), core["U" /* ɵand */](16777216, null, 1, 1, null, View_VoidwatchPage_13)), core["Y" /* ɵdid */](48, 278528, null, 0, common["n" /* NgSwitchCase */], [core["I" /* ViewContainerRef */], core["F" /* TemplateRef */], common["m" /* NgSwitch */]], { ngSwitchCase: [0, "ngSwitchCase"] }, null), (_l()(), core["_18" /* ɵted */](-1, 1, ["\n    "])), (_l()(), core["U" /* ɵand */](16777216, null, 1, 1, null, View_VoidwatchPage_16)), core["Y" /* ɵdid */](51, 278528, null, 0, common["n" /* NgSwitchCase */], [core["I" /* ViewContainerRef */], core["F" /* TemplateRef */], common["m" /* NgSwitch */]], { ngSwitchCase: [0, "ngSwitchCase"] }, null), (_l()(), core["_18" /* ɵted */](-1, 1, ["\n"])), (_l()(), core["_18" /* ɵted */](-1, null, ["\n"])), (_l()(), core["Z" /* ɵeld */](54, 0, null, null, 74, "ion-footer", [], null, null, null, null, null)), core["Y" /* ɵdid */](55, 16384, null, 0, toolbar_footer["a" /* Footer */], [config["a" /* Config */], core["j" /* ElementRef */], core["z" /* Renderer */], [2, view_controller["a" /* ViewController */]]], null, null), (_l()(), core["_18" /* ɵted */](-1, null, ["\n    "])), (_l()(), core["Z" /* ɵeld */](57, 0, null, null, 70, "ion-toolbar", [["class", "toolbar"]], [[2, "statusbar-padding", null]], null, null, toolbar_ngfactory["b" /* View_Toolbar_0 */], toolbar_ngfactory["a" /* RenderType_Toolbar */])), core["Y" /* ɵdid */](58, 49152, null, 0, toolbar["a" /* Toolbar */], [config["a" /* Config */], core["j" /* ElementRef */], core["z" /* Renderer */]], null, null), (_l()(), core["_18" /* ɵted */](-1, 3, ["\n        "])), (_l()(), core["Z" /* ɵeld */](60, 0, null, 3, 66, "ion-segment", [], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null], [2, "segment-disabled", null]], [[null, "ngModelChange"]], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (("ngModelChange" === en)) {
                var pd_0 = ((_co.type = $event) !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)), core["Y" /* ɵdid */](61, 671744, null, 0, esm5_forms["h" /* NgModel */], [[8, null], [8, null], [8, null], [8, null]], { model: [0, "model"] }, { update: "ngModelChange" }), core["_15" /* ɵprd */](2048, null, esm5_forms["f" /* NgControl */], null, [esm5_forms["h" /* NgModel */]]), core["Y" /* ɵdid */](63, 16384, null, 0, esm5_forms["g" /* NgControlStatus */], [esm5_forms["f" /* NgControl */]], null, null), core["Y" /* ɵdid */](64, 1196032, null, 1, segment["a" /* Segment */], [config["a" /* Config */], core["j" /* ElementRef */], core["z" /* Renderer */], [2, esm5_forms["f" /* NgControl */]]], null, null), core["_16" /* ɵqud */](603979776, 40, { _buttons: 1 }), (_l()(), core["_18" /* ɵted */](-1, null, ["\n            "])), (_l()(), core["Z" /* ɵeld */](67, 0, null, null, 8, "ion-segment-button", [["class", "segment-button"], ["role", "button"], ["tappable", ""], ["value", "job-ability"]], [[2, "segment-button-disabled", null], [2, "segment-activated", null], [1, "aria-pressed", 0]], [[null, "click"]], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (("click" === en)) {
                var pd_0 = (core["_13" /* ɵnov */](_v, 68).onClick() !== false);
                ad = (pd_0 && ad);
            }
            if (("click" === en)) {
                var pd_1 = (_co.ui.link("job-ability") !== false);
                ad = (pd_1 && ad);
            }
            return ad;
        }, segment_button_ngfactory["b" /* View_SegmentButton_0 */], segment_button_ngfactory["a" /* RenderType_SegmentButton */])), core["Y" /* ɵdid */](68, 114688, [[40, 4]], 0, segment_button["a" /* SegmentButton */], [], { value: [0, "value"] }, null), (_l()(), core["_18" /* ɵted */](-1, 0, ["\n                "])), (_l()(), core["Z" /* ɵeld */](70, 0, null, 0, 0, "img", [["src", "../assets/images/type/JA.png"]], null, null, null, null, null)), (_l()(), core["_18" /* ɵted */](-1, 0, ["\n                "])), (_l()(), core["Z" /* ɵeld */](72, 0, null, 0, 2, "ion-label", [], null, null, null, null, null)), core["Y" /* ɵdid */](73, 16384, null, 0, label["a" /* Label */], [config["a" /* Config */], core["j" /* ElementRef */], core["z" /* Renderer */], [8, null], [8, null], [8, null], [8, null]], null, null), (_l()(), core["_18" /* ɵted */](-1, null, ["Abi"])), (_l()(), core["_18" /* ɵted */](-1, 0, ["\n            "])), (_l()(), core["_18" /* ɵted */](-1, null, ["\n            "])), (_l()(), core["Z" /* ɵeld */](77, 0, null, null, 8, "ion-segment-button", [["class", "segment-button"], ["role", "button"], ["tappable", ""], ["value", "black-magic"]], [[2, "segment-button-disabled", null], [2, "segment-activated", null], [1, "aria-pressed", 0]], [[null, "click"]], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (("click" === en)) {
                var pd_0 = (core["_13" /* ɵnov */](_v, 78).onClick() !== false);
                ad = (pd_0 && ad);
            }
            if (("click" === en)) {
                var pd_1 = (_co.ui.link("black-magic") !== false);
                ad = (pd_1 && ad);
            }
            return ad;
        }, segment_button_ngfactory["b" /* View_SegmentButton_0 */], segment_button_ngfactory["a" /* RenderType_SegmentButton */])), core["Y" /* ɵdid */](78, 114688, [[40, 4]], 0, segment_button["a" /* SegmentButton */], [], { value: [0, "value"] }, null), (_l()(), core["_18" /* ɵted */](-1, 0, ["\n                "])), (_l()(), core["Z" /* ɵeld */](80, 0, null, 0, 0, "img", [["src", "../assets/images/type/BLM.png"]], null, null, null, null, null)), (_l()(), core["_18" /* ɵted */](-1, 0, ["\n                "])), (_l()(), core["Z" /* ɵeld */](82, 0, null, 0, 2, "ion-label", [], null, null, null, null, null)), core["Y" /* ɵdid */](83, 16384, null, 0, label["a" /* Label */], [config["a" /* Config */], core["j" /* ElementRef */], core["z" /* Renderer */], [8, null], [8, null], [8, null], [8, null]], null, null), (_l()(), core["_18" /* ɵted */](-1, null, ["BLM"])), (_l()(), core["_18" /* ɵted */](-1, 0, ["\n            "])), (_l()(), core["_18" /* ɵted */](-1, null, ["\n            "])), (_l()(), core["Z" /* ɵeld */](87, 0, null, null, 8, "ion-segment-button", [["class", "segment-button"], ["role", "button"], ["tappable", ""], ["value", "white-magic"]], [[2, "segment-button-disabled", null], [2, "segment-activated", null], [1, "aria-pressed", 0]], [[null, "click"]], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (("click" === en)) {
                var pd_0 = (core["_13" /* ɵnov */](_v, 88).onClick() !== false);
                ad = (pd_0 && ad);
            }
            if (("click" === en)) {
                var pd_1 = (_co.ui.link("white-magic") !== false);
                ad = (pd_1 && ad);
            }
            return ad;
        }, segment_button_ngfactory["b" /* View_SegmentButton_0 */], segment_button_ngfactory["a" /* RenderType_SegmentButton */])), core["Y" /* ɵdid */](88, 114688, [[40, 4]], 0, segment_button["a" /* SegmentButton */], [], { value: [0, "value"] }, null), (_l()(), core["_18" /* ɵted */](-1, 0, ["\n                "])), (_l()(), core["Z" /* ɵeld */](90, 0, null, 0, 0, "img", [["src", "../assets/images/type/WHM.png"]], null, null, null, null, null)), (_l()(), core["_18" /* ɵted */](-1, 0, ["\n                "])), (_l()(), core["Z" /* ɵeld */](92, 0, null, 0, 2, "ion-label", [], null, null, null, null, null)), core["Y" /* ɵdid */](93, 16384, null, 0, label["a" /* Label */], [config["a" /* Config */], core["j" /* ElementRef */], core["z" /* Renderer */], [8, null], [8, null], [8, null], [8, null]], null, null), (_l()(), core["_18" /* ɵted */](-1, null, ["WHM"])), (_l()(), core["_18" /* ɵted */](-1, 0, ["\n            "])), (_l()(), core["_18" /* ɵted */](-1, null, ["\n            "])), (_l()(), core["Z" /* ɵeld */](97, 0, null, null, 8, "ion-segment-button", [["class", "segment-button"], ["role", "button"], ["tappable", ""], ["value", "ninjutsu"]], [[2, "segment-button-disabled", null], [2, "segment-activated", null], [1, "aria-pressed", 0]], [[null, "click"]], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (("click" === en)) {
                var pd_0 = (core["_13" /* ɵnov */](_v, 98).onClick() !== false);
                ad = (pd_0 && ad);
            }
            if (("click" === en)) {
                var pd_1 = (_co.ui.link("ninjutsu") !== false);
                ad = (pd_1 && ad);
            }
            return ad;
        }, segment_button_ngfactory["b" /* View_SegmentButton_0 */], segment_button_ngfactory["a" /* RenderType_SegmentButton */])), core["Y" /* ɵdid */](98, 114688, [[40, 4]], 0, segment_button["a" /* SegmentButton */], [], { value: [0, "value"] }, null), (_l()(), core["_18" /* ɵted */](-1, 0, ["\n                "])), (_l()(), core["Z" /* ɵeld */](100, 0, null, 0, 0, "img", [["src", "../assets/images/type/NIN.png"]], null, null, null, null, null)), (_l()(), core["_18" /* ɵted */](-1, 0, ["\n                "])), (_l()(), core["Z" /* ɵeld */](102, 0, null, 0, 2, "ion-label", [], null, null, null, null, null)), core["Y" /* ɵdid */](103, 16384, null, 0, label["a" /* Label */], [config["a" /* Config */], core["j" /* ElementRef */], core["z" /* Renderer */], [8, null], [8, null], [8, null], [8, null]], null, null), (_l()(), core["_18" /* ɵted */](-1, null, ["NIN"])), (_l()(), core["_18" /* ɵted */](-1, 0, ["\n            "])), (_l()(), core["_18" /* ɵted */](-1, null, ["\n            "])), (_l()(), core["Z" /* ɵeld */](107, 0, null, null, 8, "ion-segment-button", [["class", "segment-button"], ["role", "button"], ["tappable", ""], ["value", "bard-songs"]], [[2, "segment-button-disabled", null], [2, "segment-activated", null], [1, "aria-pressed", 0]], [[null, "click"]], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (("click" === en)) {
                var pd_0 = (core["_13" /* ɵnov */](_v, 108).onClick() !== false);
                ad = (pd_0 && ad);
            }
            if (("click" === en)) {
                var pd_1 = (_co.ui.link("bard-songs") !== false);
                ad = (pd_1 && ad);
            }
            return ad;
        }, segment_button_ngfactory["b" /* View_SegmentButton_0 */], segment_button_ngfactory["a" /* RenderType_SegmentButton */])), core["Y" /* ɵdid */](108, 114688, [[40, 4]], 0, segment_button["a" /* SegmentButton */], [], { value: [0, "value"] }, null), (_l()(), core["_18" /* ɵted */](-1, 0, ["\n                "])), (_l()(), core["Z" /* ɵeld */](110, 0, null, 0, 0, "img", [["src", "../assets/images/type/BRD.png"]], null, null, null, null, null)), (_l()(), core["_18" /* ɵted */](-1, 0, ["\n                "])), (_l()(), core["Z" /* ɵeld */](112, 0, null, 0, 2, "ion-label", [], null, null, null, null, null)), core["Y" /* ɵdid */](113, 16384, null, 0, label["a" /* Label */], [config["a" /* Config */], core["j" /* ElementRef */], core["z" /* Renderer */], [8, null], [8, null], [8, null], [8, null]], null, null), (_l()(), core["_18" /* ɵted */](-1, null, ["BRD"])), (_l()(), core["_18" /* ɵted */](-1, 0, ["\n            "])), (_l()(), core["_18" /* ɵted */](-1, null, ["\n            "])), (_l()(), core["Z" /* ɵeld */](117, 0, null, null, 8, "ion-segment-button", [["class", "segment-button"], ["role", "button"], ["tappable", ""], ["value", "blue-magic"]], [[2, "segment-button-disabled", null], [2, "segment-activated", null], [1, "aria-pressed", 0]], [[null, "click"]], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (("click" === en)) {
                var pd_0 = (core["_13" /* ɵnov */](_v, 118).onClick() !== false);
                ad = (pd_0 && ad);
            }
            if (("click" === en)) {
                var pd_1 = (_co.ui.link("blue-magic") !== false);
                ad = (pd_1 && ad);
            }
            return ad;
        }, segment_button_ngfactory["b" /* View_SegmentButton_0 */], segment_button_ngfactory["a" /* RenderType_SegmentButton */])), core["Y" /* ɵdid */](118, 114688, [[40, 4]], 0, segment_button["a" /* SegmentButton */], [], { value: [0, "value"] }, null), (_l()(), core["_18" /* ɵted */](-1, 0, ["\n                "])), (_l()(), core["Z" /* ɵeld */](120, 0, null, 0, 0, "img", [["src", "../assets/images/type/BLU.png"]], null, null, null, null, null)), (_l()(), core["_18" /* ɵted */](-1, 0, ["\n                "])), (_l()(), core["Z" /* ɵeld */](122, 0, null, 0, 2, "ion-label", [], null, null, null, null, null)), core["Y" /* ɵdid */](123, 16384, null, 0, label["a" /* Label */], [config["a" /* Config */], core["j" /* ElementRef */], core["z" /* Renderer */], [8, null], [8, null], [8, null], [8, null]], null, null), (_l()(), core["_18" /* ɵted */](-1, null, ["BLU"])), (_l()(), core["_18" /* ɵted */](-1, 0, ["\n            "])), (_l()(), core["_18" /* ɵted */](-1, null, ["\n        "])), (_l()(), core["_18" /* ɵted */](-1, 3, ["\n    "])), (_l()(), core["_18" /* ɵted */](-1, null, ["\n"]))], function (_ck, _v) { var _co = _v.component; var currVal_2 = true; _ck(_v, 4, 0, currVal_2); var currVal_4 = ""; _ck(_v, 12, 0, currVal_4); var currVal_7 = ""; var currVal_8 = ""; _ck(_v, 26, 0, currVal_7, currVal_8); var currVal_11 = _co.type; _ck(_v, 32, 0, currVal_11); var currVal_12 = "job-ability"; _ck(_v, 36, 0, currVal_12); var currVal_13 = "black-magic"; _ck(_v, 39, 0, currVal_13); var currVal_14 = "white-magic"; _ck(_v, 42, 0, currVal_14); var currVal_15 = "ninjutsu"; _ck(_v, 45, 0, currVal_15); var currVal_16 = "bard-songs"; _ck(_v, 48, 0, currVal_16); var currVal_17 = "blue-magic"; _ck(_v, 51, 0, currVal_17); var currVal_27 = _co.type; _ck(_v, 61, 0, currVal_27); var currVal_31 = "job-ability"; _ck(_v, 68, 0, currVal_31); var currVal_35 = "black-magic"; _ck(_v, 78, 0, currVal_35); var currVal_39 = "white-magic"; _ck(_v, 88, 0, currVal_39); var currVal_43 = "ninjutsu"; _ck(_v, 98, 0, currVal_43); var currVal_47 = "bard-songs"; _ck(_v, 108, 0, currVal_47); var currVal_51 = "blue-magic"; _ck(_v, 118, 0, currVal_51); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = core["_13" /* ɵnov */](_v, 4)._hidden; var currVal_1 = core["_13" /* ɵnov */](_v, 4)._sbPadding; _ck(_v, 3, 0, currVal_0, currVal_1); var currVal_3 = core["_13" /* ɵnov */](_v, 12).isHidden; _ck(_v, 10, 0, currVal_3); var currVal_5 = _co.title; _ck(_v, 19, 0, currVal_5); var currVal_6 = _co.ffxi.vanatime; _ck(_v, 25, 0, currVal_6); var currVal_9 = core["_13" /* ɵnov */](_v, 33).statusbarPadding; var currVal_10 = core["_13" /* ɵnov */](_v, 33)._hasRefresher; _ck(_v, 31, 0, currVal_9, currVal_10); var currVal_18 = core["_13" /* ɵnov */](_v, 58)._sbPadding; _ck(_v, 57, 0, currVal_18); var currVal_19 = core["_13" /* ɵnov */](_v, 63).ngClassUntouched; var currVal_20 = core["_13" /* ɵnov */](_v, 63).ngClassTouched; var currVal_21 = core["_13" /* ɵnov */](_v, 63).ngClassPristine; var currVal_22 = core["_13" /* ɵnov */](_v, 63).ngClassDirty; var currVal_23 = core["_13" /* ɵnov */](_v, 63).ngClassValid; var currVal_24 = core["_13" /* ɵnov */](_v, 63).ngClassInvalid; var currVal_25 = core["_13" /* ɵnov */](_v, 63).ngClassPending; var currVal_26 = core["_13" /* ɵnov */](_v, 64)._disabled; _ck(_v, 60, 0, currVal_19, currVal_20, currVal_21, currVal_22, currVal_23, currVal_24, currVal_25, currVal_26); var currVal_28 = core["_13" /* ɵnov */](_v, 68)._disabled; var currVal_29 = core["_13" /* ɵnov */](_v, 68).isActive; var currVal_30 = core["_13" /* ɵnov */](_v, 68).isActive; _ck(_v, 67, 0, currVal_28, currVal_29, currVal_30); var currVal_32 = core["_13" /* ɵnov */](_v, 78)._disabled; var currVal_33 = core["_13" /* ɵnov */](_v, 78).isActive; var currVal_34 = core["_13" /* ɵnov */](_v, 78).isActive; _ck(_v, 77, 0, currVal_32, currVal_33, currVal_34); var currVal_36 = core["_13" /* ɵnov */](_v, 88)._disabled; var currVal_37 = core["_13" /* ɵnov */](_v, 88).isActive; var currVal_38 = core["_13" /* ɵnov */](_v, 88).isActive; _ck(_v, 87, 0, currVal_36, currVal_37, currVal_38); var currVal_40 = core["_13" /* ɵnov */](_v, 98)._disabled; var currVal_41 = core["_13" /* ɵnov */](_v, 98).isActive; var currVal_42 = core["_13" /* ɵnov */](_v, 98).isActive; _ck(_v, 97, 0, currVal_40, currVal_41, currVal_42); var currVal_44 = core["_13" /* ɵnov */](_v, 108)._disabled; var currVal_45 = core["_13" /* ɵnov */](_v, 108).isActive; var currVal_46 = core["_13" /* ɵnov */](_v, 108).isActive; _ck(_v, 107, 0, currVal_44, currVal_45, currVal_46); var currVal_48 = core["_13" /* ɵnov */](_v, 118)._disabled; var currVal_49 = core["_13" /* ɵnov */](_v, 118).isActive; var currVal_50 = core["_13" /* ɵnov */](_v, 118).isActive; _ck(_v, 117, 0, currVal_48, currVal_49, currVal_50); });
}
function View_VoidwatchPage_Host_0(_l) { return core["_19" /* ɵvid */](0, [(_l()(), core["Z" /* ɵeld */](0, 0, null, null, 1, "page-voidwatch", [], null, null, null, View_VoidwatchPage_0, RenderType_VoidwatchPage)), core["Y" /* ɵdid */](1, 49152, null, 0, VoidwatchPage, [nav_params["a" /* NavParams */], ffxi_FFXIService, ui_UIService], null, null)], null, null); }
var VoidwatchPageNgFactory = /*@__PURE__*/ core["V" /* ɵccf */]("page-voidwatch", VoidwatchPage, View_VoidwatchPage_Host_0, {}, {}, []);





// EXTERNAL MODULE: ./node_modules/ionic-angular/components/card/card.js
var card = __webpack_require__(73);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/card/card-header.js
var card_header = __webpack_require__(103);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/card/card-content.js
var card_content = __webpack_require__(102);

// CONCATENATED MODULE: ./src/pages/home/home.ngfactory.js
/**
* @fileoverview This file is generated by the Angular template compiler.
* Do not edit.
* @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
* tslint:disable
*/
/** PURE_IMPORTS_START _angular_core,ionic_angular_components_toolbar_toolbar_header,ionic_angular_config_config,ionic_angular_navigation_view_controller,_.._.._node_modules_ionic_angular_components_toolbar_navbar.ngfactory,ionic_angular_components_toolbar_navbar,ionic_angular_components_app_app,ionic_angular_navigation_nav_controller,ionic_angular_components_toolbar_toolbar_item,ionic_angular_components_toolbar_toolbar,_.._.._node_modules_ionic_angular_components_button_button.ngfactory,ionic_angular_components_button_button,ionic_angular_components_menu_menu_toggle,ionic_angular_components_app_menu_controller,_.._.._node_modules_ionic_angular_components_toolbar_toolbar_title.ngfactory,ionic_angular_components_toolbar_toolbar_title,_.._.._node_modules_ionic_angular_components_content_content.ngfactory,ionic_angular_components_content_content,ionic_angular_platform_platform,ionic_angular_platform_dom_controller,ionic_angular_platform_keyboard,ionic_angular_components_card_card,ionic_angular_components_card_card_header,ionic_angular_components_card_card_content,_home,_.._providers_ffxi,_.._providers_ui PURE_IMPORTS_END */



























var styles_HomePage = [];
var RenderType_HomePage = /*@__PURE__*/ core["X" /* ɵcrt */]({ encapsulation: 2, styles: styles_HomePage, data: {} });

function View_HomePage_0(_l) {
    return core["_19" /* ɵvid */](0, [(_l()(), core["Z" /* ɵeld */](0, 0, null, null, 29, "ion-header", [], null, null, null, null, null)), core["Y" /* ɵdid */](1, 16384, null, 0, toolbar_header["a" /* Header */], [config["a" /* Config */], core["j" /* ElementRef */], core["z" /* Renderer */], [2, view_controller["a" /* ViewController */]]], null, null), (_l()(), core["_18" /* ɵted */](-1, null, ["\n    "])), (_l()(), core["Z" /* ɵeld */](3, 0, null, null, 25, "ion-navbar", [["class", "toolbar"]], [[8, "hidden", 0], [2, "statusbar-padding", null]], null, null, navbar_ngfactory["b" /* View_Navbar_0 */], navbar_ngfactory["a" /* RenderType_Navbar */])), core["Y" /* ɵdid */](4, 49152, null, 0, navbar["a" /* Navbar */], [app_app["a" /* App */], [2, view_controller["a" /* ViewController */]], [2, nav_controller["a" /* NavController */]], config["a" /* Config */], core["j" /* ElementRef */], core["z" /* Renderer */]], { hideBackButton: [0, "hideBackButton"] }, null), (_l()(), core["_18" /* ɵted */](-1, 3, ["\n        "])), (_l()(), core["Z" /* ɵeld */](6, 0, null, 0, 9, "ion-buttons", [["left", ""]], null, null, null, null, null)), core["Y" /* ɵdid */](7, 16384, null, 1, toolbar_item["a" /* ToolbarItem */], [config["a" /* Config */], core["j" /* ElementRef */], core["z" /* Renderer */], [2, toolbar["a" /* Toolbar */]], [2, navbar["a" /* Navbar */]]], null, null), core["_16" /* ɵqud */](603979776, 1, { _buttons: 1 }), (_l()(), core["_18" /* ɵted */](-1, null, ["\n            "])), (_l()(), core["Z" /* ɵeld */](10, 0, null, null, 4, "button", [["icon-only", ""], ["ion-button", ""], ["menuToggle", ""]], [[8, "hidden", 0]], [[null, "click"]], function (_v, en, $event) {
            var ad = true;
            if (("click" === en)) {
                var pd_0 = (core["_13" /* ɵnov */](_v, 12).toggle() !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, button_ngfactory["b" /* View_Button_0 */], button_ngfactory["a" /* RenderType_Button */])), core["Y" /* ɵdid */](11, 1097728, [[2, 4], [1, 4]], 0, button_button["a" /* Button */], [[8, ""], config["a" /* Config */], core["j" /* ElementRef */], core["z" /* Renderer */]], null, null), core["Y" /* ɵdid */](12, 1064960, null, 0, menu_toggle["a" /* MenuToggle */], [menu_controller["a" /* MenuController */], [2, view_controller["a" /* ViewController */]], [2, button_button["a" /* Button */]], [2, navbar["a" /* Navbar */]]], { menuToggle: [0, "menuToggle"] }, null), core["Y" /* ɵdid */](13, 16384, null, 1, toolbar_item["a" /* ToolbarItem */], [config["a" /* Config */], core["j" /* ElementRef */], core["z" /* Renderer */], [2, toolbar["a" /* Toolbar */]], [2, navbar["a" /* Navbar */]]], null, null), core["_16" /* ɵqud */](603979776, 2, { _buttons: 1 }), (_l()(), core["_18" /* ɵted */](-1, null, ["\n        "])), (_l()(), core["_18" /* ɵted */](-1, 3, ["\n        "])), (_l()(), core["Z" /* ɵeld */](17, 0, null, 3, 2, "ion-title", [], null, null, null, toolbar_title_ngfactory["b" /* View_ToolbarTitle_0 */], toolbar_title_ngfactory["a" /* RenderType_ToolbarTitle */])), core["Y" /* ɵdid */](18, 49152, null, 0, toolbar_title["a" /* ToolbarTitle */], [config["a" /* Config */], core["j" /* ElementRef */], core["z" /* Renderer */], [2, toolbar["a" /* Toolbar */]], [2, navbar["a" /* Navbar */]]], null, null), (_l()(), core["_18" /* ɵted */](-1, 0, ["FFXI PROC"])), (_l()(), core["_18" /* ɵted */](-1, 3, ["\n        "])), (_l()(), core["Z" /* ɵeld */](21, 0, null, 2, 6, "ion-buttons", [["right", ""]], null, null, null, null, null)), core["Y" /* ɵdid */](22, 16384, null, 1, toolbar_item["a" /* ToolbarItem */], [config["a" /* Config */], core["j" /* ElementRef */], core["z" /* Renderer */], [2, toolbar["a" /* Toolbar */]], [2, navbar["a" /* Navbar */]]], null, null), core["_16" /* ɵqud */](603979776, 3, { _buttons: 1 }), (_l()(), core["_18" /* ɵted */](-1, null, ["\n            "])), (_l()(), core["Z" /* ɵeld */](25, 0, null, null, 1, "button", [["ion-button", ""], ["outline", ""], ["small", ""]], [[8, "innerHTML", 1]], [[null, "click"]], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (("click" === en)) {
                var pd_0 = (_co.ui.settings() !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, button_ngfactory["b" /* View_Button_0 */], button_ngfactory["a" /* RenderType_Button */])), core["Y" /* ɵdid */](26, 1097728, [[3, 4]], 0, button_button["a" /* Button */], [[8, ""], config["a" /* Config */], core["j" /* ElementRef */], core["z" /* Renderer */]], { small: [0, "small"], outline: [1, "outline"] }, null), (_l()(), core["_18" /* ɵted */](-1, null, ["\n        "])), (_l()(), core["_18" /* ɵted */](-1, 3, ["\n    "])), (_l()(), core["_18" /* ɵted */](-1, null, ["\n"])), (_l()(), core["_18" /* ɵted */](-1, null, ["\n"])), (_l()(), core["Z" /* ɵeld */](31, 0, null, null, 77, "ion-content", [], [[2, "statusbar-padding", null], [2, "has-refresher", null]], null, null, content_ngfactory["b" /* View_Content_0 */], content_ngfactory["a" /* RenderType_Content */])), core["Y" /* ɵdid */](32, 4374528, null, 0, content["a" /* Content */], [config["a" /* Config */], platform_platform["a" /* Platform */], dom_controller["a" /* DomController */], core["j" /* ElementRef */], core["z" /* Renderer */], app_app["a" /* App */], keyboard["a" /* Keyboard */], core["u" /* NgZone */], [2, view_controller["a" /* ViewController */]], [2, nav_controller["a" /* NavController */]]], null, null), (_l()(), core["_18" /* ɵted */](-1, 1, ["\n    "])), (_l()(), core["Z" /* ɵeld */](34, 0, null, 1, 73, "ion-card", [], null, null, null, null, null)), core["Y" /* ɵdid */](35, 16384, null, 0, card["a" /* Card */], [config["a" /* Config */], core["j" /* ElementRef */], core["z" /* Renderer */]], null, null), (_l()(), core["_18" /* ɵted */](-1, null, ["\n        "])), (_l()(), core["Z" /* ɵeld */](37, 0, null, null, 5, "ion-card-header", [], null, null, null, null, null)), core["Y" /* ɵdid */](38, 16384, null, 0, card_header["a" /* CardHeader */], [config["a" /* Config */], core["j" /* ElementRef */], core["z" /* Renderer */]], null, null), (_l()(), core["_18" /* ɵted */](-1, null, ["\n            "])), (_l()(), core["Z" /* ɵeld */](40, 0, null, null, 1, "h1", [], null, null, null, null, null)), (_l()(), core["_18" /* ɵted */](-1, null, ["FFXI Weakness Triggers (PROC)"])), (_l()(), core["_18" /* ɵted */](-1, null, ["\n        "])), (_l()(), core["_18" /* ɵted */](-1, null, ["\n        "])), (_l()(), core["Z" /* ɵeld */](44, 0, null, null, 62, "ion-card-content", [], null, null, null, null, null)), core["Y" /* ɵdid */](45, 16384, null, 0, card_content["a" /* CardContent */], [config["a" /* Config */], core["j" /* ElementRef */], core["z" /* Renderer */]], null, null), (_l()(), core["_18" /* ɵted */](-1, null, ["\n            "])), (_l()(), core["Z" /* ɵeld */](47, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), core["_18" /* ɵted */](-1, null, ["Notorious Monsters in Abyssea and Voidwatch and all in Dynamis have vulnerabilites that are procedural random occurances, or \u201CPROC\u201Ds."])), (_l()(), core["_18" /* ɵted */](-1, null, ["\n            "])), (_l()(), core["Z" /* ɵeld */](50, 0, null, null, 1, "h2", [], null, null, null, null, null)), (_l()(), core["_18" /* ɵted */](-1, null, ["Abyssea Notorious Monsters"])), (_l()(), core["_18" /* ɵted */](-1, null, ["\n            "])), (_l()(), core["Z" /* ɵeld */](53, 0, null, null, 19, "ul", [], null, null, null, null, null)), (_l()(), core["_18" /* ɵted */](-1, null, ["\n                "])), (_l()(), core["Z" /* ɵeld */](55, 0, null, null, 4, "li", [], null, null, null, null, null)), (_l()(), core["Z" /* ɵeld */](56, 0, null, null, 0, "img", [["src", "../assets/images/proc/red24.png"]], null, null, null, null, null)), (_l()(), core["_18" /* ɵted */](-1, null, [" Weapon Skills:"])), (_l()(), core["Z" /* ɵeld */](58, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), core["_18" /* ɵted */](-1, null, ["Atmas and NM key items"])), (_l()(), core["_18" /* ɵted */](-1, null, ["\n                "])), (_l()(), core["Z" /* ɵeld */](61, 0, null, null, 4, "li", [], null, null, null, null, null)), (_l()(), core["Z" /* ɵeld */](62, 0, null, null, 0, "img", [["src", "../assets/images/proc/yellow24.png"]], null, null, null, null, null)), (_l()(), core["_18" /* ɵted */](-1, null, [" Magic Spells:"])), (_l()(), core["Z" /* ɵeld */](64, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), core["_18" /* ɵted */](-1, null, ["EX Empyrean armor upgrade items"])), (_l()(), core["_18" /* ɵted */](-1, null, ["\n                "])), (_l()(), core["Z" /* ɵeld */](67, 0, null, null, 4, "li", [], null, null, null, null, null)), (_l()(), core["Z" /* ɵeld */](68, 0, null, null, 0, "img", [["src", "../assets/images/proc/blue24.png"]], null, null, null, null, null)), (_l()(), core["_18" /* ɵted */](-1, null, [" Weapon Skills:"])), (_l()(), core["Z" /* ɵeld */](70, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), core["_18" /* ɵted */](-1, null, ["RA/EX weapons and armor"])), (_l()(), core["_18" /* ɵted */](-1, null, ["\n            "])), (_l()(), core["_18" /* ɵted */](-1, null, ["\n            "])), (_l()(), core["Z" /* ɵeld */](74, 0, null, null, 1, "h2", [], null, null, null, null, null)), (_l()(), core["_18" /* ɵted */](-1, null, ["Dynamis (# of Time Extensions)"])), (_l()(), core["_18" /* ɵted */](-1, null, ["\n            "])), (_l()(), core["Z" /* ɵeld */](77, 0, null, null, 25, "ul", [], null, null, null, null, null)), (_l()(), core["_18" /* ɵted */](-1, null, ["\n                "])), (_l()(), core["Z" /* ɵeld */](79, 0, null, null, 4, "li", [], null, null, null, null, null)), (_l()(), core["Z" /* ɵeld */](80, 0, null, null, 0, "img", [["src", "../assets/images/proc/blue24.png"]], null, null, null, null, null)), (_l()(), core["_18" /* ɵted */](-1, null, [" 3\u00D7 TE:"])), (_l()(), core["Z" /* ɵeld */](82, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), core["_18" /* ɵted */](-1, null, ["single currency drop slot"])), (_l()(), core["_18" /* ɵted */](-1, null, ["\n                "])), (_l()(), core["Z" /* ɵeld */](85, 0, null, null, 4, "li", [], null, null, null, null, null)), (_l()(), core["Z" /* ɵeld */](86, 0, null, null, 0, "img", [["src", "../assets/images/proc/yellow24.png"]], null, null, null, null, null)), (_l()(), core["_18" /* ɵted */](-1, null, [" 4\u00D7 TE:"])), (_l()(), core["Z" /* ɵeld */](88, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), core["_18" /* ɵted */](-1, null, ["additional currency drop slot"])), (_l()(), core["_18" /* ɵted */](-1, null, ["\n                "])), (_l()(), core["Z" /* ɵeld */](91, 0, null, null, 4, "li", [], null, null, null, null, null)), (_l()(), core["Z" /* ɵeld */](92, 0, null, null, 0, "img", [["src", "../assets/images/proc/red24.png"]], null, null, null, null, null)), (_l()(), core["_18" /* ɵted */](-1, null, [" 5\u00D7 TE:"])), (_l()(), core["Z" /* ɵeld */](94, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), core["_18" /* ɵted */](-1, null, ["additional 100% drop slot"])), (_l()(), core["_18" /* ɵted */](-1, null, ["\n                "])), (_l()(), core["Z" /* ɵeld */](97, 0, null, null, 4, "li", [], null, null, null, null, null)), (_l()(), core["Z" /* ɵeld */](98, 0, null, null, 0, "img", [["src", "../assets/images/proc/white24.png"]], null, null, null, null, null)), (_l()(), core["_18" /* ɵted */](-1, null, [" No sub job (CoP areas):"])), (_l()(), core["Z" /* ɵeld */](100, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), core["_18" /* ɵted */](-1, null, [" 100% hundred-piece drop slot"])), (_l()(), core["_18" /* ɵted */](-1, null, ["\n            "])), (_l()(), core["_18" /* ɵted */](-1, null, ["\n            "])), (_l()(), core["Z" /* ɵeld */](104, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), core["_18" /* ɵted */](-1, null, ["Swipe right and select a category."])), (_l()(), core["_18" /* ɵted */](-1, null, ["\n        "])), (_l()(), core["_18" /* ɵted */](-1, null, ["\n    "])), (_l()(), core["_18" /* ɵted */](-1, 1, ["\n"]))], function (_ck, _v) { var currVal_2 = true; _ck(_v, 4, 0, currVal_2); var currVal_4 = ""; _ck(_v, 12, 0, currVal_4); var currVal_6 = ""; var currVal_7 = ""; _ck(_v, 26, 0, currVal_6, currVal_7); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = core["_13" /* ɵnov */](_v, 4)._hidden; var currVal_1 = core["_13" /* ɵnov */](_v, 4)._sbPadding; _ck(_v, 3, 0, currVal_0, currVal_1); var currVal_3 = core["_13" /* ɵnov */](_v, 12).isHidden; _ck(_v, 10, 0, currVal_3); var currVal_5 = _co.ffxi.vanatime; _ck(_v, 25, 0, currVal_5); var currVal_8 = core["_13" /* ɵnov */](_v, 32).statusbarPadding; var currVal_9 = core["_13" /* ɵnov */](_v, 32)._hasRefresher; _ck(_v, 31, 0, currVal_8, currVal_9); });
}
function View_HomePage_Host_0(_l) { return core["_19" /* ɵvid */](0, [(_l()(), core["Z" /* ɵeld */](0, 0, null, null, 1, "page-home", [], null, null, null, View_HomePage_0, RenderType_HomePage)), core["Y" /* ɵdid */](1, 49152, null, 0, HomePage, [ffxi_FFXIService, ui_UIService], null, null)], null, null); }
var HomePageNgFactory = /*@__PURE__*/ core["V" /* ɵccf */]("page-home", HomePage, View_HomePage_Host_0, {}, {}, []);





// EXTERNAL MODULE: ./node_modules/ionic-angular/components/icon/icon.js
var icon = __webpack_require__(45);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/item/item-divider.js
var item_divider = __webpack_require__(106);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/toggle/toggle.ngfactory.js
var toggle_ngfactory = __webpack_require__(243);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/toggle/toggle.js + 1 modules
var toggle = __webpack_require__(86);

// EXTERNAL MODULE: ./node_modules/ionic-angular/tap-click/haptic.js
var haptic = __webpack_require__(29);

// CONCATENATED MODULE: ./src/pages/settings/settings.ngfactory.js
/**
* @fileoverview This file is generated by the Angular template compiler.
* Do not edit.
* @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
* tslint:disable
*/
/** PURE_IMPORTS_START _angular_core,ionic_angular_components_toolbar_toolbar_header,ionic_angular_config_config,ionic_angular_navigation_view_controller,_.._.._node_modules_ionic_angular_components_toolbar_navbar.ngfactory,ionic_angular_components_toolbar_navbar,ionic_angular_components_app_app,ionic_angular_navigation_nav_controller,_.._.._node_modules_ionic_angular_components_toolbar_toolbar_title.ngfactory,ionic_angular_components_toolbar_toolbar_title,ionic_angular_components_toolbar_toolbar,ionic_angular_components_toolbar_toolbar_item,_.._.._node_modules_ionic_angular_components_button_button.ngfactory,ionic_angular_components_button_button,ionic_angular_components_icon_icon,_.._.._node_modules_ionic_angular_components_content_content.ngfactory,ionic_angular_components_content_content,ionic_angular_platform_platform,ionic_angular_platform_dom_controller,ionic_angular_platform_keyboard,ionic_angular_components_card_card,ionic_angular_components_list_list,ionic_angular_gestures_gesture_controller,_.._.._node_modules_ionic_angular_components_item_item.ngfactory,ionic_angular_components_item_item,ionic_angular_util_form,ionic_angular_components_item_item_reorder,ionic_angular_components_item_item_divider,ionic_angular_components_item_item_content,ionic_angular_components_label_label,_.._.._node_modules_ionic_angular_components_toggle_toggle.ngfactory,ionic_angular_components_toggle_toggle,ionic_angular_tap_click_haptic,_angular_forms,_settings,_.._providers_ui PURE_IMPORTS_END */




































var styles_SettingsPage = [];
var RenderType_SettingsPage = /*@__PURE__*/ core["X" /* ɵcrt */]({ encapsulation: 2, styles: styles_SettingsPage, data: {} });

function View_SettingsPage_0(_l) {
    return core["_19" /* ɵvid */](0, [(_l()(), core["Z" /* ɵeld */](0, 0, null, null, 20, "ion-header", [], null, null, null, null, null)), core["Y" /* ɵdid */](1, 16384, null, 0, toolbar_header["a" /* Header */], [config["a" /* Config */], core["j" /* ElementRef */], core["z" /* Renderer */], [2, view_controller["a" /* ViewController */]]], null, null), (_l()(), core["_18" /* ɵted */](-1, null, ["\n    "])), (_l()(), core["Z" /* ɵeld */](3, 0, null, null, 16, "ion-navbar", [["class", "toolbar"]], [[8, "hidden", 0], [2, "statusbar-padding", null]], null, null, navbar_ngfactory["b" /* View_Navbar_0 */], navbar_ngfactory["a" /* RenderType_Navbar */])), core["Y" /* ɵdid */](4, 49152, null, 0, navbar["a" /* Navbar */], [app_app["a" /* App */], [2, view_controller["a" /* ViewController */]], [2, nav_controller["a" /* NavController */]], config["a" /* Config */], core["j" /* ElementRef */], core["z" /* Renderer */]], { hideBackButton: [0, "hideBackButton"] }, null), (_l()(), core["_18" /* ɵted */](-1, 3, ["\n        "])), (_l()(), core["Z" /* ɵeld */](6, 0, null, 3, 2, "ion-title", [], null, null, null, toolbar_title_ngfactory["b" /* View_ToolbarTitle_0 */], toolbar_title_ngfactory["a" /* RenderType_ToolbarTitle */])), core["Y" /* ɵdid */](7, 49152, null, 0, toolbar_title["a" /* ToolbarTitle */], [config["a" /* Config */], core["j" /* ElementRef */], core["z" /* Renderer */], [2, toolbar["a" /* Toolbar */]], [2, navbar["a" /* Navbar */]]], null, null), (_l()(), core["_18" /* ɵted */](-1, 0, ["Clock Settings"])), (_l()(), core["_18" /* ɵted */](-1, 3, ["\n        "])), (_l()(), core["Z" /* ɵeld */](10, 0, null, 2, 8, "ion-buttons", [["right", ""]], null, null, null, null, null)), core["Y" /* ɵdid */](11, 16384, null, 1, toolbar_item["a" /* ToolbarItem */], [config["a" /* Config */], core["j" /* ElementRef */], core["z" /* Renderer */], [2, toolbar["a" /* Toolbar */]], [2, navbar["a" /* Navbar */]]], null, null), core["_16" /* ɵqud */](603979776, 1, { _buttons: 1 }), (_l()(), core["_18" /* ɵted */](-1, null, ["\n            "])), (_l()(), core["Z" /* ɵeld */](14, 0, null, null, 3, "button", [["icon-only", ""], ["ion-button", ""], ["outline", ""], ["small", ""]], null, [[null, "click"]], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (("click" === en)) {
                var pd_0 = (_co.close() !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, button_ngfactory["b" /* View_Button_0 */], button_ngfactory["a" /* RenderType_Button */])), core["Y" /* ɵdid */](15, 1097728, [[1, 4]], 0, button_button["a" /* Button */], [[8, ""], config["a" /* Config */], core["j" /* ElementRef */], core["z" /* Renderer */]], { small: [0, "small"], outline: [1, "outline"] }, null), (_l()(), core["Z" /* ɵeld */](16, 0, null, 0, 1, "ion-icon", [["name", "close"], ["role", "img"]], [[2, "hide", null]], null, null, null, null)), core["Y" /* ɵdid */](17, 147456, null, 0, icon["a" /* Icon */], [config["a" /* Config */], core["j" /* ElementRef */], core["z" /* Renderer */]], { name: [0, "name"] }, null), (_l()(), core["_18" /* ɵted */](-1, null, ["\n        "])), (_l()(), core["_18" /* ɵted */](-1, 3, ["\n    "])), (_l()(), core["_18" /* ɵted */](-1, null, ["\n"])), (_l()(), core["_18" /* ɵted */](-1, null, ["\n"])), (_l()(), core["Z" /* ɵeld */](22, 0, null, null, 63, "ion-content", [], [[2, "statusbar-padding", null], [2, "has-refresher", null]], null, null, content_ngfactory["b" /* View_Content_0 */], content_ngfactory["a" /* RenderType_Content */])), core["Y" /* ɵdid */](23, 4374528, null, 0, content["a" /* Content */], [config["a" /* Config */], platform_platform["a" /* Platform */], dom_controller["a" /* DomController */], core["j" /* ElementRef */], core["z" /* Renderer */], app_app["a" /* App */], keyboard["a" /* Keyboard */], core["u" /* NgZone */], [2, view_controller["a" /* ViewController */]], [2, nav_controller["a" /* NavController */]]], null, null), (_l()(), core["_18" /* ɵted */](-1, 1, ["\n    "])), (_l()(), core["Z" /* ɵeld */](25, 0, null, 1, 55, "ion-card", [], null, null, null, null, null)), core["Y" /* ɵdid */](26, 16384, null, 0, card["a" /* Card */], [config["a" /* Config */], core["j" /* ElementRef */], core["z" /* Renderer */]], null, null), (_l()(), core["_18" /* ɵted */](-1, null, ["\n        "])), (_l()(), core["Z" /* ɵeld */](28, 0, null, null, 51, "ion-list", [], null, null, null, null, null)), core["Y" /* ɵdid */](29, 16384, null, 0, list["a" /* List */], [config["a" /* Config */], core["j" /* ElementRef */], core["z" /* Renderer */], platform_platform["a" /* Platform */], gesture_controller["l" /* GestureController */], dom_controller["a" /* DomController */]], null, null), (_l()(), core["_18" /* ɵted */](-1, null, ["\n            "])), (_l()(), core["_18" /* ɵted */](-1, null, ["\n            "])), (_l()(), core["Z" /* ɵeld */](32, 0, null, null, 6, "ion-item-divider", [["class", "item item-divider"]], null, null, null, item_ngfactory["b" /* View_Item_0 */], item_ngfactory["a" /* RenderType_Item */])), core["Y" /* ɵdid */](33, 1097728, null, 3, item["a" /* Item */], [util_form["a" /* Form */], config["a" /* Config */], core["j" /* ElementRef */], core["z" /* Renderer */], [2, item_reorder["a" /* ItemReorder */]]], null, null), core["_16" /* ɵqud */](335544320, 2, { contentLabel: 0 }), core["_16" /* ɵqud */](603979776, 3, { _buttons: 1 }), core["_16" /* ɵqud */](603979776, 4, { _icons: 1 }), core["Y" /* ɵdid */](37, 16384, null, 0, item_divider["a" /* ItemDivider */], [config["a" /* Config */], core["j" /* ElementRef */], core["z" /* Renderer */]], null, null), (_l()(), core["_18" /* ɵted */](-1, 2, ["Sounds"])), (_l()(), core["_18" /* ɵted */](-1, null, ["\n            "])), (_l()(), core["Z" /* ɵeld */](40, 0, null, null, 38, "ion-list", [["inset", ""]], null, null, null, null, null)), core["Y" /* ɵdid */](41, 16384, null, 0, list["a" /* List */], [config["a" /* Config */], core["j" /* ElementRef */], core["z" /* Renderer */], platform_platform["a" /* Platform */], gesture_controller["l" /* GestureController */], dom_controller["a" /* DomController */]], null, null), (_l()(), core["_18" /* ɵted */](-1, null, ["\n                "])), (_l()(), core["Z" /* ɵeld */](43, 0, null, null, 17, "ion-item", [["class", "item item-block"]], null, null, null, item_ngfactory["b" /* View_Item_0 */], item_ngfactory["a" /* RenderType_Item */])), core["Y" /* ɵdid */](44, 1097728, null, 3, item["a" /* Item */], [util_form["a" /* Form */], config["a" /* Config */], core["j" /* ElementRef */], core["z" /* Renderer */], [2, item_reorder["a" /* ItemReorder */]]], null, null), core["_16" /* ɵqud */](335544320, 5, { contentLabel: 0 }), core["_16" /* ɵqud */](603979776, 6, { _buttons: 1 }), core["_16" /* ɵqud */](603979776, 7, { _icons: 1 }), core["Y" /* ɵdid */](48, 16384, null, 0, item_content["a" /* ItemContent */], [], null, null), (_l()(), core["_18" /* ɵted */](-1, 2, ["\n                    "])), (_l()(), core["Z" /* ɵeld */](50, 0, null, 1, 2, "ion-label", [], null, null, null, null, null)), core["Y" /* ɵdid */](51, 16384, [[5, 4]], 0, label["a" /* Label */], [config["a" /* Config */], core["j" /* ElementRef */], core["z" /* Renderer */], [8, null], [8, null], [8, null], [8, null]], null, null), (_l()(), core["_18" /* ɵted */](-1, null, ["Dynamis time change"])), (_l()(), core["_18" /* ɵted */](-1, 2, ["\n                    "])), (_l()(), core["Z" /* ɵeld */](54, 0, null, 4, 5, "ion-toggle", [], [[2, "toggle-disabled", null], [2, "toggle-checked", null], [2, "toggle-activated", null], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "keyup"]], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (("keyup" === en)) {
                var pd_0 = (core["_13" /* ɵnov */](_v, 55)._keyup($event) !== false);
                ad = (pd_0 && ad);
            }
            if (("ngModelChange" === en)) {
                var pd_1 = ((_co.ui.sound.enabled = $event) !== false);
                ad = (pd_1 && ad);
            }
            if (("ngModelChange" === en)) {
                var pd_2 = (_co.ui.sound.save() !== false);
                ad = (pd_2 && ad);
            }
            return ad;
        }, toggle_ngfactory["b" /* View_Toggle_0 */], toggle_ngfactory["a" /* RenderType_Toggle */])), core["Y" /* ɵdid */](55, 1228800, null, 0, toggle["a" /* Toggle */], [util_form["a" /* Form */], config["a" /* Config */], platform_platform["a" /* Platform */], core["j" /* ElementRef */], core["z" /* Renderer */], haptic["a" /* Haptic */], [2, item["a" /* Item */]], gesture_controller["l" /* GestureController */], dom_controller["a" /* DomController */], core["u" /* NgZone */]], { checked: [0, "checked"] }, null), core["_15" /* ɵprd */](1024, null, esm5_forms["e" /* NG_VALUE_ACCESSOR */], function (p0_0) { return [p0_0]; }, [toggle["a" /* Toggle */]]), core["Y" /* ɵdid */](57, 671744, null, 0, esm5_forms["h" /* NgModel */], [[8, null], [8, null], [8, null], [2, esm5_forms["e" /* NG_VALUE_ACCESSOR */]]], { model: [0, "model"] }, { update: "ngModelChange" }), core["_15" /* ɵprd */](2048, null, esm5_forms["f" /* NgControl */], null, [esm5_forms["h" /* NgModel */]]), core["Y" /* ɵdid */](59, 16384, null, 0, esm5_forms["g" /* NgControlStatus */], [esm5_forms["f" /* NgControl */]], null, null), (_l()(), core["_18" /* ɵted */](-1, 2, ["\n                "])), (_l()(), core["_18" /* ɵted */](-1, null, ["\n                "])), (_l()(), core["Z" /* ɵeld */](62, 0, null, null, 15, "ion-item", [["class", "item item-block"]], null, null, null, item_ngfactory["b" /* View_Item_0 */], item_ngfactory["a" /* RenderType_Item */])), core["Y" /* ɵdid */](63, 1097728, null, 3, item["a" /* Item */], [util_form["a" /* Form */], config["a" /* Config */], core["j" /* ElementRef */], core["z" /* Renderer */], [2, item_reorder["a" /* ItemReorder */]]], null, null), core["_16" /* ɵqud */](335544320, 8, { contentLabel: 0 }), core["_16" /* ɵqud */](603979776, 9, { _buttons: 1 }), core["_16" /* ɵqud */](603979776, 10, { _icons: 1 }), core["Y" /* ɵdid */](67, 16384, null, 0, item_content["a" /* ItemContent */], [], null, null), (_l()(), core["_18" /* ɵted */](-1, 2, ["\n                    "])), (_l()(), core["Z" /* ɵeld */](69, 0, null, 1, 2, "ion-label", [], null, null, null, null, null)), core["Y" /* ɵdid */](70, 16384, [[8, 4]], 0, label["a" /* Label */], [config["a" /* Config */], core["j" /* ElementRef */], core["z" /* Renderer */], [8, null], [8, null], [8, null], [8, null]], null, null), (_l()(), core["_18" /* ɵted */](-1, null, ["Sound Test"])), (_l()(), core["_18" /* ɵted */](-1, 2, ["\n                    "])), (_l()(), core["Z" /* ɵeld */](73, 0, null, 4, 3, "button", [["class", "play"], ["icon-only", ""], ["ion-button", ""], ["item-end", ""], ["large", ""]], null, [[null, "click"]], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (("click" === en)) {
                var pd_0 = (_co.ui.sound.play() !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, button_ngfactory["b" /* View_Button_0 */], button_ngfactory["a" /* RenderType_Button */])), core["Y" /* ɵdid */](74, 1097728, [[9, 4]], 0, button_button["a" /* Button */], [[8, ""], config["a" /* Config */], core["j" /* ElementRef */], core["z" /* Renderer */]], { large: [0, "large"] }, null), (_l()(), core["Z" /* ɵeld */](75, 0, null, 0, 1, "ion-icon", [["name", "play"], ["role", "img"]], [[2, "hide", null]], null, null, null, null)), core["Y" /* ɵdid */](76, 147456, null, 0, icon["a" /* Icon */], [config["a" /* Config */], core["j" /* ElementRef */], core["z" /* Renderer */]], { name: [0, "name"] }, null), (_l()(), core["_18" /* ɵted */](-1, 2, ["\n                "])), (_l()(), core["_18" /* ɵted */](-1, null, ["\n            "])), (_l()(), core["_18" /* ɵted */](-1, null, ["\n        "])), (_l()(), core["_18" /* ɵted */](-1, null, ["\n    "])), (_l()(), core["_18" /* ɵted */](-1, 1, ["\n    "])), (_l()(), core["Z" /* ɵeld */](82, 0, null, 1, 2, "div", [["class", "version"]], null, null, null, null, null)), (_l()(), core["_18" /* ɵted */](-1, null, ["Version "])), (_l()(), core["Z" /* ɵeld */](84, 0, null, null, 0, "span", [], [[8, "innerHTML", 1]], null, null, null, null)), (_l()(), core["_18" /* ɵted */](-1, 1, ["\n"]))], function (_ck, _v) { var _co = _v.component; var currVal_2 = true; _ck(_v, 4, 0, currVal_2); var currVal_3 = ""; var currVal_4 = ""; _ck(_v, 15, 0, currVal_3, currVal_4); var currVal_6 = "close"; _ck(_v, 17, 0, currVal_6); var currVal_19 = _co.ui.sound.enabled; _ck(_v, 55, 0, currVal_19); var currVal_20 = _co.ui.sound.enabled; _ck(_v, 57, 0, currVal_20); var currVal_21 = ""; _ck(_v, 74, 0, currVal_21); var currVal_23 = "play"; _ck(_v, 76, 0, currVal_23); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = core["_13" /* ɵnov */](_v, 4)._hidden; var currVal_1 = core["_13" /* ɵnov */](_v, 4)._sbPadding; _ck(_v, 3, 0, currVal_0, currVal_1); var currVal_5 = core["_13" /* ɵnov */](_v, 17)._hidden; _ck(_v, 16, 0, currVal_5); var currVal_7 = core["_13" /* ɵnov */](_v, 23).statusbarPadding; var currVal_8 = core["_13" /* ɵnov */](_v, 23)._hasRefresher; _ck(_v, 22, 0, currVal_7, currVal_8); var currVal_9 = core["_13" /* ɵnov */](_v, 55)._disabled; var currVal_10 = core["_13" /* ɵnov */](_v, 55)._value; var currVal_11 = core["_13" /* ɵnov */](_v, 55)._activated; var currVal_12 = core["_13" /* ɵnov */](_v, 59).ngClassUntouched; var currVal_13 = core["_13" /* ɵnov */](_v, 59).ngClassTouched; var currVal_14 = core["_13" /* ɵnov */](_v, 59).ngClassPristine; var currVal_15 = core["_13" /* ɵnov */](_v, 59).ngClassDirty; var currVal_16 = core["_13" /* ɵnov */](_v, 59).ngClassValid; var currVal_17 = core["_13" /* ɵnov */](_v, 59).ngClassInvalid; var currVal_18 = core["_13" /* ɵnov */](_v, 59).ngClassPending; _ck(_v, 54, 0, currVal_9, currVal_10, currVal_11, currVal_12, currVal_13, currVal_14, currVal_15, currVal_16, currVal_17, currVal_18); var currVal_22 = core["_13" /* ɵnov */](_v, 76)._hidden; _ck(_v, 75, 0, currVal_22); var currVal_24 = _co.ui.version; _ck(_v, 84, 0, currVal_24); });
}
function View_SettingsPage_Host_0(_l) { return core["_19" /* ɵvid */](0, [(_l()(), core["Z" /* ɵeld */](0, 0, null, null, 1, "page-settings", [], null, null, null, View_SettingsPage_0, RenderType_SettingsPage)), core["Y" /* ɵdid */](1, 49152, null, 0, SettingsPage, [platform_platform["a" /* Platform */], view_controller["a" /* ViewController */], ui_UIService], null, null)], null, null); }
var SettingsPageNgFactory = /*@__PURE__*/ core["V" /* ɵccf */]("page-settings", SettingsPage, View_SettingsPage_Host_0, {}, {}, []);





// EXTERNAL MODULE: ./node_modules/ionic-angular/gestures/gesture-config.js
var gesture_config = __webpack_require__(130);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/action-sheet/action-sheet-controller.js
var action_sheet_controller = __webpack_require__(99);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/alert/alert-controller.js
var alert_controller = __webpack_require__(101);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/loading/loading-controller.js
var loading_controller = __webpack_require__(108);

// EXTERNAL MODULE: ./node_modules/ionic-angular/module.js
var ionic_angular_module = __webpack_require__(191);

// EXTERNAL MODULE: ./node_modules/ionic-angular/navigation/url-serializer.js
var url_serializer = __webpack_require__(61);

// EXTERNAL MODULE: ./node_modules/ionic-angular/util/module-loader.js
var module_loader = __webpack_require__(52);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/modal/modal-controller.js
var modal_controller = __webpack_require__(111);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/picker/picker-controller.js
var picker_controller = __webpack_require__(74);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/popover/popover-controller.js
var popover_controller = __webpack_require__(117);

// EXTERNAL MODULE: ./node_modules/ionic-angular/tap-click/tap-click.js + 3 modules
var tap_click = __webpack_require__(127);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/toast/toast-controller.js
var toast_controller = __webpack_require__(123);

// EXTERNAL MODULE: ./node_modules/@ionic/storage/dist/storage.js
var dist_storage = __webpack_require__(193);

// EXTERNAL MODULE: ./node_modules/ionic-angular/util/ionic-error-handler.js
var ionic_error_handler = __webpack_require__(190);

// EXTERNAL MODULE: ./node_modules/ionic-angular/platform/platform-registry.js
var platform_registry = __webpack_require__(128);

// EXTERNAL MODULE: ./node_modules/ionic-angular/util/ng-module-loader.js
var ng_module_loader = __webpack_require__(110);

// EXTERNAL MODULE: ./node_modules/ionic-angular/config/mode-registry.js
var mode_registry = __webpack_require__(129);

// CONCATENATED MODULE: ./src/app/app.module.ngfactory.js
/**
* @fileoverview This file is generated by the Angular template compiler.
* Do not edit.
* @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
* tslint:disable
*/
/** PURE_IMPORTS_START _angular_core,_app.module,ionic_angular_components_app_app_root,_.._node_modules_ionic_angular_components_action_sheet_action_sheet_component.ngfactory,_.._node_modules_ionic_angular_components_alert_alert_component.ngfactory,_.._node_modules_ionic_angular_components_app_app_root.ngfactory,_.._node_modules_ionic_angular_components_loading_loading_component.ngfactory,_.._node_modules_ionic_angular_components_modal_modal_component.ngfactory,_.._node_modules_ionic_angular_components_picker_picker_component.ngfactory,_.._node_modules_ionic_angular_components_popover_popover_component.ngfactory,_.._node_modules_ionic_angular_components_select_select_popover_component.ngfactory,_.._node_modules_ionic_angular_components_toast_toast_component.ngfactory,_app.component.ngfactory,_pages_abyssea_abyssea.ngfactory,_pages_dynamis_dynamis.ngfactory,_pages_voidwatch_voidwatch.ngfactory,_pages_home_home.ngfactory,_pages_settings_settings.ngfactory,_angular_common,_angular_platform_browser,ionic_angular_gestures_gesture_config,_angular_forms,ionic_angular_components_action_sheet_action_sheet_controller,ionic_angular_components_app_app,ionic_angular_config_config,ionic_angular_components_alert_alert_controller,ionic_angular_util_events,ionic_angular_util_form,ionic_angular_tap_click_haptic,ionic_angular_platform_platform,ionic_angular_platform_keyboard,ionic_angular_platform_dom_controller,ionic_angular_components_loading_loading_controller,ionic_angular_module,ionic_angular_navigation_url_serializer,ionic_angular_navigation_deep_linker,ionic_angular_util_module_loader,ionic_angular_components_modal_modal_controller,ionic_angular_components_picker_picker_controller,ionic_angular_components_popover_popover_controller,ionic_angular_tap_click_tap_click,ionic_angular_gestures_gesture_controller,ionic_angular_components_toast_toast_controller,ionic_angular_transitions_transition_controller,_ionic_storage_dist_storage,_ionic_native_media_index,_ionic_native_native_page_transitions_index,_ionic_native_splash_screen_index,_ionic_native_status_bar_index,_providers_ffxi,_providers_ui,ionic_angular_components_app_menu_controller,ionic_angular_util_ionic_error_handler,ionic_angular_platform_platform_registry,_pages_home_home,_pages_abyssea_abyssea,_pages_dynamis_dynamis,_pages_voidwatch_voidwatch,_pages_settings_settings,ionic_angular_util_ng_module_loader,ionic_angular_config_mode_registry,_ionic_storage_dist_index,_app.component PURE_IMPORTS_END */































































var AppModuleNgFactory = /*@__PURE__*/ core["W" /* ɵcmf */](AppModule, [app_root["b" /* IonicApp */]], function (_l) { return core["_10" /* ɵmod */]([core["_11" /* ɵmpd */](512, core["i" /* ComponentFactoryResolver */], core["S" /* ɵCodegenComponentFactoryResolver */], [[8, [action_sheet_component_ngfactory["a" /* ActionSheetCmpNgFactory */], alert_component_ngfactory["a" /* AlertCmpNgFactory */], app_root_ngfactory["a" /* IonicAppNgFactory */], loading_component_ngfactory["a" /* LoadingCmpNgFactory */], modal_component_ngfactory["a" /* ModalCmpNgFactory */], picker_component_ngfactory["a" /* PickerCmpNgFactory */], popover_component_ngfactory["a" /* PopoverCmpNgFactory */], select_popover_component_ngfactory["a" /* SelectPopoverNgFactory */], toast_component_ngfactory["a" /* ToastCmpNgFactory */], MyAppNgFactory, AbysseaPageNgFactory, DynamisPageNgFactory, VoidwatchPageNgFactory, HomePageNgFactory, SettingsPageNgFactory]], [3, core["i" /* ComponentFactoryResolver */]], core["s" /* NgModuleRef */]]), core["_11" /* ɵmpd */](5120, core["r" /* LOCALE_ID */], core["_9" /* ɵm */], [[3, core["r" /* LOCALE_ID */]]]), core["_11" /* ɵmpd */](4608, common["k" /* NgLocalization */], common["j" /* NgLocaleLocalization */], [core["r" /* LOCALE_ID */], [2, common["s" /* ɵa */]]]), core["_11" /* ɵmpd */](5120, core["b" /* APP_ID */], core["_0" /* ɵf */], []), core["_11" /* ɵmpd */](5120, core["p" /* IterableDiffers */], core["_6" /* ɵk */], []), core["_11" /* ɵmpd */](5120, core["q" /* KeyValueDiffers */], core["_7" /* ɵl */], []), core["_11" /* ɵmpd */](4608, platform_browser["c" /* DomSanitizer */], platform_browser["q" /* ɵe */], [common["c" /* DOCUMENT */]]), core["_11" /* ɵmpd */](6144, core["D" /* Sanitizer */], null, [platform_browser["c" /* DomSanitizer */]]), core["_11" /* ɵmpd */](4608, platform_browser["f" /* HAMMER_GESTURE_CONFIG */], gesture_config["a" /* IonicGestureConfig */], []), core["_11" /* ɵmpd */](5120, platform_browser["d" /* EVENT_MANAGER_PLUGINS */], function (p0_0, p0_1, p1_0, p2_0, p2_1) { return [new platform_browser["k" /* ɵDomEventsPlugin */](p0_0, p0_1), new platform_browser["o" /* ɵKeyEventsPlugin */](p1_0), new platform_browser["n" /* ɵHammerGesturesPlugin */](p2_0, p2_1)]; }, [common["c" /* DOCUMENT */], core["u" /* NgZone */], common["c" /* DOCUMENT */], common["c" /* DOCUMENT */], platform_browser["f" /* HAMMER_GESTURE_CONFIG */]]), core["_11" /* ɵmpd */](4608, platform_browser["e" /* EventManager */], platform_browser["e" /* EventManager */], [platform_browser["d" /* EVENT_MANAGER_PLUGINS */], core["u" /* NgZone */]]), core["_11" /* ɵmpd */](135680, platform_browser["m" /* ɵDomSharedStylesHost */], platform_browser["m" /* ɵDomSharedStylesHost */], [common["c" /* DOCUMENT */]]), core["_11" /* ɵmpd */](4608, platform_browser["l" /* ɵDomRendererFactory2 */], platform_browser["l" /* ɵDomRendererFactory2 */], [platform_browser["e" /* EventManager */], platform_browser["m" /* ɵDomSharedStylesHost */]]), core["_11" /* ɵmpd */](6144, core["B" /* RendererFactory2 */], null, [platform_browser["l" /* ɵDomRendererFactory2 */]]), core["_11" /* ɵmpd */](6144, platform_browser["p" /* ɵSharedStylesHost */], null, [platform_browser["m" /* ɵDomSharedStylesHost */]]), core["_11" /* ɵmpd */](4608, core["G" /* Testability */], core["G" /* Testability */], [core["u" /* NgZone */]]), core["_11" /* ɵmpd */](4608, platform_browser["h" /* Meta */], platform_browser["h" /* Meta */], [common["c" /* DOCUMENT */]]), core["_11" /* ɵmpd */](4608, platform_browser["i" /* Title */], platform_browser["i" /* Title */], [common["c" /* DOCUMENT */]]), core["_11" /* ɵmpd */](4608, esm5_forms["k" /* ɵi */], esm5_forms["k" /* ɵi */], []), core["_11" /* ɵmpd */](4608, esm5_forms["c" /* FormBuilder */], esm5_forms["c" /* FormBuilder */], []), core["_11" /* ɵmpd */](4608, action_sheet_controller["a" /* ActionSheetController */], action_sheet_controller["a" /* ActionSheetController */], [app_app["a" /* App */], config["a" /* Config */]]), core["_11" /* ɵmpd */](4608, alert_controller["a" /* AlertController */], alert_controller["a" /* AlertController */], [app_app["a" /* App */], config["a" /* Config */]]), core["_11" /* ɵmpd */](4608, util_events["a" /* Events */], util_events["a" /* Events */], []), core["_11" /* ɵmpd */](4608, util_form["a" /* Form */], util_form["a" /* Form */], []), core["_11" /* ɵmpd */](4608, haptic["a" /* Haptic */], haptic["a" /* Haptic */], [platform_platform["a" /* Platform */]]), core["_11" /* ɵmpd */](4608, keyboard["a" /* Keyboard */], keyboard["a" /* Keyboard */], [config["a" /* Config */], platform_platform["a" /* Platform */], core["u" /* NgZone */], dom_controller["a" /* DomController */]]), core["_11" /* ɵmpd */](4608, loading_controller["a" /* LoadingController */], loading_controller["a" /* LoadingController */], [app_app["a" /* App */], config["a" /* Config */]]), core["_11" /* ɵmpd */](5120, common["f" /* LocationStrategy */], ionic_angular_module["b" /* provideLocationStrategy */], [common["q" /* PlatformLocation */], [2, common["a" /* APP_BASE_HREF */]], config["a" /* Config */]]), core["_11" /* ɵmpd */](4608, common["e" /* Location */], common["e" /* Location */], [common["f" /* LocationStrategy */]]), core["_11" /* ɵmpd */](5120, url_serializer["b" /* UrlSerializer */], url_serializer["d" /* setupUrlSerializer */], [app_app["a" /* App */], url_serializer["a" /* DeepLinkConfigToken */]]), core["_11" /* ɵmpd */](5120, deep_linker["a" /* DeepLinker */], deep_linker["b" /* setupDeepLinker */], [app_app["a" /* App */], url_serializer["b" /* UrlSerializer */], common["e" /* Location */], module_loader["b" /* ModuleLoader */], core["i" /* ComponentFactoryResolver */]]), core["_11" /* ɵmpd */](4608, modal_controller["a" /* ModalController */], modal_controller["a" /* ModalController */], [app_app["a" /* App */], config["a" /* Config */], deep_linker["a" /* DeepLinker */]]), core["_11" /* ɵmpd */](4608, picker_controller["a" /* PickerController */], picker_controller["a" /* PickerController */], [app_app["a" /* App */], config["a" /* Config */]]), core["_11" /* ɵmpd */](4608, popover_controller["a" /* PopoverController */], popover_controller["a" /* PopoverController */], [app_app["a" /* App */], config["a" /* Config */], deep_linker["a" /* DeepLinker */]]), core["_11" /* ɵmpd */](4608, tap_click["a" /* TapClick */], tap_click["a" /* TapClick */], [config["a" /* Config */], platform_platform["a" /* Platform */], dom_controller["a" /* DomController */], app_app["a" /* App */], gesture_controller["l" /* GestureController */]]), core["_11" /* ɵmpd */](4608, toast_controller["a" /* ToastController */], toast_controller["a" /* ToastController */], [app_app["a" /* App */], config["a" /* Config */]]), core["_11" /* ɵmpd */](4608, transition_controller["a" /* TransitionController */], transition_controller["a" /* TransitionController */], [platform_platform["a" /* Platform */], config["a" /* Config */]]), core["_11" /* ɵmpd */](5120, dist_storage["a" /* Storage */], dist_storage["c" /* provideStorage */], [dist_storage["b" /* StorageConfigToken */]]), core["_11" /* ɵmpd */](4608, _ionic_native_media["a" /* Media */], _ionic_native_media["a" /* Media */], []), core["_11" /* ɵmpd */](4608, native_page_transitions["a" /* NativePageTransitions */], native_page_transitions["a" /* NativePageTransitions */], []), core["_11" /* ɵmpd */](4608, splash_screen["a" /* SplashScreen */], splash_screen["a" /* SplashScreen */], []), core["_11" /* ɵmpd */](4608, status_bar["a" /* StatusBar */], status_bar["a" /* StatusBar */], []), core["_11" /* ɵmpd */](4608, ffxi_FFXIService, ffxi_FFXIService, [util_events["a" /* Events */]]), core["_11" /* ɵmpd */](4608, ui_UIService, ui_UIService, [app_app["a" /* App */], platform_platform["a" /* Platform */], util_events["a" /* Events */], loading_controller["a" /* LoadingController */], alert_controller["a" /* AlertController */], _ionic_native_media["a" /* Media */], menu_controller["a" /* MenuController */], modal_controller["a" /* ModalController */], toast_controller["a" /* ToastController */], native_page_transitions["a" /* NativePageTransitions */], dist_storage["a" /* Storage */]]), core["_11" /* ɵmpd */](512, common["b" /* CommonModule */], common["b" /* CommonModule */], []), core["_11" /* ɵmpd */](512, core["k" /* ErrorHandler */], ionic_error_handler["a" /* IonicErrorHandler */], []), core["_11" /* ɵmpd */](256, config["b" /* ConfigToken */], { mode: "ios", locationStrategy: "path", swipeBackEnabled: false }, []), core["_11" /* ɵmpd */](1024, platform_registry["a" /* PlatformConfigToken */], platform_registry["b" /* providePlatformConfigs */], []), core["_11" /* ɵmpd */](1024, platform_platform["a" /* Platform */], platform_platform["b" /* setupPlatform */], [platform_browser["b" /* DOCUMENT */], platform_registry["a" /* PlatformConfigToken */], core["u" /* NgZone */]]), core["_11" /* ɵmpd */](1024, config["a" /* Config */], config["c" /* setupConfig */], [config["b" /* ConfigToken */], platform_platform["a" /* Platform */]]), core["_11" /* ɵmpd */](512, dom_controller["a" /* DomController */], dom_controller["a" /* DomController */], [platform_platform["a" /* Platform */]]), core["_11" /* ɵmpd */](512, menu_controller["a" /* MenuController */], menu_controller["a" /* MenuController */], []), core["_11" /* ɵmpd */](512, app_app["a" /* App */], app_app["a" /* App */], [config["a" /* Config */], platform_platform["a" /* Platform */], [2, menu_controller["a" /* MenuController */]]]), core["_11" /* ɵmpd */](512, gesture_controller["l" /* GestureController */], gesture_controller["l" /* GestureController */], [app_app["a" /* App */]]), core["_11" /* ɵmpd */](256, url_serializer["a" /* DeepLinkConfigToken */], { links: [{ component: HomePage, name: "home", segment: "" }, { component: AbysseaPage, name: "abyssea", segment: "abyssea/:type" }, { component: dynamis_DynamisPage, name: "dynamis", segment: "dynamis/:type" }, { component: VoidwatchPage, name: "voidwatch", segment: "voidwatch/:type" }, { component: SettingsPage, name: "settings", segment: "settings" }] }, []), core["_11" /* ɵmpd */](512, core["h" /* Compiler */], core["h" /* Compiler */], []), core["_11" /* ɵmpd */](512, ng_module_loader["a" /* NgModuleLoader */], ng_module_loader["a" /* NgModuleLoader */], [core["h" /* Compiler */]]), core["_11" /* ɵmpd */](1024, module_loader["b" /* ModuleLoader */], module_loader["c" /* provideModuleLoader */], [ng_module_loader["a" /* NgModuleLoader */], core["o" /* Injector */]]), core["_11" /* ɵmpd */](1024, core["c" /* APP_INITIALIZER */], function (p0_0, p1_0, p2_0, p2_1, p3_0, p3_1, p3_2, p3_3, p3_4, p4_0, p4_1, p4_2, p4_3) { return [platform_browser["s" /* ɵh */](p0_0), mode_registry["a" /* registerModeConfigs */](p1_0), util_events["b" /* setupProvideEvents */](p2_0, p2_1), tap_click["b" /* setupTapClick */](p3_0, p3_1, p3_2, p3_3, p3_4), module_loader["d" /* setupPreloading */](p4_0, p4_1, p4_2, p4_3)]; }, [[2, core["t" /* NgProbeToken */]], config["a" /* Config */], platform_platform["a" /* Platform */], dom_controller["a" /* DomController */], config["a" /* Config */], platform_platform["a" /* Platform */], dom_controller["a" /* DomController */], app_app["a" /* App */], gesture_controller["l" /* GestureController */], config["a" /* Config */], url_serializer["a" /* DeepLinkConfigToken */], module_loader["b" /* ModuleLoader */], core["u" /* NgZone */]]), core["_11" /* ɵmpd */](512, core["d" /* ApplicationInitStatus */], core["d" /* ApplicationInitStatus */], [[2, core["c" /* APP_INITIALIZER */]]]), core["_11" /* ɵmpd */](131584, core["f" /* ApplicationRef */], core["f" /* ApplicationRef */], [core["u" /* NgZone */], core["T" /* ɵConsole */], core["o" /* Injector */], core["k" /* ErrorHandler */], core["i" /* ComponentFactoryResolver */], core["d" /* ApplicationInitStatus */]]), core["_11" /* ɵmpd */](512, core["e" /* ApplicationModule */], core["e" /* ApplicationModule */], [core["f" /* ApplicationRef */]]), core["_11" /* ɵmpd */](512, platform_browser["a" /* BrowserModule */], platform_browser["a" /* BrowserModule */], [[3, platform_browser["a" /* BrowserModule */]]]), core["_11" /* ɵmpd */](512, esm5_forms["j" /* ɵba */], esm5_forms["j" /* ɵba */], []), core["_11" /* ɵmpd */](512, esm5_forms["d" /* FormsModule */], esm5_forms["d" /* FormsModule */], []), core["_11" /* ɵmpd */](512, esm5_forms["i" /* ReactiveFormsModule */], esm5_forms["i" /* ReactiveFormsModule */], []), core["_11" /* ɵmpd */](512, ionic_angular_module["a" /* IonicModule */], ionic_angular_module["a" /* IonicModule */], []), core["_11" /* ɵmpd */](512, dist["a" /* IonicStorageModule */], dist["a" /* IonicStorageModule */], []), core["_11" /* ɵmpd */](512, AppModule, AppModule, []), core["_11" /* ɵmpd */](256, app_root["a" /* AppRootToken */], app_component_MyApp, []), core["_11" /* ɵmpd */](256, common["a" /* APP_BASE_HREF */], "/", []), core["_11" /* ɵmpd */](256, dist_storage["b" /* StorageConfigToken */], null, [])]); });





// CONCATENATED MODULE: ./src/app/main.ts



Object(core["M" /* enableProdMode */])();
Object(platform_browser["j" /* platformBrowser */])().bootstrapModuleFactory(AppModuleNgFactory);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 231:
/***/ (function(module, exports) {

module.exports = {"name":"Weakness","version":"1.5.0","author":"RARE BEAR SOFT LTD","homepage":"https://rarebearsoft.com","description":"PROC Triggers for FFXI","private":true,"scripts":{"web":"ionic-app-scripts serve -c","ios":"ionic-app-scripts serve -b -c -t ios","android":"ionic-app-scripts serve -b -c -t android","clean":"ionic-app-scripts clean","build":"ionic-app-scripts build --prod","lint":"ionic-app-scripts lint"},"dependencies":{"@angular/animations":"5.0.0","@angular/common":"5.0.0","@angular/compiler":"5.0.0","@angular/compiler-cli":"5.0.0","@angular/core":"5.0.0","@angular/forms":"5.0.0","@angular/http":"5.0.0","@angular/platform-browser":"5.0.0","@angular/platform-browser-dynamic":"5.0.0","@ionic-native/core":"4.20.0","@ionic-native/media":"4.20.0","@ionic-native/native-page-transitions":"4.20.0","@ionic-native/splash-screen":"4.20.0","@ionic-native/status-bar":"4.20.0","@ionic/pro":"2.0.4","@ionic/storage":"2.1.3","cordova-admob-plus":"0.34.0","cordova-android":"8.1.0","cordova-ios":"^5.1.1","cordova-plugin-add-swift-support":"2.0.2","cordova-plugin-androidx":"1.0.2","cordova-plugin-androidx-adapter":"1.1.0","cordova-plugin-file":"6.0.2","cordova-plugin-ionic":"5.4.7","cordova-plugin-ionic-webview":"5.0.0","cordova-plugin-media":"5.0.3","cordova-plugin-splashscreen":"5.0.4","cordova-plugin-statusbar":"2.4.3","cordova-plugin-whitelist":"1.3.3","ionic-angular":"3.9.9","ionicons":"3.0.0","rxjs":"5.5.11","sw-toolbox":"3.6.0","underscore":"1.9.1","zone.js":"0.8.18"},"devDependencies":{"@ionic/app-scripts":"3.2.4","@types/node":"7.0.7","typescript":"2.4.2"},"cordova":{"plugins":{"cordova-admob-plus":{"APP_ID_ANDROID":"ca-app-pub-1450135138875904~6705571665","APP_ID_IOS":"ca-app-pub-1450135138875904~9128894336","PLAY_SERVICES_VERSION":"18.3.0"},"cordova-plugin-ionic":{"APP_ID":"b230666d","CHANNEL_NAME":"Debug","UPDATE_METHOD":"none","UPDATE_API":"https://api.ionicjs.com","MAX_STORE":"2","MIN_BACKGROUND_DURATION":"30"},"cordova-plugin-ionic-webview":{},"cordova-plugin-media":{"KEEP_AVAUDIOSESSION_ALWAYS_ACTIVE":"NO"},"cordova-plugin-splashscreen":{},"cordova-plugin-statusbar":{},"cordova-plugin-whitelist":{}},"platforms":["android","ios"]}}

/***/ })

},[194]);
//# sourceMappingURL=main.js.map