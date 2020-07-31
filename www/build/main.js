webpackJsonp([0],{

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FFXIService; });
/* unused harmony export VanaDate */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var self;
var FFXIService = (function () {
    function FFXIService() {
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
        this.voidwatch = {
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
        this.dynamis = {
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
        self = this;
        // Create an FFXI object and put VanaDate class in the global scope
        //window.FFXI = new FFXI(window);
        //window.VanaDate = VanaDate;
    }
    FFXIService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], FFXIService);
    return FFXIService;
}());

/////////////////////////////////////////////////////////////////////
// VanaDate class
// Represents a fixed point in time.
// Constructor takes either a JavaScript Date representing Earth time,
// or a number of Vana'diel seconds since Year 0.
var VanaDate = (function () {
    function VanaDate(date) {
        ////////////////
        // Constants
        // Earth time : 2002/06/23 16:00 GMT
        // Vana'diel time : 0898/02/01 00:00
        this.VANA_BIRTH = new Date();
        this.VANA_SECS_SINCE_YEAR_0 = (((898 * 360) + 30) * 24 * 60 * 60);
        this.EARTH_TIME_YEAR_0 = new Date(this.VANA_BIRTH.getTime() - (this.VANA_SECS_SINCE_YEAR_0 * 1000) / 25);
        this.VANA_SECS_PER_YEAR = 360 * 24 * 60 * 60; // 360 days per year
        this.VANA_SECS_PER_MONTH = 30 * 24 * 60 * 60; // 30 days per month
        this.VANA_SECS_PER_WEEK = 8 * 24 * 60 * 60; // Eight Days a Week
        this.VANA_SECS_PER_DAY = 24 * 60 * 60; // 24 hours per day
        this.VANA_SECS_PER_HOUR = 60 * 60; // 60 minutes per hour
        this.dayNames = ['Firesday', 'Earthsday', 'Watersday', 'Windsday', 'Iceday', 'Lightningday', 'Lightsday', 'Darksday'];
        this.moonPhases = ['New Moon', 'Waxing Crescent', 'First Quarter Moon', 'Waxing Gibbous', 'Full Moon', 'Waning Gibbous', 'Last Quarter Moon', 'Waning Crescent'];
        // vTime is the number of Vana'diel seconds since 0000/01/01
        var vTime, eTime;
        if (typeof (date) == 'number') {
            vTime = Math.round(date);
            eTime = new Date(this.EARTH_TIME_YEAR_0.getTime() + Math.round(vTime * 1000 / 25));
        }
        else {
            if (date instanceof Date) {
                eTime = date;
            }
            else {
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
    VanaDate.prototype.previous = function (days) {
        var numDays = days;
        if (typeof (numDays) != 'number') {
            numDays = 1;
        }
        var newVTime = this.time - (this.VANA_SECS_PER_DAY * numDays);
        return new VanaDate(newVTime);
    };
    return VanaDate;
}());

//# sourceMappingURL=ffxi.js.map

/***/ }),

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UIService; });
/* unused harmony export PageFlip */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_native_page_transitions__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_underscore__ = __webpack_require__(270);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_underscore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_underscore__);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



//import { Pro } from '@ionic/pro';

var self;
var UIService = (function () {
    //public viewDidEnter = null;
    //public options;
    //public tabBarElement: any;
    function UIService(app, platform, loadingCtrl, alertCtrl, menuCtrl, modalCtrl, toastCtrl, transitions) {
        this.app = app;
        this.platform = platform;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.menuCtrl = menuCtrl;
        this.modalCtrl = modalCtrl;
        this.toastCtrl = toastCtrl;
        this.transitions = transitions;
        this.progress = {
            download: 0,
            extract: 0
        };
        this.loading = {
            visible: false,
            element: null,
            content: null,
            ctrl: null,
            show: function (options) {
                if (self.loading.visible) {
                    if (!self.loading.element) {
                        var loading = document.getElementsByTagName('ion-loading');
                        __WEBPACK_IMPORTED_MODULE_3_underscore__["each"](loading, function (el) {
                            //console.log(el.attributes);
                            if (el.hasAttribute('role') && el.attributes['role'].value === 'dialog') {
                                //console.log('loading element:');
                                //console.log(el);
                                self.loading.element = el;
                                var content = el.getElementsByClassName('loading-content');
                                if (content.length) {
                                    self.loading.content = content[0];
                                }
                                //console.log('loading content:');
                                //console.log(self.loading.content);
                            }
                        });
                        //self.loading.setSpinner('hide');
                        //console.log(self.loading);
                    }
                    if (options && options.text && self.loading.content) {
                        requestAnimationFrame(function () {
                            self.loading.content.innerHTML = options.text;
                        });
                    }
                    if (options && options.css) {
                        console.log('set css: ' + options.css);
                        self.loading.ctrl.setCssClass(options.css); //this fails to actually update the UI
                        self.loading.element.className += ' ' + options.css;
                    }
                    return Promise.resolve();
                }
                else {
                    self.loading.ctrl = self.loadingCtrl.create({
                        //spinner: 'custom',
                        spinner: 'dots',
                        content: options && options.text ? options.text : 'Loading&hellip;',
                        cssClass: options && options.css ? 'loading-container ' + options.css : 'loading-container'
                        //dismissOnPageChange: true //causes Uncaught (in promise): removeView was not found
                    });
                    self.loading.visible = true;
                    return self.loading.ctrl.present();
                }
            },
            hide: function () {
                self.loading.visible = false;
                self.loading.content = null;
                self.loading.element = null;
                return self.loading.ctrl.dismiss();
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
        //public loader: any = {
        //    ctrl: null,
        //    show: (opts?: LoadingOptions) => {
        //        self.loading.ctrl = self.loadingCtrl.create(_.extend({
        //            content: 'Loading&hellip;'
        //        }, opts));
        //        self.loading.ctrl.present();
        //    },
        //    hide: () => {
        //        self.loading.ctrl.dismiss();
        //    }
        //};
        this.confirm = {
            ctrl: null,
            show: function (options) {
                return new Promise(function (resolve, reject) {
                    self.confirm.ctrl = self.alertCtrl.create(options);
                    self.confirm.ctrl.onDidDismiss(resolve);
                    self.confirm.ctrl.present();
                });
            },
            hide: function () {
                self.confirm.ctrl.dismiss();
            }
        };
        this.modal = {
            ctrl: null,
            show: function (page, data, opts) {
                return new Promise(function (resolve, reject) {
                    self.modal.ctrl = self.modalCtrl.create(page, data, __WEBPACK_IMPORTED_MODULE_3_underscore__["extend"]({
                        enableBackdropDismiss: false
                    }, opts));
                    self.modal.ctrl.onDidDismiss(resolve);
                    self.modal.ctrl.present();
                });
            },
            hide: function () {
                self.modal.ctrl.dismiss();
            }
        };
        this.toast = {
            ctrl: null,
            show: function (opts) {
                opts.duration = 0;
                opts.showCloseButton = true;
                self.toast.ctrl = self.toastCtrl.create(opts);
                self.toast.ctrl.present();
            },
            hide: function () {
                self.toast.ctrl.dismiss();
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
                self.alert.ctrl = self.alertCtrl.create(options);
                return self.alert.ctrl.present();
            },
            hide: function () {
                self.alert.ctrl.dismiss();
            }
        };
        this.menu = null;
        this.flip = __WEBPACK_IMPORTED_MODULE_3_underscore__["debounce"](function (page, params, opts) {
            self.options = __WEBPACK_IMPORTED_MODULE_3_underscore__["extend"](self.options, opts);
            self.options.direction = opts && opts.direction ? opts.direction : 'left'; //default
            self.animation = 'flip';
            //self.options.animate = false;
            var nav = self.app.getRootNavs()[0];
            console.log('flip');
            if (self.options.direction === 'left') {
                console.info('nav.push');
                return nav.push(page, params, self.options);
            }
            else if (nav.canGoBack()) {
                console.info('nav.pop');
                //return nav.pop(self.options)
                return nav.push(page, params, self.options).then(function () {
                    var views = nav.getViews();
                    nav.remove(views.length - 3, 2);
                    console.log(views);
                });
            }
            else {
                console.info('nav.setRoot');
                return nav.setRoot(page, params, self.options);
            }
        }, 400, true);
        self = this;
        self.app.viewWillEnter.subscribe(function () {
            //if (!!window['cordova']) {
            //    //console.info('viewWillEnter with ' + self.animation + ' transition');
            //} else {
            //console.info('viewWillEnter with ' + self.animation + ' transition');
            switch (self.animation) {
                case 'flip':
                    self.transitions.flip(self.options);
                    break;
                case 'slide':
                    self.transitions.slide(self.options);
                    break;
            }
            //}
            self.animation = null;
        });
        self.menu = menuCtrl;
    }
    //#region ionic deploy update
    UIService.prototype.download = function (progress) {
        //console.log(progress);
        if (self.progress.download === 0 || progress > self.progress.download) {
            self.progress.download = progress;
            self.loading.show({ text: 'Downloading update\r\n' + self.progress.download + '%' });
        }
    };
    UIService.prototype.extract = function (progress) {
        //console.log(progress);
        if (self.progress.download === 0 || progress > self.progress.extract) {
            self.progress.extract = progress;
        }
        self.loading.show({ text: 'Installing update\r\n' + self.progress.extract + '%' });
    };
    UIService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_native_page_transitions__["a" /* NativePageTransitions */]])
    ], UIService);
    return UIService;
}());

var PageFlip = (function (_super) {
    __extends(PageFlip, _super);
    function PageFlip() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PageFlip.prototype.init = function () {
        _super.prototype.init.call(this);
        //let since = new Date().getTime();
        //console.log('pagefade start: ' + since);
        var plt = this.plt, leavingView = this.leavingView, enteringView = this.enteringView, opts = this.opts, backDirection = (opts.direction === 'back');
        if (enteringView) {
            var enteringPage = new __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Animation */](plt, enteringView.pageRef());
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
            //if (enteringView.hasNavbar()) {
            //    let enteringPageEle = enteringView.pageRef().nativeElement,
            //        enteringNavbarEle = enteringPageEle.querySelector('ion-navbar'),
            //        enteringNavBar = new Animation(plt, enteringNavbarEle);
            //    this.add(enteringNavBar);
            //}
        }
        // setup leaving view
        if (leavingView) {
            var leavingPage = new __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Animation */](plt, leavingView.pageRef());
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
            //if (leavingView.hasNavbar()) {
            //    let leavingPageEle = leavingView.pageRef().nativeElement,
            //        leavingNavbarEle = leavingPageEle.querySelector('ion-navbar'),
            //        leavingNavBar = new Animation(plt, leavingNavbarEle);
            //    this.add(leavingNavBar);
            //}
        }
        //this.onFinish(() => {
        //    let until = new Date().getTime(),
        //        total = until - since;
        //    console.log('pagefade finish: ' + until);
        //    console.warn('pagefade total: ' + total);
        //});
    };
    return PageFlip;
}(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* PageTransition */]));

//# sourceMappingURL=ui.js.map

/***/ }),

/***/ 111:
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
webpackEmptyAsyncContext.id = 111;

/***/ }),

/***/ 152:
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
webpackEmptyAsyncContext.id = 152;

/***/ }),

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_ffxi__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_ui__ = __webpack_require__(102);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var vm;
var HomePage = (function () {
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
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"D:\RareBear\Weakness\src\pages\home\home.html"*/'<ion-header>\n\n    <ion-navbar [hideBackButton]="true">\n\n        <ion-buttons left>\n\n            <button ion-button icon-only menuToggle [class.open]="ui.menu.isOpen()"></button>\n\n        </ion-buttons>\n\n        <ion-title>FFXI PROC</ion-title>\n\n        <ion-buttons right>\n\n            <button ion-button click="timer()">{{ffxi.vanatime}}</button>\n\n        </ion-buttons>\n\n        <!--<a href="#menu" data-role="button" data-align="left" data-rel="drawer" data-click-on="down" data-bind="class: { active: drawer }"><img src="images/proc/white16.png" width="16" height="16" /></a>-->\n\n        <!--<span data-role="view-title" data-align="center"></span>-->\n\n        <!--<a data-role="button" data-align="right" data-click-on="down" href="#mvClockSettings" data-rel="modalview" data-bind="class: { active: modal }"><span data-bind="text: vanaTime">4:20</span></a>-->\n\n    </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n\n    <ion-card>\n\n        <ion-card-header>\n\n            <h1>FFXI Weakness Triggers (PROC)</h1>\n\n        </ion-card-header>\n\n        <ion-card-content>\n\n            <p>Notorious Monsters in Abyssea and Voidwatch and all in Dynamis have vulnerabilites that are procedural random occurances, or &ldquo;PROC&rdquo;s.</p>\n\n            <h2>Abyssea Notorious Monsters</h2>\n\n            <ul>\n\n                <li><img src="assets/images/proc/red24.png" /> Weapon Skills:<br />Atmas and NM key items</li>\n\n                <li><img src="assets/images/proc/yellow24.png" /> Magic Spells:<br />EX Empyrean armor upgrade items</li>\n\n                <li><img src="assets/images/proc/blue24.png" /> Weapon Skills:<br />RA/EX weapons and armor</li>\n\n            </ul>\n\n            <h2>Dynamis (# of Time Extensions)</h2>\n\n            <ul>\n\n                <li><img src="assets/images/proc/blue24.png" /> 3&times; TE:<br />single currency drop slot</li>\n\n                <li><img src="assets/images/proc/yellow24.png" /> 4&times; TE:<br />additional currency drop slot</li>\n\n                <li><img src="assets/images/proc/red24.png" /> 5&times; TE:<br />additional 100% drop slot</li>\n\n                <li><img src="assets/images/proc/white24.png" /> No sub job (CoP areas):<br /> 100% hundred-piece drop slot</li>\n\n            </ul>\n\n            <p>Swipe right and select a category.</p>\n\n        </ion-card-content>\n\n    </ion-card>\n\n</ion-content>'/*ion-inline-end:"D:\RareBear\Weakness\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__providers_ffxi__["a" /* FFXIService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__providers_ffxi__["a" /* FFXIService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__providers_ui__["a" /* UIService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_ui__["a" /* UIService */]) === "function" && _b || Object])
    ], HomePage);
    return HomePage;
    var _a, _b;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_module__ = __webpack_require__(220);



Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_14" /* enableProdMode */])();
Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 220:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_native_page_transitions__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_ffxi__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_ui__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_component__ = __webpack_require__(272);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_home_home__ = __webpack_require__(196);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_9__pages_home_home__["a" /* HomePage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* MyApp */], {
                    mode: 'ios',
                    locationStrategy: 'path',
                    swipeBackEnabled: false,
                }, {
                    links: [
                        { component: __WEBPACK_IMPORTED_MODULE_9__pages_home_home__["a" /* HomePage */], name: 'home', segment: '' }
                    ]
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_9__pages_home_home__["a" /* HomePage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_native_page_transitions__["a" /* NativePageTransitions */],
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_6__providers_ffxi__["a" /* FFXIService */],
                __WEBPACK_IMPORTED_MODULE_7__providers_ui__["a" /* UIService */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 272:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_ffxi__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_ui__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__package_json__ = __webpack_require__(273);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__package_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__package_json__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







//import * as config from '../../../package.json'

var MyApp = (function () {
    function MyApp(platform, status, splash, ffxi, ui, mc) {
        var _this = this;
        this.platform = platform;
        this.status = status;
        this.splash = splash;
        this.ffxi = ffxi;
        this.ui = ui;
        this.mc = mc;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */];
        this.menu = [
            {
                title: "Abyssea",
                items: [
                    { order: 1, title: "Weapon Skills", icon: "assets/images/proc/red16.png", name: "abyssea-red" },
                    { order: 2, title: "Magic Spells", icon: "assets/images/proc/yellow16.png", name: "abyssea-yellow" },
                    { order: 3, title: "6:00&ndash;13:59 Piercing", icon: "assets/images/proc/blue16.png", name: "abyssea-blue-piercing" },
                    { order: 4, title: "14:00&ndash;21:59 Slashing", icon: "assets/images/proc/blue16.png", name: "abyssea-blue-slashing" },
                    { order: 5, title: "22:00&ndash;5:59 Blunt", icon: "assets/images/proc/blue16.png", name: "abyssea-blue-blunt" }
                ]
            }, {
                title: "Dynamis",
                items: [
                    { order: 1, title: "Beastmen", icon: "assets/images/type/beastmen.png", name: "dynamis-beastmen" },
                    { order: 2, title: "O. Bronzepiece", icon: "assets/images/currency/ordelle.png", name: "dynamis-ordelle" },
                    { order: 2, title: "T. Whiteshell", icon: "assets/images/currency/tukuku.png", name: "dynamis-tukuku" },
                    { order: 4, title: "1 Byne Bill", icon: "assets/images/currency/byne.png", name: "dynamis-byne" }
                ]
            }, {
                title: "Voidwatch",
                items: [
                    { order: 1, title: "Job Ability", icon: "assets/images/type/JA16.png", name: "voidwatch-job-ability" },
                    { order: 2, title: "Black Magic", icon: "assets/images/type/BLM16.png", name: "voidwatch-black-magic" },
                    { order: 3, title: "White Magic", icon: "assets/images/type/WHM16.png", name: "voidwatch-white-magic" },
                    { order: 4, title: "Ninjutsu", icon: "assets/images/type/NIN16.png", name: "voidwatch-ninjutsu" },
                    { order: 5, title: "Bard Songs", icon: "assets/images/type/BRD16.png", name: "voidwatch-bard-songs" },
                    { order: 6, title: "Blue Magic", icon: "assets/images/type/BLU16.png", name: "voidwatch-blue-magic" }
                ]
            },
            {
                title: "About",
                items: [
                    { order: 1, title: "FFXI PROC", icon: "assets/images/proc/white16.png", name: "home" }
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
            //this.update(lc);
            platform.resume.subscribe(function (e) {
                console.log('resume');
                //this.update(lc);
            });
            platform.pause.subscribe(function (e) {
                console.log('pause');
            });
            _this.version = "Version " + __WEBPACK_IMPORTED_MODULE_7__package_json__["version"];
            _this.copyright = "&copy; " + new Date().getFullYear() + " RARE BEAR SOFTWARE LTD";
        });
    }
    MyApp.prototype.timer = function () {
        console.debug('show timer modal');
        //this.ui.modal
    };
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"D:\RareBear\Weakness\src\app\app.html"*/'<ion-menu [content]="content" persistent="true" side="left" type="push">\n\n    <ion-header>\n\n        <ion-toolbar>\n\n            <ion-title>Weakness</ion-title>\n\n        </ion-toolbar>\n\n    </ion-header>\n\n    <ion-content>\n\n        <ion-list>\n\n            <ng-container *ngFor="let group of menu">\n\n                <ion-list-header>{{group.title}}</ion-list-header>\n\n                <button ion-item menuClose *ngFor="let item of group.items" (click)="ui.flip(item.name, {}, { animate: false })">\n\n                    <img [src]="item.icon" /><span [innerHTML]="item.title"></span>\n\n                </button>\n\n            </ng-container>\n\n            <ion-item class="version" [innerHTML]="version"></ion-item>\n\n            <ion-item class="copyright" [innerHTML]="copyright"></ion-item>\n\n        </ion-list>\n\n    </ion-content>\n\n</ion-menu>\n\n\n\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>\n\n'/*ion-inline-end:"D:\RareBear\Weakness\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__providers_ffxi__["a" /* FFXIService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__providers_ffxi__["a" /* FFXIService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__providers_ui__["a" /* UIService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__providers_ui__["a" /* UIService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* MenuController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* MenuController */]) === "function" && _f || Object])
    ], MyApp);
    return MyApp;
    var _a, _b, _c, _d, _e, _f;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 273:
/***/ (function(module, exports) {

module.exports = {"name":"Weakness","version":"1.5.0","author":"Rare Bear Soft","homepage":"https://rarebearsoft.com","description":"PROC Triggers for FFXI","private":true,"scripts":{"web":"ionic-app-scripts serve -c","ios":"ionic-app-scripts serve -b -c -t ios --copy src/app/copy.ios.js","android":"ionic-app-scripts serve -b -c -t android --copy src/app/copy.android.js","clean":"ionic-app-scripts clean","build":"ionic-app-scripts build --prod","lint":"ionic-app-scripts lint"},"dependencies":{"@angular/animations":"5.0.0","@angular/common":"5.0.0","@angular/compiler":"5.0.0","@angular/compiler-cli":"5.0.0","@angular/core":"5.0.0","@angular/forms":"5.0.0","@angular/http":"5.0.0","@angular/platform-browser":"5.0.0","@angular/platform-browser-dynamic":"5.0.0","@ionic-native/core":"4.20.0","@ionic-native/native-page-transitions":"4.20.0","@ionic-native/splash-screen":"4.20.0","@ionic-native/status-bar":"4.20.0","@ionic/storage":"2.1.3","cordova-android":"8.1.0","cordova-ios":"5.0.0","cordova-plugin-androidx":"1.0.2","cordova-plugin-androidx-adapter":"1.1.0","cordova-plugin-ionic-webview":"2.5.3","cordova-plugin-splashscreen":"5.0.4","cordova-plugin-statusbar":"2.4.3","cordova-plugin-whitelist":"1.3.3","ionic-angular":"3.9.9","ionicons":"3.0.0","rxjs":"5.5.11","sw-toolbox":"3.6.0","underscore":"1.9.1","zone.js":"0.8.18"},"devDependencies":{"@ionic/app-scripts":"3.2.4","typescript":"2.4.2"},"cordova":{"plugins":{"cordova-plugin-ionic-webview":{},"cordova-plugin-splashscreen":{},"cordova-plugin-statusbar":{},"cordova-plugin-whitelist":{}},"platforms":["ios","android"]}}

/***/ })

},[197]);
//# sourceMappingURL=main.js.map