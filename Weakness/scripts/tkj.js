// Wait for PhoneGap to load
document.addEventListener("deviceready", onDeviceReady, false);

// PhoneGap is ready
function onDeviceReady() {
    //navigator.splashscreen.hide(); see config.xml
}

var weapons = [
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

var abyssea = {
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
        { element: "lightning", order: 4, type: "BLU", spell: "Mind Blast" },
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
var voidwatch = {
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
function getWeaponName(id) {
    return $.map(weapons, function (n) { return n.id == id ? n.name : null });
}
var viewModel = kendo.observable({
    menu: new kendo.data.DataSource({
        data: [
            { section: "Abyssea", order: 1, title: "Weapon Skills", icon: "images/proc/red16.png", viewID: "#abyssea-red" },
            { section: "Abyssea", order: 2, title: "Magic Spells", icon: "images/proc/yellow16.png", viewID: "#abyssea-yellow" },
            { section: "Abyssea", order: 3, title: "6:00&ndash;13:59 Piercing", icon: "images/proc/blue16.png", viewID: "#abyssea-blue-piercing" },
            { section: "Abyssea", order: 4, title: "14:00&ndash;21:59 Slashing", icon: "images/proc/blue16.png", viewID: "#abyssea-blue-slashing" },
            { section: "Abyssea", order: 5, title: "22:00&ndash;5:59 Blunt", icon: "images/proc/blue16.png", viewID: "#abyssea-blue-blunt" },
            { section: "Voidwatch", order: 6, title: "Job Ability", icon: "images/type/JA16.png", viewID: "#voidwatch-job-ability" },
            { section: "Voidwatch", order: 7, title: "Black Magic", icon: "images/type/BLM16.png", viewID: "#voidwatch-black-magic" },
            { section: "Voidwatch", order: 8, title: "White Magic", icon: "images/type/WHM16.png", viewID: "#voidwatch-white-magic" },
            { section: "Voidwatch", order: 9, title: "Ninjutsu", icon: "images/type/NIN16.png", viewID: "#voidwatch-ninjutsu" },
            { section: "Voidwatch", order: 10, title: "Bard Songs", icon: "images/type/BRD16.png", viewID: "#voidwatch-bard-songs" },
            { section: "Voidwatch", order: 11, title: "Blue Magic", icon: "images/type/BLU16.png", viewID: "#voidwatch-blue-magic" }
        /*,{ section: "About", order: 12, title: "FFXI PROC", icon: "images/proc/white16.png", viewID: "#index" }*/
        /*,{ section: "Dynamis", order: 1, title: "Red", icon: "images/proc/red16.png", viewID: "#dynamis-red" },
        { section: "Dynamis", order: 2, title: "Yellow", icon: "images/proc/yellow16.png", viewID: "#dynamis-yellow" },
        { section: "Dynamis", order: 3, title: "Blue", icon: "images/proc/blue16.png", viewID: "#dynamis-blue" }*/
        ],
        group: "section",
        sort: { field: "order", dir: "asc" }
    }),
    iconclass: function (e) { return "km-icon km-" + e.icon; },
    active: null,
    version: 'Weakness v1.0.1 &copy; 2013 TaeKwonJoe',
    abysseaRed: new kendo.data.DataSource({
        data: abyssea.red,
        group: "element"
    }),
    abysseaYellow: new kendo.data.DataSource({
        data: abyssea.yellow,
        group: "element",
        sort: { field: "order", dir: "asc" }
    }),
    abysseaBluePiercing: new kendo.data.DataSource({
        data: abyssea.blue.piercing,
        group: "weapon"
    }),
    abysseaBlueSlashing: new kendo.data.DataSource({
        data: abyssea.blue.slashing,
        group: "weapon"
    }),
    abysseaBlueBlunt: new kendo.data.DataSource({
        data: abyssea.blue.blunt,
        group: "weapon"
    }),
    voidwatchAbility: new kendo.data.DataSource({
        data: voidwatch.ability,
        group: "job"
    }),
    voidwatchBlackMagic: new kendo.data.DataSource({
        data: voidwatch.blackMagic,
        group: "element",
        sort: { field: "order", dir: "asc" }
    }),
    voidwatchWhiteMagic: new kendo.data.DataSource({
        data: voidwatch.whiteMagic,
        group: "element",
        sort: { field: "order", dir: "asc" }
    }),
    voidwatchNinjutsu: new kendo.data.DataSource({
        data: voidwatch.ninjutsu,
        group: "element",
        sort: { field: "order", dir: "asc" }
    }),
    voidwatchBardSongs: new kendo.data.DataSource({
        data: voidwatch.bardSongs,
        group: "element",
        sort: { field: "order", dir: "asc" }
    }),
    voidwatchBlueMagic: new kendo.data.DataSource({
        data: voidwatch.blueMagic,
        group: "element",
        sort: { field: "order", dir: "asc" }
    })
});

function master_Init(e) {
    //the layout init event only fires once on browser load or refresh
    var menu = $("#menu");
    kendo.bind($("#menu"), viewModel, kendo.mobile.ui);
    menu.show();
    menu.kendoMobileScroller();
    //set app.options.initial view as active
    var li = $('#lvMenu .km-listview-link[href="#' + app.options.initial + '"]');
    li.addClass("active");
    viewModel.set("active", li[0]);
}
function master_Show(e) {
    $(document.body).css("visibility", "visible"); //reveal body after active view is shown
    var view = e.view.element;
    //$(document.body).show();
    if (!view.data("kendoTouch")) {
        var menuWidth = 250;
        view.kendoTouch({
            //global: true,
            drag: function (e) {
                var pos;
                if (e.touch.x.startLocation < menuWidth) {
                    pos = e.touch.x.location - e.touch.x.startLocation;
                } else if (e.touch.x.startLocation > menuWidth) {
                    pos = e.touch.x.location - (e.touch.x.startLocation - menuWidth);
                }
                if (pos >= 0 && pos <= menuWidth) view.css("left", pos);
            },
            dragend: function (e) {
                var pos = (e.touch.x.startLocation > menuWidth) ? e.touch.x.location - (e.touch.x.startLocation - menuWidth) : e.touch.x.location - e.touch.x.startLocation;
                if (pos > menuWidth / 2) {
                    view.animate({ left: menuWidth }, { duration: 100, complete: function () {
                        view.find("a.menuButton").addClass("active");
                    } 
                    });
                } else {
                    view.animate({ left: "0" }, { duration: 100, complete: function () {
                        view.find("a.menuButton").removeClass("active");
                    } 
                    });
                }
            }
        });
    }
    setTimeout(function () { app.hideLoading(); }, 200);
}
function setMenuActive(item) {
    var active = viewModel.active;
    if (active) $(active).removeClass("active");
    viewModel.set("active", item[0]);
    item.addClass("active");
    app.showLoading();
}
function menuSelect(e) {
    e.preventDefault();
    try {
        setMenuActive(e.item);
        var view = app.view().element;
        view.animate({ left: "0" }, { duration: 200, complete: function () {
            view.find("a.menuButton").removeClass("active");
            app.navigate(e.dataItem.viewID);
        } 
        });
    } catch (e) {
        alert("menu error: " + e.message);
    }
}
function btnMenu_Click(e) {
    try {
        var pos = parseInt(app.view().element.css("left"));
        if (pos == 0) {
            e.button.addClass("active");
            $(app.view().element).animate({ left: "250px" }, { duration: 200, complete: function () { } });
        } else {
            e.button.removeClass("active");
            $(app.view().element).animate({ left: "0" }, { duration: 200, complete: function () { } });
        }
    } catch (e) {
        alert("menu error: " + e.message);
    }
}
function tabSelect(e) {
    e.preventDefault();
    var item = $("#lvMenu a[href=" + e.item.context.hash + "]");
    setMenuActive(item);
    app.navigate(e.item.context.hash);
}