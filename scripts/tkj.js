// JavaScript Document

// Wait for PhoneGap to load
document.addEventListener("deviceready", onDeviceReady, false);

// PhoneGap is ready
function onDeviceReady() {
    navigator.splashscreen.hide();
}

var weapons = [
    { id: "AXE", name: "Axe" },
    { id: "BOW", name: "Archery" },
    { id: "CLB", name: "Club" },
    { id: "DAG", name: "Dagger"},
    
    { id: "GAX", name: "Great Axe" },
    { id: "GKT", name: "Great Katana" },
    { id: "GSD", name: "Great Sword"},
    { id: "GUN", name: "Marksmanship"},
    { id: "HTH", name: "Hand-to-Hand"},
    { id: "KAT", name: "Katana" },
    { id: "PLM", name: "Polearm" },
    { id: "SCY", name: "Scythe" },
    { id: "STF", name: "Staff" },
    { id: "SWD", name: "Sword" }
];

var abyssea = {
    red: [
        { weapon: "CLB", weaponskill: "Seraph Strike", element: "holy" },
        { weapon: "DAG", weaponskill: "Cyclone", element: "wind" },
        { weapon: "DAG", weaponskill: "Energy Drain", element: "dark" },
        { weapon: "GKT", weaponskill: "Tachi: Jinpu", element: "wind" },
        { weapon: "GKT", weaponskill: "Tachi: Koki", element: "holy" },
        { weapon: "GSD", weaponskill: "Freezebite", element: "ice" },
        { weapon: "KAT", weaponskill: "Blade: Ei", element: "dark" },
        { weapon: "PLM", weaponskill: "Raiden Thrust", element: "thunder" },
        { weapon: "SCY", weaponskill: "Circle of Death", element: "dark" },
        { weapon: "STF", weaponskill: "Earth Crusher", element: "earth" },
        { weapon: "STF", weaponskill: "Sunburst", element: "holy" },
        { weapon: "SWD", weaponskill: "Red Lotus Blade", element: "fire" },
        { weapon: "SWD", weaponskill: "Seraph Blade", element: "holy" }
    ],
    yellow: [
        
    ],
    blue: [
        { 
            time: "Piercing",
            triggers: [
                { weapon: "BOW", weaponskill: "Arching Arrow" },
                { weapon: "BOW", weaponskill: "Blast Arrow" },
                { weapon: "BOW", weaponskill: "Empyreal Arrow" },
                { weapon: "BOW", weaponskill: "Sidewinder" }
            ]
        },
        { 
            time: "Slashing",
            triggers: [
                { weapon: "SWD", weaponskill: "Savage Blade" },
                { weapon: "SWD", weaponskill: "Swift Blade" },
                { weapon: "SWD", weaponskill: "Vorpal Blade" }
            ]
        },
        { 
            time: "Blunt",
            triggers: [
                { weapon: "CLB", weaponskill: "Black Halo" },
                { weapon: "CLB", weaponskill: "Hexa Strike" },
                { weapon: "CLB", weaponskill: "Judgement" },
                { weapon: "CLB", weaponskill: "Skullbreaker" },
                { weapon: "CLB", weaponskill: "True Strike" }
            ]
        }
    ]
};
function getWeaponName (id) {
        return $.map(weapons, function (n) { return n.id == id ? n.name : null });  
}
var viewModel = kendo.observable({
    menu: new kendo.data.DataSource({
        data: [
            { section: "Abyssea", order: 1, title: "Red", icon: "images/proc/red16.png", viewID: "#abyssea-red" },
            { section: "Abyssea", order: 2, title: "Yellow", icon: "images/proc/yellow16.png", viewID: "#abyssea-yellow" },
            { section: "Abyssea", order: 3, title: "Blue", icon: "images/proc/blue16.png", viewID: "#abyssea-blue" },
            { section: "Voidwatch", order: 1, title: "Red", icon: "images/proc/red16.png", viewID: "#voidwatch-red" },
            { section: "Voidwatch", order: 2, title: "Yellow", icon: "images/proc/yellow16.png", viewID: "#voidwatch-yellow" },
            { section: "Voidwatch", order: 3, title: "Blue", icon: "images/proc/blue16.png", viewID: "#voidwatch-blue" },
            { section: "Dynamis", order: 1, title: "Red", icon: "images/proc/red16.png", viewID: "#dynamis-red" },
            { section: "Dynamis", order: 2, title: "Yellow", icon: "images/proc/yellow16.png", viewID: "#dynamis-yellow" },
            { section: "Dynamis", order: 3, title: "Blue", icon: "images/proc/blue16.png", viewID: "#dynamis-blue" }
        ],
        group: "section",
        sort: "order"
    }),
    iconclass: function (e) { return "km-icon km-" + e.icon; },
    active: null,
    version: 'FFXI Weakness <a href="http://github.com/JoeMeeks" target="_blank">TaeKwonJoe</a>',
    abysseaRed: new kendo.data.DataSource({
        data: abyssea.red,
        group: "element"
    }),
    abysseaYellow: new kendo.data.DataSource({
        data: $.grep(abyssea.yellow, function (n, i) { return n.type == "red" }),
        group: "element"
    }),
    abysseaBlue: new kendo.data.DataSource({
        data: $.grep(abyssea.blue, function (n, i) { return n.type == "red" }),
        group: "element"
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
                if (pos > menuWidth/2) {
                    view.animate({ left: menuWidth }, { duration: 100, complete: function () {
                        view.find("a[data-rel=slidemenu]").addClass("active");
                    } });
                } else {
                    view.animate({ left: "0" }, { duration: 100, complete: function () {
                        view.find("a[data-rel=slidemenu]").removeClass("active");
                    } });
                }
            }
        });
    }
}
function menuSelect(e) {
    e.preventDefault();
    try {
        var active = viewModel.active;
        if (active) $(active).removeClass("active");
        e.item.addClass("active");
        var view = app.view().element;
        view.animate({ left: "0" }, { duration: 200, complete: function () {
            viewModel.set("active", e.item[0]);
            view.find("[data-rel=slidemenu]").removeClass("active");
            app.navigate(e.dataItem.viewID);
        } });
    } catch (e) {
        alert("menu error: " + e.message);
    }
}
function btnMenu_Click(e) {
    try {
        var pos = parseInt(app.view().element.css("left"));
        if (pos == 0) {
            e.button.addClass("active");
            $(app.view().element).animate({ left: "250px" }, { duration: 200, complete: function () {  } });
        } else {
            e.button.removeClass("active");
            $(app.view().element).animate({ left: "0" }, { duration: 200, complete: function () {  } });
        }
    } catch (e) {
        alert("menu error: " + e.message);
    }
}