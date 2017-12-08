function imageClick(url) {
    window.location.href = url;
}





function Day(date, todo, finished) {
    this.date = date;
    this.todo = todo;
    this.finished = finished;
}

function Habit(name, completion, days) {
    this.name = name;
    this.completion = completion;
    this.days = days;
}

Habit.prototype.getName = function() {
    return this.name;
}

Habit.prototype.toString = function() {
    alert(this.name);
}

function toDoCatalog() {
    this.elements = [];
    this.catalogcounter = -1;
}

toDoCatalog.prototype.addHabit = function(habit) {
    this.elements.push(habit);
    this.catalogcounter = this.catalogcounter + 1;
}

toDoCatalog.prototype.getHabit = function(i) {
    return this.elements[i];
}

toDoCatalog.prototype.getCounter = function() {
    return this.catalogcounter;
}

function finishedCatalog() {
    this.elements = [];
}

finishedCatalog.prototype.addHabit = function(habit) {
   this.elements.push(habit);
}


var catalogus = new toDoCatalog();
var counter = 1;
var counter2 = 0;
var plusClickCounter = 0;
function plusClick() {

    var habitName = prompt("Please enter a name for a new HaBit:", "Enter HaBit name");
    var weekDays = prompt("Please indicate on which days this HaBit occurs by specifying each day by its first 2 letters.", "Type days here");
    if (habitName != null && weekDays != null) {
        catalogus.addHabit(new Habit(habitName, false, weekDays));
        //var name = catalogus.getHabit(catalogus.getCounter()).getName();
        //var textHeight = 250 + (80*counter2)
        //var textstyle = "position:absolute; TOP:" + textHeight + "; LEFT:160px font-family:'Courier New'"
        //show_text(name, "position:absolute; ")
    }
    var localName = catalogus.getHabit(catalogus.getCounter()).getName();
    var imageHeight = 250+(80*counter);
    var boxHeight = 230+(80*counter2);
    var checkboxHeight = boxHeight + 30;
    var style2 = "position:absolute; TOP:" + imageHeight +"px; LEFT:270px";
    var style3 = "position:absolute; TOP:" + boxHeight + "px; LEFT:150px"
    var stylebox = "position:absolute; TOP:" + checkboxHeight + "px; LEFT:370px"
    catalogus.getHabit(catalogus.getCounter()).toString();
    show_image("HaBit_habitboxempty.jpg", 280, 80, "Box", style3, localName+"box");
    show_image("HaBit_checkboxempty.jpg", 20, 20, "checkbox", stylebox, localName+"checkbox", "checkboxClick(catalogus.getHabit(catalogus.getCounter()))");
    show_image("HaBit_plusicon.jpg", 40, 40,"Plusicon", style2, plusClickCounter+1, "plusClick()");
    var textHeight = 245 + (80*counter2)
    var textstyle = "position:absolute; TOP:" + textHeight + "px; LEFT:160px; font-family:'Courier New'"
    show_text(localName, textstyle, undefined, localName+"text");
    var oldPlus = document.getElementById(plusClickCounter);
    oldPlus.parentNode.removeChild(oldPlus);

    counter = counter + 1;
    counter2 = counter2 +1;
    plusClickCounter = plusClickCounter + 1;
}

function main() {
    var catalog1 = new toDoCatalog();
    var catalog2 = new finishedCatalog();

}

function show_image(src, width, height, alt, style, id, onclick, map) {
    var img = document.createElement("img");
    img.src = src;
    img.width = width;
    img.height = height;
    img.alt = alt;
    img.id = id;
    img.setAttribute("style", style);
    if (onclick != undefined) {
        img.setAttribute("onclick", onclick);
    }
    if (map != undefined) {
        var mapname = "#" + map;
        img.setAttribute("usemap", mapname);
    }

    // This next line will just add it to the <body> tag
    document.body.appendChild(img);
}

function getTime() {
    n =  new Date();
    y = n.getYear() - 100;
    m = n.getMonth() + 1;
    d = n.getDate();
    document.getElementById("date").innerHTML = d + "/" + m + "/" + y;
}

function show_text(text, style, onclick, id) {
    var p = document.createElement("p");
    var text = document.createTextNode(text);
    p.setAttribute("style", style);
    p.id = id;
    if (onclick != undefined) {
        text.setAttribute("onclick", onclick);
    }

    // This next line will just add it to the <body> tag
    p.appendChild(text);
    document.body.appendChild(p);
}

function create_map(name, shape, coords, alt, onclick) {
    var m = document.createElement("map");
    m.setAttribute("name", name);
    var a = document.createElement("area");
    a.setAttribute("shape", shape);
    a.setAttribute("coords", coords);
    a.setAttribute("alt", alt);
    a.setAttribute("onclick", onclick);
    m.appendChild(a);
    document.body.appendChild(m);
}
var counter3 = 1;
var counter4 = 0;
function checkboxClick(habit) {
    counter2 = counter2 - 1;
    var counter3 = 1;
    var counter4 = 0;
    var localName = habit.getName();
    var stylebox = "position:absolute; TOP:" + checkboxHeight + "px; LEFT:370px";
    var imageHeight = 250+(80*counter3);
    var plusHeight = 250+(80*counter2);
    var plusIconStyle = "position:absolute; TOP:" + plusHeight +"px; LEFT:280px";
    var boxHeight = 230+(80*counter4);
    var checkboxHeight = boxHeight + 30;
    var style2 = "position:absolute; TOP:" + imageHeight +"px; LEFT:550px";
    var style3 = "position:absolute; TOP:" + boxHeight + "px; LEFT:800px"
    var stylebox = "position:absolute; TOP:" + checkboxHeight + "px; LEFT:1030px"
    var textHeight = 245 + (80*counter4)
    show_image("HaBit_checkboxchecked.jpg", 20, 20, "checkbox", stylebox, localName+"checkboxchecked");
   
    var oldBox = document.getElementById(localName+"box");
    oldBox.parentNode.removeChild(oldBox);

    var oldCheckbox = document.getElementById(localName+"checkbox");
    oldCheckbox.parentNode.removeChild(oldCheckbox);

    var oldText = document.getElementById(localName+"text");
    oldText.parentNode.removeChild(oldText);

    var oldCheckboxChecked = document.getElementById(localName+"checkboxchecked");
    oldCheckboxChecked.parentNode.removeChild(oldCheckboxChecked);

    var oldPlus = document.getElementById(plusClickCounter);
    oldPlus.parentNode.removeChild(oldPlus);
    plusClickCounter = plusClickCounter - 1;
    show_image("HaBit_plusicon.jpg", 40, 40,"Plusicon", plusIconStyle, plusClickCounter, "plusClick()");
    show_image("HaBit_habitboxempty.jpg", 280, 80, "Box", style3, localName+"box");
    show_image("HaBit_checkboxchecked.jpg", 20, 20, "checkbox", stylebox, localName+"checkboxchecked");
    var textHeight = 245 + (80*counter4)
    var textstyle = "position:absolute; TOP:" + textHeight + "px; LEFT:810px; font-family:'Courier New'"
    show_text(localName, textstyle, undefined, localName+"text");
    
}
